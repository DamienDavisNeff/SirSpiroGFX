// The ID is an array of elements to change the cursor while hovering over
function ChangeCursor(id,cursorType) {
    for(let a = 0; a < id.length; a++) {
        document.getElementById(id[a]).style.cursor = cursorType;
    }
}
// The state is the enabled status [true = enabled, false = disabled]
function ToggleButton(state,id) {
    document.getElementById(id).classList.add(state);
    document.getElementById(id).classList.remove(!state);
}
// The state is the enabled status [true = enabled, false = disabled]
function ToggleShadow(state,id) {
    for(let a = 0; a < id.length; a++) {
        document.getElementById(id[a]).classList.add(`${state}Shadow`);
        document.getElementById(id[a]).classList.remove(`${!state}Shadow`);
    }
}