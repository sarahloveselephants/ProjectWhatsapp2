
import { useState } from "react";
import { useLocation } from "wouter";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  const [, setLocation] = useLocation();
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = (e.currentTarget.elements.namedItem('search') as HTMLInputElement).value.toLowerCase();
    
    // Search mappings
    const searchMap: Record<string, { path: string; hash?: string }> = {
      'work': { path: '/work' },
      'resource': { path: '/resources' },
      'home': { path: '/' },
      'slides': { path: '/resources' },
      'guidebook': { path: '/resources' },
      'apple': { path: '/resources' },
      'android': { path: '/resources' },
      'mission': { path: '/', hash: '#mission' },
      'vision': { path: '/', hash: '#vision' },
      'signup': { path: '/', hash: '#get-involved' },
      'sign up': { path: '/', hash: '#get-involved' },
      'collaborate': { path: '/', hash: '#get-involved' },
      'contact': { path: '/', hash: '#get-involved' },
      'journey': { path: '/work', hash: '#journey' },
      'workshop': { path: '/work', hash: '#workshop' },
      'workshop details': { path: '/work', hash: '#workshop' }
    };

    // Find matching search term
    const match = Object.entries(searchMap).find(([key]) => 
      searchTerm.includes(key)
    );

    if (match) {
      const [, { path, hash }] = match;
      setLocation(path);
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <input 
        type="text"
        name="search"
        placeholder="Search..."
        className="h-9 rounded-md pl-9 pr-4 text-sm bg-gray-50 border-none focus:ring-1 focus:ring-gray-200"
      />
    </form>
  );
}
