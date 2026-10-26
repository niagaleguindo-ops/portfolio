const d=document.getElementById('dlg'),di=d.querySelector('img');
document.querySelectorAll('[data-zoom]').forEach(b=>b.addEventListener('click',()=>{const i=b.querySelector('img');di.src=i.src;di.alt=i.alt;d.showModal()}));
d.addEventListener('click',()=>d.close());

document.querySelectorAll('.dn').forEach(w=>{const bs=[...w.querySelectorAll('.pb')],ss=[...w.querySelectorAll('.seg')],c=w.querySelector('.dc'),p=w.querySelector('.dnd');
const pick=i=>{bs.forEach((b,k)=>{b.setAttribute('aria-pressed',k===i);ss[k].classList.toggle('on',k===i)});w.classList.add('sel');const b=bs[i],h=document.createElement('b'),t=document.createElement('p');c.textContent=b.dataset.p+' %';h.textContent=b.dataset.p+' % · '+b.dataset.t;t.textContent=b.dataset.d;p.replaceChildren(h,t)};
bs.forEach((b,i)=>b.addEventListener('click',()=>pick(i)));ss.forEach((s,i)=>s.addEventListener('click',()=>pick(i)))});
