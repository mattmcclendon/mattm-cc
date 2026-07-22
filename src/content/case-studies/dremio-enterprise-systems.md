---
title: "Moving the Edge at Dremio"
shortTitle: "Moving the Edge"
description: "How a collaborative surface enabled designers without deep data-domain expertise to learn through consequential contribution and shape a sophisticated analytics platform."
company: "Dremio"
role: "Principal Product Designer"
timeframe: "2021–2022"
group: "selected-work"
order: 10
tags: ["Design Philosophy", "Enterprise UX", "Data Systems", "Collaborative Learning"]
---

> I contribute at the edge of what I know, then use collaboration to move that edge.

## Entering an Unfamiliar Domain

I entered Dremio with only marginal knowledge of the data domain. I was not a data analyst, data engineer, or database architect, and I did not pretend to possess fluency I had not yet earned.

The product did not reward superficial understanding. Dremio’s open lakehouse platform brought analysts, engineers, and business-intelligence teams into a shared environment while their data remained distributed across cloud storage, object stores, databases, and organizational boundaries. The work involved SQL authoring, repositories, metadata, job execution, lineage, permissions, branches, commits, merges, and conflicts. Each concept arrived with its own technical history and with consequences that were not always visible in the interface.

The conventional response to this kind of domain complexity is sequential: learn the territory first, then earn the right to influence it. That sounds responsible. It is also incomplete.

If designers remain spectators until they acquire expert fluency, the product loses access to them during the period when their perception is least habituated. Newcomers notice vocabulary, assumptions, conceptual discontinuities, and missing explanations that experts have learned to see through. Unfamiliarity has a short half-life; the useful move is to convert it into evidence while collaboration turns it into understanding.

At Dremio, I began contributing where my existing capabilities were immediately credible, then used the collaborative surface around the work to extend the boundary of what I could address. Within approximately six months, I had moved from designing first-time experiences to producing meaningful work on repositories, SQL editors, job monitoring, version histories, and conflict resolution.

I learned the domain by helping to make it learnable.

## Onboarding as Situated Learning

First-time experience was the natural point of entry. It sat at the edge of what I already knew and what I needed to learn.

Onboarding is sometimes treated as explanatory residue: the product has been designed, and someone must now teach people how to survive it. I see it differently. A first-time experience is a compressed model of the product’s conceptual architecture. Designing it forces a team to decide what a user must understand first, which dependencies can remain latent, where the product’s model diverges from expectation, and how complexity should be introduced without distortion.

That made onboarding useful in two directions. New customers needed a coherent path into Dremio. I needed a disciplined path into the domain.

The project-creation flow established the workspace first, then exposed the larger setup sequence without presenting every dependency simultaneously. A persistent structure made progress visible and taught the platform’s information architecture through use.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/1-01-create-project.png" alt="Dremio project creation screen with a persistent onboarding sequence" loading="lazy" decoding="async">
  <figcaption>The first-time experience established orientation before capability, giving customers—and the design team—a legible model of the system.</figcaption>
</figure>

Connecting AWS revealed that even a seemingly linear setup flow crossed organizational roles. The person creating a project might possess direct infrastructure access, or they might need to hand precise instructions to an administrator. Product configuration and organizational authority were part of the same experience.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/1-02-connect-aws.png" alt="Guided AWS connection setup in Dremio" loading="lazy" decoding="async">
  <figcaption>Infrastructure setup supported both direct configuration and administrative handoff, acknowledging that capability and authority often reside with different people.</figcaption>
</figure>

Inviting collaborators came after an individual could establish a usable project. The sequence did more than reduce cognitive load. It exposed the relationships among workspace, infrastructure, permissions, and team structure—the underlying grammar I would later need when designing more specialized workflows.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/1-03-invite-users.png" alt="Dremio invitation screen for adding project collaborators" loading="lazy" decoding="async">
  <figcaption>The final step transformed an individually configured project into a shared analytical environment.</figcaption>
</figure>

The work generated immediate customer value while functioning as situated learning. I was not studying an abstract domain model before beginning design. I was constructing a real experience with engineers, product leaders, data experts, and customers, then using their responses to refine both the product and my understanding of it.

## Composing the Learning Surface

The composition of the team accelerated that transition far more than individual study could have.

