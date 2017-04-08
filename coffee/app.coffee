$ ->

    # show/hide nav menu bar
    body = $('body')
    header = $('header')
    menuBtn = header.find '.icon-arrow-down'
    navMenu = $('nav.menu')

    menuBtn.on 'click', ->
        navMenu.slideToggle 500, =>
            if navMenu.is(':visible')
                $(@).toggleClass('icon-arrow-up')
                $(@).toggleClass('icon-arrow-down')
            else
                $(@).toggleClass('icon-arrow-up')
                $(@).toggleClass('icon-arrow-down')

    figures = $('figure.post')
    loaders = figures.find '.loader'
    # images = figures.find 'img'
    images = document.querySelectorAll 'figure.post > img'
    showImg = (image) ->
        image.parentElement.firstElementChild.style.display = 'none'
        image.style.display = 'inline'

    showImg(image) for image in images

    # body.on 'load', ->
    #     figures = $('figure.post')
    #     loaders = figures.find '.loader'
    #     images = figures.find 'img'

    # images.on 'load', ->
    #     $(@).prev().hide()
    #     $(@).fadeIn 500


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

        figHeight = figWidth*imgRatio

        # animacja przesuwania i powiększania klikniętego obrazka
        minWidth = Math.min(popupImg.outerWidth(), figWidth)
        minHeight = Math.min(popupImg.outerHeight(), figHeight)
        popupFig.animate
            top: window.innerHeight/2 - minHeight/2
            left: window.innerWidth/2 - minWidth/2
            width: minWidth
            height: minHeight
            500
        popupImg.animate
            margin: 0
            width: minWidth
            500
            ->
                # debugger
                initFigCSS =
                    position: 'static'
                    top: 'auto'
                    left: 'auto'
                    height: 'auto'

                popupFig.css initFigCSS
                popupImg.css 'width', '100%'
                popupFig.animate
                    width: figWidth
                    500
                    ->
                        popupNav.css 'display', 'flex'
                        popupFig.css
                            position: 'relative'
                            # żeby górny pasek i opis były we właściwym miejscu

        $(window).on 'resize', ->
            winRatio = $(@).innerHeight() / $(@).innerWidth()
            figWidth = $(@).innerWidth() * (winRatio/imgRatio)
            popupFig.css
                width: figWidth
            caption.outerWidth(figWidth)
                # poprawka responsywności: szerokość obrazka

        popup.on 'click', ->
            $(@).removeClass 'fullscreen'
            caption.hide()
            $(@).css 'opacity', 0
            $(@).find('figcaption').remove()

            popupFig.css 'position', 'absolute'
            popupImg.attr 'src', ''
            showBtn.removeClass 'icon-arrow-up'
            popupNav.css 'display', 'none'

    popup = $('.popup')

    popupFig = popup.find 'figure'
    popupImg = popup.find 'img'
    popupNav = popup.find 'nav'

    popupNav.on 'click', (e) ->
        e.stopImmediatePropagation()
    closeBtn = popupNav.find '.icon-close'
    showBtn = popupNav.find '.icon-arrow-down'

    # exit fullscreen mode
    closeBtn.on 'click', ->
        popup.click()

    # toggle caption visibility
    showBtn.on 'click', (e) ->
        caption = popup.find 'figcaption'
        imgHeight = popupImg.outerHeight()
        navHeight = $(@).parent().outerHeight()
        # caption.outerHeight(imgHeight - navHeight)
        caption.toggleClass 'active'
        if caption.hasClass 'active'
            caption.css
                top: navHeight
            caption.animate
                height: imgHeight - navHeight
                500
        else
            caption.animate
                height: 0
                500
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
        e.stopImmediatePropagation()
