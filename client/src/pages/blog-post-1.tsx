import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";

export default function BlogPost1() {
  const article = {
    id: 1,
    title: "The Science Behind Athletic Recovery: What Every Athlete Should Know",
    excerpt: "Understanding the physiological processes that occur during recovery can help you optimize your training and performance. Learn about the latest research on sleep, nutrition, and active recovery.",
    author: "Admin",
    date: "September 8, 2025",
    readTime: "5 min read",
    category: "Recovery Science",
    content: `
      <h2>Introduction</h2>
      <p>Recovery is one of the most overlooked aspects of athletic performance, yet it's where the magic truly happens. While training breaks down your body, recovery builds it back up stronger, faster, and more resilient. Understanding the science behind recovery can transform your approach to training and unlock new levels of performance.</p>

      <h2>The Physiology of Recovery</h2>
      <p>When you exercise, you create microscopic damage to muscle fibers, deplete energy stores, and stress various body systems. Recovery is the process by which your body repairs this damage and adapts to become stronger.</p>
      
      <h3>Muscle Protein Synthesis</h3>
      <p>After intense training, your body initiates muscle protein synthesis (MPS), the process of building new muscle proteins. This process peaks 1-3 hours post-exercise and can remain elevated for up to 48 hours. Proper nutrition, particularly protein intake, is crucial during this window.</p>
      
      <h3>Glycogen Replenishment</h3>
      <p>Your muscles use glycogen (stored carbohydrates) as their primary fuel source during high-intensity exercise. Post-workout, your body prioritizes replenishing these stores. The rate of glycogen resynthesis is highest in the first 2 hours after exercise.</p>

      <h2>The Role of Sleep in Recovery</h2>
      <p>Sleep is when the real magic happens. During deep sleep stages, your body releases growth hormone, which is essential for tissue repair and regeneration. Studies show that athletes who get less than 7 hours of sleep per night have:</p>
      
      <ul>
        <li>Increased injury risk by up to 70%</li>
        <li>Slower reaction times and decreased cognitive function</li>
        <li>Impaired immune function</li>
        <li>Reduced protein synthesis rates</li>
      </ul>

      <h2>Active vs. Passive Recovery</h2>
      <p>Not all recovery needs to be passive. Light movement and active recovery can enhance blood flow, reduce muscle stiffness, and accelerate the removal of metabolic waste products.</p>
      
      <h3>Active Recovery Benefits:</h3>
      <ul>
        <li>Improved blood circulation</li>
        <li>Enhanced nutrient delivery to muscles</li>
        <li>Reduced muscle soreness (DOMS)</li>
        <li>Maintenance of movement patterns</li>
      </ul>

      <h2>Nutrition for Optimal Recovery</h2>
      <p>What you eat after training directly impacts how well you recover. The post-workout nutrition window is crucial for maximizing adaptation.</p>
      
      <h3>The Recovery Nutrition Formula:</h3>
      <ul>
        <li><strong>Protein:</strong> 20-30g of high-quality protein within 2 hours post-workout</li>
        <li><strong>Carbohydrates:</strong> 1-1.2g per kg body weight for glycogen replenishment</li>
        <li><strong>Hydration:</strong> Replace 150% of fluid losses (weigh yourself before and after)</li>
        <li><strong>Anti-inflammatory foods:</strong> Tart cherries, fatty fish, leafy greens</li>
      </ul>

      <blockquote>
        "Recovery is not just rest—it's an active process that requires intention, planning, and consistency."
      </blockquote>

      <h2>Monitoring Your Recovery</h2>
      <p>Understanding your body's recovery status can help you make informed training decisions. Key indicators include:</p>
      
      <ul>
        <li>Heart Rate Variability (HRV)</li>
        <li>Resting heart rate trends</li>
        <li>Sleep quality and duration</li>
        <li>Subjective wellness scores</li>
        <li>Performance metrics</li>
      </ul>

      <h2>Common Recovery Mistakes</h2>
      <p>Even well-intentioned athletes make recovery errors that can limit their progress:</p>
      
      <ol>
        <li><strong>Ignoring sleep hygiene:</strong> Poor sleep environment and habits</li>
        <li><strong>Inadequate protein intake:</strong> Not meeting daily protein requirements</li>
        <li><strong>Chronic dehydration:</strong> Starting each day in a fluid deficit</li>
        <li><strong>All-or-nothing mentality:</strong> Complete rest or full intensity with no middle ground</li>
        <li><strong>Neglecting stress management:</strong> High life stress impairs physical recovery</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Recovery isn't just what happens between workouts—it's an integral part of your training program that deserves as much attention as the workouts themselves. By understanding the science behind recovery and implementing evidence-based strategies, you can accelerate your progress, reduce injury risk, and achieve new levels of athletic performance.</p>
      
      <p>Remember: the goal isn't just to train harder, but to recover smarter. When you optimize your recovery, you optimize your potential.</p>
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