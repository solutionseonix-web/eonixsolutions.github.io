const menuButton=document.querySelector('.menu');
const links=document.querySelector('.links');
if(menuButton&&links){menuButton.addEventListener('click',()=>links.classList.toggle('open'));document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')))}
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
const form=document.getElementById('form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent(d.get('subject'));const body=encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\n\nMessage:\n${d.get('message')}`);window.location.href=`mailto:solutionseonix@gmail.com?subject=${subject}&body=${body}`;});}
