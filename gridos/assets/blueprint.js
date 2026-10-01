
    (function(){var root=document.querySelector('.blueprint-host');
      var nodes=root.querySelectorAll('.node');nodes.forEach(function(n){n.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();n.click()}})});
      var title=root.querySelector('#'+'focus-title');
      var own=root.querySelector('#'+'focus-own');
      var never=root.querySelector('#'+'focus-never');
      nodes.forEach(function(node){node.addEventListener('click',function(){nodes.forEach(function(n){n.classList.remove('active')});node.classList.add('active');title.textContent=node.dataset.title;own.textContent=node.dataset.own;never.textContent=node.dataset.never;});});

      var pathButtons=root.querySelectorAll('[data-path]');
      pathButtons.forEach(function(btn){btn.addEventListener('click',function(){pathButtons.forEach(function(b){b.classList.remove('active');b.setAttribute('aria-selected','false')});root.querySelectorAll('.pathway').forEach(function(p){p.classList.remove('active')});btn.classList.add('active');btn.setAttribute('aria-selected','true');root.querySelector('#'+'path-'+btn.dataset.path).classList.add('active');});});

      var stages=[
        ['01 · VALIDATE','Reject malformed or semantically impossible intent.','Compiled schema, domain invariants and current-state preconditions.','Validation result names contract version, failed invariant and immutable request hash.'],
        ['02 · AUTHORIZE','Decide whether this subject may request this change for this purpose.','Identity, delegated scope, resource policy, risk tier and current context.','Signed decision records bundle version, inputs, result and enforcement point.'],
        ['03 · CONSTRAIN','Reduce the requested operation to a safe, explicit envelope.','Field allowlists, value bounds, rate limits, spend caps and permitted destinations.','Effective constraint set is attached to the intent before execution.'],
        ['04 · CHECK VERSION','Prevent overwriting a state the proposer never saw.','Expected object version, source revision and optimistic concurrency check.','A stale request fails before side effects and records the conflicting version.'],
        ['05 · PERSIST INTENT','Make the decision durable before touching a downstream system.','Transactional outbox with action ID, idempotency key, payload hash and valid payload-bound approval.','Resume the same intent after a crash; observe uncertain external effects before any retry.'],
        ['06 · EXECUTE','Invoke the correct adapter within its declared blast radius.','Workload identity, scoped credential, timeout, retry class and network policy.','Adapter records attempt, destination, request digest and provider response class.'],
        ['07 · VERIFY EFFECT','Distinguish accepted requests from completed business effects.','Read-after-write, event correlation or domain-specific acknowledgement.','Observed downstream state is compared with the declared expected effect.'],
        ['08 · COMPENSATE','Restore a safe state when a reversible multi-step action fails.','Versioned compensation command, retry policy and human escalation boundary.','Compensation and remaining discrepancy share the original action ID.'],
        ['09 · RECONCILE','Bring source, projection, event stream and evidence into agreement.','Reconciliation worker, dead-letter queue, drift detector and incident workflow.','Terminal receipt names success, compensation or unresolved exception with owner.']
      ];
      var stageButtons=root.querySelectorAll('.protocol .stage');
      stageButtons.forEach(function(btn){btn.addEventListener('click',function(){var d=stages[Number(btn.dataset.stage)];stageButtons.forEach(function(b){b.classList.remove('active')});btn.classList.add('active');stageButtons.forEach(function(b){b.setAttribute('aria-selected',b===btn?'true':'false')});root.querySelector('#'+'stage-title').textContent=d[0];root.querySelector('#'+'stage-summary').textContent=d[1];root.querySelector('#'+'stage-mech').textContent=d[2];root.querySelector('#'+'stage-proof').textContent=d[3];});});

      var scenarioTabs=root.querySelectorAll('[data-scenario-tab]');
      var scenarioTimers=[];
      function stopAllPlayers(){scenarioTimers.forEach(function(t){clearInterval(t)});scenarioTimers=[];root.querySelectorAll('[data-play]').forEach(function(b){b.textContent='Play';b.setAttribute('aria-pressed','false')});}
      function setScenarioStep(player,index){
        var steps=Array.prototype.slice.call(player.querySelectorAll('.scenario-step'));
        if(!steps.length)return;
        index=(index+steps.length)%steps.length;
        player.dataset.index=String(index);
        steps.forEach(function(step,i){step.classList.toggle('active',i===index)});
        var step=steps[index];
        var regions=(step.dataset.region||'').split(',');
        player.querySelectorAll('.trace-region').forEach(function(r){r.classList.toggle('active',regions.indexOf(r.dataset.region)>-1)});
        var detail=player.querySelector('.scenario-detail');
        detail.querySelector('i').textContent=step.dataset.phase+' · STEP '+String(index+1).padStart(2,'0');
        detail.querySelector('h3').textContent=step.dataset.title;
        var ps=detail.querySelectorAll('p');
        ps[0].textContent=step.dataset.copy;
        ps[1].innerHTML='<b>CONTROL</b> · '+step.dataset.control;
        player.querySelector('.scenario-progress').textContent='STEP '+String(index+1).padStart(2,'0')+' / '+String(steps.length).padStart(2,'0');
      }
      root.querySelectorAll('.scenario-player').forEach(function(player){
        player.dataset.index='0';setScenarioStep(player,0);
        player.querySelectorAll('.scenario-step').forEach(function(step,i){step.addEventListener('click',function(){stopAllPlayers();setScenarioStep(player,i)})});
        player.querySelector('[data-prev]').addEventListener('click',function(){stopAllPlayers();setScenarioStep(player,Number(player.dataset.index)-1)});
        player.querySelector('[data-next]').addEventListener('click',function(){stopAllPlayers();setScenarioStep(player,Number(player.dataset.index)+1)});
        player.querySelector('[data-play]').addEventListener('click',function(){
          var btn=this;if(btn.getAttribute('aria-pressed')==='true'){stopAllPlayers();return}
          stopAllPlayers();btn.textContent='Pause';btn.setAttribute('aria-pressed','true');
          var timer=setInterval(function(){var next=Number(player.dataset.index)+1;var total=player.querySelectorAll('.scenario-step').length;if(next>=total){stopAllPlayers();return}setScenarioStep(player,next)},2200);scenarioTimers.push(timer);
        });
      });
      scenarioTabs.forEach(function(btn){btn.addEventListener('click',function(){stopAllPlayers();scenarioTabs.forEach(function(b){b.classList.remove('active');b.setAttribute('aria-selected','false')});root.querySelectorAll('.scenario-player').forEach(function(p){p.classList.remove('active')});btn.classList.add('active');btn.setAttribute('aria-selected','true');root.querySelector('[data-scenario="'+btn.dataset.scenarioTab+'"]').classList.add('active')})});

      var links=root.querySelectorAll('.section-nav a');
      var sections=root.querySelectorAll('section[data-nav]');
      if('IntersectionObserver' in window){var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){links.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id)});}});},{rootMargin:'-20% 0px -70% 0px'});sections.forEach(function(s){observer.observe(s)});}
    })();
  