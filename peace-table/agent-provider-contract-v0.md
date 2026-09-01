# ADR-001: Provider-neutral Agent Contract v0

**Status:** Proposed
**Date:** 2026-08-15
**Decider:** Pending explicit operator decision

This ADR was recovered from the unmerged PR #39 onto current `main`. The
provider-neutral boundary remains useful, but transplanting the document does
not retroactively accept it or restore PR #39's stale History, schema, Writer,
or UI implementation. Those changes require current-main implementations and
independent review.

## Context

Garnet currently coordinates Claude and ChatGPT/Codex, but its constitutional and product model must not turn that current pair into a permanent architectural limit. Future agents need to participate without creating provider-specific versions of Sessions, roles, approvals, History, budgets, statuses, or audit rules.

This decision is an extensibility boundary only. It does not authorize connecting or purchasing another provider, creating credentials, widening permissions, deploying infrastructure, or changing workflows.

## Decision

Garnet separates provider configuration from agent identity:

```ts
interface Provider {
  id: string
  name: string
  adapterKind: string
  connectionStatus: 'configured' | 'not_configured' | 'disabled'
  costPolicy: 'existing_access_only' | 'operator_approval_required'
}

interface Agent {
  id: string
  name: string
  kind: 'llm' | 'human'
  providerId?: string
  eligibleRoles: string[]
  capabilities: string[]
  permissionProfile: string
  availability: 'available' | 'unavailable' | 'degraded' | 'unknown'
}
```

`Provider` says how an external system could be reached and which connection/cost boundary applies. `Agent` says who may participate, which roles it is eligible for, what it can do, and which permission profile constrains it. A human Agent omits `providerId`; an LLM Agent references a configured Provider.

The adapter boundary for a future provider is intentionally narrow:

```ts
interface AgentAdapter {
  dispatch(turn: NormalizedTurn, gateReceipt: ApprovalReceipt): DispatchReceipt
  observe(receipt: DispatchReceipt): NormalizedTurnResult
  capabilities(agentId: string): AgentCapabilities
  availability(agentId: string): AgentAvailability
}
```

Provider-native payloads and states stop at the adapter. The Garnet core consumes normalized Agent ids, roles, invocation counts, approval receipts, results, and evidence links.

### Stable Garnet semantics

Every provider and agent retains the same:

- Session Contract and Definition of Done;
- role assignment and independent review requirement;
- invocation-budget accounting;
- sensitive-action and operator approval gates;
- repository-backed History and evidence provenance;
- handoff, continuity, and audit rules;
- operator-facing statuses:
  - `working` → **🟠 Working**;
  - `waiting_for_adi` → **🔴 Waiting for Adi**;
  - `completed` → **🟢 Completed**.

Provider-native states may be preserved as diagnostic metadata, but only Garnet assigns these operator statuses. Unknown or ambiguous provider state fails closed; it is not normalized to completion.

### Rotation policy

Role scheduling operates over eligible Agents, not provider names. It prefers rotation among suitable Agents so independent perspectives and capability parity are exercised. The scheduler must also respect:

- role eligibility and task-specific capability fit;
- Session Contract assignments and remaining budget;
- permission and sensitive-action gates;
- agent availability;
- continuity and the cost of losing active context;
- Reviewer independence from the result being reviewed.

When a simple rotation is skipped, the Session records the reason. A continuity exception affects one assignment and never creates a permanent provider-to-role mapping.

### Onboarding gate

A Provider or Agent record is descriptive data, not executable authority. Future onboarding requires a separate reviewed change that names:

1. the adapter and identity mapping;
2. capabilities and eligible roles;
3. permission profile and approval boundaries;
4. invocation/cost accounting;
5. availability and status normalization;
6. secret handling, if any;
7. loop/idempotency controls and audit evidence;
8. focused compatibility tests.

If onboarding requires credentials, paid access, permission widening, deployment, or workflow changes, the applicable `AGENTS.md` §5 operator gate must be satisfied separately. No such onboarding occurs in ADR-001.

## Options considered

### Option A: Hard-code Claude and Codex

| Dimension | Assessment |
|---|---|
| Complexity | Low initially |
| Extensibility | Poor |
| Audit consistency | Degrades per provider |
| Rotation | Fixed to two names |

**Pros:** Minimal short-term modeling.

**Cons:** Every new agent would require changes across Sessions, UI, orchestration, and safety policy; provider identity would become confused with role.

### Option B: Provider-neutral core with adapters — chosen

| Dimension | Assessment |
|---|---|
| Complexity | Moderate, bounded at the adapter |
| Extensibility | High |
| Audit consistency | One shared contract |
| Rotation | Role- and capability-based |

**Pros:** Stable Garnet semantics, first-class future agents, explicit permission/cost boundaries, provider-independent UI and History.

**Cons:** Requires validation and normalization rules; providers cannot expose arbitrary native behavior directly to the core.

### Option C: Lowest-common-denominator provider abstraction

| Dimension | Assessment |
|---|---|
| Complexity | Moderate |
| Extensibility | Superficial |
| Capability use | Poor |
| Safety | Ambiguous when provider features differ |

**Pros:** Uniform API shape.

**Cons:** Hides meaningful capability and permission differences, making suitability and safety decisions harder to audit.

## Trade-off analysis

The chosen design keeps shared rules strict while allowing adapters to expose different capabilities. Equivalent governance matters more than identical mechanics: a provider may use a GitHub integration, local tool, or future service, but the resulting turn must still be budgeted, attributable, independently reviewable, and evidence-backed.

## Consequences if accepted

- The repository-backed model would gain `providers`, richer Agent profiles, and canonical operator statuses.
- Current Claude and ChatGPT/Codex records become instances of the generic contract; no new provider is added.
- UI code resolves provider ids dynamically and shows role eligibility/capabilities without assuming two agents.
- Runtime trigger maps may remain explicit adapter configuration for the currently connected providers. Adding an id to History alone can never make it invokable.
- Future provider work must include a separate onboarding/security decision and compatibility tests.

## Action items

1. [x] Add the constitutional rotation and provider-parity principles already present in `AGENTS.md`.
2. [ ] Extend the current History schema/store and read-only UI with provider-neutral records and statuses.
3. [ ] Decide whether `Operator Decisions & Quotes` should become a canonical category with separate Event and OperatorQuote record kinds.
4. [ ] Implement a runtime adapter registry only when a future provider is explicitly approved for onboarding.
5. [ ] Add provider-specific secrets, paid access, or infrastructure only under separate operator authorization; none are part of v0.
