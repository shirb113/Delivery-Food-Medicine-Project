export const inBetween = (min, max, val) => (val >= min) && (val <= max)

export const isCanDisplay = (uId, x, y) => {
    const boundingBox = document.getElementById(uId).getBoundingClientRect();
    return inBetween(boundingBox.top, boundingBox.bottom, y) &&
        inBetween(boundingBox.left, boundingBox.right, x)
}
export const handleClick = (event, uId, handler) => {
    // debugger
    event.preventDefault();
    isCanDisplay(uId, event.clientX, event.clientY) && handler({
        mouseX: event.clientX - 2,
        mouseY: event.clientY - 4,
    });
};
