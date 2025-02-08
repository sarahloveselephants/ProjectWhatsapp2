
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-medium mb-8">
              About Our Project
            </h1>
            <h2 className="text-3xl mb-6">
              Our Mission
            </h2>
            <p className="text-lg mb-8">
              Project Whatsapp is a youth-led community project dedicated to improving digital literacy among seniors by teaching them how to effectively use WhatsApp. Through interactive workshops and customized materials, we empower seniors to stay connected with their families, friends, and communities.
            </p>
            <Link href="/about">
              <Button className="bg-[#0E3410] hover:bg-[#0E3410]/90 text-white">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-medium mb-6">Resources</h2>
            <p className="text-lg mb-8">
              We provide free teaching slides on WhatsApp in English, Chinese, and bilingual formats, along with Apple Notes and Settings teaching slides in English. Additionally, we offer a comprehensive WhatsApp guidebook for both Apple and Android devices.
            </p>
            <Link href="/resources">
              <Button className="bg-[#0E3410] hover:bg-[#0E3410]/90 text-white">
                Explore our resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-medium mb-6">Get Involved</h2>
            <p className="text-lg">
              Explore various opportunities to support Project Whatsapp and make a difference in bridging the digital divide in our community.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-medium mb-4">Volunteer</h3>
              <p className="mb-8">
                Assist during our workshops to guide seniors as they learn WhatsApp features and build digital confidence.
              </p>
              <Link href="/volunteer" className="mt-auto">
                <Button variant="outline" className="w-full border-[#0E3410] text-[#0E3410] hover:bg-[#0E3410] hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-medium mb-4">Collaborate</h3>
              <p className="mb-8">
                Partner with us to expand our reach and help bridge the digital divide in your community.
              </p>
              <Link href="/collaborate" className="mt-auto">
                <Button variant="outline" className="w-full border-[#0E3410] text-[#0E3410] hover:bg-[#0E3410] hover:text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-medium mb-4">Sign Up</h3>
              <p className="mb-8">
                Sign up your community group or organization for a tailored workshop to empower members with essential digital skills.
              </p>
              <Link href="/signup" className="mt-auto">
                <Button variant="outline" className="w-full border-[#0E3410] text-[#0E3410] hover:bg-[#0E3410] hover:text-white">
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