Engineers understood how the platform behaved under technical and operational pressure. Product leaders carried market context and a view of the workflows Dremio needed to support. Data practitioners understood the consequences of changes to datasets, schemas, queries, and shared sources of truth. Customers supplied the lived reality: how work moved between people, where confidence broke down, and which technical distinctions materially changed a decision.

I contributed interaction design, systems thinking, pattern recognition, and an outsider’s sensitivity to unarticulated assumptions. Other designers contributed adjacent strengths without needing to become analysts themselves. None of us held the complete model, but the collaborative surface allowed relevant knowledge to travel toward the work as the work demanded it.

Domain expertise is indispensable; domain isolation is not. A specialist’s knowledge becomes more valuable when the working system allows it to alter the perception of people who see the problem differently—and when those perspectives can, in turn, expose what expertise has normalized.

The asymmetry among what we knew became productive.

## A Vernacular for Versioned Data

Shared language accelerated that exchange.

The language of Git—branches, commits, histories, merges, and conflicts—was more than a collection of technical labels. It carried a model for independent work, accountable change, divergence, comparison, and safe convergence. Engineers already understood that model deeply. Designers could use it to reason about state and consequence. Product leaders could use it to discuss collaboration. Data practitioners could test where the analogy held and where the material reality of data required a different answer.

A shared vernacular made our differences communicable without making our expertise homogeneous.

That communication mattered because Dremio’s strategic opportunity was not simply to expose source-control mechanics inside a data product. Most of the people using the experience were not Git experts, nor should they have needed to become Git experts to benefit from isolation, history, review, and recovery. Our job was to preserve the protections of the underlying model while translating them into workflows that made sense in analytical work.

The design question became:

> How might we give enterprise data teams the freedom to experiment without weakening confidence, accountability, or control?

## Turning Abstraction into Orientation

Versioned data first needed to answer a very human question: **Where am I working?**

Persistent repository and branch context transformed an abstract versioning structure into a stable sense of place. A user could understand that work was isolated from the shared version before being asked to reason about how the isolation had been implemented.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/02-01-repository-navigation.png" alt="Dremio repository navigation with visible branch context" loading="lazy" decoding="async">
  <figcaption>Repository and branch context made location persistent, allowing users to work independently without losing their relationship to the shared environment.</figcaption>
</figure>

History then made change accountable. Author, time, affected objects, and commit context were organized as evidence someone could scan, rather than as an activity log they had to decode.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/2-03-commit-history.png" alt="Commit history for a Dremio data repository" loading="lazy" decoding="async">
  <figcaption>Commit history gave teams a common record of what changed, when it changed, and who was responsible.</figcaption>
</figure>

Ahead-and-behind states made divergence visible before it became consequential. The interface did not need to teach distributed version-control theory. It needed to help a person recognize whether their context was current, what had changed elsewhere, and whether the next action was safe.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/02-02-change-context.png" alt="Dremio branch comparison showing change context and divergence" loading="lazy" decoding="async">
  <figcaption>Change context translated divergence into an immediate status signal rather than requiring users to infer it from repository mechanics.</figcaption>
</figure>

The commit flow became a deliberate review point. Users could inspect affected datasets and distinguish additions, deletions, and modifications before making work permanent. Deeper detail—schema, SQL, storage, and row-level implications—remained available when the decision required evidence beyond the summary.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/02-06-commit-detail.png" alt="Detailed Dremio commit view with dataset and change information" loading="lazy" decoding="async">
  <figcaption>Progressive detail preserved a concise default while keeping consequential evidence close to the decision.</figcaption>
</figure>

These designs were not the product of a designer becoming a database expert in isolation. They were products of repeated contact between interaction models, technical behavior, domain consequence, and customer practice.

## Building the Analytics Cockpit

As the boundary of my domain knowledge moved, the work became more specialized.

SQL exploration is iterative. Analysts move between finding data, writing a query, running it, interpreting results, and diagnosing failure. Separating those activities across disconnected surfaces creates context switching at precisely the moment a user is trying to hold a complex hypothesis in working memory.

The job-monitoring view made the behavior of the system observable: whether a query completed, how long it took, why it failed, and whether similar work had already run.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/3-01-job-monitoring-dashboard.png" alt="Dremio job monitoring dashboard showing query status and history" loading="lazy" decoding="async">
  <figcaption>Job history externalized system state instead of asking analysts to infer whether work had completed or why it had failed.</figcaption>
