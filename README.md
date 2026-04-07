# baton-ai

Persistent context storage for repository-native AI agents. Part of the Cocapn Fleet.

You know the frustration when an AI agent loses its context after a session ends? Baton provides a simple storage layer so your agents can remember their work between sessions, directly within your own infrastructure.

**Live Instance:** https://baton-ai.casey-digennaro.workers.dev

---

## What it does

Baton provides a key-value storage backend for agent context, accessible via standard Fleet endpoints. When an agent needs to save its state or retrieve previous work, it calls your Baton instance. All data stays within your Cloudflare account.

---

## Key features
*   **Persistent Storage:** Context is stored in your Cloudflare KV namespace and survives agent restarts.
*   **Vendor Agnostic:** Configure your preferred LLM provider via environment variables. Swap providers without data migration.
*   **Zero Dependencies:** A single Cloudflare Worker file with no external npm packages.
*   **Fork-First:** You deploy and control your own instance. No platform account required.
*   **Fleet Compatible:** Implements the standard Cocapn Fleet protocol.

---

## Limitations
*   This is a context storage utility, not a full agent runtime. You need a separate agent (like other Fleet tools) to perform work and call Baton's API.

---

## Quick start

1.  Fork this repository.
2.  Deploy to Cloudflare Workers:
    ```bash
    npx wrangler deploy
    ```
3.  Add your LLM API keys as encrypted environment variables (secrets) in the Cloudflare dashboard. Only add the ones you need:
    *   `DEEPSEEK_API_KEY`
    *   `MOONSHOT_API_KEY`
    *   `DEEPINFRA_API_KEY`
    *   `SILICONFLOW_API_KEY`

Visit the `/setup` endpoint on your deployed instance for configuration details.

---

## Test the public instance
You can query the public reference instance. Do not send sensitive data.
```bash
curl https://baton-ai.casey-digennaro.workers.dev/health
```

---

## Contributing
This project follows the Fleet fork-first workflow. Fork the repository, test changes on your own instance, then open a pull request.

**License:** MIT  
**Attribution:** Superinstance & Lucineer (DiGennaro et al.)

<div align="center">
  <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> · 
  <a href="https://cocapn.ai">Cocapn</a>
</div>