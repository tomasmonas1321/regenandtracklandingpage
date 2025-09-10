import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Athletic Recovery: What Every Athlete Should Know",
      excerpt: "Understanding the physiological processes that occur during recovery can help you optimize your training and performance. Learn about the latest research on sleep, nutrition, and active recovery.",
      author: "Admin",
      date: "September 8, 2025",
      readTime: "<5 min read",
      category: "Recovery Science"
    },
    {
      id: 3,
      title: "Nutrition Timing for Optimal Recovery and Performance",
      excerpt: "When you eat can be just as important as what you eat. Learn about pre-workout, post-workout, and daily nutrition strategies that support peak athletic performance.",
      author: "Admin",
      date: "September 2, 2025",
      readTime: "<5 min read",
      category: "Nutrition"
    },
    {
      id: 4,
      title: "Building Mental Resilience in Competitive Sports",
      excerpt: "Mental training is just as crucial as physical preparation. Explore evidence-based techniques for developing mental toughness and maintaining focus under pressure.",
      author: "Admin",
      date: "August 30, 2025",
      readTime: "<5 min read",
      category: "Mental Performance"
    },
    {
      id: 5,
      title: "Sleep Optimization for Athletes: Beyond Just Getting 8 Hours",
      excerpt: "Quality sleep is when your body repairs and adapts to training stress. Learn advanced sleep strategies that go beyond duration to maximize recovery and performance.",
      author: "Admin",
      date: "August 27, 2025",
      readTime: "<5 min read",
      category: "Recovery Science"
    },
    {
      id: 6,
      title: "Workload Management Basics",
      excerpt: "Understanding training load, internal vs external load, and the importance of wellness monitoring for optimizing performance and preventing overtraining in athletes.",
      author: "Admin",
      date: "September 10, 2025",
      readTime: "<5 min read",
      category: "Training Load"
    },
    {
      id: 7,
      title: "Are You Really Ready to Train? Listen to Your Body's Data",
      excerpt: "Learn how the Hooper and Mackinnon wellness scale can help you track subjective markers like sleep, fatigue, and stress to optimize your training decisions and prevent burnout.",
      author: "Admin",
      date: "September 10, 2025",
      readTime: "<5 min read",
      category: "Wellness Tracking"
    },
    {
      id: 8,
      title: "Stop Juggling. Start Dominating. Your Integrated Path to Peak Performance is Here",
      excerpt: "Discover how GPC-Performance's integrated approach eliminates fragmented training by unifying strength conditioning, nutrition, and physiotherapy under one expert roof.",
      author: "GPC-Performance",
      date: "September 10, 2025",
      readTime: "<5 min read",
      category: "Performance Training"
    }
  ];


  return (
    <div className="bg-navy text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="blog-title">
            Regen & Track Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="blog-description">
            Insights, tips, and research to help you optimize your athletic performance and recovery
          </p>
        </div>



        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-navy-light border-purple-900/30 hover:border-purple-600/50 transition-colors cursor-pointer" data-testid={`blog-post-${post.id}`}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="border-purple-900/30 text-gray-300" data-testid={`post-category-${post.id}`}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-400" data-testid={`post-read-time-${post.id}`}>
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-white text-lg hover:text-vibrant-blue transition-colors" data-testid={`post-title-${post.id}`}>
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-300" data-testid={`post-excerpt-${post.id}`}>
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-gray-400" data-testid={`post-author-${post.id}`}>
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-400" data-testid={`post-date-${post.id}`}>
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="ghost" size="sm" className="text-vibrant-blue hover:text-white" data-testid={`post-read-btn-${post.id}`}>
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button variant="outline" className="border-purple-900/30 text-white hover:bg-purple-900/20 bg-[#1e9df1]" data-testid="back-home-btn">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}