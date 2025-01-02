import { createSlice } from '@reduxjs/toolkit';

// Initial state for the books
const initialState = {
  books:[
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel about the American dream.",
      rating: 4.5,
      category: "Fiction",
      publishYear: 1925
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about a totalitarian regime.",
      rating: 4.7,
      category: "Fiction",
      publishYear: 1949
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description: "A romantic novel dealing with issues of marriage and society.",
      rating: 4.6,
      category: "Fiction",
      publishYear: 1813
    },
    {
      id: 4,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel about racial inequality and moral growth.",
      rating: 4.8,
      category: "Fiction",
      publishYear: 1960
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description: "A story of teenage rebellion and angst.",
      rating: 4.3,
      category: "Fiction",
      publishYear: 1951
    },
    {
      id: 6,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      description: "An epic fantasy about the battle to destroy a powerful ring.",
      rating: 4.9,
      category: "Fiction",
      publishYear: 1954
    },
    {
      id: 7,
      title: "The Great Expectations",
      author: "Charles Dickens",
      description: "A coming-of-age story set in Victorian England.",
      rating: 4.4,
      category: "Fiction",
      publishYear: 1861
    },
    {
      id: 8,
      title: "Moby-Dick",
      author: "Herman Melville",
      description: "A tale of obsession and revenge on the high seas.",
      rating: 4.2,
      category: "Fiction",
      publishYear: 1851
    },
    {
      id: 9,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: "A fantasy adventure about a hobbit's journey to reclaim treasure.",
      rating: 4.7,
      category: "Fiction",
      publishYear: 1937
    },
    {
      id: 10,
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      description: "A novel about love, infidelity, and societal pressures.",
      rating: 4.6,
      category: "Fiction",
      publishYear: 1878
    },
    {
      id: 11,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      description: "A brief history of humankind.",
      rating: 4.7,
      category: "Non-Fiction",
      publishYear: 2011
    },
    {
      id: 12,
      title: "Educated",
      author: "Tara Westover",
      description: "A memoir of growing up in a survivalist family and seeking education.",
      rating: 4.6,
      category: "Non-Fiction",
      publishYear: 2018
    },
    {
      id: 13,
      title: "Becoming",
      author: "Michelle Obama",
      description: "The memoir of the former First Lady of the United States.",
      rating: 4.8,
      category: "Non-Fiction",
      publishYear: 2018
    },
    {
      id: 14,
      title: "The Immortal Life of Henrietta Lacks",
      author: "Rebecca Skloot",
      description: "The story of a woman's cells that revolutionized medicine.",
      rating: 4.7,
      category: "Non-Fiction",
      publishYear: 2010
    },
    {
      id: 15,
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      description: "The poignant diary of a Jewish girl hiding during World War II.",
      rating: 4.9,
      category: "Non-Fiction",
      publishYear: 1947
    },
    {
      id: 16,
      title: "The Wright Brothers",
      author: "David McCullough",
      description: "The story of the pioneers of flight.",
      rating: 4.5,
      category: "Non-Fiction",
      publishYear: 2015
    },
    {
      id: 17,
      title: "The Glass Castle",
      author: "Jeannette Walls",
      description: "A memoir about growing up in extreme poverty.",
      rating: 4.4,
      category: "Non-Fiction",
      publishYear: 2005
    },
    {
      id: 18,
      title: "Quiet",
      author: "Susan Cain",
      description: "A book about the power of introverts in a world that can't stop talking.",
      rating: 4.6,
      category: "Non-Fiction",
      publishYear: 2012
    },
    {
      id: 19,
      title: "Outliers",
      author: "Malcolm Gladwell",
      description: "A study of what makes high-achievers different.",
      rating: 4.5,
      category: "Non-Fiction",
      publishYear: 2008
    },
    {
      id: 20,
      title: "Freakonomics",
      author: "Steven D. Levitt and Stephen J. Dubner",
      description: "A look at the hidden side of everything using economics.",
      rating: 4.4,
      category: "Non-Fiction",
      publishYear: 2005
    },
    {
      id: 21,
      title: "Dune",
      author: "Frank Herbert",
      description: "A science fiction novel set on the desert planet of Arrakis.",
      rating: 4.8,
      category: "Sci-Fi",
      publishYear: 1965
    },
    {
      id: 22,
      title: "Neuromancer",
      author: "William Gibson",
      description: "A cyberpunk novel about a washed-up computer hacker.",
      rating: 4.5,
      category: "Sci-Fi",
      publishYear: 1984
    },
    {
      id: 23,
      title: "The Left Hand of Darkness",
      author: "Ursula K. Le Guin",
      description: "A sci-fi novel about a planet where people can change gender.",
      rating: 4.7,
      category: "Sci-Fi",
      publishYear: 1969
    },
    {
      id: 24,
      title: "Snow Crash",
      author: "Neal Stephenson",
      description: "A fast-paced cyberpunk thriller.",
      rating: 4.4,
      category: "Sci-Fi",
      publishYear: 1992
    },
    {
      id: 25,
      title: "The Three-Body Problem",
      author: "Liu Cixin",
      description: "A hard science fiction novel exploring first contact with aliens.",
      rating: 4.6,
      category: "Sci-Fi",
      publishYear: 2008
    },
    {
      id: 26,
      title: "Foundation",
      author: "Isaac Asimov",
      description: "A series about the fall and rise of civilizations in a galactic empire.",
      rating: 4.7,
      category: "Sci-Fi",
      publishYear: 1951
    },
    {
      id: 27,
      title: "Hyperion",
      author: "Dan Simmons",
      description: "A sci-fi novel involving a pilgrimage on a distant planet.",
      rating: 4.6,
      category: "Sci-Fi",
      publishYear: 1989
    },
    {
      id: 28,
      title: "The Man in the High Castle",
      author: "Philip K. Dick",
      description: "A dystopian novel set in an alternate history where the Axis powers won WWII.",
      rating: 4.4,
      category: "Sci-Fi",
      publishYear: 1962
    },
    {
      id: 29,
      title: "Brave New World",
      author: "Aldous Huxley",
      description: "A dystopian vision of a society dominated by technology and conformity.",
      rating: 4.8,
      category: "Sci-Fi",
      publishYear: 1932
    },
    {
      id: 30,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      description: "A comedic space adventure about a man traveling through the galaxy.",
      rating: 4.5,
      category: "Sci-Fi",
      publishYear: 1979
    }
  ]
  
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    }
  }
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
