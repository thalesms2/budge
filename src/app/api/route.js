export async function GET(request) {
    const product = 'Hello World api!'
    return Response.json({ product })
}