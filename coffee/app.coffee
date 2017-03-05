$ ->

    # show/hide nav menu bar
    body = $('body')
    header = $('header')
    menuBtn = header.find 'a'
    navMenu = $('nav.menu')
    navMenu.hide()
    menuBtn.on 'click', ->
        navMenu.slideToggle 500
        $(@).toggleClass('icon-arrow-up')
        $(@).toggleClass('icon-arrow-down')

    figures = $('figure.post')

    # move image on mousemove
    figures.on 'mousemove', (e) ->
        offset = $(@).offset()
        x = -(e.pageX - offset.left)/20
        y = -(e.pageY - offset.top)/20

        img = $(@).find 'img'
        img.css
            left: x + 'px'
            top: y + 'px'

    # show image on fullscreen
    initImgCSS =
        maxWidth: 'none'
        opacity: 0

    popupImgCSS =
        maxWidth: '100%'
        width: '100%'
    figures.on 'click', ->
        img = $(@).find 'img'
        offset = @getBoundingClientRect()
        popup.addClass('fullscreen')
        popupImg.attr('src', img.attr('src'))
        popup.animate
            opacity: 1
            500
        popupFig.css
            top: offset.top
            left: offset.left
            width: $(@).width()
            height: $(@).height()
        popupImg.css
            width: img.width()
            margin: img.css('margin')
            opacity: 1

        winWidth = window.innerWidth
        winHeight = window.innerHeight
        winRatio =  winHeight / winWidth
        imgRatio = img.outerHeight() / img.outerWidth()

        $('p.width').text(window.innerWidth + ' ' + winWidth)

        if winRatio < imgRatio
            figWidth = winWidth*(winRatio/imgRatio)
        else
            figWidth = winWidth

        # popupFig.animate
        #     width: figWidth
        #     500
        #     ->
        #         popupFig.animate
        #             height: popupImg.outerHeight()
        #             500
        #             ->
        #                 popupImg.animate
        #                     opacity: 1
        #                     500

        # popupFig.animate
        #     top: window.innerHeight/2 - @offsetHeight/2
        #     left: window.innerWidth/2 - @offsetWidth/2 - 10
        #     500
        #     ->
        #         $(@).css
        #             position: 'static'
        #             top: 'auto'
        #             left: 'auto'
        #         popupFig.animate
        #             width: popupImg.outerWidth()
        #             height: popupImg.outerHeight()
        #             500
        #             'linear'
        #         popupImg.animate
        #             margin: 0
        #             500
        #             'linear'
        #             ->
        #                 popupFig.css
        #                     position: 'relative'
        #                     width: 'auto'
        #                     height: 'auto'
        #                 popupImg.css popupImgCSS
        #                 popupFig.animate
        #                     width: figWidth
        #                     height: figWidth*imgRatio
        #                     700

        popupFig.animate
            top: window.innerHeight/2 - popupImg.outerHeight()/2
            left: window.innerWidth/2 - popupImg.outerWidth()/2 - 10
            width: popupImg.outerWidth()
            height: popupImg.outerHeight()
            500
            'linear'
        # debugger
        popupImg.animate
            margin: 0
            500
            'linear'
            ->
                popupFig.css
                    position: 'static'
                    top: 'auto'
                    left: 'auto'
                popupImg.css popupImgCSS
                popupFig.animate
                    width: figWidth
                    height: figWidth*imgRatio
                    700
                    ->
                        popupFig.css
                            position: 'relative'
                            # width: 'auto'
                            # height: 'auto'

        popup.on 'click', ->
            $(@).removeClass('fullscreen')
            caption.hide()
            $(@).css('opacity', 0)
            popupImg.css initImgCSS
            popupFig.css
                width: '20px'
                height: '20px'
                position: 'absolute'
            showBtn.removeClass 'icon-arrow-up'
            popupNav.hide()

    popup = $('.popup')

    popupFig = popup.find 'figure'
    popupImg = popup.find 'img'
    popupNav = popup.find 'nav'
    popupNav.hide()
    popupNav.on 'click', ->
        false
    closeBtn = popupNav.find '.icon-close'
    showBtn = popupNav.find '.icon-arrow-down'
    caption = popup.find 'figcaption'

    # exit fullscreen mode
    closeBtn.on 'click', ->
        popup.click()

    # toggle caption visibility
    showBtn.on 'click', ->
        imgHeight = popupImg.outerHeight()
        navHeight = $(@).parent().outerHeight()
        caption.outerHeight(imgHeight - navHeight)
        caption.css('top', navHeight)
        caption.slideToggle 500
        $(@).toggleClass('icon-arrow-up')

    $(window).on 'resize', ->
        imgHeight = popupImg.outerHeight()
        navHeight = popupNav.outerHeight()
        caption.outerHeight(imgHeight - navHeight)
        caption.css('top', navHeight)

    popupImg.on 'click', (e) ->
        popupNav.fadeToggle 500
        e.stopImmediatePropagation()

    caption.on 'click', (e) ->
        e.stopImmediatePropagation()
