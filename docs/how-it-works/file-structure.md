# Universal Container Format

The `.tarf` format is a specialized binary container designed for high-performance cryptographic "rolls." It decouples the security metadata from the content body to allow constant updates without re-encrypting the entire payload.

---

## Logical Layout

A `.tarf` file consists of three primary segments: the **Magic Header**, the **Metadata Block**, and the **Encrypted Body**.

```text
+----------------+----------------+--------------------------------+---------------------------+
| Magic (5 bytes)| Len (4 bytes)  | Header JSON (N bytes)          | Body (Remaining bytes)    |
+----------------+----------------+--------------------------------+---------------------------+
| "TARF\x01"     | Big Endian u32 | {"algo":..., "enc_key":...}    | [Encrypted Binary Blob]   |
+----------------+----------------+--------------------------------+---------------------------+
```

---

## Segments

### 1. Magic Identifier
- **Value**: `0x54 0x41 0x52 0x46 0x01` (ASCII "TARF" followed by version byte `0x01`).
- **Purpose**: Instantly identifies the file type and ensures compatibility with the Secure Edge.

### 2. Metadata Block (The Header)
This is a JSON-encoded segment that contains the instructions for accessing the file.
- **Encryption Algorithm**: The suite used (e.g., `x25519-xchacha20-poly1305`).
- **Wrapped Key**: The symmetric body key, itself encrypted ("wrapped") with an asymmetric public key.
- **Nonce**: A unique, random initialization vector used to prevent pattern recognition in the encrypted data.
- **Lineage Metadata**: Information about the file's current position in the Genealogy Tree.

### 3. Encrypted Content Body
The actual data (executable, document, image) is stored here.
- **Symmetric Encryption**: Uses ciphers like XChaCha20, which are highly resistant to modern attacks and support fast, random-access streaming.
- **Integrity Tag**: A Message Authentication Code (MAC) that ensures the body has not been tampered with or corrupted.

---

## Cryptography Suite

Tarf mandates the use of modern, high-performance, and high-security primitives:

| Component | Standard | Rationale |
| :--- | :--- | :--- |
| **Symmetric** | **XChaCha20-Poly1305** | Exceptional speed and security with a large (192-bit) nonce, ideal for local-first environments. |
| **Asymmetric** | **X25519 (Elliptic Curve)** | High efficiency and small key sizes (32 bytes), providing equivalent security to much larger RSA keys. |
| **Key Wrapping** | **AEAD-based Wrap** | Ensures the header itself is authenticated and cannot be swapped by an attacker. |

---

## Performance Optimization

By separating the **Wrapped Key** from the **Body**, Tarf can perform a "Key Roll" in milliseconds. The Secure Edge only needs to update the relatively small Header JSON while the multi-gigabyte Encrypted Body remains untouched, allowing for instant and continuous security updates.
