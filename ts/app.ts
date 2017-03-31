$(function() {
  var body, closeBtn, figures, header, i, image, images, len, loaders, menuBtn, navMenu, popup, popupFig, popupImg, popupNav, showBtn, showImg;
  body = $('body');
  header = $('header');
  menuBtn = header.find('.icon-arrow-down');
  navMenu = $('nav.menu');
  menuBtn.on('click', function() {
    return navMenu.slideToggle(500, (function(_this) {
      return function() {
        if (navMenu.is(':visible')) {
          $(_this).toggleClass('icon-arrow-up');
          return $(_this).toggleClass('icon-arrow-down');
        } else {
          $(_this).toggleClass('icon-arrow-up');
          return $(_this).toggleClass('icon-arrow-down');
        }
      };
    })(this));
  });
  figures = $('figure.post');
  loaders = figures.find('.loader');
  images = document.querySelectorAll('figure.post > img');
  showImg = function(image) {
    image.parentElement.firstElementChild.style.display = 'none';
    return image.style.display = 'inline';
  };
  for (i = 0, len = images.length; i < len; i++) {
    image = images[i];
    showImg(image);
  }
  figures.on('mousemove', function(e) {
    var img, offset, x, y;
    offset = $(this).offset();
    x = -(e.pageX - offset.left) / 20;
    y = -(e.pageY - offset.top) / 20;
    img = $(this).find('img');
    return img.css({
      left: x + 'px',
      top: y + 'px'
    });
  });
  figures.on('click', function() {
    var caption, figHeight, figWidth, img, imgRatio, minHeight, minWidth, offset, winHeight, winRatio, winWidth;
    img = $(this).find('img');
    caption = $(this).find('figcaption');
    offset = this.getBoundingClientRect();
    popup.addClass('fullscreen');
    popupFig.append(caption.clone());
    popupImg.attr('src', img.attr('src'));
    popup.animate({
      opacity: 1
    }, 500);
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
    popupFig.animate({
      top: window.innerHeight / 2 - minHeight / 2,
      left: window.innerWidth / 2 - minWidth / 2,
      width: minWidth,
      height: minHeight
    }, 500);
    popupImg.animate({
      margin: 0,
      width: minWidth
    }, 500, function() {
      var initFigCSS, popupImgCSS;
      initFigCSS = {
        position: 'static',
        top: 'auto',
        left: 'auto',
        height: 'auto'
      };
      popupImgCSS = {
        width: '100%'
      };
      popupFig.css(initFigCSS);
      popupImg.css(popupImgCSS);
      return popupFig.animate({
        width: figWidth
      }, 500, function() {
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
      var initImgCSS;
      $(this).removeClass('fullscreen');
      caption.hide();
      $(this).css('opacity', 0);
      $(this).find('figcaption').remove();
      initImgCSS = {
        opacity: 0
      };
      popupImg.css(initImgCSS);
      popupFig.css('position', 'absolute');
      popupImg.attr('src', '');
      showBtn.removeClass('icon-arrow-up');
      return popupNav.hide();
    });
  });
  popup = $('.popup');
  popupFig = popup.find('figure');
  popupImg = popup.find('img');
  popupNav = popup.find('nav');
  popupNav.hide();
  popupNav.on('click', function() {
    return false;
  });
  closeBtn = popupNav.find('.icon-close');
  showBtn = popupNav.find('.icon-arrow-down');
  closeBtn.on('click', function() {
    return popup.click();
  });
  showBtn.on('click', function() {
    var caption, imgHeight, navHeight;
    caption = popup.find('figcaption');
    imgHeight = popupImg.outerHeight();
    navHeight = $(this).parent().outerHeight();
    caption.outerHeight(imgHeight - navHeight);
    caption.css('top', navHeight);
    caption.slideToggle(500);
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
    popupNav.fadeToggle(500);
    return e.stopImmediatePropagation();
  });
});
