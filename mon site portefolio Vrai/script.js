const d=document.getElementById('dlg'),di=d.querySelector('img');
document.querySelectorAll('[data-zoom]').forEach(b=>b.addEventListener('click',()=>{const i=b.querySelector('img');di.src=i.src;di.alt=i.alt;d.showModal()}));
d.addEventListener('click',()=>d.close());
