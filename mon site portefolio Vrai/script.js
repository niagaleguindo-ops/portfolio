const d=document.getElementById('dlg'),di=d.querySelector('img');
document.querySelectorAll('[data-zoom]').forEach(b=>b.addEventListener('click',()=>{const i=b.querySelector('img');di.src=i.src;di.alt=i.alt;d.showModal()}));
d.addEventListener('click',()=>d.close());

document.querySelectorAll('.dn').forEach(w=>{const bs=[...w.querySelectorAll('.pb')],ss=[...w.querySelectorAll('.seg')],c=w.querySelector('.dc'),p=w.querySelector('.dnd');
const pick=i=>{bs.forEach((b,k)=>{b.setAttribute('aria-pressed',k===i);ss[k].classList.toggle('on',k===i)});w.classList.add('sel');const b=bs[i],h=document.createElement('b'),t=document.createElement('p');c.textContent=b.dataset.p+' %';h.textContent=b.dataset.p+' % · '+b.dataset.t;t.textContent=b.dataset.d;p.replaceChildren(h,t)};
bs.forEach((b,i)=>b.addEventListener('click',()=>pick(i)));ss.forEach((s,i)=>s.addEventListener('click',()=>pick(i)))});

document.querySelectorAll('.ideal').forEach(w=>{const ts=[...w.querySelectorAll('[role=tab]')],ps=[...w.querySelectorAll('[role=tabpanel]')];
const pick=(i,f)=>{ts.forEach((t,k)=>{t.setAttribute('aria-selected',k===i);t.tabIndex=k===i?0:-1;ps[k].hidden=k!==i});if(f)ts[i].focus()};
w.classList.add('on');
ts.forEach((t,i)=>{t.addEventListener('click',()=>pick(i));t.addEventListener('keydown',e=>{const n=ts.length,j=e.key==='ArrowRight'?(i+1)%n:e.key==='ArrowLeft'?(i+n-1)%n:-1;if(j>=0){e.preventDefault();pick(j,1)}})});
pick(0)});
