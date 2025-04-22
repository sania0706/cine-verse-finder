
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
  "Bollywood",
];

export const movies: Movie[] = [
  // Action
  {
    id: 1,
    title: "The Dark Knight",
    genre: "Action",
    description: "Batman faces the Joker, a criminal mastermind who seeks to undermine his influence and throw Gotham into chaos.",
    rating: 4.7,
    poster: "https://m.media-amazon.com/images/I/91KkWf50SoL._AC_SY679_.jpg",
  },
  // Adventure
  {
    id: 2,
    title: "Raiders of the Lost Ark",
    genre: "Adventure",
    description: "Indiana Jones races to find the lost Ark of the Covenant before the Nazis can obtain its awesome powers.",
    rating: 4.6,
    poster: "https://m.media-amazon.com/images/I/81nHkxE1O2L._AC_SY679_.jpg",
  },
  // Animation
  {
    id: 3,
    title: "Toy Story",
    genre: "Animation",
    description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy.",
    rating: 4.3,
    poster: "https://m.media-amazon.com/images/I/81wT6II8dlL._AC_SY679_.jpg",
  },
  // Comedy
  {
    id: 4,
    title: "Superbad",
    genre: "Comedy",
    description: "Two high school friends try to make the most of their last days before graduation.",
    rating: 4.1,
    poster: "https://m.media-amazon.com/images/I/71KASS9pwXL._AC_SY679_.jpg",
  },
  // Crime
  {
    id: 5,
    title: "The Godfather",
    genre: "Crime",
    description: "The patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    rating: 4.9,
    poster: "https://m.media-amazon.com/images/I/61tOo5pJpTL._AC_SY679_.jpg",
  },
  // Drama
  {
    id: 6,
    title: "Forrest Gump",
    genre: "Drama",
    description: "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of Forrest Gump.",
    rating: 4.8,
    poster: "https://m.media-amazon.com/images/I/81xTx-LlC9L._AC_SY679_.jpg",
  },
  // Fantasy
  {
    id: 7,
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    rating: 4.5,
    poster: "https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_SY679_.jpg",
  },
  // Horror
  {
    id: 8,
    title: "Get Out",
    genre: "Horror",
    description: "A young African-American man visits his white girlfriend's parents for the weekend, but a series of disturbing discoveries leads him to a truth he never could have imagined.",
    rating: 4.4,
    poster: "https://m.media-amazon.com/images/I/81MXk8SatnL._AC_SY679_.jpg",
  },
  // Romance
  {
    id: 9,
    title: "La La Land",
    genre: "Romance",
    description: "A jazz pianist falls for an aspiring actress in Los Angeles.",
    rating: 4.4,
    poster: "https://m.media-amazon.com/images/I/81V+KQ1Cv5L._AC_SY679_.jpg",
  },
  // Sci-Fi
  {
    id: 10,
    title: "Inception",
    genre: "Sci-Fi",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the task of planting an idea into the mind of a CEO.",
    rating: 4.8,
    poster: "https://m.media-amazon.com/images/I/51oD8nEJlbL._AC_.jpg",
  },
  // Thriller
  {
    id: 11,
    title: "Se7en",
    genre: "Thriller",
    description: "Two detectives track a serial killer who uses the seven deadly sins as his motives.",
    rating: 4.6,
    poster: "https://m.media-amazon.com/images/I/71UKrrZrfJL._AC_SY679_.jpg",
  },
  // Add additional movies to ensure at least one per genre and more variety
  {
    id: 12,
    title: "Finding Nemo",
    genre: "Animation",
    description: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    rating: 4.2,
    poster: "https://m.media-amazon.com/images/I/81KdIzBkmGL._AC_SY741_.jpg",
  },
  {
    id: 13,
    title: "21 Jump Street",
    genre: "Comedy",
    description: "A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.",
    rating: 4.0,
    poster: "https://m.media-amazon.com/images/I/71SRtvHYcKL._AC_SY679_.jpg",
  },
  {
    id: 14,
    title: "Mad Max: Fury Road",
    genre: "Action",
    description: "In a post-apocalyptic wasteland, Max helps a rebellious woman and a group of female prisoners.",
    rating: 4.5,
    poster: "https://m.media-amazon.com/images/I/81-6MKSd9dL._AC_SY679_.jpg",
  },
  {
    id: 15,
    title: "Interstellar",
    genre: "Sci-Fi",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    rating: 4.7,
    poster: "https://m.media-amazon.com/images/I/81H2MBhYKGL._AC_SY679_.jpg",
  },
  {
    id: 16,
    title: "Joker",
    genre: "Drama",
    description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.",
    rating: 4.5,
    poster: "https://m.media-amazon.com/images/I/81R7YT-DwRL._AC_SY679_.jpg",
  },
  {
    id: 17,
    title: "The Hangover",
    genre: "Comedy",
    description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night.",
    rating: 4.0,
    poster: "https://m.media-amazon.com/images/I/71WV8yvwplL._AC_SY679_.jpg",
  },
  {
    id: 18,
    title: "The Shawshank Redemption",
    genre: "Drama",
    description: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
    rating: 5.0,
    poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
  },
  {
    id: 19,
    title: "The Prestige",
    genre: "Thriller",
    description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have.",
    rating: 4.3,
    poster: "https://m.media-amazon.com/images/I/71IcoD4S3ML._AC_SY679_.jpg",
  },
  {
    id: 20,
    title: "Spirited Away",
    genre: "Fantasy",
    description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.",
    rating: 4.6,
    poster: "https://m.media-amazon.com/images/I/8105-jSSEJL._AC_SY679_.jpg",
  },
  {
    id: 21,
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    genre: "Adventure",
    description: "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love.",
    rating: 4.4,
    poster: "https://m.media-amazon.com/images/I/81F5AhG4uoL._AC_SY679_.jpg",
  },
  {
    id: 22,
    title: "Scream",
    genre: "Horror",
    description: "A year after the murder of her mother, a teenage girl is terrorized by a new killer.",
    rating: 4.0,
    poster: "https://m.media-amazon.com/images/I/71f8o4xCtbL._AC_SY679_.jpg",
  },
  {
    id: 23,
    title: "The Notebook",
    genre: "Romance",
    description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom.",
    rating: 4.2,
    poster: "https://m.media-amazon.com/images/I/61F5VZovnnL._AC_SY679_.jpg",
  },
  // Bollywood section - Indian movies
  {
    id: 24,
    title: "3 Idiots",
    genre: "Bollywood",
    description: "Three engineering students learn life lessons while dealing with the pressures of college and parental expectations.",
    rating: 4.9,
    poster: "https://m.media-amazon.com/images/I/51k1QOVz15L._AC_.jpg",
  },
  {
    id: 25,
    title: "Dangal",
    genre: "Bollywood",
    description: "Based on the true story of a former wrestler who trains his daughters to become world-class wrestlers.",
    rating: 4.8,
    poster: "https://m.media-amazon.com/images/I/91lNU6i+5YL._AC_SY679_.jpg",
  },
  {
    id: 26,
    title: "Shershaah",
    genre: "Bollywood",
    description: "The inspiring story of Captain Vikram Batra, a brave Indian soldier during the Kargil War.",
    rating: 4.6,
    poster: "https://m.media-amazon.com/images/I/81bXfPuDhdL._AC_SY679_.jpg",
  },
  {
    id: 27,
    title: "Zindagi Na Milegi Dobara",
    genre: "Bollywood",
    description: "Three friends set off on a bachelor trip that turns out to be a journey of self-discovery.",
    rating: 4.7,
    poster: "https://m.media-amazon.com/images/I/81FRAbycPwL._AC_SY679_.jpg",
  },
  {
    id: 28,
    title: "Gully Boy",
    genre: "Bollywood",
    description: "A coming-of-age story about a street rapper from Mumbai aspiring to fame.",
    rating: 4.5,
    poster: "https://m.media-amazon.com/images/I/71PKRo1PEgL._AC_SY679_.jpg",
  },
  {
    id: 29,
    title: "Queen",
    genre: "Bollywood",
    description: "A young woman embarks on a solo honeymoon trip after her marriage falls apart.",
    rating: 4.4,
    poster: "https://m.media-amazon.com/images/I/51cZQaVSPAL._AC_.jpg",
  },
  {
    id: 30,
    title: "Lagaan",
    genre: "Bollywood",
    description: "Indian villagers defy British colonialists through an epic cricket match.",
    rating: 4.7,
    poster: "https://m.media-amazon.com/images/I/81+pWBQHqJL._AC_SY679_.jpg",
  },
  {
    id: 31,
    title: "Kabhi Khushi Kabhie Gham",
    genre: "Bollywood",
    description: "Family drama unfolds with love, values, and relationships at its center.",
    rating: 4.3,
    poster: "https://m.media-amazon.com/images/I/71oqpX6UR-L._AC_SY679_.jpg",
  },
];
