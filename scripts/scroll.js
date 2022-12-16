imgs = document.getElementsByClassName("globalImage");

FindImages();
function FindImages() {
    var scalingInterval = setInterval(() => {
        imgs = document.getElementsByClassName("globalImage");
        if(imgs.length > 0) {
            clearInterval(scalingInterval);
            FindScale();
        }
    }, 10);
}
function FindScale() {
    var percent = 100/imgs.length;
    const smallSize = `width:${(percent-2)}%;`;
    const bigSize = `width:${(percent+12)}%;`;
    const globalStyle = `transition-duration:250ms;vertical-align:middle;margin-right:0.1%;margin-left:0.1%;margin-bottom:0.3%;border-radius:5%;filter: drop-shadow(0px 0px 3px black)`;
    for(let a = 0; a < imgs.length; a++) {
        imgs[a].setAttribute("style",`${smallSize}${globalStyle}`);
        imgs[a].setAttribute("onmouseenter",`this.setAttribute("style","${bigSize}${globalStyle}")`);
        imgs[a].setAttribute("onmouseleave",`this.setAttribute("style","${smallSize}${globalStyle}")`);
    }
}
function ChangeScale() {

}