$ ->
    figures = $('.post')
    figures.on 'click', ->
        $(@).find 'figcaption'
        .fadeToggle(500)


    figures.on 'mousemove', (e) ->
        offset = $(@).offset()
        x = -(e.clientX - @offsetLeft + offset.left)/20
        y = -(e.clientY - @offsetTop + offset.top)/20

        $(@).find('figure').css('background-position', x + 'px ' + y + 'px')
