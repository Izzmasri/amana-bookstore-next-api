import fs from "fs";
import path from "path";

export const booksPath = path.join(process.cwd(), "app", "data", "books.json");
export const reviewsPath = path.join(
  process.cwd(),
  "app",
  "data",
  "reviews.json"
);

export function loadBooks() {
  return JSON.parse(fs.readFileSync(booksPath, "utf-8")).books;
}

export function saveBooks(books: any[]) {
  fs.writeFileSync(booksPath, JSON.stringify({ books }, null, 2));
}

export function loadReviews() {
  return JSON.parse(fs.readFileSync(reviewsPath, "utf-8")).reviews;
}

export function saveReviews(reviews: any[]) {
  fs.writeFileSync(reviewsPath, JSON.stringify({ reviews }, null, 2));
}
