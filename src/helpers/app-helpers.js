const randomInt = (min, max) => Math.floor(
  Math.random() * (min ** max),
);

const booksArray = [
  {
    id: randomInt(4, 8),
    title: 'A Game of Thrones: A Song of Ice and Fire: Book One',
    category: 'Fantasy',
    author: 'George Martin',
    price: 21.99,
    detail: 'From a master of contemporary fantasy comes the first novel of a landmark series unlike any you’ve ever read before. With A Game of Thrones, George R. R. Martin has launched a genuine masterpiece, bringing together the best the genre has to offer. Mystery, intrigue, romance, and adventure fill the pages of this magnificent saga, the first volume in an epic series sure to delight fantasy fans everywhere.',
  },
  {
    id: randomInt(4, 8),
    title: 'Dune Messiah',
    category: 'Science fiction',
    author: 'Frank Herbert',
    price: 12.99,
    detail: 'Dune Messiah continues the story of Paul Atreides, better known—and feared—as the man christened Muad’Dib. As Emperor of the known universe, he possesses more power than a single man was ever meant to wield. Worshipped as a religious icon by the fanatical Fremen, Paul faces the enmity of the political houses he displaced when he assumed the throne—and a conspiracy conducted within his own sphere of influence.',
  },
  {
    id: randomInt(4, 8),
    title: 'The Notebook',
    category: 'Romance',
    author: 'Nicholas Sparks',
    price: 23.99,
    detail: 'Every so often a love story so captures our hearts that it becomes more than a story-it becomes an experience to remember forever. The Notebook is such a book. It is a celebration of how passion can be ageless and timeless, a tale that moves us to laughter and tears and makes us believe in true love all over again... ',
  },
];

const categories = [
  'Fantasy',
  'Horror',
  'Science fiction',
  'Mystery',
  'Literary fiction',
  'Romance',
  'Thriller',
  'Adventure',
  'Young adult',
  "Children's literature",
  'Biography',
  'History',
  'Comics',
  'Dystopian',
  'Western fiction',
  'LGBTQ',
  'Short story',
  'Contemporary',
  'Cookbook',
  'Creative nonfiction',
  'Erotica',
  'Historical fiction',
  'Classics',
  'Satire',
];


export { randomInt, categories, booksArray };
