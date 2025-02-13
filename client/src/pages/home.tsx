
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container">
          <div className="flex gap-12 pl-8">
            <div className="w-1/3">
              <h1 className="text-6xl font-medium mb-8">
                About Our Project
              </h1>
              <h2 className="text-3xl">
                Our Mission and Vision
              </h2>
            </div>
            <div className="w-2/3">
              <p className="text-lg mb-8">
                Project Whatsapp is a youth-led community project dedicated to improving digital literacy among seniors by teaching them how to effectively use WhatsApp. Through interactive workshops and customized materials, we empower seniors to stay connected with their families, friends, and communities.
              </p>
              <Link href="/work">
                <Button className="bg-[#0E3410] hover:bg-[#0E3410]/90 text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-medium mb-6">Resources</h2>
            <p className="text-base mb-8">
              We provide comprehensive teaching materials, step-by-step guides, and bilingual slides to support digital literacy workshops for seniors. Our resources are free to download and easy to use, enabling individuals and organizations to conduct their own WhatsApp training sessions with confidence.
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
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-medium mb-4 text-[#0E3410]">Volunteer</h3>
              <p className="text-gray-600">
                Assist during our workshops to guide seniors as they learn WhatsApp features and build digital confidence.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-medium mb-4 text-[#0E3410]">Collaborate</h3>
              <p className="text-gray-600">
                Partner with us to expand our reach and help bridge the digital divide in your community.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-medium mb-4 text-[#0E3410]">Sign Up</h3>
              <p className="text-gray-600">
                Sign up your community group or organization for a tailored workshop to empower members with essential digital skills.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">Contact us at projectwhatsapp@gmail.com to learn more!</p>
          </div>
          <div className="text-center mt-12">
            <p className="text-lg">Contact us at projectwhatsapp@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}
