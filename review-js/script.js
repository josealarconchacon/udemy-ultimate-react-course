const data = [
  {
    id: 1,
    title: "The Great Adventure",
    publicationDate: "2000-05-15",
    author: "Jane Doe",
    genres: ["mystery", "thriller", "fiction", "adventure"],
    hasMovieAdaptation: false,
    pages: 500,
    translations: {
      spanish: "La gran aventura",
      german: "Das große Abenteuer",
      italian: "La grande avventura",
    },
    reviews: {
      goodreads: {
        rating: 4.0,
        ratingsCount: 250000,
        reviewsCount: 8000,
      },
      librarything: {
        rating: 3.95,
        ratingsCount: 1000,
        reviewsCount: 100,
      },
    },
  },
  {
    id: 2,
    title: "Future Unwritten",
    publicationDate: "2010-11-10",
    author: "John Smith",
    genres: ["science fiction", "adventure", "dystopian"],
    hasMovieAdaptation: true,
    pages: 350,
    translations: {
      french: "L'avenir non écrit",
      russian: "Будущее, не написанное",
    },
    reviews: {
      goodreads: {
        rating: 4.8,
        ratingsCount: 32000,
        reviewsCount: 500,
      },
      librarything: {
        rating: 4.75,
        ratingsCount: 5000,
        reviewsCount: 200,
      },
    },
  },
  {
    id: 3,
    title: "Journey Beyond the Stars",
    publicationDate: "2012-09-03",
    author: "Emily Roberts",
    genres: ["science fiction", "space", "adventure"],
    hasMovieAdaptation: false,
    pages: 400,
    translations: {
      japanese: "星を超えての旅",
    },
    reviews: {
      goodreads: {
        rating: 3.8,
        ratingsCount: 1500000,
        reviewsCount: 45000,
      },
    },
  },
  {
    id: 4,
    title: "The Hidden Forest",
    publicationDate: "2015-02-25",
    author: "Mark Allen",
    genres: ["fantasy", "nature", "mystery"],
    hasMovieAdaptation: false,
    pages: 420,
    translations: {
      portuguese: "A Floresta Escondida",
      arabic: "الغابة المخفية",
      hindi: "गुप्त जंगल",
    },
    reviews: {
      goodreads: {
        rating: 3.5,
        ratingsCount: 120000,
        reviewsCount: 2000,
      },
      librarything: {
        rating: 3.6,
        ratingsCount: 1500,
        reviewsCount: 300,
      },
    },
  },
  {
    id: 5,
    title: "The Last Kingdom",
    publicationDate: "2020-07-30",
    author: "Arthur West",
    genres: ["historical fiction", "war", "adventure"],
    hasMovieAdaptation: true,
    pages: 550,
    translations: {
      chinese: "最后的王国",
      korean: "마지막 왕국",
    },
    reviews: {
      goodreads: {
        rating: 4.2,
        ratingsCount: 500000,
        reviewsCount: 10000,
      },
      librarything: {
        rating: 4.1,
        ratingsCount: 15000,
        reviewsCount: 800,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// destructuring
const book = getBook(1);
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
// console.log(title, author, pages);

// destructuring with arrays
// const [primaryGenres, secondaryGenres] = genres;
// console.log(primaryGenres, secondaryGenres); // [ 'science fiction', 'adventure']

// rest operators
const [primaryGenres, secondaryGenres, ...othersGenres] = genres;
console.log(primaryGenres, secondaryGenres, othersGenres);
["science fiction", "adventure", ["dystopian"]];

// spread operators
const newGenres = ["Horror", ...genres];
console.log(newGenres); // [ 'Horror', 'mystery', 'thriller', 'fiction', 'adventure', ... ]

const updateBook = {
  ...book,
  // adding new properties
  moviePublicationDate: "2025-1-12",
  // overrating an existing property
  pages: 1000,
};
updateBook;

// arrow functions
const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// template literals
const bookSummary = `${title} is a book, with a number of ${pages}-pages published on ${getYear(
  publicationDate
)} by ${author}. The book has ${
  hasMovieAdaptation ? "" : "not"
} been set as a movie `;
bookSummary;

// ternary operators
const pagesRange =
  pages > 1000 ? "over a thousand pages" : "lest than thousand pages";
pagesRange;
console.log(` This book has ${pagesRange} pages`);
