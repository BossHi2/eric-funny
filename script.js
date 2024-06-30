const scroller = document.getElementsByClassName('rizz-img-wrapper')[0]
const slider = scroller.getElementsByClassName('rizz-img-slide')[0]

function addAnimation(){
    const imgs = Array.from(slider.children)
    
    imgs.forEach((img) => {
        const duplicatedImg = img.cloneNode(true);
        duplicatedImg.setAttribute("aria-hidden", true);
        slider.appendChild(duplicatedImg);
    })
}
function unblur(){
    const imgparent = document.getElementsByClassName('text-img-wrapper')[0]
    const img = imgparent.getElementsByTagName('img')[0]
    img.classList.add('unblur')
    const btnparent = document.getElementsByClassName('spoiler-wrapper')[0];
    btnparent.style.zIndex = -1
}

addAnimation()