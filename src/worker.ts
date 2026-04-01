interface Env { HANDOFFS: KVNamespace }
export default { async fetch(req: Request, env: Env) { const url = new URL(req.url); if (url.pathname === '/') return new Response('<h1>Baton AI</h1><p>Context Handoff</p>', { headers: { 'Content-Type': 'text/html' } }); return new Response('Not found', { status: 404 }); } };
