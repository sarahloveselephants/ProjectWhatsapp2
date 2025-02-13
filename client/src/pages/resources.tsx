
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Book } from "lucide-react";
import { useLocation } from "wouter";

const teachingSlides = [
  {
    title: "English Teaching Slides",
    type: "PDF",
    description: "WhatsApp teaching materials in English",
    path: "/docs/english-slides.pdf",
    icon: FileText
  },
  {
    title: "Chinese Teaching Slides",
    type: "PDF",
    description: "WhatsApp teaching materials in Chinese",
    path: "/docs/chinese-slides.pdf",
    icon: FileText
  },
  {
    title: "Bilingual Teaching Slides",
    type: "PDF",
    description: "WhatsApp teaching materials in English and Chinese",
    path: "/docs/bilingual-slides.pdf",
    icon: FileText
  },
  {
    title: "Apple Notes Teaching Slides",
    type: "PDF",
    description: "Guide for using Apple Notes",
    path: "/docs/apple-notes.pdf",
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
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split('?')[1]);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const filteredSlides = teachingSlides.filter(slide => 
    searchQuery ? 
      slide.title.toLowerCase().includes(searchQuery) || 
      slide.description.toLowerCase().includes(searchQuery)
    : true
  );

  const filteredGuidebooks = guidebooks.filter(guide => 
    searchQuery ? 
      guide.title.toLowerCase().includes(searchQuery) || 
      guide.description.toLowerCase().includes(searchQuery)
    : true
  );

  return (
    <div className="container py-10">
      <div className="space-y-2 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Resources
        </h1>
        <p className="text-gray-500 md:text-xl dark:text-gray-400">
          Explore our collection of free to download teaching materials, step-by-step guides, and slides designed to help seniors navigate WhatsApp with ease
        </p>
      </div>

      {/* Teaching Slides Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Teaching Slides</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSlides.map((slide) => (
            <Card key={slide.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <slide.icon className="h-8 w-8 text-[#1E4620]" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{slide.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{slide.description}</p>
                    <a
                      href={slide.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button variant="outline" size="sm">
                        View {slide.type}
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* WhatsApp Guidebooks Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">WhatsApp Guidebooks</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGuidebooks.map((guide) => (
            <Card key={guide.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <guide.icon className="h-8 w-8 text-[#1E4620]" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                    <a
                      href={guide.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button variant="outline" size="sm">
                        View {guide.type}
                      </Button>
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
