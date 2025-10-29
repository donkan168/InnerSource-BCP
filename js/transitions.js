document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a:not([target="_blank"])');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (link.href && link.href.indexOf('#') === -1) {
                e.preventDefault();
                document.body.style.opacity = 0;
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            }
        });
    });

    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.opacity = 1;
        document.body.style.transition = 'opacity 0.3s ease';
    }, 0);
});