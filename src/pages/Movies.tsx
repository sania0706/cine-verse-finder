
import { useState } from "react";
import { movies, GENRES, Movie } from "@/data/movies";
import { Star, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [search, setSearch] = useState("");

  const genreMovies = selectedGenre === "All"
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  const filtered = genreMovies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9b87f5] via-[#6E59A5] to-[#1A1F2C] px-0 sm:px-8 pb-8">
      <div className="py-6 flex flex-col sm:flex-row items-start gap-6 max-w-7xl mx-auto">
        {/* Sidebar for Genres */}
        <aside className="w-full sm:w-52 bg-white/80 rounded-xl shadow-md p-5 mb-3 sm:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="text-[#7E69AB]" size={18} />
            <span className="font-semibold text-gray-800 text-base">Filter by Genre</span>
          </div>
          <div className="space-y-2">
            {GENRES.map(genre => (
              <button
                key={genre}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${selectedGenre === genre
                  ? "bg-[#9b87f5] text-white"
                  : "hover:bg-[#ede6fc] text-[#221F26]"} `}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </aside>

        {/* Movies List */}
        <main className="flex-1 w-full">
          {/* Search bar */}
          <div className="flex items-center gap-2 bg-white/90 rounded-lg px-3 py-2 mb-4 max-w-sm shadow">
            <Search className="text-[#9b87f5]" />
            <Input
              type="text"
              placeholder="Search movies by title..."
              className="border-none bg-transparent text-base placeholder:text-gray-400 focus-visible:ring-0"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          {/* Movies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {filtered.length === 0 && (
              <div className="col-span-full text-center py-10 text-lg text-gray-600">
                No movies found.
              </div>
            )}
            {filtered.map(movie => (
              <Card key={movie.id} className="flex flex-col items-start bg-white/95 shadow-lg p-0 rounded-xl hover:-translate-y-0.5 transition-transform">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="rounded-t-xl w-full object-cover h-56"
                />
                <div className="p-4 flex-1 w-full">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-lg text-[#221F26]">{movie.title}</h3>
                    <div className="flex items-center gap-0.5">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-gray-700 font-medium">{movie.rating}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm line-clamp-3">{movie.description}</p>
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-[#e4defe] rounded text-xs text-[#7E69AB] font-semibold">{movie.genre}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MoviesPage;
