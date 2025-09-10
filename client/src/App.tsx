import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import InstallApp from "@/pages/install-app";
import Blog from "@/pages/blog";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <TooltipProvider>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/install-app" component={InstallApp} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} />
      </Switch>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
