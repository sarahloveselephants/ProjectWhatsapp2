import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Book } from "lucide-react";
import { useLocation } from "wouter";

const teachingSlides = [
  {
    title: "English Teaching Slides",
    type: "PDF",
    description: "WhatsApp teaching materials in English",
    path: "https://drive.google.com/file/d/1Vp8YZ223YWvdXpzK4QeULMKGdnhd-4e4/view?usp=sharing",
    icon: FileText
  },
  {
    title: "Chinese Teaching Slides",
    type: "PDF",
    description: "WhatsApp teaching materials in Chinese",
    path: "https://drive.google.com/file/d/13jqgQcIyxq-UVMGWrF1cD0uYLeXOSKqG/view?usp=sharing",
    icon: FileText
  },
  {
    title: "Bilingual Teaching Slides",
    type: "PDF",
    description: "WhatsApp teaching materials in English and Chinese",
    path: "https://drive.google.com/file/d/1IRLzfNxjZzINZ91oU_8FVNIFirYJxxS7/view?usp=sharing",
    icon: FileText
  },
  {
    title: "Apple Notes and Settings Teaching Slides",
    type: "PDF",
    description: "Apple notes and Settings teaching materials in English",
    path: "https://drive.google.com/file/d/1_ezzirJLOKhfvrwMEVhYvAJHlqqeQ7LL/view?usp=sharing",
    icon: FileText
  }
];

const guidebooks = [
  {
    title: "English Apple Guidebook",
    type: "PDF",
    description: "WhatsApp guide for Apple devices in English",
    path: "/docs/english-apple-guide.pdf",
    icon: Book
  },
  {
    title: "English Android Guidebook",
    type: "PDF",
    description: "WhatsApp guide for Android devices in English",
    path: "/docs/english-android-guide.pdf",
    icon: Book
  },
  {
    title: "Bilingual Apple Guidebook",
    type: "PDF",
    description: "WhatsApp guide for Apple devices in English and Chinese",
    path: "/docs/bilingual-apple-guide.pdf",
    icon: Book
  },
  {
    title: "Bilingual Android Guidebook",
    type: "PDF",
    description: "WhatsApp guide for Android devices in English and Chinese",
    path: "/docs/bilingual-android-guide.pdf",
    icon: Book
  }
];

export default function Resources() {
  return (
    <div className="container mx-auto py-10 px-6 text-center bg-[#FDFBF7]">
      <div className="space-y-2 mb-10">
        <h1 className="text-3xl font-bold tracking-tighter text-[#1E4620] sm:text-5xl">
          Resources
        </h1>
        <p className="text-gray-600 md:text-xl">
          Explore our collection of free-to-download teaching materials, step-by-step guides, and slides designed to help seniors navigate WhatsApp with ease.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Teaching Slides</h2>
        <div className="grid grid-cols-2 gap-4 w-full">
          {teachingSlides.map((slide) => (
            <Card key={slide.title} className="hover:shadow-lg transition-shadow w-full bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <slide.icon className="h-8 w-8 text-[#1E4620]" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{slide.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{slide.description}</p>
                    <a href={slide.path} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">View {slide.type}</Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">WhatsApp Guidebooks</h2>
        <div className="grid grid-cols-2 gap-0 w-full">
          {guidebooks.map((guide) => (
            <Card key={guide.title} className="hover:shadow-lg transition-shadow w-full">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <guide.icon className="h-8 w-8 text-[#1E4620]" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                    <a href={guide.path} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">View {guide.type}</Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
