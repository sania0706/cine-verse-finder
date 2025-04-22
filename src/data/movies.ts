
export type Movie = {
  id: number;
  title: string;
  genre: string;
  description: string;
  rating: number;
  poster: string;
};

export const GENRES = [
  "All",
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Horror",
  "Romance",
  "Sci-Fi",
  "Thriller",
];

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a CEO.",
    rating: 4.8,
    poster: "https://m.media-amazon.com/images/I/51oD8nEJlbL._AC_.jpg",
  },
  {
    id: 2,
    title: "La La Land",
    genre: "Romance",
    description: "A jazz pianist falls for an aspiring actress in Los Angeles.",
    rating: 4.4,
    poster: "https://m.media-amazon.com/images/I/81V+KQ1Cv5L._AC_SY679_.jpg",
  },
  {
    id: 3,
    title: "The Godfather",
    genre: "Crime",
    description: "The patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    rating: 4.9,
    poster: "https://m.media-amazon.com/images/I/61tOo5pJpTL._AC_SY679_.jpg",
  },
  {
    id: 4,
    title: "Toy Story",
    genre: "Animation",
    description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy.",
    rating: 4.3,
    poster: "https://m.media-amazon.com/images/I/81wT6II8dlL._AC_SY679_.jpg",
  },
  {
    id: 5,
    title: "The Dark Knight",
    genre: "Action",
    description: "Batman faces the Joker, a criminal mastermind who seeks to undermine his influence and throw Gotham into chaos.",
    rating: 4.7,
    poster: "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SY679_.jpg",
  },
  // Add more movie objects as needed...
];
