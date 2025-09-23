import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import InstallApp from "@/pages/install-app";
import Blog from "@/pages/blog";
import BlogPost1 from "@/pages/blog-post-1";
import BlogPost2 from "@/pages/blog-post-2";
import BlogPost3 from "@/pages/blog-post-3";
import BlogPost4 from "@/pages/blog-post-4";
import BlogPost5 from "@/pages/blog-post-5";
import BlogPost6 from "@/pages/blog-post-6";
import BlogPost7 from "@/pages/blog-post-7";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsAndConditions from "@/pages/terms-and-conditions";
import Contact from "@/pages/contact";
import Testimonials from "@/pages/testimonials";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <TooltipProvider>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/install-app" component={InstallApp} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog-post-1" component={BlogPost1} />
        <Route path="/blog-post-2" component={BlogPost2} />
        <Route path="/blog-post-3" component={BlogPost3} />
        <Route path="/blog-post-4" component={BlogPost4} />
        <Route path="/blog-post-5" component={BlogPost5} />
        <Route path="/blog-post-6" component={BlogPost6} />
        <Route path="/blog-post-7" component={BlogPost7} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
        <Route path="/contact" component={Contact} />
        <Route path="/testimonials" component={Testimonials} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
