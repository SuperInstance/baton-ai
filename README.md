# baton-ai 🧠

Gives your AI agent a simple memory across sessions. It stores conversation context in your Cloudflare KV so work can carry over after a restart, redeploy, or the next day. There is no intermediary service.

**Live Instance:** https://baton-ai.casey-digennaro.workers.dev

---

## Why This Exists
Most LLM sessions reset to zero. You end up repeating the same background and instructions. This was built because existing solutions often add unnecessary complexity or depend on third-party services.

---

## Quick Start
1.  Fork this repository.
2.  Deploy directly to Cloudflare Workers from your fork:
    ```bash
    npx wrangler deploy
    ```
3.  Add your preferred LLM's API key as a Cloudflare Secret (e.g., `LLM_API_KEY`).

Visit your worker's `/setup` endpoint for a detailed guide.

---

## What Makes This Different
1.  **You Own Everything:** All memory is stored in your Cloudflare KV. No third-party service holds your data or sees your context.
2.  **Zero Dependencies:** A single Worker file. No `node_modules`, no external packages.
3.  **No LLM Lock-In:** Switch between supported providers (like DeepSeek, Moonshot, or OpenAI-compatible endpoints) by changing one environment variable.

---

## Features
- Persist agent memory across sessions and deployments.
- Standard fleet endpoints for `/health`, `/chat`, `/context`, and seeding memory.
- Your API keys remain as secrets within your Cloudflare account.
- Fork-first deployment: you control your own instance.
- MIT licensed, open source.
- Runs on Cloudflare's global edge network.

---

## Architecture
A single, stateless Cloudflare Worker. All agent state is written to and read from your provisioned KV namespace. Requests route directly from the edge to your configured LLM provider.

---

## Limitations
Each stored memory entry is capped at 10KB, imposed by the Cloudflare KV platform. This is suitable for retaining context and instructions, but not for storing large documents.

---

## Try The Demo
You can test the public instance first:
```bash
curl https://baton-ai.casey-digennaro.workers.dev/health
```
> **Note:** The public demo resets daily. Do not send sensitive data. For real usage, deploy your own instance.

---

## Contributing
Fork the repo, test changes on your deployed instance, then open a pull request. This project follows the Cocapn Fleet fork-first workflow.

**License:** MIT

<div style="text-align:center;padding:16px;color:#64748b;font-size:.8rem"><a href="https://the-fleet.casey-digennaro.workers.dev" style="color:#64748b">The Fleet</a> &middot; <a href="https://cocapn.ai" style="color:#64748b">Cocapn</a></div>