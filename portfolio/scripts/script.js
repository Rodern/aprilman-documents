$(document).ready((event)=>{
    // Sticky menu functionality
    let inlineMenu = $('.inline-menu')
    if (inlineMenu.length > 0) {
        let menuOffset = inlineMenu.offset().top
        $(document).scroll((event)=>{
            if(inlineMenu.offset().top < scrollY){
                inlineMenu.css('position', 'fixed')
                inlineMenu.css('top', '60px') // Account for header
            } else if(scrollY < menuOffset) {
                inlineMenu.css('position', 'static')
            }
        })
    }
    
    // Smooth scroll to projects section when "More" button is clicked
    $('.more-btn').on('click', function(e) {
        e.preventDefault();
        const projectsSection = $('.projects-section');
        if (projectsSection.length > 0) {
            $('html, body').animate({
                scrollTop: projectsSection.offset().top - 60
            }, 800);
        }
    });
})
