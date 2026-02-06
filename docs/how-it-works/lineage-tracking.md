# Lineage Tracking & Genealogy

Tarf's unique ability to track assets globally without compromising content privacy is powered by its **Cryptographic Lineage** model. This system creates a verifiable family tree for every file instance, known as the **Genealogy**.

---

## The Genealogy Tree

When a file is "shared" or "forked" in the Tarf ecosystem, it does not simply copy the data. It creates a cryptographic child from the current instance.

### 1. Genesis (The Seed)
Every Index begins with a **Genesis Node**. This is the first protected version of the file created by the owner.

### 2. Branching (Sharing)
When a user shares a file, the Secure Edge generates a new branch.
- **Parent Node**: The original instance.
- **Child Node**: the new share instance.
- **Relationship**: The child is cryptographically tied to the parent, but receives its own unique set of rolling keys.

### 3. Forking (Re-sharing)
If a recipient is granted "Fork Permissions," they can create their own branches from their instance, extending the tree further.

---

## How Tracking Works

Tarf tracks the **lineage metadata**, not the content.

### Lineage IDs
Each node in the Genealogy tree has a unique **Lineage ID**. When a file checks in with the Central Authority, it identifies itself by its Lineage ID and its current "Fingerprint."

### Checkpoint Events
The Central Authority records events against the Lineage ID:
- **Minting**: Initial creation.
- **Consumption (View)**: When a file is opened on a device.
- **Branching (Share)**: When a new child node is created.
- **Revocation**: When a branch is invalidated.

---

## Tracking without Surveillance

A core tenet of Tarf is **Privacy-Preserving Provenance**.

### Opaque Nodes
To the Central Authority, the nodes in the tree are opaque. It knows that *Node B* was created from *Node A*, but it does not know what is *inside* Node A or Node B. It only knows the policies applied to them.

### Anonymous Viewing
Tarf supports "Anonymous Lineages" for high-privacy use cases. In this mode, the Central Authority tracks that *someone* on *some device* opened the file, without linking the Lineage ID to a specific user identity, yet still allowing for instant revocation if that anonymous link is abused.

---

## Business Intelligence

The Lineage model provides unprecedented insights for content creators:
- **Viral Coefficient**: Seeing how many levels deep a file has been shared.
- **Geographic Spread**: Understanding where the most active branches of a lineage are located.
- **Retention**: Tracking how many times a specific branch in the tree is accessed over time.
