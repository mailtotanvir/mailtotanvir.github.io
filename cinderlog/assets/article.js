(() => {
  'use strict';
  const details = {
    adapter: ['Capture boundary', 'The adapter submits observations. Recorder-assigned time and producer labels describe capture; a compromised adapter can still lie, and uninstrumented actions remain invisible.'],
    policy: ['Minimize before persistence', 'Pattern redaction and denylisted paths run before a payload enters SQLite. Rule IDs and affected paths survive. Removed values do not. Metadata-only capture makes missing content explicit.'],
    chain: ['Deterministic evidence bytes', 'Typed envelopes become restricted canonical JSON. SHA-256 commits to the event and previous hash once. Fixed vectors test byte behavior independently of the recorder.'],
    store: ['One sequence authority', 'BEGIN IMMEDIATE serializes appends. Finalization writes the terminal event, final run metadata and seal in one transaction. The application cannot append after sealing; direct file edits are still possible.'],
    seal: ['The cryptographic commitment', 'Ed25519 signs a domain-prefixed seal binding count, outcome, final chain hash and a digest of finalized metadata. Private keys stay outside the database. An unsigned seal supplies no attacker-resistant authenticity.'],
    bundle: ['Portable, bounded data', 'An exported JSON bundle contains one run, ordered events, seal and public key identity. The loader bounds bytes, payloads and nesting, rejects unknown versions and duplicate keys, and executes no embedded content.'],
    verify: ['Verify outside the recorder', 'Recompute every digest; cross-check sequence, lifecycle, metadata, seal and signature. A supplied fingerprint is enforced. The report consumes a fresh verdict, never the run outcome as proof.'],
    replay: ['Historical facts remain read-only', 'Reconstruction never invokes a tool. Diff compares captured semantics. The call-budget simulation emits derived output; it neither rewrites source evidence nor reproduces model generation.'],
    report: ['Presentation is a separate boundary', 'The offline report escapes payloads and uses no external assets or scripts. Additional display filtering does not change signed source bytes. Facts, findings, simulation and trust status remain distinct.' ]
  };
  const blueprint = document.querySelector('#architecture-visual');
  const detail = document.querySelector('#node-detail');
  document.querySelectorAll('[data-node]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-node]').forEach(b => { b.classList.remove('selected'); b.setAttribute('aria-pressed', 'false'); });
    button.classList.add('selected'); button.setAttribute('aria-pressed', 'true');
    const [title, copy] = details[button.dataset.node];
    detail.replaceChildren(); const strong = document.createElement('strong'); strong.textContent = title + ' · '; detail.append(strong, document.createTextNode(copy));
  }));
  const flow = document.querySelector('#flow-toggle');
  flow.addEventListener('click', () => { const paused = blueprint.classList.toggle('paused'); flow.textContent = paused ? 'Animate flow' : 'Pause flow'; flow.setAttribute('aria-pressed', String(!paused)); });
  const scenes = [
    ['01 / OBSERVE', 'The run completed. The calls repeated.', 'The fictional expense fixture recorded three identical captured tool requests, their mock results, and a warning. Completed describes the run outcome; it says nothing about independent key trust.'],
    ['02 / SEAL', 'Freeze the commitment, not the story.', 'Finalization binds the terminal outcome, event count, final chain hash and metadata. The demo uses an ephemeral key; a valid signature under that key does not establish identity.'],
    ['03 / ALTER', 'Change one sentence in a copy.', 'The adversarial fixture edits the user-input payload at sequence 1. Its old stored hashes and original signed seal remain. This is a deliberate tamper demonstration, not a real financial incident.'],
    ['04 / RECOMPUTE', 'The first mismatch is sequence 1.', 'The verifier recalculates the changed event. The next previous-hash link no longer commits to those bytes. The run still says completed; hash-chain and seal integrity fail.'],
    ['05 / TRUST', 'A signature can be valid while evidence is invalid.', 'The original seal signature still verifies cryptographically because the seal bytes were not edited. That seal no longer matches the altered chain. A bundled key also remains untrusted. These are separate checks.'],
    ['06 / RECONSTRUCT', 'Inspect the evidence without rerunning the action.', 'The original remains valid under structural policy. Replay reads recorded events only. A derived one-call budget can illustrate a different policy outcome without touching tools, source systems or historical evidence.']
  ];
  const slider = document.querySelector('#scene-scrub'), play = document.querySelector('#scene-play');
  let time = 0, playing = false, previous = 0, frame = 0;
  function render() {
    const index = Math.min(5, Math.floor(time / 6)), scene = scenes[index];
    document.querySelector('#scene-label').textContent = scene[0]; document.querySelector('#scene-title').textContent = scene[1]; document.querySelector('#scene-copy').textContent = scene[2];
    document.querySelector('#scene-time').textContent = String(Math.floor(time)).padStart(2, '0') + ' / 36s'; slider.value = String(time);
    document.querySelectorAll('.chain-event').forEach((node, i) => { node.classList.toggle('active', index < 2 || index === 5); node.classList.toggle('broken', index >= 2 && index <= 4 && i >= 1); });
    const altered = index >= 3 && index <= 4;
    const integrity = document.querySelector('#film-integrity'); integrity.textContent = altered ? 'invalid' : index === 2 ? 'unchecked' : 'valid'; integrity.className = altered ? 'red' : 'green';
    document.querySelector('#film-signature').textContent = index === 0 ? 'not sealed yet' : 'valid / untrusted';
    document.querySelectorAll('[data-scene]').forEach(b => b.setAttribute('aria-pressed', String(Number(b.dataset.scene) === index)));
  }
  function pause() { playing = false; cancelAnimationFrame(frame); play.textContent = 'Play scenario'; play.setAttribute('aria-pressed', 'false'); }
  function tick(ts) { if (!playing) return; if (previous) time += (ts - previous) / 1000; previous = ts; if (time >= 36) {time = 36; pause();} render(); if (playing) frame = requestAnimationFrame(tick); }
  play.addEventListener('click', () => { if (playing) return pause(); if (time >= 36) time = 0; playing = true; previous = 0; play.textContent = 'Pause scenario'; play.setAttribute('aria-pressed', 'true'); frame = requestAnimationFrame(tick); });
  slider.addEventListener('input', () => { pause(); time = Number(slider.value); render(); });
  document.querySelectorAll('[data-scene]').forEach(b => b.addEventListener('click', () => {pause(); time = Number(b.dataset.scene) * 6; render();}));
  document.addEventListener('visibilitychange', () => {if (document.hidden) pause();});
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => {if (!entries[0].isIntersecting) pause();}).observe(document.querySelector('#tamper-visual'));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {blueprint.classList.add('paused'); flow.textContent = 'Animate flow'; flow.setAttribute('aria-pressed', 'false');}
  function progress() { const max = document.documentElement.scrollHeight - innerHeight; document.querySelector('.progress').style.width = (max > 0 ? scrollY / max * 100 : 0) + '%'; }
  addEventListener('scroll', progress, {passive:true}); progress();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => {
      if (entry.isIntersecting) document.querySelectorAll('.toc nav a').forEach(a => a.classList.toggle('active', a.hash === '#' + entry.target.id));
    }); }, {rootMargin:'-10% 0px -65% 0px'});
    document.querySelectorAll('.chapter').forEach(section => observer.observe(section));
  }
  render();
})();
