import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required.",
        variant: "destructive",
      });
      return;
    }
    
    // Create mailto URL with form data
    const mailtoUrl = `mailto:info@gpc-performance.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
    
    // Show success message
    toast({
      title: "Opening email client...",
      description: "Your default email application should open with the message pre-filled.",
    });
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-navy text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-testid="contact-title">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-testid="contact-subtitle">
            Have questions about Regen & Track? Want to learn more about optimizing your athletic performance? 
            We're here to help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-navy-light border-purple-900/30" data-testid="contact-form-card">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-2 bg-navy border-purple-900/30 text-white"
                        placeholder="Your full name"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2 bg-navy border-purple-900/30 text-white"
                        placeholder="your.email@example.com"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-gray-300">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="mt-2 bg-navy border-purple-900/30 text-white"
                      placeholder="What can we help you with?"
                      data-testid="input-subject"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="mt-2 bg-navy border-purple-900/30 text-white min-h-[120px]"
                      placeholder="Tell us more about your question or how we can help..."
                      data-testid="input-message"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-vibrant-blue to-vibrant-purple hover:from-vibrant-blue/80 hover:to-vibrant-purple/80 text-white font-medium"
                    data-testid="button-submit"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Open Email Client
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-navy-light border-purple-900/30" data-testid="contact-info-card">
              <CardHeader>
                <CardTitle className="text-xl text-white">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3" data-testid="contact-email">
                  <Mail className="w-5 h-5 text-vibrant-blue" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a 
                      href="mailto:info@gpc-performance.com"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      info@gpc-performance.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-navy-light border-purple-900/30" data-testid="response-time-card">
              <CardHeader>
                <CardTitle className="text-xl text-white">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We typically respond to all inquiries within 24-48 hours during business days. 
                  For urgent matters, please include "URGENT" in your subject line.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-navy-light border-purple-900/30" data-testid="partnership-info-card">
              <CardHeader>
                <CardTitle className="text-xl text-white">Partnership Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Interested in partnering with us? We're always open to collaborating with 
                  organizations that share our commitment to athlete development and performance optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}