# Security Specification & Payload-First TDD

## 1. Data Invariants
- A `Story` document in `/stories/{storyId}` must contain strictly `author`, `text`, and `createdAt` (no extra shadow fields).
- `storyId` must match `^[a-zA-Z0-9_\-]+$` and be at most 128 characters.
- `author` must be a non-empty string between 1 and 40 characters.
- `text` must be a non-empty string between 3 and 500 characters.
- `createdAt` must strictly equal `request.time` (server timestamp).
- Stories are append-only and immutable: public visitors may read/list stories and create valid new stories without wallets or signups, while `update` and `delete` are denied to prevent tampering or deletion of other users' posts.

## 2. Adversarial "Dirty Dozen" Payloads (Expected: PERMISSION_DENIED)
1. Shadow field injection on create: `{ "author": "Anon", "text": "Sold too early", "createdAt": "<request.time>", "isAdmin": true }`
2. Missing required `text` field: `{ "author": "Anon", "createdAt": "<request.time>" }`
3. Empty `text` string: `{ "author": "Anon", "text": "", "createdAt": "<request.time>" }`
4. Oversized `text` (> 500 chars): `{ "author": "Anon", "text": "A".repeat(501), "createdAt": "<request.time>" }`
5. Oversized `author` (> 40 chars): `{ "author": "B".repeat(41), "text": "Valid story text", "createdAt": "<request.time>" }`
6. Empty `author` string: `{ "author": "", "text": "Valid story text", "createdAt": "<request.time>" }`
7. Wrong field type (`text` as number): `{ "author": "Anon", "text": 12345, "createdAt": "<request.time>" }`
8. Forged past `createdAt` timestamp (not `request.time`): `{ "author": "Anon", "text": "Valid story text", "createdAt": "2020-01-01T00:00:00Z" }`
9. Poisoned document ID (> 128 chars or invalid characters like `../bad`): `/stories/bad..id`
10. Arbitrary `update` attempt on an existing story: `update({ "text": "Edited story" })`
11. Arbitrary `delete` attempt on an existing story: `delete()`
12. Write to an undeclared collection `/users/hacker`: `{ "role": "admin" }`
