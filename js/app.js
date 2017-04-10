$(function() {
    var Libr, body, closeBtn, figures, header, i, image, images, len, loaders, menuBtn, navMenu, popup, popupFig, popupImg, popupNav, showBtn, showImg;

    Libr = function(element) {
        this.element = element;
    };

    Libr.prototype = {
        log: function() {
            console.log(this.element);
        },
        css: function(styles) {
            var style, value;
            for (style in styles) {
                value = styles[style];
                this.element.style[style] = value;
            }
        },
        mmv: function(figure) {
            figure.addEventListener('mousemove', function(e) {
                var img, x, y;
                img = figure.querySelector('img');
                x = -(e.pageX - figure.offsetLeft) / 20;
                y = -(e.pageY - figure.offsetTop) / 20;
                img.libr.css({
                    left: x + 'px',
                    top: y + 'px'
                });
            });
        }
    };

    Object.defineProperty(Element.prototype, 'libr', {
        get: function() {
            Object.defineProperty(this, 'libr', {
                value: new Libr(this)
            });
            return this.libr;
        },
        configurable: true,
        writeable: false
    });

    menuBtn = document.querySelector('#menu-toggle');
    navMenu = document.querySelector('nav.menu');
    menuBtn.addEventListener('click', function() {

        var stylesOn = {
            height: '26rem',
            transition: '0.5s'
        };

        var stylesOff = {
            height: '0rem',
            transition: '0.25s'
        };

        var isOpen = parseFloat(navMenu.style.height)? true : false;

        if (isOpen) {
            navMenu.libr.css(stylesOff);
            this.classList.toggle('icon-arrow-up');
            this.classList.toggle('icon-arrow-down');
        } else {
            navMenu.libr.css(stylesOn);
            this.classList.toggle('icon-arrow-up');
            this.classList.toggle('icon-arrow-down');
        }
    });

    figures = document.querySelectorAll('figure.post');
    images = document.querySelectorAll('figure.post > img');
    showImg = function(image) {
        image.parentElement.firstElementChild.style.display = 'none';
        image.style.display = 'inline';
    };

    for (i = 0, len = images.length; i < len; i++) {
        image = images[i];
        showImg(image);
    }

    figures.forEach(function(figure) {
        figure.libr.mmv(figure);
    });

// ------------------------------------

  figures.on('click', function() {
    var caption, figHeight, figWidth, img, imgRatio, minHeight, minWidth, offset, winHeight, winRatio, winWidth;
    img = $(this).find('img');
    caption = $(this).find('figcaption');
    offset = this.getBoundingClientRect();
    popup.addClass('fullscreen');
    popupFig.append(caption.clone());
    popupImg.attr('src', img.attr('src'));
    popup.css({
      opacity: 1,
      transition: 'opacity 1s'
    });
    popupFig.css({
      top: offset.top,
      left: offset.left,
      width: $(this).width(),
      height: $(this).height()
    });
    popupImg.css({
      width: img.width(),
      margin: img.css('margin'),
      opacity: 1
    });
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    winRatio = winHeight / winWidth;
    imgRatio = img.outerHeight() / img.outerWidth();
    if (winRatio < imgRatio) {
      figWidth = winWidth * (winRatio / imgRatio);
    } else {
      figWidth = winWidth;
    }
    figHeight = figWidth * imgRatio;
    minWidth = Math.min(popupImg.outerWidth(), figWidth);
    minHeight = Math.min(popupImg.outerHeight(), figHeight);
    popupFig.css({
      top: window.innerHeight / 2 - minHeight / 2,
      left: window.innerWidth / 2 - minWidth / 2,
      width: minWidth,
      height: minHeight,
      transition: 'top 0.5s, left 0.5s, width 0.5s, height 0.5s'
    });
    popupImg.animate({
      margin: 0,
      width: minWidth
    }, 500, function() {
      var initFigCSS;
      initFigCSS = {
        position: 'static',
        top: 'auto',
        left: 'auto',
        height: 'auto'
      };
      popupFig.css(initFigCSS);
      popupImg.css('width', '100%');
      return popupFig.animate({
        width: figWidth
      }, 500, function() {
        popupNav.css('display', 'flex');
        return popupFig.css({
          position: 'relative'
        });
      });
    });
    $(window).on('resize', function() {
      winRatio = $(this).innerHeight() / $(this).innerWidth();
      figWidth = $(this).innerWidth() * (winRatio / imgRatio);
      popupFig.css({
        width: figWidth
      });
      return caption.outerWidth(figWidth);
    });
    return popup.on('click', function() {
      $(this).removeClass('fullscreen');
      caption.hide();
      $(this).css({
        opacity: 0
      });
      $(this).find('figcaption').remove();
      popupFig.css('position', 'absolute');
      popupImg.attr('src', '');
      showBtn.removeClass('icon-arrow-up');
      return popupNav.css('display', 'none');
    });
  });
  popup = $('.popup');
  popupFig = popup.find('figure');
  popupImg = popup.find('img');
  popupNav = popup.find('nav');
  popupNav.on('click', function(e) {
    return e.stopImmediatePropagation();
  });
  closeBtn = popupNav.find('.icon-close');
  showBtn = popupNav.find('.icon-arrow-down');
  closeBtn.on('click', function() {
    return popup.click();
  });
  showBtn.on('click', function(e) {
    var caption, imgHeight, navHeight;
    caption = popup.find('figcaption');
    imgHeight = popupImg.outerHeight();
    navHeight = $(this).parent().outerHeight();
    caption.toggleClass('inactive');
    if (caption.hasClass('inactive')) {
      caption.css({
        top: navHeight,
        height: imgHeight - navHeight,
        transition: 'height 0.5s, opacity 0.5s'
      });
    } else {
      caption.css({
        height: 0
      });
    }
    $(this).toggleClass('icon-arrow-up');
    caption.on('click', function(e) {
      return e.stopImmediatePropagation();
    });
    return $(window).on('resize', function() {
      imgHeight = popupImg.outerHeight();
      navHeight = popupNav.outerHeight();
      caption.outerHeight(imgHeight - navHeight);
      return caption.css('top', navHeight);
    });
  });
  return popupImg.on('click', function(e) {
    return e.stopImmediatePropagation();
  });
});
