
(function(){var root=document.querySelector('.film-scope');
  var films={
    employee:{
      number:'FILM 01 · THE EMPLOYEE ASK',title:'A request moves. Control moves with it.',premise:'An employee asks WorkAssist for a policy answer and a real-world action. Follow the request through knowledge, meaning, judgment, approval and execution.',total:54,duration:'00:54',aria:'Animated film showing an employee request moving through an enterprise agent operating system',noteTitle:'The employee sees one answer.',noteCopy:'The film reveals the choreography beneath it: source permissions are preserved, enterprise meaning is resolved, actions are separated from answers, authority is checked at the moment of execution, and the outcome returns with a durable receipt.',beatScene:6,
      scenes:[
        {t:0,chip:'Opening · The ask',where:'Employee world',title:'A simple ask begins.',copy:'Maya opens WorkAssist at her desk. Above the surface, it feels like a conversation. Below it, a governed system is waiting.'},
        {t:7,chip:'01 · Request',where:'WorkAssist · request envelope',title:'Ask and action travel together.',copy:'“What is our Ontario parental leave policy? File my leave for March.” Intent, identity and session context descend as one request.'},
        {t:14,chip:'02 · Permission',where:'Knowledge fabric',title:'It retrieves only what Maya may see.',copy:'Current policy and handbook passages qualify. A compensation memo is rejected by source-system access controls before the model can see it. The rejected example is visible only in this architectural explanation, never to Maya.'},
        {t:21,chip:'03 · Meaning',where:'Operational ontology',title:'Documents become grounded context.',copy:'Employee, jurisdiction, eligibility and leave balance resolve into connected business objects—not a loose pile of search results.'},
        {t:28,chip:'04 · Judgment',where:'Agent runtime',title:'The plan splits at the risk boundary.',copy:'Answering is read-only. Filing leave changes a system of record. WorkAssist can prepare both, but the action enters a different control path.'},
        {t:35,chip:'05 · Authority',where:'Action gate',title:'The right human says go.',copy:'A manager approves the exact action. Identity, policy, scope, evidence and replay protection are checked at execution time—not merely during planning.'},
        {t:42,chip:'06 · Receipt',where:'HR system',title:'EXECUTE — the approved request lands.',copy:'The exact action Maya’s manager approved is committed to the HR system of record. The check marks a real write, not a proposed plan.'}
      ],
      beats:[
        {key:'execute',until:46,chip:'06 · Receipt / Execute',where:'HR system',title:'EXECUTE — the approved request lands.',copy:'The exact action Maya’s manager approved is committed to the HR system of record. The check marks a real write, not a proposed plan.'},
        {key:'observe',until:50,chip:'06 · Receipt / Observe',where:'Cell-local control',title:'OBSERVE — control records the action.',copy:'The cell-local control observes the HR commit, links it to the trace and advances the action-budget meter. The execution is now measurable and attributable.'},
        {key:'prove',until:55,chip:'06 · Receipt / Prove',where:'Audit log + evaluation plane',title:'PROVE — the durable receipt is written.',copy:'Actor, evidence, decision and outcome are recorded together. The evaluation plane samples the result, and WorkAssist returns the confirmed outcome. Every action leaves a receipt.'}
      ]
    },
    factory:{
      number:'FILM 02 · THE CYBERNETIC FLOOR',title:'The line senses. The agent acts. The human owns.',premise:'Inside a live assembly cell, machine telemetry becomes a diagnosis, a human-approved intervention and an illustrated operational outcome.',total:103,duration:'01:43',aria:'Animated film showing a cybernetic factory line with human supervisors, robotic arms and governed agent execution',noteTitle:'The line resumes because authority stayed visible.',noteCopy:'The factory agent compresses detection, diagnosis and response without collapsing accountability. Telemetry rises from the floor; a bounded, approved command returns; the controller positions the robot while the technician performs maintenance.',beatScene:4,
      scenes:[
        {t:0,chip:'Opening · At work',where:'Factory cell · edge compute',title:'The floor is already in motion.',copy:'Line 4 runs under an overhead gantry. Three articulated arms work the conveyor loop while a line lead and on-shift technician supervise live production.'},
        {t:12,chip:'01 · Anomaly',where:'Southbound telemetry · ontology',title:'Robot 2 changes state.',copy:'Vibration rises to 8.7 mm/s. The sensor pulse climbs from the edge; the Machine object flips to degraded while the physical line remains visible to its human owners.'},
        {t:24,chip:'02 · Diagnosis',where:'Knowledge fabric + operational ontology',title:'Evidence becomes a grounded diagnosis.',copy:'The agent retrieves the current bearing SOP and Robot 2 maintenance history, then resolves Machine → Line → past WorkOrders → the technician on shift.'},
        {t:37,chip:'03 · Proposal',where:'Agent runtime',title:'The agent proposes; it does not quietly execute.',copy:'Replace spindle bearing, Robot 2. Estimated downtime: 22 minutes. The recommendation carries its evidence links and an illustrative confidence value.'},
        {t:50,chip:'04 · Human approval',where:'Factory floor · technician',title:'The technician says go.',copy:'The camera stays with the human. Robot 2 is in a safe hold while the on-shift technician reviews the bounded intervention and taps approve on the floor tablet.'},
        {t:76,chip:'05 · Execution',where:'Northbound activation · MES + robot controller',title:'The approved command returns to the floor.',copy:'The MES creates a bounded work order. Robot 2 enters the approved service position; the technician replaces the bearing. Controller confirms position; technician performs maintenance.'},
        {t:89,chip:'06 · Receipt',where:'Audit log + evaluation plane',title:'The outcome closes the loop.',copy:'The line resumes. The audit receipt binds actor, evidence, action and verified result; illustrative estimate downtime avoided feeds the evaluation loop for the next release.'}
      ],
      beats:[
        {key:'human',mode:'human',until:58,chip:'04 · Human approval / The tap',where:'Factory floor · technician',title:'The technician says go.',copy:'Robot 2 holds safely while the technician reviews the exact intervention. One deliberate tap launches the approval pulse; human authority is visible before any control machinery appears.'},
        {key:'control-1',mode:'controls',until:60,chip:'04 · Control journey / 01 of 09',where:'Action controls · Identity',title:'IDENTITY — who is asking?',copy:'The pulse verifies the line agent and the on-shift technician before it can travel farther.'},
        {key:'control-2',mode:'controls',until:62,chip:'04 · Control journey / 02 of 09',where:'Action controls · Authority',title:'AUTHORITY — may they approve?',copy:'Role and shift binding confirm that this technician can authorize this intervention.'},
        {key:'control-3',mode:'controls',until:64,chip:'04 · Control journey / 03 of 09',where:'Action controls · Policy',title:'POLICY — is the action allowed?',copy:'The proposed bearing replacement matches the current maintenance policy.'},
        {key:'control-4',mode:'controls',until:66,chip:'04 · Control journey / 04 of 09',where:'Action controls · Scope',title:'SCOPE — what may change?',copy:'The command is bounded to Robot 2 and service position. Nothing else is in scope.'},
        {key:'control-5',mode:'controls',until:68,chip:'04 · Control journey / 05 of 09',where:'Action controls · Evidence',title:'EVIDENCE — what supports it?',copy:'The current SOP, vibration trace and maintenance history remain attached to the decision.'},
        {key:'control-6',mode:'controls',until:70,chip:'04 · Control journey / 06 of 09',where:'Action controls · Risk',title:'RISK — are safeguards satisfied?',copy:'Safe hold and physical interlocks are active before execution can proceed.'},
        {key:'control-7',mode:'controls',until:72,chip:'04 · Control journey / 07 of 09',where:'Action controls · Budget',title:'BUDGET — is capacity available?',copy:'The action budget reserves the execution capacity and prevents unbounded work.'},
        {key:'control-8',mode:'controls',until:74,chip:'04 · Control journey / 08 of 09',where:'Action controls · Replay',title:'REPLAY — could it run twice?',copy:'A fresh idempotency key makes accidental duplicate execution fail closed.'},
        {key:'control-9',mode:'controls',until:76,chip:'04 · Control journey / 09 of 09',where:'Action controls · Receipt',title:'RECEIPT — can the result be proven?',copy:'A trace destination is reserved before execution. The action is now bounded, attributable and ready.'}
      ]
    }
  };
  var player=root.querySelector('#'+'player'),stage=root.querySelector('#'+'stage'),play=root.querySelector('#'+'play'),scrub=root.querySelector('#'+'scrub'),current=root.querySelector('#'+'current'),durationEl=root.querySelector('#'+'duration'),timecode=root.querySelector('#'+'timecode'),chip=root.querySelector('#'+'chip'),where=root.querySelector('#'+'where'),capTitle=root.querySelector('#'+'cap-title'),capCopy=root.querySelector('#'+'cap-copy'),chapters=root.querySelector('#'+'chapters'),filmNumber=root.querySelector('#'+'film-number'),filmTitle=root.querySelector('#'+'film-title'),filmPremise=root.querySelector('#'+'film-premise'),noteTitle=root.querySelector('#'+'note-title'),noteCopy=root.querySelector('#'+'note-copy');
  var active='employee',time=0,last=0,playing=false,raf=0,sceneIndex=-1,beatKey='',reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  function data(){return films[active]}
  function fmt(n){n=Math.max(0,Math.floor(n));return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0')}
  function sceneFor(t){var scenes=data().scenes;for(var i=scenes.length-1;i>=0;i--)if(t>=scenes[i].t)return i;return 0}
  function camera(){var worlds=root.querySelectorAll('.film-world');for(var i=0;i<worlds.length;i++){worlds[i].setAttribute('viewBox','0 0 1200 900');worlds[i].setAttribute('preserveAspectRatio',innerWidth<=760?'xMidYMid meet':'xMidYMid slice')}}
  function buildChapters(){chapters.innerHTML='';data().scenes.forEach(function(s,i){var b=document.createElement('button');b.className='chapter';b.innerHTML='<b>0'+(i+1)+'</b><span>'+s.chip.split('·').pop().trim()+'</span>';b.setAttribute('aria-label','Go to chapter '+(i+1)+': '+s.chip);b.onclick=function(){pauseFilm();setTime(s.t+.05)};chapters.appendChild(b)})}
  function render(){
    var f=data(),i=sceneFor(time),s=f.scenes[i],beat=null;
    if(f.beats&&i===f.beatScene){for(var k=0;k<f.beats.length;k++){if(time<f.beats[k].until){beat=f.beats[k];break}}beat=beat||f.beats[f.beats.length-1]}
    var nextBeat=beat?beat.key:'';
    if(i!==sceneIndex||nextBeat!==beatKey){sceneIndex=i;beatKey=nextBeat;stage.dataset.scene=i;if(beat){stage.dataset.beat=beat.key;chip.textContent=beat.chip;where.textContent=beat.where;capTitle.textContent=beat.title;capCopy.textContent=beat.copy}else{delete stage.dataset.beat;chip.textContent=s.chip;where.textContent=s.where;capTitle.textContent=s.title;capCopy.textContent=s.copy}Array.prototype.forEach.call(chapters.children,function(b,j){b.classList.toggle('active',j===i);b.setAttribute('aria-current',j===i?'step':'false')});camera()}
    current.textContent=fmt(time);timecode.textContent=fmt(time)+' / '+f.duration;scrub.value=time;scrub.style.setProperty('--progress',(time/f.total*100)+'%')
  }
  function tick(ts){if(!playing)return;if(!last)last=ts;time+=(ts-last)/1000;last=ts;if(time>=data().total){time=data().total;pauseFilm()}render();if(playing)raf=requestAnimationFrame(tick)}
  function playFilm(){if(time>=data().total)time=0;playing=true;last=0;player.classList.add('playing','manual-play');play.setAttribute('aria-label','Pause film');cancelAnimationFrame(raf);raf=requestAnimationFrame(tick)}
  function pauseFilm(){playing=false;player.classList.remove('playing');play.setAttribute('aria-label','Play film');cancelAnimationFrame(raf)}
  function setTime(t){time=Math.max(0,Math.min(data().total,t));render()}
  function selectFilm(name,autoplay){
    if(!films[name])return;pauseFilm();active=name;time=0;sceneIndex=-1;beatKey='';var f=data();
    player.dataset.film=name;player.setAttribute('aria-label',f.aria);filmNumber.textContent=f.number;filmTitle.textContent=f.title;filmPremise.textContent=f.premise;noteTitle.textContent=f.noteTitle;noteCopy.textContent=f.noteCopy;durationEl.textContent=f.duration;scrub.max=f.total;
    Array.prototype.forEach.call(root.querySelectorAll('.film-tab'),function(tab){var on=tab.dataset.film===name;tab.setAttribute('aria-selected',on?'true':'false')});
    Array.prototype.forEach.call(root.querySelectorAll('.film-world'),function(world){var on=world.id==='world-'+name;world.classList.toggle('active',on);world.hidden=!on;world.setAttribute('aria-hidden',on?'false':'true')});
    buildChapters();render();
  }
  Array.prototype.forEach.call(root.querySelectorAll('.film-tab'),function(tab){tab.onclick=function(){selectFilm(tab.dataset.film,true)}});
  play.onclick=function(){playing?pauseFilm():playFilm()};
  scrub.oninput=function(){pauseFilm();setTime(parseFloat(this.value))};
  scrub.onchange=function(){pauseFilm()};
  root.addEventListener('keydown',function(e){if(e.target.tagName==='INPUT'||e.target.tagName==='BUTTON')return;if(e.code==='Space'){e.preventDefault();playing?pauseFilm():playFilm()}if(e.key==='ArrowRight'){setTime(data().scenes[Math.min(data().scenes.length-1,sceneIndex+1)].t+.05)}if(e.key==='ArrowLeft'){setTime(data().scenes[Math.max(0,sceneIndex-1)].t+.05)}});
  addEventListener('resize',camera);selectFilm('employee',false);root.tabIndex=0;if('IntersectionObserver' in window)new IntersectionObserver(function(es){if(!es[0].isIntersecting)pauseFilm()},{threshold:.05}).observe(root);document.addEventListener('visibilitychange',function(){if(document.hidden)pauseFilm()});
})();
