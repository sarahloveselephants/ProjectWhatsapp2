import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useQuery } from "@tanstack/react-query";

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
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);

  const { data: uploadedFiles = [], refetch: refetchFiles } = useQuery({
    queryKey: ['/api/files'],
  });

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);
    try {
      await apiRequest('POST', '/api/upload', formData);
      toast({
        title: "Success",
        description: "File uploaded successfully",
      });
      refetchFiles();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to upload file",
      });
    } finally {
      setUploading(false);
    }
  };

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

      {/* File Upload Section */}
      <div className="mb-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Upload Resources</h2>
        <div className="flex items-center gap-4">
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <Button variant="outline" disabled={uploading} asChild>
              <span>{uploading ? "Uploading..." : "Choose File"}</span>
            </Button>
          </label>
          <p className="text-sm text-gray-500">
            Supported formats: PDF, JPG, PNG
          </p>
        </div>
      </div>

      {/* Uploaded Files Section */}
      {uploadedFiles.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Uploaded Resources</h2>
          <div className="grid gap-4">
            {uploadedFiles.map((fileName: string) => (
              <Card key={fileName}>
                <CardContent className="p-4">
                  <a
                    href={`/uploads/${fileName}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {fileName}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Featured Resources */}
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
  );
}