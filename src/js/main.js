const topMenu = document.getElementById('top-menu');
const toggleTopMenu = document.getElementById('toggle-top-menu');

toggleTopMenu.addEventListener('click', (e) => {
    if (toggleTopMenu.contains(e.target)) {
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('topmenu-expended');
    } else {
        if (topMenu.classList.contains('topmenu-expended')) {
            alert('Hello')
        }
    }
    document.addEventListener('click', (e) => {
        if (!toggleTopMenu.contains(e.target) && !topMenu.contains(e.target)) {
            topMenu.classList.remove('topmenu-expended');
            topMenu.classList.add('hidden');
        }
    });
})