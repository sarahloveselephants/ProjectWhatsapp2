import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
