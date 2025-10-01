import { loadBooks, loadReviews, saveReviews } from "../helpers";

// POST /api/reviews
export async function POST(req: Request) {
  const books = loadBooks();
  const reviews = loadReviews();
  const body = await req.json();

  const { bookId, author, rating, title, comment } = body;

  if (!bookId || !author || !rating || !comment) {
    return Response.json(
      { message: "Missing required fields: bookId, author, rating, comment." },
      { status: 400 }
    );
  }

  const bookExists = books.some((b: { id: any }) => b.id === bookId);
  if (!bookExists) {
    return Response.json(
      { message: `Book with ID ${bookId} not found.` },
      { status: 404 }
    );
  }

  const newReview = {
    id: `review-${Date.now()}`,
    bookId,
    author,
    rating: Number(rating),
    title: title || "",
    comment,
    timestamp: new Date().toISOString(),
    verified: false,
  };

  reviews.push(newReview);
  saveReviews(reviews);

  return Response.json(newReview, { status: 201 });
}
