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
      author: "Dr. Sarah Chen",
      date: "September 8, 2025",
      readTime: "8 min read",
      category: "Recovery Science",
      featured: true
    },
    {
      id: 2,
      title: "Heart Rate Variability: Your Body's Performance Dashboard",
      excerpt: "HRV metrics can provide valuable insights into your readiness to train. Discover how to interpret HRV data and use it to make informed decisions about your training intensity.",
      author: "Coach Mike Rodriguez",
      date: "September 5, 2025",
      readTime: "6 min read",
      category: "Performance Metrics"
    },
    {
      id: 3,
      title: "Nutrition Timing for Optimal Recovery and Performance",
      excerpt: "When you eat can be just as important as what you eat. Learn about pre-workout, post-workout, and daily nutrition strategies that support peak athletic performance.",
      author: "Emma Thompson, RD",
      date: "September 2, 2025",
      readTime: "10 min read",
      category: "Nutrition"
    },
    {
      id: 4,
      title: "Building Mental Resilience in Competitive Sports",
      excerpt: "Mental training is just as crucial as physical preparation. Explore evidence-based techniques for developing mental toughness and maintaining focus under pressure.",
      author: "Dr. James Liu",
      date: "August 30, 2025",
      readTime: "7 min read",
      category: "Mental Performance"
    },
    {
      id: 5,
      title: "Sleep Optimization for Athletes: Beyond Just Getting 8 Hours",
      excerpt: "Quality sleep is when your body repairs and adapts to training stress. Learn advanced sleep strategies that go beyond duration to maximize recovery and performance.",
      author: "Dr. Sarah Chen",
      date: "August 27, 2025",
      readTime: "9 min read",
      category: "Recovery Science"
    },
    {
      id: 6,
      title: "Technology in Sports: How Wearables Are Changing Athletic Training",
      excerpt: "From smartwatches to advanced sensors, technology is revolutionizing how athletes train and recover. Discover the tools that are making the biggest impact.",
      author: "Tech Team",
      date: "August 24, 2025",
      readTime: "5 min read",
      category: "Technology"
    }
  ];

  const categories = ["All", "Recovery Science", "Performance Metrics", "Nutrition", "Mental Performance", "Technology"];

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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" data-testid="category-filter">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" 
                ? "bg-gradient-to-r from-vibrant-blue to-vibrant-green" 
                : "border-purple-900/30 text-white hover:bg-purple-900/20"
              }
              data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="bg-navy-light border-purple-900/30 mb-8" data-testid="featured-post">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-gradient-to-r from-vibrant-blue to-vibrant-green text-white">
                  Featured
                </Badge>
                <Badge variant="outline" className="border-purple-900/30 text-gray-300">
                  {post.category}
                </Badge>
              </div>
              <CardTitle className="text-white text-2xl md:text-3xl hover:text-vibrant-blue transition-colors cursor-pointer">
                {post.title}
              </CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center" data-testid="featured-author">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center" data-testid="featured-date">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center" data-testid="featured-read-time">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-vibrant-blue to-vibrant-green" data-testid="featured-read-btn">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.filter(post => !post.featured).map((post) => (
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
                  <Button variant="ghost" size="sm" className="text-vibrant-blue hover:text-white" data-testid={`post-read-btn-${post.id}`}>
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-navy-light to-purple-900/30 border-purple-900/30" data-testid="newsletter-signup">
          <CardHeader className="text-center">
            <CardTitle className="text-white text-2xl">Stay Updated</CardTitle>
            <CardDescription className="text-gray-300">
              Get the latest insights and tips delivered directly to your inbox
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-navy border border-purple-900/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-vibrant-blue"
                data-testid="newsletter-email"
              />
              <Button className="bg-gradient-to-r from-vibrant-blue to-vibrant-green" data-testid="newsletter-subscribe">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link href="/">
            <Button variant="outline" className="border-purple-900/30 text-white hover:bg-purple-900/20" data-testid="back-home-btn">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}