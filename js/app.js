$(function() {
  var body, caption, closeBtn, figures, header, initImgCSS, menuBtn, navMenu, popup, popupFig, popupImg, popupImgCSS, popupNav, showBtn;
  body = $('body');
  header = $('header');
  menuBtn = header.find('a');
  navMenu = $('nav.menu');
  navMenu.hide();
  menuBtn.on('click', function() {
    navMenu.slideToggle(500);
    $(this).toggleClass('icon-arrow-up');
    return $(this).toggleClass('icon-arrow-down');
  });
  figures = $('figure.post');
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
  initImgCSS = {
    maxWidth: 'none',
    opacity: 0
  };
  popupImgCSS = {
    maxWidth: '100%',
    width: '100%'
  };
  figures.on('click', function() {
    var figWidth, img, imgRatio, offset, winHeight, winRatio, winWidth;
    img = $(this).find('img');
    offset = this.getBoundingClientRect();
    popup.addClass('fullscreen');
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
    popupFig.animate({
      top: window.innerHeight / 2 - popupImg.outerHeight() / 2,
      left: window.innerWidth / 2 - popupImg.outerWidth() / 2 - 10,
      width: popupImg.outerWidth(),
      height: popupImg.outerHeight()
    }, 500, 'linear');
    popupImg.animate({
      margin: 0
    }, 500, 'linear', function() {
      popupFig.css({
        position: 'static',
        top: 'auto',
        left: 'auto'
      });
      popupImg.css(popupImgCSS);
      return popupFig.animate({
        width: figWidth,
        height: figWidth * imgRatio
      }, 700, function() {
        return popupFig.css({
          position: 'relative'
        });
      });
    });
    $(window).on('resize', function() {
      winRatio = $(this).innerHeight() / $(this).innerWidth();
      figWidth = $(this).innerWidth() * (winRatio / imgRatio);
      console.log(figWidth);
      return popupFig.css({
        width: figWidth,
        height: 'auto'
      });
    });
    return popup.on('click', function() {
      $(this).removeClass('fullscreen');
      caption.hide();
      $(this).css('opacity', 0);
      popupImg.css(initImgCSS);
      popupFig.css({
        width: '20px',
        height: '20px',
        position: 'absolute'
      });
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
  caption = popup.find('figcaption');
  closeBtn.on('click', function() {
    return popup.click();
  });
  showBtn.on('click', function() {
    var imgHeight, navHeight;
    imgHeight = popupImg.outerHeight();
    navHeight = $(this).parent().outerHeight();
    caption.outerHeight(imgHeight - navHeight);
    caption.css('top', navHeight);
    caption.slideToggle(500);
    $(this).toggleClass('icon-arrow-up');
    return $(window).on('resize', function() {
      imgHeight = popupImg.outerHeight();
      navHeight = popupNav.outerHeight();
      caption.outerHeight(imgHeight - navHeight);
      return caption.css('top', navHeight);
    });
  });
  popupImg.on('click', function(e) {
    popupNav.fadeToggle(500);
    return e.stopImmediatePropagation();
  });
  return caption.on('click', function(e) {
    return e.stopImmediatePropagation();
  });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJhcHAuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsQ0FBRSxTQUFBO0FBR0UsTUFBQTtFQUFBLElBQUEsR0FBTyxDQUFBLENBQUUsTUFBRjtFQUNQLE1BQUEsR0FBUyxDQUFBLENBQUUsUUFBRjtFQUNULE9BQUEsR0FBVSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQVo7RUFDVixPQUFBLEdBQVUsQ0FBQSxDQUFFLFVBQUY7RUFDVixPQUFPLENBQUMsSUFBUixDQUFBO0VBQ0EsT0FBTyxDQUFDLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFNBQUE7SUFDaEIsT0FBTyxDQUFDLFdBQVIsQ0FBb0IsR0FBcEI7SUFDQSxDQUFBLENBQUUsSUFBRixDQUFJLENBQUMsV0FBTCxDQUFpQixlQUFqQjtXQUNBLENBQUEsQ0FBRSxJQUFGLENBQUksQ0FBQyxXQUFMLENBQWlCLGlCQUFqQjtFQUhnQixDQUFwQjtFQUtBLE9BQUEsR0FBVSxDQUFBLENBQUUsYUFBRjtFQUdWLE9BQU8sQ0FBQyxFQUFSLENBQVcsV0FBWCxFQUF3QixTQUFDLENBQUQ7QUFDcEIsUUFBQTtJQUFBLE1BQUEsR0FBUyxDQUFBLENBQUUsSUFBRixDQUFJLENBQUMsTUFBTCxDQUFBO0lBQ1QsQ0FBQSxHQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBRixHQUFVLE1BQU0sQ0FBQyxJQUFsQixDQUFELEdBQXlCO0lBQzdCLENBQUEsR0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUYsR0FBVSxNQUFNLENBQUMsR0FBbEIsQ0FBRCxHQUF3QjtJQUU1QixHQUFBLEdBQU0sQ0FBQSxDQUFFLElBQUYsQ0FBSSxDQUFDLElBQUwsQ0FBVSxLQUFWO1dBQ04sR0FBRyxDQUFDLEdBQUosQ0FDSTtNQUFBLElBQUEsRUFBTSxDQUFBLEdBQUksSUFBVjtNQUNBLEdBQUEsRUFBSyxDQUFBLEdBQUksSUFEVDtLQURKO0VBTm9CLENBQXhCO0VBV0EsVUFBQSxHQUNJO0lB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bnRlbnQiOlsiJCAtPlxuXG4gICAgIyBzaG93L2hpZGUgbmF2IG1lbnUgYmFyXG4gICAgYm9keSA9ICQoJ2JvZHknKVxuICAgIGhlYWRlciA9ICQoJ2hlYWRlcicpXG4gICAgbWVudUJ0biA9IGhlYWRlci5maW5kICdhJ1xuICAgIG5hdk1lbnUgPSAkKCduYXYubWVudScpXG4gICAgbmF2TWVudS5oaWRlKClcbiAgICBtZW51QnRuLm9uICdjbGljaycsIC0+XG4gICAgICAgIG5hdk1lbnUuc2xpZGVUb2dnbGUgNTAwXG4gICAgICAgICQoQCkudG9nZ2xlQ2xhc3MoJ2ljb24tYXJyb3ctdXAnKVxuICAgICAgICAkKEApLnRvZ2dsZUNsYXNzKCdpY29uLWFycm93LWRvd24nKVxuXG4gICAgZmlndXJlcyA9ICQoJ2ZpZ3VyZS5wb3N0JylcblxuICAgICMgbW92ZSBpbWFnZSBvbiBtb3VzZW1vdmVcbiAgICBmaWd1cmVzLm9uICdtb3VzZW1vdmUnLCAoZSkgLT5cbiAgICAgICAgb2Zmc2V0ID0gJChAKS5vZmZzZXQoKVxuICAgICAgICB4ID0gLShlLnBhZ2VYIC0gb2Zmc2V0LmxlZnQpLzIwXG4gICAgICAgIHkgPSAtKGUucGFnZVkgLSBvZmZzZXQudG9wKS8yMFxuXG4gICAgICAgIGltZyA9ICQoQCkuZmluZCAnaW1nJ1xuICAgICAgICBpbWcuY3NzXG4gICAgICAgICAgICBsZWZ0OiB4ICsgJ3B4J1xuICAgICAgICAgICAgdG9wOiB5ICsgJ3B4J1xuXG4gICAgIyBzaG93IGltYWdlIG9uIGZ1bGxzY3JlZW5cbiAgICBpbml0SW1nQ1NTID1cbiAgICAgICAgbWF4V2lkdGg6ICdub25lJ1xuICAgICAgICBvcGFjaXR5OiAwXG5cbiAgICBwb3B1cEltZ0NTUyA9XG4gICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIGZpZ3VyZXMub24gJ2NsaWNrJywgLT5cbiAgICAgICAgaW1nID0gJChAKS5maW5kICdpbWcnXG4gICAgICAgIG9mZnNldCA9IEBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBwb3B1cC5hZGRDbGFzcygnZnVsbHNjcmVlbicpXG4gICAgICAgIHBvcHVwSW1nLmF0dHIoJ3NyYycsIGltZy5hdHRyKCdzcmMnKSlcbiAgICAgICAgcG9wdXAuYW5pbWF0ZVxuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgNTAwXG4gICAgICAgIHBvcHVwRmlnLmNzc1xuICAgICAgICAgICAgdG9wOiBvZmZzZXQudG9wXG4gICAgICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdFxuICAgICAgICAgICAgd2lkdGg6ICQoQCkud2lkdGgoKVxuICAgICAgICAgICAgaGVpZ2h0OiAkKEApLmhlaWdodCgpXG4gICAgICAgIHBvcHVwSW1nLmNzc1xuICAgICAgICAgICAgd2lkdGg6IGltZy53aWR0aCgpXG4gICAgICAgICAgICBtYXJnaW46IGltZy5jc3MoJ21hcmdpbicpXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG5cbiAgICAgICAgd2luV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICB3aW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgICAgd2luUmF0aW8gPSAgd2luSGVpZ2h0IC8gd2luV2lkdGhcbiAgICAgICAgaW1nUmF0aW8gPSBpbWcub3V0ZXJIZWlnaHQoKSAvIGltZy5vdXRlcldpZHRoKClcblxuICAgICAgICAjICQoJ3Aud2lkdGgnKS50ZXh0KHdpbmRvdy5pbm5lcldpZHRoICsgJyAnICsgd2luV2lkdGgpXG5cbiAgICAgICAgaWYgd2luUmF0aW8gPCBpbWdSYXRpb1xuICAgICAgICAgICAgZmlnV2lkdGggPSB3aW5XaWR0aCood2luUmF0aW8vaW1nUmF0aW8pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGZpZ1dpZHRoID0gd2luV2lkdGhcblxuICAgICAgICAjIHBvcHVwRmlnLmFuaW1hdGVcbiAgICAgICAgIyAgICAgd2lkdGg6IGZpZ1dpZHRoXG4gICAgICAgICMgICAgIDUwMFxuICAgICAgICAjICAgICAtPlxuICAgICAgICAjICAgICAgICAgcG9wdXBGaWcuYW5pbWF0ZVxuICAgICAgICAjICAgICAgICAgICAgIGhlaWdodDogcG9wdXBJbWcub3V0ZXJIZWlnaHQoKVxuICAgICAgICAjICAgICAgICAgICAgIDUwMFxuICAgICAgICAjICAgICAgICAgICAgIC0+XG4gICAgICAgICMgICAgICAgICAgICAgICAgIHBvcHVwSW1nLmFuaW1hdGVcbiAgICAgICAgIyAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgIyAgICAgICAgICAgICAgICAgICAgIDUwMFxuXG4gICAgICAgICMgcG9wdXBGaWcuYW5pbWF0ZVxuICAgICAgICAjICAgICB0b3A6IHdpbmRvdy5pbm5lckhlaWdodC8yIC0gQG9mZnNldEhlaWdodC8yXG4gICAgICAgICMgICAgIGxlZnQ6IHdpbmRvdy5pbm5lcldpZHRoLzIgLSBAb2Zmc2V0V2lkdGgvMiAtIDEwXG4gICAgICAgICMgICAgIDUwMFxuICAgICAgICAjICAgICAtPlxuICAgICAgICAjICAgICAgICAgJChAKS5jc3NcbiAgICAgICAgIyAgICAgICAgICAgICBwb3NpdGlvbjogJ3N0YXRpYydcbiAgICAgICAgIyAgICAgICAgICAgICB0b3A6ICdhdXRvJ1xuICAgICAgICAjICAgICAgICAgICAgIGxlZnQ6ICdhdXRvJ1xuICAgICAgICAjICAgICAgICAgcG9wdXBGaWcuYW5pbWF0ZVxuICAgICAgICAjICAgICAgICAgICAgIHdpZHRoOiBwb3B1cEltZy5vdXRlcldpZHRoKClcbiAgICAgICAgIyAgICAgICAgICAgICBoZWlnaHQ6IHBvcHVwSW1nLm91dGVySGVpZ2h0KClcbiAgICAgICAgIyAgICAgICAgICAgICA1MDBcbiAgICAgICAgIyAgICAgICAgICAgICAnbGluZWFyJ1xuICAgICAgICAjICAgICAgICAgcG9wdXBJbWcuYW5pbWF0ZVxuICAgICAgICAjICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAjICAgICAgICAgICAgIDUwMFxuICAgICAgICAjICAgICAgICAgICAgICdsaW5lYXInXG4gICAgICAgICMgICAgICAgICAgICAgLT5cbiAgICAgICAgIyAgICAgICAgICAgICAgICAgcG9wdXBGaWcuY3NzXG4gICAgICAgICMgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICAjICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJ1xuICAgICAgICAjICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICAgICAgIyAgICAgICAgICAgICAgICAgcG9wdXBJbWcuY3NzIHBvcHVwSW1nQ1NTXG4gICAgICAgICMgICAgICAgICAgICAgICAgIHBvcHVwRmlnLmFuaW1hdGVcbiAgICAgICAgIyAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaWdXaWR0aFxuICAgICAgICAjICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBmaWdXaWR0aCppbWdSYXRpb1xuICAgICAgICAjICAgICAgICAgICAgICAgICAgICAgNzAwXG5cbiAgICAgICAgcG9wdXBGaWcuYW5pbWF0ZVxuICAgICAgICAgICAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQvMiAtIHBvcHVwSW1nLm91dGVySGVpZ2h0KCkvMlxuICAgICAgICAgICAgbGVmdDogd2luZG93LmlubmVyV2lkdGgvMiAtIHBvcHVwSW1nLm91dGVyV2lkdGgoKS8yIC0gMTBcbiAgICAgICAgICAgIHdpZHRoOiBwb3B1cEltZy5vdXRlcldpZHRoKClcbiAgICAgICAgICAgIGhlaWdodDogcG9wdXBJbWcub3V0ZXJIZWlnaHQoKVxuICAgICAgICAgICAgNTAwXG4gICAgICAgICAgICAnbGluZWFyJ1xuICAgICAgICBwb3B1cEltZy5hbmltYXRlXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIDUwMFxuICAgICAgICAgICAgJ2xpbmVhcidcbiAgICAgICAgICAgIC0+XG4gICAgICAgICAgICAgICAgcG9wdXBGaWcuY3NzXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnc3RhdGljJ1xuICAgICAgICAgICAgICAgICAgICB0b3A6ICdhdXRvJ1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnYXV0bydcbiAgICAgICAgICAgICAgICBwb3B1cEltZy5jc3MgcG9wdXBJbWdDU1NcbiAgICAgICAgICAgICAgICBwb3B1cEZpZy5hbmltYXRlXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmaWdXaWR0aFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpZ1dpZHRoKmltZ1JhdGlvXG4gICAgICAgICAgICAgICAgICAgIDcwMFxuICAgICAgICAgICAgICAgICAgICAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBGaWcuY3NzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIHdpZHRoOiAnYXV0bydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjIGhlaWdodDogJ2F1dG8nXG5cbiAgICAgICAgJCh3aW5kb3cpLm9uICdyZXNpemUnLCAtPlxuICAgICAgICAgICAgd2luUmF0aW8gPSAkKEApLmlubmVySGVpZ2h0KCkgLyAkKEApLmlubmVyV2lkdGgoKVxuICAgICAgICAgICAgZmlnV2lkdGggPSAkKEApLmlubmVyV2lkdGgoKSAqICh3aW5SYXRpby9pbWdSYXRpbylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nIGZpZ1dpZHRoXG4gICAgICAgICAgICBwb3B1cEZpZy5jc3NcbiAgICAgICAgICAgICAgICB3aWR0aDogZmlnV2lkdGhcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJ1xuXG4gICAgICAgIHBvcHVwLm9uICdjbGljaycsIC0+XG4gICAgICAgICAgICAkKEApLnJlbW92ZUNsYXNzKCdmdWxsc2NyZWVuJylcbiAgICAgICAgICAgIGNhcHRpb24uaGlkZSgpXG4gICAgICAgICAgICAkKEApLmNzcygnb3BhY2l0eScsIDApXG4gICAgICAgICAgICBwb3B1cEltZy5jc3MgaW5pdEltZ0NTU1xuICAgICAgICAgICAgcG9wdXBGaWcuY3NzXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcyMHB4J1xuICAgICAgICAgICAgICAgIGhlaWdodDogJzIwcHgnXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgICAgICAgIHNob3dCdG4ucmVtb3ZlQ2xhc3MgJ2ljb24tYXJyb3ctdXAnXG4gICAgICAgICAgICBwb3B1cE5hdi5oaWRlKClcblxuICAgIHBvcHVwID0gJCgnLnBvcHVwJylcblxuICAgIHBvcHVwRmlnID0gcG9wdXAuZmluZCAnZmlndXJlJ1xuICAgIHBvcHVwSW1nID0gcG9wdXAuZmluZCAnaW1nJ1xuICAgIHBvcHVwTmF2ID0gcG9wdXAuZmluZCAnbmF2J1xuICAgIHBvcHVwTmF2LmhpZGUoKVxuICAgIHBvcHVwTmF2Lm9uICdjbGljaycsIC0+XG4gICAgICAgIGZhbHNlXG4gICAgY2xvc2VCdG4gPSBwb3B1cE5hdi5maW5kICcuaWNvbi1jbG9zZSdcbiAgICBzaG93QnRuID0gcG9wdXBOYXYuZmluZCAnLmljb24tYXJyb3ctZG93bidcbiAgICBjYXB0aW9uID0gcG9wdXAuZmluZCAnZmlnY2FwdGlvbidcblxuICAgICMgZXhpdCBmdWxsc2NyZWVuIG1vZGVcbiAgICBjbG9zZUJ0bi5vbiAnY2xpY2snLCAtPlxuICAgICAgICBwb3B1cC5jbGljaygpXG5cbiAgICAjIHRvZ2dsZSBjYXB0aW9uIHZpc2liaWxpdHlcbiAgICBzaG93QnRuLm9uICdjbGljaycsIC0+XG4gICAgICAgIGltZ0hlaWdodCA9IHBvcHVwSW1nLm91dGVySGVpZ2h0KClcbiAgICAgICAgbmF2SGVpZ2h0ID0gJChAKS5wYXJlbnQoKS5vdXRlckhlaWdodCgpXG4gICAgICAgIGNhcHRpb24ub3V0ZXJIZWlnaHQoaW1nSGVpZ2h0IC0gbmF2SGVpZ2h0KVxuICAgICAgICBjYXB0aW9uLmNzcygndG9wJywgbmF2SGVpZ2h0KVxuICAgICAgICBjYXB0aW9uLnNsaWRlVG9nZ2xlIDUwMFxuICAgICAgICAkKEApLnRvZ2dsZUNsYXNzKCdpY29uLWFycm93LXVwJylcblxuICAgICAgICAkKHdpbmRvdykub24gJ3Jlc2l6ZScsIC0+XG4gICAgICAgICAgICBpbWdIZWlnaHQgPSBwb3B1cEltZy5vdXRlckhlaWdodCgpXG4gICAgICAgICAgICBuYXZIZWlnaHQgPSBwb3B1cE5hdi5vdXRlckhlaWdodCgpXG4gICAgICAgICAgICBjYXB0aW9uLm91dGVySGVpZ2h0KGltZ0hlaWdodCAtIG5hdkhlaWdodClcbiAgICAgICAgICAgIGNhcHRpb24uY3NzKCd0b3AnLCBuYXZIZWlnaHQpXG5cblxuICAgIHBvcHVwSW1nLm9uICdjbGljaycsIChlKSAtPlxuICAgICAgICBwb3B1cE5hdi5mYWRlVG9nZ2xlIDUwMFxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG5cbiAgICBjYXB0aW9uLm9uICdjbGljaycsIChlKSAtPlxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4iXX0=
