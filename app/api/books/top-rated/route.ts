import { loadBooks } from "../../helpers";

// GET /api/books/top-rated
export async function GET() {
  const books = loadBooks();
  const sorted = [...books].sort(
    (a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount
  );
  return Response.json(sorted.slice(0, 10));
}
