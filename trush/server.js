import express from "express";

const app = express();
const PORT = process.env.PORT || 4001;

const books = [
  { id: 1, name: "Book One", price: 500 },
  { id: 2, name: "Book Two", price: 450 },
  { id: 3, name: "Book Three", price: 600 },
  { id: 4, name: "Book Four", price: 550 },
  { id: 5, name: "Book Five", price: 700 },
  { id: 6, name: "Book Six", price: 500 },
  { id: 7, name: "Book Seven", price: 520 },
  { id: 8, name: "Book Eight", price: 650 },
  { id: 9, name: "Book Nine", price: 400 },
  { id: 10, name: "Book Ten", price: 750 },
];

const logger = (req, res, next) => {
  console.log(
    `URL: ${req.url}, Method: ${req.method}, Date: ${new Date().toISOString()}`
  );
  next();
};

app.get("/", logger, (req, res) => {
  res.json("Homepage");
});
app.get("/books", (req, res) => {
  if (req.query.show === "all") return res.json(books);
  if (req.query.price == "500") {
    const fiveHundred = books.filter((book) => book.price === 500);
    return res.json(fiveHundred);
  }
  const foundBooks = books.filter((book) => book.price <= 500);
  console.log(req.query);
  return res.json(foundBooks);
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
