import { loadBooks } from "../../helpers";

export async function GET() {
  const books = loadBooks();
  return Response.json(books.filter((b: { featured: any }) => b.featured));
}
