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

addAnimation()