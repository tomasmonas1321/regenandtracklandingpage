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
    }
   
  ];

  const categories = ["All", "Recovery Science", "Nutrition", "Mental Performance", ];

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
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-10 px-4 py-2 border-purple-900/30 text-white hover:bg-purple-900/20 bg-[#1e9df1]"
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