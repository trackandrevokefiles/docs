# Glossary of Concepts

A quick reference guide to the terminology and core concepts of the Tarf ecosystem.

---

### Central Authority
The cloud-resident "Brain" of the network that manages the Indexes, stores access policies, and issues authorizations. It never sees or stores raw asset content.

### Genesis Key
The very first asymmetric keypair used to protect a newly "Minted" file. It represents the root of the file's security and ownership.

### Genealogy
The tree-like structure that tracks the history of a file as it is shared and forked. Every instance of a file is a "Node" in its Genealogy.

### Guarded Memory
A security technique where decryption keys and raw content are only held in specialized, isolated RAM segments that are protected from extraction or data remanence.

### Hardware Fingerprint
A unique identifier derived from the physical characteristics of a device, used to bind a specific file lineage to an authorized machine.

### Index
The conceptual registry of a file's identity and its complete cryptographic lineage. Owners manage their files through their Indexes.

### Link Locking
A security feature where a public share link becomes permanently bound to the first user or device that accesses it, preventing unauthorized redistribution of the link.

### Lineage ID
The unique identifier for a specific branch or node in a file's Genealogy. It is used to track and revoke access at any level.

### Local Minting
The process of encrypting and encapsulating a raw file into a Tarf Container on the user's local device, ensuring the data is never sent to a server unprotected.

### Rolling Rotation (Key Roll)
The continuous process of discarding used decryption keys and replaced with new, ephemeral keys every time a file is accessed.

### Secure Edge
The local application or execution environment that provides the "Black Box" runtime (the Enclave) where assets are securely processed and decrypted.

### Shred-on-Deny
An active security policy where the local Secure Edge securely wipes the file container if the Central Authority denies an access request.

### Universal Container (`.tarf`)
The portable binary format that encapsulates an encrypted asset along with the metadata needed for independent security enforcement and lineage tracking.

### View Quota
A defined limit on the number of times a file or a specific share link can be opened. Quotas can be applied globally or per-share.

### Zeroization
The cryptographic practice of overwriting memory containing sensitive secrets with zeros or random noise immediately after its use is completed.
