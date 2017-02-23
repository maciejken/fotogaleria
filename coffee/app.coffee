$ ->

    # show/hide nav menu bar
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
        img.css('left', x + 'px ')
        img.css('top', y + 'px')

    # show image on fullscreen
    figures.on 'click', ->
        img = $(@).find 'img'
        popupImg.attr('src', img.attr('src'))
        popup.addClass('fullscreen')
        popup.on 'click', ->
            $(@).removeClass('fullscreen')
            caption.hide()
            showBtn.removeClass 'icon-arrow-up'
            popupNav.hide()

    popup = $('.popup')
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
