
import { useState } from "react";
import { useLocation } from "wouter";
import { Search as SearchIcon } from "lucide-react";

export default function Search() {
  const [, setLocation] = useLocation();
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = (e.currentTarget.elements.namedItem('search') as HTMLInputElement).value.toLowerCase();
    
    if (searchTerm.includes('work')) {
      setLocation('/work');
    } else if (searchTerm.includes('resource')) {
      setLocation('/resources');
    } else if (searchTerm.includes('home')) {
      setLocation('/');
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
