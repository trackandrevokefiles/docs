---
sidebar_position: 1
---

# Introduction to Tarf

**Tarf** (Track and Revoke Files) is a next-generation security framework designed to provide absolute control over digital assets throughout their entire lifecycle. Unlike traditional DRM which relies on centralized servers to verify every access, Tarf implements a **distrubuted cryptographic lineage** model.

## The Problem
In the modern digital landscape, once a file is shared, its owner loses control. Traditional security relies on "Perimeter Defense"—once the perimeter is breached (or the file is downloaded), the security is gone. 

## The Tarf Solution
Tarf shifts the paradigm from "Protecting the Perimeter" to "Protecting the Content itself". Every Tarf-protected file is an autonomous security unit that enforces access policies locally while remaining connected to a global tracking registry.

---

## Conceptual "Indexes"

At the heart of Tarf is the concept of **Indexes**. An Index is not just a database entry; it is a conceptual registry of immutable cryptographic lineages.

### Unique File Identity
Every document, executable, or media file protected by Tarf is assigned a unique, immutable identity. This identity is the root of an **Index**.

### Cryptographic Lineage
When a file is shared or "forked," it doesn't just create a copy. It creates a **child lineage**. The Index tracks these relationships:
- **Root**: The original creator's instance.
- **Branches**: Direct shares to specific individuals or groups.
- **Leaves**: Final consumption points (devices).

### Global Tracking without Surveillance
The Index allows the Central Authority to track the **path** of a file—who shared it with whom, when it was accessed, and from which device—**without ever seeing the raw content of the file itself**. The content remains encrypted and private, only the metadata of the lineage is visible to the Index.

## Core Principles

1.  **Local-First Verification**: Access is verified at the "Secure Edge" (the user's device), reducing latency and improving privacy.
2.  **Hardware Locking**: Every instance is bound to the physical hardware of the consumer, preventing unauthorized redistribution.
3.  **Instant Revocation**: Lineages can be "pruned" at any level. Revoking a root branch instantly disables access for all its descendants.
4.  **Ephemeral Secrets**: Keys are rotated ("rolled") continuously, ensuring that even a leaked key only provides limited, temporary access.
