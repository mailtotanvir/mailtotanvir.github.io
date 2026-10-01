(()=>{
 const toc=document.querySelector('.toc details'),mq=matchMedia('(max-width:950px)');
 const sync=()=>{toc.open=!mq.matches};sync();mq.addEventListener('change',sync);
 toc.querySelector('summary').addEventListener('click',e=>{if(!mq.matches)e.preventDefault()});
 const links=[...toc.querySelectorAll('nav a')],sections=links.map(a=>document.querySelector(a.hash));
 links.forEach(a=>a.addEventListener('click',()=>{const section=document.querySelector(a.hash);for(let p=section.parentElement;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;if(mq.matches)toc.open=false}));
 let scheduled=false;function update(){const doc=document.documentElement,total=doc.scrollHeight-doc.clientHeight;document.querySelector('.reading-progress').style.width=(total?doc.scrollTop/total*100:0)+'%';let current=sections[0];sections.forEach(s=>{if(s&&s.getBoundingClientRect().top<=innerHeight*.3)current=s});links.forEach(a=>{const active=a.hash==='#'+current.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});scheduled=false}
 addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update)}},{passive:true});update();
 document.getElementById('expand-blueprint').addEventListener('click',function(){const on=document.querySelector('.reading-layout').classList.toggle('diagram-expanded');this.setAttribute('aria-expanded',on);this.textContent=on?'Restore reading view':'Expand diagram';document.getElementById('blueprint').scrollIntoView({block:'start'})});
 // Open a reference contract when its deep link is loaded directly.
 function reveal(){if(!location.hash)return;const el=document.getElementById(location.hash.slice(1));if(el){for(let p=el.parentElement;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true}}
 addEventListener('hashchange',reveal);reveal();
 document.querySelectorAll('.protocol .stage').forEach(b=>{const panel=b.closest('section').querySelector('.stage-detail');if(panel){if(!panel.id)panel.id='action-stage-panel';b.setAttribute('aria-controls',panel.id)}});
})();
