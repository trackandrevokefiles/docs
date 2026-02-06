# Features

Tarf provides a sophisticated policy engine that allows owners to define exactly how their content is consumed. These policies are enforced by the Secure Edge and verified by the Central Authority.

---

## View Quotas

Owners can set hard limits on how many times an asset can be accessed. This is split into two layers:

### 1. Global View Quota
A master limit set at the **Index** level. Once the total number of views across all shares and forks reaches this limit, the file is globally locked.

### 2. Share-Specific Quota
When creating a specific link, you can set a limit just for that branch of the lineage. For example, you can allow a distributor to view the file 100 times, regardless of the global limit.

---

## One-Time Access & Session Timeouts

For high-security distribution, Tarf supports ephemeral "One-Time" links.

### The Mechanism
- **One-Time Use**: The link is cryptographically "consumed" the moment it is successfully rolled by a Secure Edge. Any subsequent attempt to use the same link will result in a "Gone" error.
- **Session Timeout**: Owners can specify a timeout in **seconds** (e.g., 60 seconds). Once the file is opened, the user has only that window to view the content before the local session key is zeroized and access is revoked.

---

## Shred-on-Deny (Active Protection)

Tarf doesn't just "deny" access; it can actively protect itself from unauthorized environments or expired sessions.

### Policies
- **Max Views Deletion**: If a file reaches its view limit, the Secure Edge can be signaled to locally delete its container.
- **Anonymous Delete-on-Deny**: For anonymous shares, if the Central Authority denies access (e.g., the link was revoked), the local agent can automatically **Shred** the file.

### Kill Methods
Access denials can trigger different local responses:
- **Stop**: Immediately terminate the viewing process.
- **Delete**: Remove the container from the local filesystem.
- **Shred**: Perform a secure 3-pass overwrite of the file bytes to ensure no forensic recovery is possible.

---

## Dynamic Link Locking (First-Viewer Binding)

Tarf solves the "Shared Link" problem by automatically binding open links to identities.

### How it Works
When a Restricted Share (no forking allowed) is created without a pre-defined audience, it is in a "Floating" state. The moment the **first user** opens that link, the system "Claims" it for that user. From then on, the link is bound to that user's identity and device, preventing them from sharing the link with others.

---

## Owner Auto-Repair

Owners of a file enjoy special privileges that ensure they never get locked out of their own content.

### Generational Self-Healing
If an owner attempts to open an old version of their file that has a "Legacy" key generation (lower than the current `min_key_generation`), the system identifies them as the owner and performs an **Auto-Repair**. It allows the rotation to proceed and silently upgrades the file's key to the latest authorized generation.
