import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/navbar";
import Home from "@/pages/home";
import Resources from "@/pages/resources";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";
import { useState } from "react";

function Router() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Switch>
        <Route path="/" component={() => <Home searchQuery={searchQuery} />} />
        <Route path="/resources" component={() => <Resources searchQuery={searchQuery} />} />
        <Route path="/work" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center">
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
