import { Link, useLocation } from "wouter";
import { SiWhatsapp } from "react-icons/si";
import Search from "@/components/search";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our work", href: "/work" },
  { name: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#EDEDED] bg-white">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <SiWhatsapp className="h-6 w-6 text-[#25D366]" />
            <span className="text-lg font-medium">Project Whatsapp</span>
          </Link>
          <div className="flex gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base transition-colors hover:text-black",
                  location === item.href ? "text-black" : "text-gray-600"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <Search />
      </div>
    </nav>
  );
}