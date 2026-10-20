# Evidence format v1

Schema and format versions are `1`. Events start at sequence 0. Genesis is
32 zero bytes (64 lowercase hex digits). Hashes are lowercase SHA-256 hex.

Canonical bytes are Python 3.12 standard JSON: UTF-8, ensure_ascii=False,
sort_keys=True, separators=(',', ':'), allow_nan=False. Unicode is preserved
without normalization. Keys must be strings. Integers are limited to signed
64-bit. Floats are prohibited in v1; use decimal strings for monetary values.
This is a deliberately restricted JSON contract, not RFC 8785. Timestamps use
UTC `YYYY-MM-DDTHH:MM:SS.ffffffZ`. Unsupported values and duplicate keys fail.

Event digest: SHA256(b'cinderlog:event:v1:' + canonical(event excluding
only event_hash)). previous_hash is included once in that canonical object.
Ed25519 signs b'cinderlog:seal:v1:' + canonical(seal). The seal contains
run_id, schema_version, event_count, final_hash, status, sealed_at and a hash
of the complete finalized run metadata. Signature/key fields live outside run
metadata; calculated integrity_status is never persisted as authority.

Bundles contain format_version, run, events, seal, signature, public_key,
and signing_key_id. Public keys and signatures are lowercase hex. Key ID is
SHA256(raw public key). All models reject extra fields. Payloads contain an
explicit typed envelope plus policy audit records. Bounds: 16 MiB bundle,
10,000 events, 256 KiB payload, depth 32, 128-character identifiers.

Default verification policy `structural` allows an absent signature, labeled
absent. A present invalid signature always fails. `signed` requires a valid
signature. `trusted` requires a valid signature and an independently supplied
fingerprint. Supplying a fingerprint enforces trust regardless of policy.
Exit 0 meets policy; 1 invalid evidence or unmet policy; 2 invalid schema,
unsupported format, malformed data or operational failure. Unsealed runs fail
final evidence verification. Inspection remains available with warnings.

Private keys never belong in bundles. Bundled public keys establish consistency,
not identity. Timestamp ordering is checked, but timestamps are not trusted time.
Additional display redaction never changes the bytes being verified. Export
preserves source evidence rather than silently applying a new signing policy.
