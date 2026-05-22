const btn=document.getElementById('themeBtn');
btn.onclick=()=>{document.body.classList.toggle('dark');btn.textContent=document.body.classList.contains('dark')?'☀️ Light':'🌙 Dark'};
const colors=['var(--blue)','var(--red)','var(--yellow)','var(--green)'];
document.querySelectorAll('.tag').forEach(tag=>tag.onclick=()=>tag.style.borderColor=colors[Math.floor(Math.random()*colors.length)]);
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';}}));
document.querySelectorAll('.card').forEach(c=>{c.style.opacity=0;c.style.transform='translateY(20px)';c.style.transition='all .6s';obs.observe(c);});