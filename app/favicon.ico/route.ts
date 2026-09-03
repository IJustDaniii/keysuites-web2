export function GET(request: Request) {
  return Response.redirect(new URL('/favicon-light.png?v=2', request.url));
}
