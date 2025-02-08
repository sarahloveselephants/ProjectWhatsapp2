import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
      {/* About Section */}
      <section id="about" className="flex-1 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="max-w-[800px] mx-auto space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter text-[#1E4620] sm:text-5xl">
                About Our Project
              </h1>
              <h2 className="text-2xl text-[#1E4620]">Our Mission</h2>
              <p className="text-[#1E4620]/80 text-lg leading-relaxed">
                Project Whatsapp is a youth-led community project dedicated to improving digital literacy among seniors by teaching them how to effectively use WhatsApp. Through interactive workshops and customized materials, we empower seniors to stay connected with their families, friends, and communities
              </p>
              <div className="pt-4">
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
            <div className="space-y-2 max-w-[900px]">
              <h2 className="text-3xl font-bold tracking-tighter text-[#1E4620] sm:text-5xl">
                Resources
              </h2>
              <p className="text-[#1E4620]/80 md:text-xl/relaxed">
                We provide free teaching slides on WhatsApp in English, Chinese, and bilingual formats, along with Apple Notes and Settings teaching slides in English. Additionally, we offer a comprehensive WhatsApp guidebook for both Apple and Android devices, available in English and bilingual versions, to support seniors in their learning journey
              </p>
              <div className="pt-6">
                <Link href="/resources">
                  <Button size="lg" className="bg-[#1E4620] hover:bg-[#1E4620]/90">
                    Explore our resources
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="w-full py-12 md:py-24 lg:py-32 bg-[#FDFBF7]">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-[#1E4620] sm:text-5xl mb-4">
              Get Involved
            </h2>
            <p className="text-[#1E4620]/80 text-lg">
              Explore various opportunities to support Project Whatsapp and make a difference in bridging the digital divide in our community.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-[#1E4620]">Volunteer</h3>
              <p className="text-[#1E4620]/80 mb-8">
                Assist during our workshops to guide seniors as they learn WhatsApp features and build digital confidence
              </p>
              <Link href="/volunteer" className="mt-auto">
                <Button variant="outline" className="w-full border-[#1E4620] text-[#1E4620] hover:bg-[#1E4620] hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-[#1E4620]">Collaborate</h3>
              <p className="text-[#1E4620]/80 mb-8">
                Partner with us to expand our reach and help bridge the digital divide in your community
              </p>
              <Link href="/collaborate" className="mt-auto">
                <Button variant="outline" className="w-full border-[#1E4620] text-[#1E4620] hover:bg-[#1E4620] hover:text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-[#1E4620]">Sign Up</h3>
              <p className="text-[#1E4620]/80 mb-8">
                Sign up your community group or organization for a tailored workshop to empower members with essential digital skills
              </p>
              <Link href="/signup" className="mt-auto">
                <Button variant="outline" className="w-full border-[#1E4620] text-[#1E4620] hover:bg-[#1E4620] hover:text-white">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}