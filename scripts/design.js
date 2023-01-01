function SetActive(id) {
    const _this = document.getElementById(id);
    _this.classList.remove('inactive');
    _this.classList.add('active');
}
function SetInactive(id) {
    const _this = document.getElementById(id);
    _this.classList.remove('active');
    _this.classList.add('inactive');
}

function FadeIn(id,duration) {
    document.getElementById(id).style.transitionDuration = "0ms";
    document.getElementById(id).style.opacity = 0;
    document.getElementById(id).style.transitionDuration = `${duration}ms`;
    document.getElementById(id).style.opacity = 1;
}
function FadeOut(id,duration) {
    document.getElementById(id).style.transitionDuration = "0ms";
    document.getElementById(id).style.opacity = 1;
    document.getElementById(id).style.transitionDuration = `${duration}ms`;
    document.getElementById(id).style.opacity = 0;
}