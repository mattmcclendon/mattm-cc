---
title: "Designing Collaborative Workflows for Versioned Enterprise Data"
shortTitle: "Versioned Data Workflows"
description: "Translating branches, commits, SQL exploration, and merge resolution into an approachable collaboration model for enterprise data teams."
company: "Dremio"
role: "Principal Product Designer"
timeframe: "2021–2022"
group: "selected-work"
order: 15
tags: ["Enterprise UX", "Data Versioning", "Collaboration", "Workflow Design"]
---

## Context

Dremio’s open lakehouse platform brought analysts, data engineers, and BI teams into a shared workspace while their data remained distributed across cloud storage, object stores, and databases.

The strategic opportunity was to let those teams work with data more like software: isolate changes, understand history, review impact, and safely converge on a shared source of truth. The underlying model used familiar source-control concepts—branches, commits, and merges—but most of the people using the product were not Git experts.

The design problem was not how to expose version control. It was how to translate its protections into a legible human workflow.

> How might we give enterprise data teams the freedom to experiment without weakening confidence, accountability, or control?

---

## The Problem

Enterprise data work crosses several kinds of complexity at once. New customers must configure infrastructure before they experience value. Analysts move repeatedly between data, SQL, results, and job status. Collaborative changes accumulate over time, and the moments with the greatest risk—reviewing impact, resolving conflicts, and merging work—are also the moments when the system is least forgiving.

A technically complete interface could still leave users asking:

- Where am I working?
- What changed, and who changed it?
- Is my branch ahead of or behind the shared version?
- What will this action affect?
- Why can’t the system resolve this conflict?
- Did my work actually complete?

The experience needed to answer those questions before asking users to act.

---

## Design Principles

I organized the work around four principles that could remain consistent across otherwise different workflows.

### Orientation before capability

The interface should establish location, state, and the next meaningful step before presenting the full power of the platform.

### Status before action

Users should be able to see branch context, divergence, affected objects, and system state before making a consequential change.

### Progressive disclosure from summary to evidence

The first view should support a fast decision. Deeper schema, SQL, lineage, and file-level detail should remain available when the decision requires it.

### Failure as a first-class workflow

Conflict resolution could not be treated as an edge case. When automation stopped, the interface needed to explain why and give the user enough context to decide safely.

---

## 1. Teaching the System Through Onboarding

Enterprise setup often reflects the internal architecture of the product rather than the user’s mental model. I reframed onboarding as a guided sequence that introduced one dependency at a time and made progress persistent.

The project flow established the basic workspace first. A stable left-side sequence taught the platform’s information architecture while showing what was complete and what remained.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/1-01-create-project.png" alt="Dremio project creation screen with a persistent onboarding sequence" loading="lazy" decoding="async">
  <figcaption>Project creation establishes a clear starting point and exposes the larger setup sequence without presenting every dependency at once.</figcaption>
</figure>

Connecting AWS introduced an external dependency. The flow supported both users with direct access and users who needed to hand instructions to an administrator—an important distinction in enterprise environments where platform ownership and infrastructure access rarely belong to the same person.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/1-02-connect-aws.png" alt="Guided AWS connection setup in Dremio" loading="lazy" decoding="async">
  <figcaption>Infrastructure setup is broken into explicit steps, with enough context to support either direct configuration or an administrative handoff.</figcaption>
</figure>

Inviting collaborators came last. The sequence let an individual reach a usable project before introducing permissions and team structure, then made collaboration the natural next step rather than a prerequisite for progress.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/1-03-invite-users.png" alt="Dremio invitation screen for adding project collaborators" loading="lazy" decoding="async">
  <figcaption>The final step turns an individually configured project into a shared workspace.</figcaption>
</figure>

---

## 2. Making Versioned Data Legible

The versioning model needed to answer a simple question first: **Where am I working?** Persistent repository and branch context let people isolate experimentation from production without needing to understand source-control terminology in advance.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/02-01-repository-navigation.png" alt="Dremio repository navigation with visible branch context" loading="lazy" decoding="async">
  <figcaption>Repository and branch context remain visible as part of navigation, turning an abstract versioning model into a stable sense of place.</figcaption>
</figure>

History then made change accountable. Author, time, affected objects, and commit context were structured as evidence a user could scan—not as an activity log they had to decode.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/2-03-commit-history.png" alt="Commit history for a Dremio data repository" loading="lazy" decoding="async">
  <figcaption>Commit history gives teams a shared record of what changed, when it changed, and who was responsible.</figcaption>
</figure>

Ahead and behind states made divergence visible at a glance. The goal was not to teach the mechanics of a distributed version-control system; it was to let a user recognize whether their current context was safe and current.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/02-02-change-context.png" alt="Dremio branch comparison showing change context and divergence" loading="lazy" decoding="async">
  <figcaption>Change context turns branch divergence into an immediate status signal before the user reviews or merges work.</figcaption>
