import { loadBooks, saveBooks } from "../helpers";

// GET /api/books
export async function GET() {
  const books = loadBooks();
  return Response.json(books);
}

// POST /api/books
export async function POST(req: Request) {
  const books = loadBooks();
  const body = await req.json();
  const { title, author, description, price, isbn, genre } = body;

  if (!title || !author || !price || !isbn) {
    return Response.json(
      { message: "Missing required fields: title, author, price, isbn." },
      { status: 400 }
    );
  }

  const newBook = {
    id: `${Date.now()}`,
    title,
    author,
    description: description || "",
    price,
    isbn,
    genre: genre || [],
    datePublished: new Date().toISOString().split("T")[0],
    pages: 0,
    language: "English",
    publisher: "Unknown",
    rating: 0,
    reviewCount: 0,
    inStock: true,
    featured: false,
    ...body,
  };

  books.push(newBook);
  saveBooks(books);

  return Response.json(newBook, { status: 201 });
}
