import { Link, useLocation } from "wouter";
import { SiWhatsapp } from "react-icons/si";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our work", href: "/work" },
  { name: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#EDEDED] bg-white">
      <div className="container flex h-16 items-center justify-between">
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
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input 
            type="text"
            placeholder="Search..."
            className="h-9 rounded-md pl-9 pr-4 text-sm bg-gray-50 border-none focus:ring-1 focus:ring-gray-200"
          />
        </div>
      </div>
    </nav>
  );
}