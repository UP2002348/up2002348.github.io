function backToTop(){
    const backBtn = document.querySelector('#back')
    backBtn.addEventListener('click', () => {
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth",
        });
    })
    if (window.pageYOffset > 800){
        backBtn.style.visibility = 'visible';
    } else{
        backBtn.style.visibility = 'hidden';
    }
}



// Skills section
function skillStats(){
    const skillsContainer = document.querySelectorAll('.skills-img-container');
    for (const container of skillsContainer){
        const skillStat = container.dataset.stat;
        for (let i = 0; i < skillStat; i++){
            container.childNodes[i].style.opacity = 1;
        } 
    }
}

function addImages(where, imgPath, cls){
    for (const container of where){
        for (let i = 0; i < 10; i++){
            const img = document.createElement('img');
            img.src = imgPath;
            img.className = cls;
            img.style.opacity = '0.2';
            container.append(img);
        }
    }
}
    

// showcase animation
let elems = []; //list of elements to move lines in showcase
for (let i = 0; i < 21; i++){
    const tag = document.createElement('div');
    const numLines = Math.ceil(Math.random()*5);
    if (numLines === 1){
        const line = document.createElement('div');
        line.className = 'line';
        line.style.width = `100%`;
        tag.append(line)
    }else{
        for (let x = 0; x < numLines; x++){
            const line = document.createElement('div');
            line.className = 'line';
            line.style.width = `${Math.ceil(Math.random()*3)*15}%`;
            tag.append(line)
        }
    }
    tag.className = 'full-line';
    tag.style.bottom = `-${i*5}%`;
    elems.push(tag);
}

function moveText(main){

    for (const el of elems){
        let style = window.getComputedStyle(el);
        let matrix = new WebKitCSSMatrix(style.transform);
        el.style.transform = `translateY(${matrix.m42-0.6}px)`;
        if (el.getBoundingClientRect().bottom < main.getBoundingClientRect().top+50){
            el.style.opacity = `${style.getPropertyValue('opacity')-0.02}`;
        }
        if (el.getBoundingClientRect().bottom < main.getBoundingClientRect().top){
            el.style.transform = `translateY(${0}px)`;
            el.style.bottom = `-5%`;
            el.style.opacity = `${1}`;                 
        }
    }
    window.requestAnimationFrame(() => {moveText(main)})
    
}

function startAnimationEnviron(){
    const main = document.querySelector('.container');
    for (const el of elems){
        main.append(el);
    }

    window.requestAnimationFrame(() => {moveText(main)})
    
}

window.addEventListener('scroll', backToTop);
window.addEventListener('load', () => {
    addImages(document.querySelectorAll('.skills-img-container'), 'index/13.svg', 'skills-imgs')
    skillStats();
});
window.addEventListener('load', startAnimationEnviron);
