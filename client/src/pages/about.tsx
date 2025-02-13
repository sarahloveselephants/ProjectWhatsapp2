
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container py-10 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="space-y-4 text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tighter text-[#1E4620] sm:text-5xl">
          Our Work
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          We conduct WhatsApp workshops specifically designed for the elderly, helping them build digital confidence and stay connected in today's fast-paced world. Our sessions range from teaching simple functions like sending messages, making video calls, and sharing photos to more advanced features such as location sharing, creating groups, and exploring WhatsApp Channels.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[#1E4620] mb-8">Our Journey</h2>
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-24 text-[#1E4620] font-semibold">April 2024</div>
            <div className="flex-1 pb-8 border-l-2 border-[#1E4620] pl-8">
              <h3 className="font-semibold mb-2">Project Launch</h3>
              <p className="text-gray-600">Started the VIA WhatsApp Project at Methodist Girls' School (Secondary)</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-24 text-[#1E4620] font-semibold">2024</div>
            <div className="flex-1 pb-8 border-l-2 border-[#1E4620] pl-8">
              <h3 className="font-semibold mb-2">Expansion Phase</h3>
              <p className="text-gray-600">Continued project development through junior college transition</p>
            </div>
          </div>
        </div>
      </div>

      {/* Who Are We Section */}
      <Card className="mb-16 border-none shadow-lg bg-[#FDFBF7]">
        <CardContent className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#1E4620] text-2xl font-semibold">01</span>
            <h2 className="text-3xl font-bold text-[#1E4620]">Who are we?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed">
                We are Nicole and Sarah, the founders of the VIA WhatsApp Project. We started this initiative in April 2024 while we were students at Methodist Girls' School (Secondary) MGS. After graduating in 2024, we both moved on to junior college and are committed to continuing this meaningful project. We are fortunate to still have the support of Mr. Wang, the teacher in charge of the Intergenerational Learning Centre (IGL) at MGS, who has been instrumental in guiding us along the way.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              [Photo Space]
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workshop Details Section */}
      <Card className="mb-16 border-none shadow-lg bg-[#FDFBF7]">
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
            
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              [Workshop Photos Space]
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Beneficiaries Section */}
      <Card className="border-none shadow-lg bg-[#FDFBF7]">
        <CardContent className="p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#1E4620] text-2xl font-semibold">03</span>
            <h2 className="text-3xl font-bold text-[#1E4620]">Beneficiaries</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Our beneficiaries include a diverse range of community organizations that support our vision of empowering seniors through digital literacy. These include Covenant Community Methodist Church, Church of Singapore (Marine Parade), Lions Befrienders Service Association (Singapore), TOUCH Community Services, and Tung Ling Community Services.
          </p>
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            [Beneficiaries Photos Space]
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
