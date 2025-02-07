import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="flex-1 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex items-center justify-center">
              <img
                alt="Product preview"
                className="aspect-square overflow-hidden rounded-xl object-cover object-center"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transform Your WhatsApp Experience
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of users revolutionizing their WhatsApp communication with our innovative platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#get-involved">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex-1 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-[#1E4620] sm:text-5xl xl:text-6xl/none">
                  About Our Project
                </h1>
                <p className="max-w-[600px] text-[#1E4620]/80 md:text-xl">
                  Revolutionizing WhatsApp communication with innovative solutions that empower users and businesses alike.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button size="lg" className="bg-[#1E4620] hover:bg-[#1E4620]/90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-[#1E4620] sm:text-5xl">
                Resources
              </h2>
              <p className="max-w-[900px] text-[#1E4620]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our comprehensive collection of guides, tutorials, and best practices
              </p>
              <div className="mt-6">
                <Link href="/resources">
                  <Button size="lg" className="bg-[#1E4620] hover:bg-[#1E4620]/90">
                    Explore Our Resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-[#1E4620] sm:text-5xl">
                Get Involved
              </h2>
              <p className="max-w-[600px] text-[#1E4620]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our community and help shape the future of WhatsApp communication
              </p>
              <div className="mt-6 flex flex-col gap-4 items-center">
                <p className="text-[#1E4620]/80">
                  Connect with us on social media or contribute to our open-source projects
                </p>
                <Button size="lg" className="bg-[#1E4620] hover:bg-[#1E4620]/90">
                  Join Our Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}