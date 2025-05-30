export function GET() {
	const response = new Response(JSON.stringify({ message: 'Hello, world!' }), {
		headers: { 'Content-Type': 'application/json' }
	});
	return response;
}
