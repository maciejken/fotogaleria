
console.log 'u mnie działa :)'

BoxOpened = ''
ImgOpened = ''
Counter = 0
ImgFound = 0

Source = '#boxcard'

ImgSource = [
    'images/0.png'
    'images/1.png'
    'images/2.png'
    'images/3.png'
    'images/4.png'
    'images/5.png'
    'images/6.png'
    'images/7.png'
    'images/8.png'
    'images/9.png'
]

RandomFunction = (MaxValue, MinValue) ->
    Math.round(Math.random() * (MaxValue - MinValue) + MinValue)

ShuffleImages = () ->
    ImgAll = $(Source).children()
    ImgThis = $(Source + ' div:first-child')
    ImgArr = []

    for i in ImgAll
        ImgArr[i] = $('#' + ImgThis.attr('id') + ' img').attr('src')
        ImgThis = ImgThis.next()

    ImgThis = $(Source + ' div:first-child')

    for z in ImgAll
        RandomNumber = RandomFunction(0, ImgArr.length - 1)
        $('#' + ImgThis.attr('id') + ' img').attr('src', ImgArr[RandomNumber])
        ImgArr.splice(RandomNumber, 1)
        ImgThis = ImgThis.next()

ResetGame = () ->
    ShuffleImages()
    $(Source + ' div img').hide()
    $(Source + ' div').css('visibility', 'visible')
    Counter = 0
    $('#success').remove()
    $('#counter').html('' + Counter)
    BoxOpened = ''
    ImgOpened = ''
    ImgFound = 0
    false

OpenCard = () ->
    id = $(@).attr('id')

    if ($('#' + id + ' img').is(':hidden'))
        $(Source + ' div').off('click')

        $('#' + id + ' img').slideDown('fast')

        if (ImgOpened == '')
            BoxOpened = id
            ImgOpened = $('#' + id + ' img').attr('src')
            setTimeout ( ->
                $(Source + ' div').on('click', OpenCard)
                ), 300
        else
            CurrentOpened = $('#' + id + ' img').attr('src')
            if ImgOpened isnt CurrentOpened
                setTimeout ( ->
                    $('#' + id + ' img').slideUp('fast')
                    BoxOpened = ''
                    ImgOpened = ''
                    ), 400
            else
                $('#' + id + ' img').parent().css('visibility', 'hidden')
                $('#' + BoxOpened + ' img').parent().css('visibility', 'hidden')
                ImgFound++
                BoxOpened = ''
                ImgOpened = ''

            setTimeout ( ->
                $(Source + ' div').on('click', OpenCard)
                ), 400

        Counter++
        $('#counter').html('' + Counter)

        if ImgFound is ImgSource.length
            $('#counter').prepend('<span id="success">You found all pictures with </span>')

$ ->
    for y in [1..2]
        $.each(ImgSource, (i, val) ->
            $(Source).append('<div id=card' + y + i + '><img src' + val + ' />'))

        $(Source + ' div').on('click', OpenCard)
        ShuffleImages()
