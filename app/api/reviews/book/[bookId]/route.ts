import { loadBooks } from "@/app/api/helpers";

// GET /api/books/[bookId]
export async function GET(
  _req: Request,
  context: { params: Promise<{ bookId: string }> }
) {
  const { bookId } = await context.params; // ✅ await params
  const books = loadBooks();
  const book = books.find((b: { id: string }) => b.id === bookId);

  if (book) {
    return Response.json(book);
  } else {
    return Response.json({ message: "Book not found" }, { status: 404 });
  }
}
