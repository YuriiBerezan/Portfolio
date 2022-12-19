$(function () {
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    // let introH = intro.innerHeight();
    // let scrollPos = $(window).scrollTop();
 

/*Filter*/
    let filter = $("[data-filter]");
    filter.on("click", function (event) {
        event.preventDefault();
        let cat = $(this).data('filter')
        if (cat == 'all') {
            $("[data-cat]").removeClass('hide')
        }
        else {
            $("[data-cat").each(function () {
            let workCat = $(this).data('cat');
            if (workCat!= cat) 
            {
                $(this).addClass('hide')
            }
            else {
                $(this).removeClass('hide')
            }
           
        });
        }
        
    });

    /*Modal*/
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");
    


    modalCall.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');
        // console.log(modalId);
    })

    modalClose.on("click", function (event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $("body").removeClass('no-scroll');
        // console.log(modalParent);
    })

     $('.modal').on("click", function (event) {
             
        $(this).removeClass('show');
        $("body").removeClass('no-scroll');
        // console.log(modalParent);
    })
    
    $('.modal__dialog').on("click", function (event) {
        event.stopPropagation();   
       
    })


    navToggle.on("click", function (event) {
        event.preventDefault();
        nav.toggleClass("show__menu");
    });


    
     $("[data-scroll]").on("click", function (event) {
       
        event.preventDefault();

        let elemntId = $(this).data('scroll');

        let elementOffset = $(elemntId).offset().top;
        nav.removeClass("show__menu");
        console.log(elementOffset);

        $("html , body").animate({
            scrollTop: elementOffset -100
        }, 700);

    });
});