</figure>

The SQL workspace kept data navigation, authoring, execution, and results in one operational context. Results appeared directly beneath the editor, tightening the feedback loop between an analytical idea and its evidence. Contextual assistance reduced avoidable syntax errors while remaining light enough not to obstruct expert users.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/3-02-sql-runner.png" alt="Dremio SQL workspace combining data navigation and query authoring" loading="lazy" decoding="async">
  <figcaption>The workspace preserved context across discovery, authoring, execution, and interpretation.</figcaption>
</figure>

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/3-03-query-results.png" alt="Query results displayed beneath the SQL editor in Dremio" loading="lazy" decoding="async">
  <figcaption>Immediate results supported the rapid test-and-learn cadence of exploratory SQL work.</figcaption>
</figure>

By this point, designers who were not data analysts were helping to shape what I regard as a best-in-class analytics cockpit. We had not displaced domain expertise. We had made it interoperable with design expertise, allowing the product to preserve technical sophistication while becoming more observable, navigable, and coherent.

## Designing the Moment Automation Stops

The merge workflow brought the product’s trust model into focus.

Before merging, users could compare histories and inspect the relationship between independent work and the shared main branch. When the system could reconcile changes automatically, the workflow remained concise. When it could not, the interface needed to explain why automation had stopped and return the decision to a properly informed human.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/4-01-merge-ready.png" alt="Dremio merge screen comparing a feature branch with the main branch" loading="lazy" decoding="async">
  <figcaption>A pre-merge comparison made the relationship between independent work and the shared source of truth visible before convergence became permanent.</figcaption>
</figure>

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/4-02-merge-conflict.png" alt="Dremio merge conflict screen identifying an unresolved change" loading="lazy" decoding="async">
  <figcaption>The conflict state identified what automation could not resolve rather than hiding the problem behind a generic failure.</figcaption>
</figure>

Side-by-side versions and surrounding context preserved both alternatives long enough for someone to understand the tradeoff. The system did not silently choose, nor did it simply abandon the user at an error state. It changed modes—from automated execution to supported human judgment.

<figure class="case-study-figure case-study-figure--wide">
  <img src="/img/case-studies/dremio/4-03-merge-reorder.png" alt="Dremio side-by-side merge conflict resolution interface" loading="lazy" decoding="async">
  <figcaption>Conflict resolution gave users sufficient context to choose deliberately without destroying either version prematurely.</figcaption>
</figure>

This workflow represented the same collaborative principle at product scale. Independent contributors could pursue different lines of work, the system preserved their histories, and convergence occurred through explicit contact rather than accidental overwrite.

The product itself became a collaborative surface.

## Outcome

Within approximately six months, I moved from marginal domain fluency to meaningful design contributions across some of Dremio’s most specialized surfaces. In parallel, the team produced a coherent model spanning first-time setup, data exploration, version history, SQL authoring, system feedback, and conflict resolution.

Customers could enter a usable workspace without confronting the entire architecture at once. Analysts could maintain context across discovery, authoring, execution, and results. Teams could isolate work, understand divergence, inspect consequences, and safely converge on a shared source of truth. When automation reached the boundary of what it could decide, the interface supplied the evidence necessary for accountable human intervention.

Multiple kinds of expertise became mutually amplifying. Engineers, product leaders, data practitioners, customers, and designers contributed from different edges of understanding while the work continuously moved those edges. Design gained fluency in a technical domain without pretending to conquer it.

## What This Case Taught Me

Dremio gave precise language to a practice I had followed for years.

A well-composed team should not require every participant to possess every capability before meaningful work begins. It should create a surface through which knowledge and capability can travel. People contribute while learning, and they learn through consequential contribution.

That is not permission for uninformed design. It is a more demanding model of informed design—one in which curiosity, domain expertise, technical consequence, customer evidence, and pattern recognition remain in contact throughout the work instead of appearing as sequential phases.

In the vocabulary of my design philosophy:

> **Collaborative Surfaces × Capability Vectors = Productive Contact**

At Dremio, productive contact made unfamiliarity temporarily valuable, expertise transmissible, and increasingly specialized work possible. It allowed the domain to benefit from the newcomer while the newcomer was still learning the domain.

I contribute at the edge of what I know, then use collaboration to move that edge.

---

[Read the design philosophy behind this work.](/philosophy/)
