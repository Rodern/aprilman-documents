$(document).ready((e)=>{
    // Hide loader and show main content
    const loader = $('#loader');
    const main = $('main');
    
    if (loader.length) {
        loader.addClass('fade-out');
        setTimeout(() => {
            loader.remove();
        }, 300);
    }
    
    main.fadeIn(1200).ready((e)=>{
        main.css('display', 'flex')
    })
    
    let moreBtn = $('.more-btn')
    moreBtn.click((e) => {
        if(location.hash == ''){
            location.href = location.href + '#content'
            return
        }
        location.href =  location.href.replace('#content', '#content')
        moreBtn.blur()
    })
    
    // Add keyboard accessibility to More button
    moreBtn.keypress((e) => {
        if(e.which === 13) { // Enter key
            moreBtn.click();
        }
    })
})