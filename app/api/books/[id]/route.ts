import { loadBooks } from "../../helpers";

// GET /api/books/:id
interface Params {
  params: { id: string };
}

export async function GET(_: Request, { params }: Params) {
  const { id } = params;
  const books = loadBooks();
  const book = books.find((b: { id: string }) => b.id === id);

  if (book) {
    return Response.json(book);
  } else {
    return Response.json({ message: "Book not found" }, { status: 404 });
  }
}
