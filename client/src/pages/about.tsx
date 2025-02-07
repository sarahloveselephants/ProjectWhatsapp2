import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Innovation",
    description: "Pushing boundaries in WhatsApp communication",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff"
  },
  {
    name: "Collaboration",
    description: "Working together to create better solutions",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    name: "Vision",
    description: "Building the future of messaging",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93"
  }
];

export default function About() {
  return (
    <div className="container py-10">
      <div className="space-y-2 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          About Us
        </h1>
        <p className="text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">
          We're on a mission to revolutionize how people and businesses communicate through WhatsApp
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {team.map((member) => (
          <Card key={member.name} className="overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
              <p className="text-muted-foreground">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
