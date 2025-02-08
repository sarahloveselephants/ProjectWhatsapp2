import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
      {/* About Section */}
      <section className="flex-1 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-bold tracking-tighter text-[#1E4620] sm:text-5xl xl:text-6xl/none">
                About Our Project
              </h1>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-[#1E4620]/80 md:text-xl">
                Project Whatsapp is a youth-led community project dedicated to improving digital literacy among seniors by teaching them how to effectively use WhatsApp. Through interactive workshops and customized materials, we empower seniors to stay connected with their families, friends, and communities
              </p>
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
                We provide free teaching slides on WhatsApp in English, Chinese, and bilingual formats, along with Apple Notes and Settings teaching slides in English. Additionally, we offer a comprehensive WhatsApp guidebook for both Apple and Android devices, available in English and bilingual versions, to support seniors in their learning journey
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
                Explore various opportunities to support Project Whatsapp and make a difference in bridging the digital divide in our community.
              </p>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
                  <p className="text-[#1E4620]/80 text-center mb-6">
                    Assist during our workshops to guide seniors as they learn WhatsApp features and build digital confidence
                  </p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Collaborate</h3>
                  <p className="text-[#1E4620]/80 text-center mb-6">
                    Partner with us to expand our reach and help bridge the digital divide in your community.
                  </p>
                  <Button variant="outline" className="w-full">Contact Us</Button>
                </div>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
                  <p className="text-[#1E4620]/80 text-center mb-6">
                    Sign up your community group or organization for a tailored workshop to empower members with essential digital skills
                  </p>
                  <Button variant="outline" className="w-full">Register Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}