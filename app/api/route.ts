export async function GET() {
  return Response.json({
    message: "Welcome to Amana Bookstore API!",
    version: "1.0.0",
    status: "Server is running successfully",
  });
}
