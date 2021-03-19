
document.addEventListener('DOMContentLoaded', () => {
    const hide = 'none';
    const show = 'block';
    let { start, home, menu } = caller();
    let
        strt = start,
        hm = home,
        mn = menu;

    strt.addEventListener('click', () => {
        hm.style.display = show;
        mn.style.display = hide;
    })
});

function caller() {
    let start = document.getElementById('start');
    let home = document.getElementById('home');
    let menu = document.getElementById('menu');
    return { start, home, menu };
}

