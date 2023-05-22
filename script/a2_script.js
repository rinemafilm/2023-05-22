$(function(){
    $('header nav>ul').hover(
        function(){
            $('.sub, .headerBg').stop().slideDown()
         },
        function(){
            $('.sub, .headerBg').stop().slideUp()
        }
    )

    setInterval(function(){
        $('.slide').animate({top:-300}, function(){
            $('.slide a:first').appendTo('.slide')
            $('.slide').css('top', 0)

        })
    },3000)

    $('.notice li a:first').click(function(){
        $('#popup, .Bg').show()
    })

    $('.close').click(function(){
        $('#popup, .Bg').hide()
    })
})