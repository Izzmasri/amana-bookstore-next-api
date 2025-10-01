import { loadBooks } from "../../helpers";

// GET /api/books/published?start=YYYY-MM-DD&end=YYYY-MM-DD
export async function GET(req: Request) {
  const books = loadBooks();
  const { searchParams } = new URL(req.url);
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  if (!start || !end) {
    return Response.json(
      { message: "Please provide both 'start' and 'end' date parameters." },
      { status: 400 }
    );
  }

  try {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const filtered = books.filter(
      (b: { datePublished: string | number | Date }) => {
        const publishedDate = new Date(b.datePublished);
        return publishedDate >= startDate && publishedDate <= endDate;
      }
    );

    return Response.json(filtered);
  } catch {
    return Response.json({ message: "Invalid date format." }, { status: 400 });
  }
}
