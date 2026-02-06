# Access Control & Revocation

Tarf provides "God Mode" over your files. You can grant access with surgical precision and take it back just as easily, regardless of where the physical file is located.

---

## Granular Revocation

Revocation in Tarf is not all-or-nothing. You can "prune" the Genealogy tree at any point.

### 1. Individual Revocation
Invalidate a specific device or a specific share link. Only that user/device loses access; the rest of the tree remains healthy.

### 2. Branch Revocation
Revoking a parent node instantly invalidates all its descendant children. This is useful if a high-level partner or distributor is no longer authorized.

### 3. Global Kill
The owner can issue a "Global Revocation" for the entire Index, instantly disabling every single instance of the file everywhere in the world.

---

## Hardware Binding (Machine Lock)

Tarf solves the "Shared Password" problem by locking access to the physical hardware of the consumer.

### The Fingerprint
When a file is first opened on a new device, the Secure Edge generates a **Hardware Fingerprint** based on immutable physical characteristics of the machine (CPU IDs, motherboard serials, etc.).

### Persistence
The Central Authority "binds" the Lineage ID to that Fingerprint. Any attempt to run that specific lineage on a different machine will result in a Hardware Mismatch, and access will be denied.

---

## Time-Based Policies

Tarf manages access through temporal constraints that work both online and offline.

### Expiration Dates
Files can be set to "Self-Destruct" on a specific hard date. Once the date passes, the Secure Edge will refuse to roll the keys, rendering the content inaccessible.

### Grace Periods (Offline Security)
Tarf is designed for the real world where internet access is not guaranteed.
- **Authorization Lease**: When a file is authorized, it receives a "lease" for a specific duration (e.g., 24 hours).
- **Offline Access**: During the lease, the Secure Edge can continue to roll local keys without checking in with the Central Authority.
- **Lease Renewal**: Once the lease expires, a mandatory online check-in is required to continue access.

---

## Active Defense

Access control in Tarf is not just a "No" at the door; it can be an active response.

### Remote Invalidation
When the Central Authority denies access, it can send a command to the Secure Edge to locally "Zeroize" the container's header, ensuring it can never be opened again even if the machine remains offline indefinitely.

### Violation Tracking
Every time access is denied (due to revocation, expiration, or hardware mismatch), the event is logged in the Index, allowing owners to identify potential leaks or attack attempts in real-time.
