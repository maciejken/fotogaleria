$ ->
    figures = $('figure')
    splash = $('.splash')
    teaser = $('.teaser')
    teaser.on 'click', ->
        false
    thumbnail = splash.find 'img'
    figures.on 'click', ->
        img = $(@).find 'img'
        thumbnail.attr('src', img.attr('src'))
        splash.addClass('fullscreen')
        splash.on 'click', ->
            $(@).removeClass('fullscreen')


    figures.on 'mousemove', (e) ->
        offset = $(@).offset()
        x = -(e.pageX - offset.left)/20
        y = -(e.pageY - offset.top)/20

        img = $(@).find 'img'
        img.css('left', x + 'px ')
        img.css('top', y + 'px')
