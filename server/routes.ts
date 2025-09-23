import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./sendgrid";
import { insertContactSubmissionSchema } from "@shared/schema";

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validationResult = insertContactSubmissionSchema.safeParse(req.body);
      if (!validationResult.success) {
        return res.status(400).json({ 
          error: "Invalid form data", 
          details: validationResult.error.issues 
        });
      }

      const { name, email, subject, message } = validationResult.data;

      // Store submission in storage
      const submission = await storage.createContactSubmission({
        name,
        email,
        subject,
        message,
      });

      // Send email notification
      const emailSuccess = await sendEmail({
        to: "info@gpc-performance.com",
        from: "noreply@gpc-performance.com", // This should be a verified sender in SendGrid
        subject: `Contact Form: ${escapeHtml(subject)}`,
        text: `New contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Submission ID: ${submission.id}
Submitted at: ${submission.createdAt}`,
        html: `<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${escapeHtml(name)}</p>
<p><strong>Email:</strong> ${escapeHtml(email)}</p>
<p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
<h3>Message:</h3>
<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
<hr>
<p><small>Submission ID: ${submission.id}</small></p>
<p><small>Submitted at: ${submission.createdAt}</small></p>`,
      });

      if (!emailSuccess) {
        console.error("Failed to send email notification");
        // Still return success to user, but log the email failure
      }

      res.json({ 
        success: true, 
        message: "Your message has been sent successfully!",
        submissionId: submission.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        error: "Internal server error. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
