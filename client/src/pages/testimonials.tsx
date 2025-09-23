import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Star, Plus, Edit2, Trash2 } from "lucide-react";
import Footer from "@/components/Footer";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
  gradient: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: "1",
      name: "Shane",
      role: "Hurling",
      initials: "Shane",
      gradient: "from-vibrant-blue to-vibrant-green",
      quote: "Finally, an app that gets it. The recovery tracking has completely changed how I approach my training cycles.",
      rating: 5
    },
    {
      id: "2",
      name: "Conor",
      role: "Football",
      initials: "Conor",
      gradient: "from-vibrant-green to-vibrant-blue",
      quote: "The data visualization is incredible. I can see exactly how my sleep affects my performance the next day.",
      rating: 5
    },
    {
      id: "3",
      name: "",
      role: "Soccer",
      initials: "JD",
      gradient: "from-vibrant-orange to-vibrant-red",
      quote: "Simple yet powerful. I've tried every fitness app out there, and this is the one that actually helped me PR.",
      rating: 5
    }
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    quote: "",
    rating: 5
  });

  const { toast } = useToast();

  const generateInitials = (name: string) => {
    return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase();
  };

  const generateGradient = () => {
    const gradients = [
      "from-vibrant-blue to-vibrant-green",
      "from-vibrant-green to-vibrant-blue",
      "from-vibrant-orange to-vibrant-red",
      "from-vibrant-red to-vibrant-orange",
      "from-vibrant-purple to-vibrant-blue",
      "from-vibrant-blue to-vibrant-purple"
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.role || !formData.quote) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required.",
        variant: "destructive",
      });
      return;
    }

    if (editingId) {
      // Update existing testimonial
      setTestimonials(prev => prev.map(testimonial => 
        testimonial.id === editingId 
          ? {
              ...testimonial,
              name: formData.name,
              role: formData.role,
              quote: formData.quote,
              rating: formData.rating,
              initials: generateInitials(formData.name)
            }
          : testimonial
      ));
      toast({
        title: "Testimonial updated!",
        description: "The testimonial has been successfully updated.",
      });
      setEditingId(null);
    } else {
      // Add new testimonial
      const newTestimonial: Testimonial = {
        id: Date.now().toString(),
        name: formData.name,
        role: formData.role,
        quote: formData.quote,
        rating: formData.rating,
        initials: generateInitials(formData.name),
        gradient: generateGradient()
      };
      setTestimonials(prev => [...prev, newTestimonial]);
      toast({
        title: "Testimonial added!",
        description: "The new testimonial has been successfully added.",
      });
      setIsAdding(false);
    }

    setFormData({ name: "", role: "", quote: "", rating: 5 });
  };

  const handleEdit = (testimonial: Testimonial) => {
    setFormData({
      name: testimonial.name,
      role: testimonial.role,
      quote: testimonial.quote,
      rating: testimonial.rating
    });
    setEditingId(testimonial.id);
    setIsAdding(true);
  };

  const handleDelete = (id: string) => {
    setTestimonials(prev => prev.filter(testimonial => testimonial.id !== id));
    toast({
      title: "Testimonial deleted",
      description: "The testimonial has been successfully removed.",
    });
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({ name: "", role: "", quote: "", rating: 5 });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="bg-navy text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black mb-6" data-testid="testimonials-page-headline">
            <span className="bg-gradient-to-r from-vibrant-blue to-vibrant-green bg-clip-text text-transparent">Client</span>
            <span className="text-white"> Testimonials</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" data-testid="testimonials-page-description">
            See what athletes are saying about Regen & Track
          </p>
        </div>

        {/* Add New Testimonial Button */}
        {!isAdding && (
          <div className="text-center mb-12">
            <Button
              onClick={() => setIsAdding(true)}
              className="bg-gradient-to-r from-vibrant-blue to-vibrant-purple hover:from-vibrant-blue/80 hover:to-vibrant-purple/80 text-white font-medium"
              data-testid="button-add-testimonial"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Testimonial
            </Button>
          </div>
        )}

        {/* Add/Edit Form */}
        {isAdding && (
          <Card className="bg-navy-light border-purple-700/30 mb-12">
            <CardHeader>
              <CardTitle className="text-white">
                {editingId ? "Edit Testimonial" : "Add New Testimonial"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">
                      Client Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="bg-navy border-purple-700/30 text-white placeholder-gray-400"
                      placeholder="Enter client name"
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="role" className="text-white mb-2 block">
                      Role/Sport
                    </Label>
                    <Input
                      id="role"
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                      className="bg-navy border-purple-700/30 text-white placeholder-gray-400"
                      placeholder="e.g., Marathon Runner, CrossFit Athlete"
                      data-testid="input-role"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="quote" className="text-white mb-2 block">
                    Testimonial Quote
                  </Label>
                  <Textarea
                    id="quote"
                    value={formData.quote}
                    onChange={(e) => setFormData(prev => ({ ...prev, quote: e.target.value }))}
                    className="bg-navy border-purple-700/30 text-white placeholder-gray-400 min-h-[120px]"
                    placeholder="Enter the testimonial quote..."
                    data-testid="input-quote"
                  />
                </div>

                <div>
                  <Label htmlFor="rating" className="text-white mb-2 block">
                    Rating (1-5 stars)
                  </Label>
                  <Input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={(e) => {
                      const rating = parseInt(e.target.value);
                      if (!isNaN(rating) && rating >= 1 && rating <= 5) {
                        setFormData(prev => ({ ...prev, rating }));
                      }
                    }}
                    className="bg-navy border-purple-700/30 text-white"
                    data-testid="input-rating"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-vibrant-blue to-vibrant-purple hover:from-vibrant-blue/80 hover:to-vibrant-purple/80 text-white font-medium"
                    data-testid="button-save-testimonial"
                  >
                    {editingId ? "Update Testimonial" : "Add Testimonial"}
                  </Button>
                  <Button
                    type="button"
                    onClick={handleCancel}
                    variant="outline"
                    className="border-purple-700/30 text-white hover:bg-purple-700/30"
                    data-testid="button-cancel"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-navy-light border-purple-700/30 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold mr-4`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold" data-testid={`testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-400 text-sm" data-testid={`testimonial-role-${testimonial.id}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-4" data-testid={`testimonial-rating-${testimonial.id}`}>
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-300 mb-4" data-testid={`testimonial-quote-${testimonial.id}`}>
                  "{testimonial.quote}"
                </p>
                
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleEdit(testimonial)}
                    size="sm"
                    variant="outline"
                    className="border-purple-700/30 text-white hover:bg-purple-700/30"
                    data-testid={`button-edit-${testimonial.id}`}
                  >
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => handleDelete(testimonial.id)}
                    size="sm"
                    variant="outline"
                    className="border-red-700/30 text-red-400 hover:bg-red-700/30"
                    data-testid={`button-delete-${testimonial.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}