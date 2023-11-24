document.addEventListener('DOMContentLoaded', function() {
    let header = document.getElementById('myHeader');
    let page = document.getElementById('page');
    let openMenuButton = document.getElementById('openmenu');

    window.addEventListener('scroll', function() {
        page.classList.remove('menuopen');
        if (window.scrollY >= 100) {
            header.classList.add('sticky');
        } else {
            // header.classList.remove('sticky');
        }
    });

    page.addEventListener('click', function() {
        page.classList.remove('menuopen');
        header.classList.add('sticky');
    })

    // Event listener to remove the sticky class when the button is clicked
    openMenuButton.addEventListener('click', function() {
        header.classList.remove('sticky');
        page.classList.add('menuopen');
    });

    let links = document.querySelectorAll('a[to^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default action
            event.preventDefault();

            // Get the target element
            let targetId = this.getAttribute('to');
            let targetElement = document.querySelector(targetId);

            // Smooth scroll to target
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }

            page.classList.remove('menuopen');
            page.classList.add('menuopen');
        });
    });
});