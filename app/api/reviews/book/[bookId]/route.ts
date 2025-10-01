import { loadReviews } from "../../../helpers";

// GET /api/reviews/book/:bookId
interface Params {
  params: { bookId: string };
}

export async function GET(_: Request, { params }: Params) {
  const reviews = loadReviews();
  const bookReviews = reviews.filter(
    (r: { bookId: string }) => r.bookId === params.bookId
  );

  if (bookReviews.length > 0) {
    return Response.json(bookReviews);
  } else {
    return Response.json(
      { message: "No reviews found for this book" },
      { status: 404 }
    );
  }
}
