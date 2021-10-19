// const infiniteText = ['<html>', '<body>', `\xa0\xa0\xa0\xa0<h1>Welcome</h1>`, '\xa0\xa0\xa0\xa0<p>I\'m Mehmet Mazi</p>', '\xa0\xa0\xa0\xa0<p>I make websites</p>', '</body>', '</html>'];
let elems = [];
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

function startEnvironment(){
    const main = document.querySelector('.container');
    for (const el of elems){
        main.append(el);
    }

    window.requestAnimationFrame(() => {moveText(main)})
    // setInterval(moveText, 60, main);
}

window.addEventListener('load', startEnvironment);