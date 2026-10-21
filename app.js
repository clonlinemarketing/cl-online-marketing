// Google Tag Manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TP7ZMKHV');
// End Google Tag Manager

const footerCopyright=document.querySelector('.footer-bottom > span:first-child');
if(footerCopyright){footerCopyright.textContent='© 2026 CL Online Marketing Agency | Reg: 201903010031 (002924457-K)';}

const header=document.querySelector('.site-header');addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30),{passive:true});const trigger=document.querySelector('.nav-trigger'),mega=document.querySelector('.mega');trigger?.addEventListener('click',()=>{mega.hidden=!mega.hidden;trigger.setAttribute('aria-expanded',String(!mega.hidden))});document.addEventListener('keydown',e=>{if(e.key==='Escape'){mega.hidden=true;trigger.setAttribute('aria-expanded','false');document.querySelector('.nav').classList.remove('open');document.querySelector('.menu-toggle').setAttribute('aria-expanded','false')}});document.addEventListener('click',e=>{if(!header.contains(e.target)){mega.hidden=true;trigger.setAttribute('aria-expanded','false')}});document.querySelector('.menu-toggle')?.addEventListener('click',e=>{const open=document.querySelector('.nav').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('.service-item').forEach(el=>{const activate=()=>{document.querySelectorAll('.service-item').forEach(x=>x.classList.remove('active'));el.classList.add('active');const title=document.querySelector('#preview-title'),desc=document.querySelector('#preview-desc'),mock=document.querySelector('#preview-mock');if(title){title.textContent=el.dataset.title;desc.textContent=el.dataset.desc;mock.textContent=el.dataset.mock}};el.addEventListener('mouseenter',activate);el.addEventListener('focusin',activate)});
document.querySelectorAll('.industry-tabs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.industry-tabs button').forEach(x=>x.setAttribute('aria-pressed','false'));btn.setAttribute('aria-pressed','true');document.querySelector('#industry-name').textContent=btn.textContent;document.querySelector('#industry-copy').textContent=btn.dataset.copy}));
