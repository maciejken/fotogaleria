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

    initFigCSS =
        position: 'static'
        top: 'auto'
        left: 'auto'
        height: 'auto'

    popupImgCSS =
        # maxWidth: '100%'
        width: '100%'
    figures.on 'click', ->
        img = $(@).find 'img'
        caption = $(@).find 'figcaption'
        offset = @getBoundingClientRect()
        popup.addClass('fullscreen')
        popupFig.append caption.clone()
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

        # $('p.width').text(window.innerWidth + ' ' + winWidth)

        if winRatio < imgRatio
            figWidth = winWidth*(winRatio/imgRatio)
        else
            figWidth = winWidth

        # animacja przesuwania i powiększania klikniętego obrazka
        minWidth = Math.min(popupImg.outerWidth(), figWidth)
        minHeight = Math.min(popupImg.outerHeight(), figWidth)
        popupFig.animate
            top: window.innerHeight/2 - minHeight/2
            left: window.innerWidth/2 - minWidth/2
            width: minWidth
            height: minHeight
            500
        popupImg.animate
            margin: 0
            500
            ->
                # debugger
                popupFig.css initFigCSS
                popupImg.css popupImgCSS
                popupFig.animate
                    width: figWidth
                    500
                    ->
                        popupFig.css
                            position: 'relative'
                            # żeby górny pasek i opis były we właściwym miejscu

        $(window).on 'resize', ->
            winRatio = $(@).innerHeight() / $(@).innerWidth()
            figWidth = $(@).innerWidth() * (winRatio/imgRatio)
            popupFig.css
                width: figWidth
                # poprawka responsywności: szerokość obrazka

        popup.on 'click', ->
            $(@).removeClass('fullscreen')
            caption.hide()
            $(@).css('opacity', 0)
            $(@).find('figcaption').remove()
            popupImg.css initImgCSS
            popupFig.css
                width: '20px'
                height: '20px'
                position: 'absolute'
            popupImg.attr 'src', ''
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

    # exit fullscreen mode
    closeBtn.on 'click', ->
        popup.click()

    # toggle caption visibility
    showBtn.on 'click', ->
        caption = popup.find 'figcaption'
        imgHeight = popupImg.outerHeight()
        navHeight = $(@).parent().outerHeight()
        caption.outerHeight(imgHeight - navHeight)
        caption.css('top', navHeight)
        caption.slideToggle 500
        $(@).toggleClass('icon-arrow-up')

        caption.on 'click', (e) ->
            e.stopImmediatePropagation()

        $(window).on 'resize', ->
            imgHeight = popupImg.outerHeight()
            navHeight = popupNav.outerHeight()
            caption.outerHeight(imgHeight - navHeight)
            caption.css('top', navHeight)
            # poprawka responsywności dla górnej belki i opisu


    popupImg.on 'click', (e) ->
        popupNav.fadeToggle 500
        e.stopImmediatePropagation()
