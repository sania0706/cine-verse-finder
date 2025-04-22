
import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9b87f5] via-[#6E59A5] to-[#1A1F2C] animate-fade-in">
      <div className="bg-white/90 shadow-lg rounded-xl px-10 py-14 flex flex-col items-center max-w-xl">
        <div className="flex items-center gap-3 mb-4">
          <Film className="text-[#9b87f5] w-12 h-12" />
          <h1 className="text-4xl font-bold text-[#221F26] tracking-tight">
            CineVerse Finder
          </h1>
        </div>
        <p className="text-neutral-600 text-lg mb-8 text-center">
          Discover, filter, and rate movies based on audience reviews.<br />
          Find the perfect movie for your next watch!
        </p>
        <Button
          size="lg"
          className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white text-base font-semibold shadow-md hover:scale-105 transition-transform animate-scale-in"
          onClick={() => {
            // Placeholder for navigation to movies list when feature is ready
            alert("Movies page coming soon!");
          }}
        >
          Browse Movies
        </Button>
      </div>
    </div>
  );
};

export default Index;
