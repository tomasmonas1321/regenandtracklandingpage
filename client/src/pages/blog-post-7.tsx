import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";

export default function BlogPost7() {
  const article = {
    id: 8,
    title: "Stop Juggling. Start Dominating. Your Integrated Path to Peak Performance is Here",
    excerpt: "Discover how GPC-Performance's integrated approach eliminates fragmented training by unifying strength conditioning, nutrition, and physiotherapy under one expert roof.",
    author: "GPC-Performance",
    date: "September 10, 2025",
    readTime: "5 min read",
    category: "Performance Training",
    content: `
      <h2>Introduction</h2>
      <p>Every dedicated athlete—whether you're stepping onto the field for the first time or competing on the world stage—shares the same drive: the relentless pursuit of your true potential. You know that success isn't just about training harder; it's about training smarter.</p>
      
      <p>But what happens when your support system is fragmented?</p>
      
      <p>Your strength coach pushes you in the gym. Your nutritionist gives you a generic meal plan. You only see a physiotherapist after an injury has already happened. Each expert operates in a silo, giving you conflicting advice that leaves you confused, frustrated, and stalled in your progress.</p>
      
      <p>At GPC-Performance, we eliminate the chaos. We believe that elite performance requires a unified strategy.</p>
      
      <div style="text-align: center; margin: 2rem 0;">
        <img 
          src="https://static.wixstatic.com/media/9a2559_83c8f7fd946d46d3adc50d49005f1e86~mv2.png/v1/fill/w_416,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GPC%20Performance%20Logo%20Transparent.png" 
          alt="GPC Performance Logo" 
          style="max-width: 100%; height: auto;"
        />
      </div>
      
      <h2>Welcome to Your All-in-One Performance Hub</h2>
      <p>At GPC-Performance, our coaches and practitioners bring over 60 years of collective experience to the forefront of athletic development. We've built our reputation on a simple but powerful principle: integration. We are your one-stop shop for athletic excellence, bringing together every critical element of performance under a single, expert roof.</p>
      
      <p>Our comprehensive approach ensures that every aspect of your training, nutrition, and recovery works in perfect harmony.</p>
      
      <h3>1. World-Class Strength & Conditioning</h3>
      <p>Our programs are the engine of your performance. We don't use cookie-cutter templates. We design bespoke strength and conditioning plans that are specific to the demands of your sport and your individual needs. We build resilient, powerful, and explosive athletes who are prepared not just to compete, but to dominate.</p>
      
      <h3>2. Precision Nutrition for Fuel and Recovery</h3>
      <p>You can't out-train a bad diet. Our nutrition expert work directly with your to create a fueling strategy that supports your training load, accelerates recovery, and optimizes body composition. This isn't just about what to eat; it's about when and why, ensuring your body has exactly what it needs to adapt and excel.</p>
      
      <h3>3. Proactive Physiotherapy for Longevity</h3>
      <p>Why wait for an injury to happen? Our physiotherapist is integrated into your programming from day one. We focus on optimizing your movement patterns, identifying potential weaknesses, and implementing corrective strategies before they become problems. We keep you on the field, performing at your best, season after season.</p>
      
      <h2>The GPC Difference: Proven Expertise in Action</h2>
      <p>What truly sets us apart is how our expert teams collaborate for you.</p>
      
      <ul>
        <li>Your physiotherapist's movement assessment directly informs your strength program.</li>
        <li>Your training intensity dictates your nutritional requirements.</li>
        <li>Your recovery data helps us fine-tune your next block of training.</li>
      </ul>
      
      <p>This seamless, 360-degree approach removes the guesswork. You get a single, cohesive performance plan managed by a team with decades of experience helping athletes of all levels, in all sports, reach their peak.</p>
      
      <h2>Are You Ready to Unlock Your Potential?</h2>
      <p>Stop wasting time and energy trying to piece together your own performance plan. It's time to work with a team that sees the complete picture. It's time to train with GPC-Performance.</p>
      
      <p>Whether you are an aspiring amateur or a seasoned professional, your journey to the next level starts here.</p>
      
      <blockquote>
        "Integration isn't just our approach—it's our advantage. When every element of your performance works together, that's when breakthrough happens."
      </blockquote>
      
      <h2>Take Action Today</h2>
      <p>Visit us at <strong>www.gpc-performance.com</strong> to schedule your initial consultation and discover what a truly integrated performance program can do for you.</p>
      
      <p>Your potential is waiting. Stop juggling. Start dominating.</p>
    `
  };

  return (
    <div className="bg-navy text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="text-gray-400 hover:text-white p-0" data-testid="back-to-blog-top">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <Badge variant="outline" className="border-purple-900/30 text-gray-300 mb-4" data-testid="article-category">
            {article.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-testid="article-title">
            {article.title}
          </h1>
          <p className="text-xl text-gray-300 mb-6" data-testid="article-excerpt">
            {article.excerpt}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-sm text-gray-400">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center" data-testid="article-author">
                <User className="h-4 w-4 mr-2" />
                {article.author}
              </div>
              <div className="flex items-center" data-testid="article-date">
                <Calendar className="h-4 w-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center" data-testid="article-read-time">
                <Clock className="h-4 w-4 mr-2" />
                {article.readTime}
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0" data-testid="share-button">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
        
        {/* Article Content */}
        <Card className="bg-navy-light border-purple-900/30 mb-8" data-testid="article-content">
          <CardContent className="p-8">
            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-semibold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-h4:text-lg prose-h4:mt-4 prose-h4:mb-2
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                prose-ul:text-gray-300 prose-li:mb-2
                prose-ol:text-gray-300 prose-li:mb-2
                prose-strong:text-white prose-strong:font-semibold
                prose-blockquote:border-l-4 prose-blockquote:border-vibrant-blue prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-300"
              dangerouslySetInnerHTML={{ __html: article.content }}
              data-testid="article-body"
            />
          </CardContent>
        </Card>
        
        {/* Article Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link href="/blog">
            <Button variant="outline" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 border-purple-900/30 text-white hover:bg-purple-900/20 bg-[#23252f]" data-testid="back-to-blog-bottom">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
      <Footer />    
    </div>
  );
}