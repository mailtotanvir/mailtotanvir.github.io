# Threat model

v0.1 targets a local developer reviewing fictional agent observations. It is
not independently audited or production-certified. Shared collectors and
enterprise/regulatory assurance require additional controls.

| Threat | Mitigation | Residual limitation |
| --- | --- | --- |
| Edited, deleted, reordered, or truncated events | Sequence, recomputed chain, count and seal checks | Unobserved actions cannot be detected |
| Compromised recorder or lying source | Recorder-assigned producer/time; documented boundaries | Integrity does not prove truth |
| Stolen private key | Explicit generation, restrictive file mode, separate custody | Compromise permits new signed records |
| Substituted bundled public key | Independently supplied fingerprint enforced | Local bundled key alone proves no identity |
| Direct database edits | Verify against original seal and trusted key | Privileged attacker may replace both evidence and local keys |
| Secret payload | Redaction before storage; denylisted paths; canary tests | Encoded/custom secrets and sensitive dictionary keys may evade patterns |
| Malicious HTML/script | Escaped template output, no scripts, restrictive CSP | Browser vulnerabilities remain possible |
| Oversized/malformed input | Bounded read, event/payload/depth limits, strict versions | Very wide valid objects still consume bounded memory |
| Telemetry/network leaks | No telemetry or external assets; network-blocked demo test | Future adapters require explicit opt-in |
| Replay side effects | Data-only reconstruction and fixture simulation | Future plugins must retain this boundary |

Capture policy limits argument comparison. Redacted values can make unrelated
calls appear identical. Capture timestamps are observations, not trusted clocks.
An unsigned seal detects accidental inconsistency but an attacker can regenerate
it. Signed evidence with independently pinned keys strengthens authenticity;
external retained commitments additionally constrain rewriting, but external
anchors remain out of scope. Local file access can read permitted captured data.
Never use production/customer data in the demo. Protect exported files as data.
