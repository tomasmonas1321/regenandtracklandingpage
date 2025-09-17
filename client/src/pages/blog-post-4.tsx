import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";

export default function BlogPost4() {
  const article = {
    id: 4,
    title: "Building Mental Resilience in Competitive Sports",
    excerpt: "Mental training is just as crucial as physical preparation. Explore evidence-based techniques for developing mental toughness and maintaining focus under pressure.",
    author: "Admin",
    date: "August 30, 2025",
    readTime: "5 min read",
    category: "Mental Performance",
    content: `
      <h2>Introduction</h2>
      <p>In the final moments of competition, when your body is screaming and the pressure is mounting, what separates champions from the rest isn't just physical ability—it's mental resilience. The capacity to maintain focus, manage emotions, and perform under pressure can be the difference between victory and defeat.</p>
      
      <p>Mental resilience isn't something you're simply born with. Like physical strength, it can be developed, trained, and refined through deliberate practice and proven strategies.</p>

      <h2>Understanding Mental Resilience</h2>
      <p>Mental resilience in sports refers to your ability to:</p>
      <ul>
        <li>Bounce back from setbacks and failures</li>
        <li>Maintain focus and composure under pressure</li>
        <li>Adapt to changing circumstances during competition</li>
        <li>Sustain motivation through challenges and adversity</li>
        <li>Learn and grow from both wins and losses</li>
      </ul>

      <p>Research shows that mental skills can account for up to 90% of performance in elite athletes. Yet many athletes spend countless hours training their bodies while neglecting their minds.</p>

      <blockquote>
        "Champions aren't made in the comfort zone. They're forged in the crucible of pressure, adversity, and relentless mental training."
      </blockquote>

      <h2>The Four Pillars of Mental Resilience</h2>

      <h3>1. Emotional Regulation</h3>
      <p>The ability to manage your emotional responses, especially under stress, is fundamental to consistent performance.</p>

      <h4>Key Strategies:</h4>
      <ul>
        <li><strong>Breathing Techniques:</strong> Deep, rhythmic breathing activates the parasympathetic nervous system, promoting calm and focus</li>
        <li><strong>Progressive Muscle Relaxation:</strong> Systematically tensing and releasing muscle groups to reduce physical tension</li>
        <li><strong>Emotional Labeling:</strong> Acknowledging and naming emotions reduces their intensity ("I notice I'm feeling anxious")</li>
        <li><strong>Reframing:</strong> Viewing challenges as opportunities rather than threats</li>
      </ul>

      <h3>2. Attention Control</h3>
      <p>Your ability to direct and maintain focus on relevant cues while filtering out distractions is crucial for peak performance.</p>

      <h4>Key Strategies:</h4>
      <ul>
        <li><strong>Mindfulness Meditation:</strong> Regular practice improves sustained attention and present-moment awareness</li>
        <li><strong>Cue Words:</strong> Simple phrases that redirect attention to optimal performance states</li>
        <li><strong>Pre-Performance Routines:</strong> Consistent sequences that prime optimal focus</li>
        <li><strong>Attention Switching:</strong> Practicing rapid shifts between broad and narrow focus</li>
      </ul>

      <h3>3. Self-Talk Management</h3>
      <p>The internal dialogue running through your mind directly impacts confidence, motivation, and performance.</p>

      <h4>Types of Effective Self-Talk:</h4>
      <ul>
        <li><strong>Instructional:</strong> Technical cues for skill execution ("Stay low through the turn")</li>
        <li><strong>Motivational:</strong> Energizing phrases that boost effort and confidence ("I've got this!")</li>
        <li><strong>Positive:</strong> Constructive responses to mistakes ("Next play" instead of "I suck")</li>
      </ul>

      <h3>4. Goal Setting and Mental Imagery</h3>
      <p>Clear goals and vivid mental rehearsal create a roadmap for success and build confidence through mental practice.</p>

      <h4>Effective Goal Setting:</h4>
      <ul>
        <li><strong>Process-focused:</strong> Emphasize controllable actions rather than outcomes</li>
        <li><strong>Specific and Measurable:</strong> Clear benchmarks for progress</li>
        <li><strong>Challenging but Realistic:</strong> Stretch goals that remain achievable</li>
        <li><strong>Time-bound:</strong> Clear deadlines for accountability</li>
      </ul>

      <h2>Building Mental Toughness: Practical Techniques</h2>

      <h3>Visualization and Mental Rehearsal</h3>
      <p>Mental imagery isn't just daydreaming—it's systematic mental practice that can improve actual performance.</p>

      <h4>How to Practice Effective Visualization:</h4>
      <ol>
        <li><strong>Use all senses:</strong> See, hear, feel, and even smell the competitive environment</li>
        <li><strong>Include emotions:</strong> Rehearse feeling confident and composed</li>
        <li><strong>Practice problem-solving:</strong> Visualize overcoming setbacks and challenges</li>
        <li><strong>Be specific:</strong> Include technical details and tactical decisions</li>
        <li><strong>Regular practice:</strong> 10-15 minutes daily for maximum benefit</li>
      </ol>

      <h3>Pressure Training</h3>
      <p>You can't learn to perform under pressure without practicing under pressure. Deliberately create challenging training environments.</p>

      <h4>Ways to Add Pressure to Training:</h4>
      <ul>
        <li>Train when tired or stressed</li>
        <li>Add time constraints to drills</li>
        <li>Practice with distractions (crowd noise, criticism)</li>
        <li>Create consequences for mistakes</li>
        <li>Simulate competition conditions</li>
      </ul>

      <h3>Developing Pre-Performance Routines</h3>
      <p>Consistent routines create familiarity and control in high-pressure situations.</p>

      <h4>Components of Effective Routines:</h4>
      <ul>
        <li><strong>Physical preparation:</strong> Warm-up movements and muscle activation</li>
        <li><strong>Mental preparation:</strong> Visualization and positive self-talk</li>
        <li><strong>Emotional regulation:</strong> Breathing and relaxation techniques</li>
        <li><strong>Focus cues:</strong> Keywords or phrases that direct attention</li>
      </ul>

      <blockquote>
        "Routines are the bridge between preparation and performance. They transform chaotic moments into familiar, controlled experiences."
      </blockquote>

      <h2>Handling Setbacks and Failure</h2>
      <p>How you respond to setbacks often determines long-term success more than natural talent.</p>

      <h3>The Growth Mindset Approach</h3>
      <ul>
        <li><strong>View failures as learning opportunities:</strong> "What can this teach me?"</li>
        <li><strong>Focus on effort over outcome:</strong> Praise the process, not just results</li>
        <li><strong>Embrace challenges:</strong> See difficult situations as chances to improve</li>
        <li><strong>Learn from others:</strong> Study how successful athletes overcome adversity</li>
      </ul>

      <h3>The 24-Hour Rule</h3>
      <p>Allow yourself 24 hours to feel disappointed after a poor performance, then shift focus to learning and moving forward. This prevents dwelling while still acknowledging natural emotions.</p>

      <h2>Managing Competition Anxiety</h2>
      <p>Some nervousness before competition is normal and can actually enhance performance. The key is managing anxiety levels so they help rather than hinder.</p>

      <h3>Understanding Your Optimal Arousal Level</h3>
      <ul>
        <li><strong>Too low:</strong> Lack of focus, sluggish reactions, poor motivation</li>
        <li><strong>Optimal:</strong> Alert, focused, confident, energized</li>
        <li><strong>Too high:</strong> Muscle tension, racing thoughts, rushed decisions</li>
      </ul>

      <h3>Anxiety Management Techniques</h3>
      <ul>
        <li><strong>For over-arousal:</strong> Deep breathing, progressive relaxation, calming imagery</li>
        <li><strong>For under-arousal:</strong> Energizing music, dynamic warm-up, motivational self-talk</li>
        <li><strong>For both:</strong> Consistent pre-competition routines, focus on process goals</li>
      </ul>

      <h2>Building Confidence</h2>
      <p>Confidence is built through preparation, past success experiences, and positive self-belief.</p>

      <h3>Sources of Sport Confidence:</h3>
      <ul>
        <li><strong>Mastery of skills:</strong> Technical proficiency builds self-assurance</li>
        <li><strong>Physical preparation:</strong> Knowing you're in great shape</li>
        <li><strong>Mental preparation:</strong> Having practiced mental skills</li>
        <li><strong>Past success:</strong> Drawing on previous good performances</li>
        <li><strong>Social support:</strong> Belief from coaches, teammates, and family</li>
      </ul>

      <h3>Confidence-Building Strategies:</h3>
      <ul>
        <li>Keep a performance journal highlighting successes</li>
        <li>Set and achieve small, daily goals</li>
        <li>Use positive self-talk and affirmations</li>
        <li>Visualize successful performances regularly</li>
        <li>Celebrate improvements, not just victories</li>
      </ul>

      <h2>Team Mental Resilience</h2>
      <p>For team sports, building collective mental toughness is crucial.</p>

      <h3>Building Team Mental Strength:</h3>
      <ul>
        <li><strong>Shared goals and values:</strong> Create collective identity and purpose</li>
        <li><strong>Open communication:</strong> Encourage honest feedback and support</li>
        <li><strong>Role clarity:</strong> Everyone knows their responsibilities</li>
        <li><strong>Mutual accountability:</strong> Hold each other to high standards</li>
        <li><strong>Collective problem-solving:</strong> Face challenges as a unit</li>
      </ul>

      <h2>The Long-Term Mental Training Plan</h2>

      <h3>Phase 1: Foundation Building (Weeks 1-4)</h3>
      <ul>
        <li>Learn basic relaxation and breathing techniques</li>
        <li>Start mindfulness meditation practice</li>
        <li>Identify current self-talk patterns</li>
        <li>Set process-focused goals</li>
      </ul>

      <h3>Phase 2: Skill Development (Weeks 5-8)</h3>
      <ul>
        <li>Practice visualization daily</li>
        <li>Develop pre-performance routines</li>
        <li>Work on attention control exercises</li>
        <li>Begin pressure training</li>
      </ul>

      <h3>Phase 3: Integration (Weeks 9-12)</h3>
      <ul>
        <li>Apply skills in practice situations</li>
        <li>Refine and personalize techniques</li>
        <li>Build confidence through small wins</li>
        <li>Prepare for competition implementation</li>
      </ul>

      <h3>Phase 4: Competition Application (Ongoing)</h3>
      <ul>
        <li>Use all skills in competitive situations</li>
        <li>Continuously evaluate and adjust</li>
        <li>Maintain daily mental training habits</li>
        <li>Seek feedback and keep improving</li>
      </ul>

      <h2>Common Mental Training Mistakes</h2>

      <h3>1. Only Training When Things Go Wrong</h3>
      <p>Mental skills need consistent practice, just like physical skills. Don't wait for a crisis to start mental training.</p>

      <h3>2. Expecting Immediate Results</h3>
      <p>Mental skills development takes time and consistent practice. Be patient with the process.</p>

      <h3>3. Practicing Only Perfect Scenarios</h3>
      <p>Train for adversity, setbacks, and challenging conditions, not just ideal situations.</p>

      <h3>4. Neglecting Individual Differences</h3>
      <p>What works for one athlete may not work for another. Customize your mental training approach.</p>

      <blockquote>
        "Mental toughness isn't about being emotionless—it's about having the skills to manage emotions and maintain performance under any circumstance."
      </blockquote>

      <h2>Conclusion</h2>
      <p>Mental resilience is not a luxury for elite athletes—it's a necessity for anyone serious about maximizing their athletic potential. The mind is like any other muscle: it gets stronger with consistent, progressive training.</p>
      
      <p>Start small, be consistent, and gradually build your mental training practice. Whether you're dealing with pre-competition nerves, recovering from a tough loss, or looking to take your performance to the next level, the mental skills outlined in this article will serve you well.</p>
      
      <p>Remember: champions are not those who never fall—they're those who get back up stronger, wiser, and more determined than before. Your mental resilience journey starts now.</p>
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