</figure>

The commit flow became a deliberate review point. Users could inspect affected datasets and distinguish additions, deletions, and modifications before making work permanent.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/02-05-commit-review.png" alt="Dremio commit review showing changed datasets" loading="lazy" decoding="async">
  <figcaption>The review step places consequences before confirmation, supporting both accountability and recovery.</figcaption>
</figure>

For higher-stakes decisions, a commit detail view exposed the underlying schema, SQL, storage, and row-level implications. This preserved a concise default while keeping the evidence needed for validation close at hand.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/02-06-commit-detail.png" alt="Detailed Dremio commit view with dataset and change information" loading="lazy" decoding="async">
  <figcaption>Progressive detail answers the deeper question: “What will this change actually do?”</figcaption>
</figure>

---

## 3. Keeping SQL Exploration in Context

SQL work is iterative. Analysts move between finding data, writing a query, running it, interpreting results, and diagnosing failures. Separating those activities across disconnected surfaces increases context switching and makes it harder to understand what the system is doing.

The job-monitoring view established operational context: whether a query finished, how long it took, why it failed, and whether a similar query had already run.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/3-01-job-monitoring-dashboard.png" alt="Dremio job monitoring dashboard showing query status and history" loading="lazy" decoding="async">
  <figcaption>Job history makes system behavior observable instead of leaving users to infer whether work completed.</figcaption>
</figure>

The SQL workspace kept data navigation, authoring, execution, and results together. Results appeared directly beneath the editor, creating a tight feedback loop between an idea and its evidence.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/3-02-sql-runner.png" alt="Dremio SQL workspace combining data navigation and query authoring" loading="lazy" decoding="async">
  <figcaption>The workspace preserves context across discovery, authoring, and execution.</figcaption>
</figure>

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/3-03-query-results.png" alt="Query results displayed beneath the SQL editor in Dremio" loading="lazy" decoding="async">
  <figcaption>Immediate results support the rapid test-and-learn rhythm of exploratory SQL work.</figcaption>
</figure>

Assisted authoring reduced syntax errors and recalled available metadata without taking control away from experienced users. The objective was consistent across skill levels: make the correct path the easiest path.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/3-04-inline-editing.png" alt="Inline SQL assistance and editing in Dremio" loading="lazy" decoding="async">
  <figcaption>Contextual assistance helps newer users while remaining lightweight enough for expert workflows.</figcaption>
</figure>

---

## 4. Designing for the Moment Automation Stops

The merge workflow brought the system’s trust model together. Before merging, users could compare histories and inspect the relationship between a feature branch and the shared main branch.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/4-01-merge-ready.png" alt="Dremio merge screen comparing a feature branch with the main branch" loading="lazy" decoding="async">
  <figcaption>A pre-merge comparison makes the relationship between independent work and the shared source of truth visible before it becomes permanent.</figcaption>
</figure>

When the system could not merge changes automatically, it said so directly and identified the conflict. The interface then moved from automated execution to an informed human decision.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/4-02-merge-conflict.png" alt="Dremio merge conflict screen identifying an unresolved change" loading="lazy" decoding="async">
  <figcaption>The conflict state explains why the system has stopped instead of hiding the problem behind a generic failure.</figcaption>
</figure>

Side-by-side versions and surrounding context let the user resolve ordering and content differences without making a silent or destructive choice.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/4-03-merge-reorder.png" alt="Dremio side-by-side merge conflict resolution interface" loading="lazy" decoding="async">
  <figcaption>Conflict resolution preserves both versions long enough for the user to understand the tradeoff and choose deliberately.</figcaption>
</figure>

The completed state confirmed that the operation succeeded and returned the user to an unambiguous shared context.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/4-04-merge-success.png" alt="Successful merge confirmation in Dremio" loading="lazy" decoding="async">
  <figcaption>Immediate confirmation closes the loop: independent work has safely converged into the shared branch.</figcaption>
</figure>

---

## Result

The resulting system connected setup, exploration, review, and collaboration through one consistent idea: make complex operations understandable before they become consequential.

Users could:

- enter a usable workspace through a guided enterprise setup
- isolate work without losing their sense of location
- understand history, ownership, and divergence before acting
- inspect the impact of a change at the level their decision required
- move between SQL authoring, execution, and results without losing context
- resolve conflicts with the evidence needed for a deliberate human decision

The interface did not remove the complexity of versioned enterprise data. It gave that complexity a visible structure—one that allowed independent work to safely converge on a shared source of truth.

The broader lesson extended beyond data platforms: trust is not created by hiding complexity. It is created by revealing the right part of the system at the moment a person needs to decide.
