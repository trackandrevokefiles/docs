# Security Deep Dive

Tarf's security is built on the principle of **Zero-Knowledge Distribution**. We provide absolute control without requiring the Central Authority to ever touch or see the raw data.

---

## Local Minting (Private-First Encryption)

In traditional cloud security, you upload a file, and the server encrypts it. In Tarf, the transformation happens **locally** on your device.

### How it Works
1.  **Key Generation**: A unique "Genesis Key" is generated locally.
2.  **Encryption**: The content is encrypted using high-performance symmetric ciphers.
3.  **Encapsulation**: The encrypted data and the initial security metadata are packaged into a Universal Container.
4.  **Metadata Registration**: Only the **Lineage ID** and the **Root Public Key** are sent to the Central Authority.

### Why it Matters
- **Content Sovereignty**: Your files never leave your machine in raw form.
- **Zero-Trust**: You don't have to trust the server with your data, only with the enforcement of your policies.

---

## Hardware-Locked RAM Protection

The most critical part of Tarf happens in the device's memory. To prevent "Forensic Memory Attacks," where an attacker dumps the system RAM to find keys, Tarf employs several advanced techniques.

### 1. Memory Locking (`mlock`)
Sensitive cryptographic segments are "locked" into physical RAM. This prevents the Operating System from swapping the memory content to the hard drive (swapfile), where it could be recovered later.

### 2. Guarded Memory Execution
Decryption keys only exist in their "raw" state for the exact CPU cycles required to perform an operation. They are kept in **Guarded Buffers** which are isolated from the rest of the application's memory space.

### 3. Immediate Zeroization
The moment a cryptographic operation is complete, the memory is **zeroized** (overwritten with random data or zeros). This eliminates "Data Remanence"—the phenomenon where traces of data remain in electronic memory after they have been "deleted."

---

## Rolling Key Rotation

Tarf does not use static keys. Instead, it uses a process we call **Rolling Rotation**. Every time a file is opened, its internal keys are discarded and replaced with new ones.

### The Mechanism
1.  **Authorize**: The Secure Edge requests authorization from the Central Authority.
2.  **Decrypt**: The current key is used to "unlock" the container.
3.  **Generate**: A brand new keypair is generated within the Secure Enclave.
4.  **Re-Wrap**: The container header is updated with the new key, and the old one is zeroized.

### The Benefit
If a device is compromised, an attacker only gets access to the *current* state of the key. Because the key is rolled upon use, old keys are useless, and future keys are only obtainable through a new authorization cycle.
