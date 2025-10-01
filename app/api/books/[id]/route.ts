import { loadBooks } from "../../helpers";

// GET /api/books/:id
export async function GET(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const books = loadBooks();
  const book = books.find((b: { id: string }) => b.id === id);

  if (book) {
    return Response.json(book);
  } else {
    return Response.json({ message: "Book not found" }, { status: 404 });
  }
}
