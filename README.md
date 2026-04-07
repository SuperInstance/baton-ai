# baton-ai 🏃‍♂️

Generational context handoff for repository-native AI agents. Part of the Cocapn Fleet.

A focused tool for persisting and passing an agent's understanding of your codebase across sessions, model swaps, or specialized agent handoffs.

**Live URL:** https://baton-ai.casey-digennaro.workers.dev

---

## Why it Exists
Agent tools often tie working context to a single session or vendor. Baton provides a simple, persistent store for an agent's accumulated context, allowing you to iterate on logic, switch LLM providers, or orchestrate workflows without starting from scratch.

---

## Quick Start
1. Fork this repository.
2. Deploy to Cloudflare Workers: `npx wrangler deploy`
3. Add your LLM API keys as secrets via the Cloudflare dashboard.

Visit your instance's `/setup` endpoint after deployment for guidance.

---

## How It Works
Baton provides a KV-backed storage layer for agent context, accessible via standard Fleet endpoints. Your instance stores context in your own Cloudflare KV namespace. API keys are stored as your Worker's secrets—we never see them.

**One Honest Limitation:** Persistent context is stored in Cloudflare KV, which has a 10MB per-key size limit. It's designed for structured context, not entire codebases.

---

## Core Features
- **Persistent Context:** KV-backed storage that survives agent restarts and updates.
- **Vendor Agnostic:** Swap between supported LLM providers (DeepSeek, Moonshot, DeepInfra, SiliconFlow) without losing context.
- **Zero Dependencies:** No npm packages. It's a single Cloudflare Worker.
- **Fork-First:** You own and operate your instance upon deployment.
- **Standard Fleet Endpoints:** `/health`, `/setup`, `/api/chat`, `/api/seed`

---

## BYOK Setup
Add your LLM API keys as environment variables (secrets) in your Cloudflare Worker:
- `DEEPSEEK_API_KEY`
- `MOONSHOT_API_KEY`
- `DEEPINFRA_API_KEY`
- `SILICONFLOW_API_KEY`

Visit your instance's `/setup` endpoint to verify configuration.

---

## Contributing
Follow the Fleet's fork-first workflow: fork, test changes on your own instance, then open a pull request.

---

**License:** MIT  
**Attribution:** Superinstance & Lucineer (DiGennaro et al.)

---

<div align="center">
  <a href="https://the-fleet.casey-digennaro.workers.dev">The Fleet</a> · 
  <a href="https://cocapn.ai">Cocapn</a>
</div>