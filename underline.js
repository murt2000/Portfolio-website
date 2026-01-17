const titles = document.querySelectorAll('.link');
const underline = document.querySelector('.underline');

function moveUnderline(el) {
    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement.getBoundingClientRect();

    underline.style.width = rect.width + "px";
    underline.style.left = (rect.left - parentRect.left) + "px";
}

moveUnderline(document.querySelector('.active'));

titles.forEach(title => {
    title.addEventListener('mouseenter', () => moveUnderline(title));
    title.addEventListener('mouseleave', () => moveUnderline(document.querySelector('.active')));
});
