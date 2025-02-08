import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Book, FileImage } from "lucide-react";

const documentResources = [
  {
    title: "Project WhatsApp Guide",
    type: "PDF",
    description: "Comprehensive guide about our WhatsApp solutions",
    path: "/docs/whatsapp-guide.pdf",
    icon: FileText
  },
  {
    title: "Integration Manual",
    type: "PDF",
    description: "Technical documentation for WhatsApp integration",
    path: "/docs/integration-manual.pdf",
    icon: Book
  },
  {
    title: "Feature Overview",
    type: "PDF",
    description: "Overview of all available features",
    path: "/docs/feature-overview.pdf",
    icon: FileText
  }
];

const resources = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of using our platform",
    image: "https://images.unsplash.com/photo-1559752562-1513aa167782"
  },
  {
    title: "Best Practices",
    description: "Optimize your WhatsApp communication",
    image: "https://images.unsplash.com/photo-1653389526309-f8e2e75f8aaf"
  },
  {
    title: "Case Studies",
    description: "See how others are using our platform",
    image: "https://images.unsplash.com/photo-1653389527532-884074ac1c65"
  }
];

export default function Resources() {
  return (
    <div className="container py-10">
      <div className="space-y-2 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Resources
        </h1>
        <p className="text-gray-500 md:text-xl dark:text-gray-400">
          Helpful guides and documentation to get the most out of our platform
        </p>
      </div>

      {/* PDF Documents Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Documentation</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {documentResources.map((doc) => (
            <Card key={doc.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <doc.icon className="h-8 w-8 text-[#1E4620]" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                    <a
                      href={doc.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button variant="outline" size="sm">
                        View {doc.type}
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Resources */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Featured Resources</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Card key={resource.title} className="overflow-hidden">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{resource.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}