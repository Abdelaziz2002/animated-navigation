const menuBars= document.getElementById('menu-bars')
const bar1=document.getElementById('bar1')
const bar2=document.getElementById('bar2')
const bar3=document.getElementById('bar3')
const overlay =document.getElementById('overlay')
const nav1=document.getElementById('nav-1')
const nav2=document.getElementById('nav-2')
const nav3=document.getElementById('nav-3')
const nav4=document.getElementById('nav-4')
const nav5=document.getElementById('nav-5')
const navItems=[nav1,nav2,nav3,nav4,nav5];

function navanimate(direction1,direction2){
    navItems.forEach((nav, i) =>{
        console.log(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`);
        nav.classList.replace(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`)
    })  
}

function togglebar(){
    menuBars.classList.toggle('change')
    overlay.classList.toggle('changeActive')
    if (overlay.classList.contains('changeActive')) {
        overlay.classList.replace('slide-left','slide-right')
    //animation 
        navanimate('out','in');
    }else{
        overlay.classList.remove('slide-right');
        overlay.classList.add('slide-left');
        navanimate('in','out');
    }
}

// add eventlistenner
menuBars.addEventListener('click',togglebar)
navItems.forEach((nav)=>{
    nav.addEventListener('click',togglebar)
})