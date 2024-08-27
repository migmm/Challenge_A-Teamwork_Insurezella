
/* 

¯\_(ツ)_/¯

*/

document.addEventListener('DOMContentLoaded', function() {
    // Closes the navigation menu when an item is clicked

    const menuLinks = document.querySelectorAll('#navbar-menu ul a');
    const menuToggle = document.getElementById('menuToggle');

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.checked = false;
        });
    });
});