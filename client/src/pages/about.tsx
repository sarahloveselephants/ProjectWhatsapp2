import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container py-10 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="space-y-4 text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter text-[#1E4620] sm:text-5xl">
          Our Work
        </h1>
        <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
          Learn more about who we are, what we do and our journey so far!
        </p>
      </div>

      {/* Who Are We Section */}
      <Card className="mb-16 border-none shadow-lg bg-[#FDFBF7]">
        <CardContent className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#1E4620] text-2xl font-semibold">01</span>
            <h2 className="text-3xl font-bold text-[#1E4620]">Who are we?</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed">
                We are Nicole and Sarah, the founders of the VIA WhatsApp Project. We started this initiative in April 2024 while we were students at Methodist Girls' School (Secondary) MGS. After graduating in 2024, we both moved on to junior college and are committed to continuing this meaningful project. We are fortunate to still have the support of Mr. Wang, the teacher in charge of the Intergenerational Learning Centre (IGL) at MGS, who has been instrumental in guiding us along the way.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Carousel className="h-[300px]">
                <CarouselContent>
                  <CarouselItem>
                    <img src="/images/Intro1.png" alt="Introduction 1" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src="/images/Intro2.png" alt="Introduction 2" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </CardContent>
      </Card>



      {/* Workshop Details Section */}
      <Card id="workshop" className="mb-16 border-none shadow-lg bg-[#FDFBF7]">
        <CardContent className="p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#1E4620] text-2xl font-semibold">02</span>
            <h2 className="text-3xl font-bold text-[#1E4620]">Workshop details</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#1E4620] mb-2">Duration</h3>
                <p className="text-gray-600">1-2 hours depending on the group's needs.</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#1E4620] mb-2">Content</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Includes basic messaging and video calls to more advanced features like location sharing and channels</li>
                  <li>• We have slides prepared in english, chinese and both (bilingual)</li>
                  <li>• Slides can be modified based on the needs of the beneficiary</li>
                  <li>• We will stay as updated as possible with whatsapp latest features</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#1E4620] mb-2">Dates</h3>
                <p className="text-gray-600">We connect with our beneficiary and select the best date for both parties</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <Carousel className="h-[400px]">
                <CarouselContent>
                  <CarouselItem>
                    <img src="/images/Workshop1.png" alt="Workshop 1" className="w-full h-[400px] object-cover shadow-md rounded-lg" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src="/images/Workshop2.png" alt="Workshop 2" className="w-full h-[400px] object-cover shadow-md rounded-lg" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src="/images/Workshop3.png" alt="Workshop 3" className="w-full h-[400px] object-cover shadow-md rounded-lg" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src="/images/Workshop4.png" alt="Workshop 4" className="w-full h-[400px] object-cover shadow-md rounded-lg" />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Beneficiaries Section */}
      <Card className="mb-16 border-none shadow-lg bg-[#FDFBF7]">
        <CardContent className="p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#1E4620] text-2xl font-semibold">03</span>
            <h2 className="text-3xl font-bold text-[#1E4620]">Beneficiaries</h2>
          </div>
          <p className="text-gray-600 mb-6">
            We are immensely grateful to all our beneficiaries that support our vision of empowering seniors through digital literacy. These include Covenant Community Methodist Church, Church of Singapore (Marine Parade), Lions Befrienders Service Association (Singapore), TOUCH Community Services, and Tung Ling Community Services.
          </p>
          <div className="h-[300px]">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="basis-1/2">
                  <img src="/images/Intro1.png" alt="Beneficiaries 1" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
                </CarouselItem>
                <CarouselItem className="basis-1/2">
                  <img src="/images/Intro2.png" alt="Beneficiaries 2" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
                </CarouselItem>
                <CarouselItem className="basis-1/2">
                  <img src="/images/Workshop3.png" alt="Beneficiaries 3" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
                </CarouselItem>
                <CarouselItem className="basis-1/2">
                  <img src="/images/Workshop4.png" alt="Beneficiaries 4" className="w-full h-[300px] object-cover rounded-lg shadow-md" />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </CardContent>
      </Card>

      {/* Timeline Section */}
      <Card className="border-none shadow-lg bg-[#FDFBF7]">
        <CardContent className="p-8">
          <div id="journey" className="flex items-center gap-2 mb-6">
            <span className="text-[#1E4620] text-2xl font-semibold">04</span>
            <h2 className="text-3xl font-bold text-[#1E4620]">Our Journey</h2>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-32 text-[#1E4620] font-semibold">February 2024</div>
              <div className="flex-1 pb-6 border-l-2 border-[#1E4620] pl-6">
                <p className="text-gray-600">Launch of project</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-32 text-[#1E4620] font-semibold">April 2024</div>
              <div className="flex-1 pb-6 border-l-2 border-[#1E4620] pl-6">
                <p className="text-gray-600">First 2 sessions with Ang Mo Kio lion befrienders</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-32 text-[#1E4620] font-semibold">June 2024</div>
              <div className="flex-1 pb-6 border-l-2 border-[#1E4620] pl-6">
                <p className="text-gray-600">Created our first draft of the whatsapp guidebook</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-32 text-[#1E4620] font-semibold">July 2024</div>
              <div className="flex-1 pb-6 border-l-2 border-[#1E4620] pl-6">
                <p className="text-gray-600">Completed second draft of guidebook in canva</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-32 text-[#1E4620] font-semibold">August 2024</div>
              <div className="flex-1 pb-6 border-l-2 border-[#1E4620] pl-6">
                <ul className="space-y-4 text-gray-600">
                  <li>First time recruiting volunteers for the 4 upcoming sessions</li>
                  <li>Worked with Apple to refine our content for our Apple Notes workshop</li>
                  <li>Worked with IMDA to try out bringing anti scams into our sessions</li>
                  <li>Completed the Chinese version of our slides</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-32 text-[#1E4620] font-semibold">January 2025</div>
              <div className="flex-1 pb-6 border-l-2 border-[#1E4620] pl-6">
                <ul className="space-y-4 text-gray-600">
                  <li>Completed the bilingual version of our WhatsApp teaching slides and guidebook</li>
                  <li>First off campus session outside of the MGS IGL centre at Tung Ling Community Services and Church of Singapore</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}