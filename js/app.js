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
    img.css('left', x + 'px ');
    return img.css('top', y + 'px');
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
    popupFig.css('top', offset.top).css('left', offset.left).css('width', $(this).width()).css('height', $(this).height());
    popupImg.css('width', img.width()).css('margin', img.css('margin')).css('opacity', 1);
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    winRatio = winHeight / winWidth;
    imgRatio = img.outerHeight() / img.outerWidth();
    $('p.width').text(window.innerWidth + ' ' + winWidth);
    if (winRatio < imgRatio) {
      figWidth = winWidth * (winRatio / imgRatio);
    } else {
      figWidth = winWidth;
    }
    popupFig.animate({
      top: window.innerHeight / 2 - this.offsetHeight / 2,
      left: window.innerWidth / 2 - this.offsetWidth / 2 - 10
    }, 500, function() {
      $(this).css({
        position: 'static',
        top: 'auto',
        left: 'auto'
      });
      popupFig.animate({
        width: popupImg.outerWidth(),
        height: popupImg.outerHeight()
      }, 500, 'linear');
      return popupImg.animate({
        margin: 0
      }, 500, 'linear', function() {
        popupFig.css({
          position: 'relative',
          width: 'auto',
          height: 'auto'
        });
        popupImg.css(popupImgCSS);
        return popupFig.animate({
          width: figWidth,
          height: figWidth * imgRatio
        }, 700);
      });
    });
    return popup.on('click', function() {
      $(this).removeClass('fullscreen');
      caption.hide();
      $(this).css('opacity', 0);
      popupImg.css(initImgCSS);
      popupFig.css('width', '20px').css('height', '20px').css('position', 'absolute');
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
    return $(this).toggleClass('icon-arrow-up');
  });
  $(window).on('resize', function() {
    var imgHeight, navHeight;
    imgHeight = popupImg.outerHeight();
    navHeight = popupNav.outerHeight();
    caption.outerHeight(imgHeight - navHeight);
    return caption.css('top', navHeight);
  });
  popupImg.on('click', function(e) {
    popupNav.fadeToggle(500);
    return e.stopImmediatePropagation();
  });
  return caption.on('click', function(e) {
    return e.stopImmediatePropagation();
  });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJhcHAuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsQ0FBRSxTQUFBO0FBR0UsTUFBQTtFQUFBLElBQUEsR0FBTyxDQUFBLENBQUUsTUFBRjtFQUNQLE1BQUEsR0FBUyxDQUFBLENBQUUsUUFBRjtFQUNULE9BQUEsR0FBVSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQVo7RUFDVixPQUFBLEdBQVUsQ0FBQSxDQUFFLFVBQUY7RUFDVixPQUFPLENBQUMsSUFBUixDQUFBO0VBQ0EsT0FBTyxDQUFDLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFNBQUE7SUFDaEIsT0FBTyxDQUFDLFdBQVIsQ0FBb0IsR0FBcEI7SUFDQSxDQUFBLENBQUUsSUFBRixDQUFJLENBQUMsV0FBTCxDQUFpQixlQUFqQjtXQUNBLENBQUEsQ0FBRSxJQUFGLENBQUksQ0FBQyxXQUFMLENBQWlCLGlCQUFqQjtFQUhnQixDQUFwQjtFQUtBLE9BQUEsR0FBVSxDQUFBLENBQUUsYUFBRjtFQUdWLE9BQU8sQ0FBQyxFQUFSLENBQVcsV0FBWCxFQUF3QixTQUFDLENBQUQ7QUFDcEIsUUFBQTtJQUFBLE1BQUEsR0FBUyxDQUFBLENBQUUsSUFBRixDQUFJLENBQUMsTUFBTCxDQUFBO0lBQ1QsQ0FBQSxHQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBRixHQUFVLE1BQU0sQ0FBQyxJQUFsQixDQUFELEdBQXlCO0lBQzdCLENBQUEsR0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUYsR0FBVSxNQUFNLENBQUMsR0FBbEIsQ0FBRCxHQUF3QjtJQUU1QixHQUFBLEdBQU0sQ0FBQSxDQUFFLElBQUYsQ0FBSSxDQUFDLElBQUwsQ0FBVSxLQUFWO0lBQ04sR0FBRyxDQUFDLEdBQUosQ0FBUSxNQUFSLEVBQWdCLENBQUEsR0FBSSxLQUFwQjtXQUNBLEdBQUcsQ0FBQyxHQUFKLENBQVEsS0FBUixFQUFlLENBQUEsR0FBSSxJQUFuQjtFQVBvQixDQUF4QjtFQVVB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QUFxQixTQUFBO1dBQ2pCLEtBQUssQ0FBQyxLQUFOLENBQUE7RUFEaUIsQ0FBckI7RUFJQSxPQUFPLENBQUMsRUFBUixDQUFXLE9BQVgsRUFBb0IsU0FBQTtBQUNoQixRQUFBO0lBQUEsU0FBQSxHQUFZLFFBQVEsQ0FBQyxXQUFULENBQUE7SUFDWixTQUFBLEdBQVksQ0FBQSxDQUFFLElBQUYsQ0FBSSxDQUFDLE1BQUwsQ0FBQSxDQUFhLENBQUMsV0FBZCxDQUFBO0lBQ1osT0FBTyxDQUFDLFdBQVIsQ0FBb0IsU0FBQSxHQUFZLFNBQWhDO0lBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CLFNBQW5CO0lBQ0EsT0FBTyxDQUFDLFdBQVIsQ0FBb0IsR0FBcEI7V0FDQSxDQUFBLENBQUUsSUFBRixDQUFJLENBQUMsV0FBTCxDQUFpQixlQUFqQjtFQU5nQixDQUFwQjtFQVFBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxFQUFWLENBQWEsUUFBYixFQUF1QixTQUFBO0FBQ25CLFFBQUE7SUFBQSxTQUFBLEdBQVksUUFBUSxDQUFDLFdBQVQsQ0FBQTtJQUNaLFNBQUEsR0FBWSxRQUFRLENBQUMsV0FBVCxDQUFBO0lBQ1osT0FBTyxDQUFDLFdBQVIsQ0FBb0IsU0FBQSxHQUFZLFNBQWhDO1dBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CLFNBQW5CO0VBSm1CLENBQXZCO0VBTUEsUUFBUSxDQUFDLEVBQVQsQ0FBWSxPQUFaLEVBQXFCLFNBQUMsQ0FBRDtJQUNqQixRQUFRLENBQUMsVUFBVCxDQUFvQixHQUFwQjtXQUNBLENBQUMsQ0FBQyx3QkFBRixDQUFBO0VBRmlCLENBQXJCO1NBSUEsT0FBTyxDQUFDLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFNBQUMsQ0FBRDtXQUNoQixDQUFDLENBQUMsd0JBQUYsQ0FBQTtFQURnQixDQUFwQjtBQXBKRixDQUFGIiwic291cmNlc0NvbnRlbnQiOlsiJCAtPlxuXG4gICAgIyBzaG93L2hpZGUgbmF2IG1lbnUgYmFyXG4gICAgYm9keSA9ICQoJ2JvZHknKVxuICAgIGhlYWRlciA9ICQoJ2hlYWRlcicpXG4gICAgbWVudUJ0biA9IGhlYWRlci5maW5kICdhJ1xuICAgIG5hdk1lbnUgPSAkKCduYXYubWVudScpXG4gICAgbmF2TWVudS5oaWRlKClcbiAgICBtZW51QnRuLm9uICdjbGljaycsIC0+XG4gICAgICAgIG5hdk1lbnUuc2xpZGVUb2dnbGUgNTAwXG4gICAgICAgICQoQCkudG9nZ2xlQ2xhc3MoJ2ljb24tYXJyb3ctdXAnKVxuICAgICAgICAkKEApLnRvZ2dsZUNsYXNzKCdpY29uLWFycm93LWRvd24nKVxuXG4gICAgZmlndXJlcyA9ICQoJ2ZpZ3VyZS5wb3N0JylcblxuICAgICMgbW92ZSBpbWFnZSBvbiBtb3VzZW1vdmVcbiAgICBmaWd1cmVzLm9uICdtb3VzZW1vdmUnLCAoZSkgLT5cbiAgICAgICAgb2Zmc2V0ID0gJChAKS5vZmZzZXQoKVxuICAgICAgICB4ID0gLShlLnBhZ2VYIC0gb2Zmc2V0LmxlZnQpLzIwXG4gICAgICAgIHkgPSAtKGUucGFnZVkgLSBvZmZzZXQudG9wKS8yMFxuXG4gICAgICAgIGltZyA9ICQoQCkuZmluZCAnaW1nJ1xuICAgICAgICBpbWcuY3NzKCdsZWZ0JywgeCArICdweCAnKVxuICAgICAgICBpbWcuY3NzKCd0b3AnLCB5ICsgJ3B4JylcblxuICAgICMgc2hvdyBpbWFnZSBvbiBmdWxsc2NyZWVuXG4gICAgaW5pdEltZ0NTUyA9XG4gICAgICAgIG1heFdpZHRoOiAnbm9uZSdcbiAgICAgICAgb3BhY2l0eTogMFxuXG4gICAgcG9wdXBJbWdDU1MgPVxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICBmaWd1cmVzLm9uICdjbGljaycsIC0+XG4gICAgICAgIGltZyA9ICQoQCkuZmluZCAnaW1nJ1xuICAgICAgICBvZmZzZXQgPSBAZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgcG9wdXAuYWRkQ2xhc3MoJ2Z1bGxzY3JlZW4nKVxuICAgICAgICBwb3B1cEltZy5hdHRyKCdzcmMnLCBpbWcuYXR0cignc3JjJykpXG4gICAgICAgIHBvcHVwLmFuaW1hdGVcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIDUwMFxuICAgICAgICBwb3B1cEZpZy5jc3MoJ3RvcCcsIG9mZnNldC50b3ApLmNzcygnbGVmdCcsIG9mZnNldC5sZWZ0KVxuICAgICAgICAuY3NzKCd3aWR0aCcsICQoQCkud2lkdGgoKSkuY3NzKCdoZWlnaHQnLCAkKEApLmhlaWdodCgpKVxuICAgICAgICBwb3B1cEltZy5jc3MoJ3dpZHRoJywgaW1nLndpZHRoKCkpLmNzcygnbWFyZ2luJywgaW1nLmNzcygnbWFyZ2luJykpXG4gICAgICAgIC5jc3MoJ29wYWNpdHknLCAxKVxuXG4gICAgICAgIHdpbldpZHRoID0gd2luZG93LmlubmVyV2lkdGhcbiAgICAgICAgd2luSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIHdpblJhdGlvID0gIHdpbkhlaWdodCAvIHdpbldpZHRoXG4gICAgICAgIGltZ1JhdGlvID0gaW1nLm91dGVySGVpZ2h0KCkgLyBpbWcub3V0ZXJXaWR0aCgpXG5cbiAgICAgICAgJCgncC53aWR0aCcpLnRleHQod2luZG93LmlubmVyV2lkdGggKyAnICcgKyB3aW5XaWR0aClcblxuICAgICAgICBpZiB3aW5SYXRpbyA8IGltZ1JhdGlvXG4gICAgICAgICAgICBmaWdXaWR0aCA9IHdpbldpZHRoKih3aW5SYXRpby9pbWdSYXRpbylcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZmlnV2lkdGggPSB3aW5XaWR0aFxuXG4gICAgICAgICMgcG9wdXBGaWcuYW5pbWF0ZVxuICAgICAgICAjICAgICB3aWR0aDogZmlnV2lkdGhcbiAgICAgICAgIyAgICAgNTAwXG4gICAgICAgICMgICAgIC0+XG4gICAgICAgICMgICAgICAgICBwb3B1cEZpZy5hbmltYXRlXG4gICAgICAgICMgICAgICAgICAgICAgaGVpZ2h0OiBwb3B1cEltZy5vdXRlckhlaWdodCgpXG4gICAgICAgICMgICAgICAgICAgICAgNTAwXG4gICAgICAgICMgICAgICAgICAgICAgLT5cbiAgICAgICAgIyAgICAgICAgICAgICAgICAgcG9wdXBJbWcuYW5pbWF0ZVxuICAgICAgICAjICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAjICAgICAgICAgICAgICAgICAgICAgNTAwXG5cbiAgICAgICAgcG9wdXBGaWcuYW5pbWF0ZVxuICAgICAgICAgICAgdG9wOiB3aW5kb3cuaW5uZXJIZWlnaHQvMiAtIEBvZmZzZXRIZWlnaHQvMlxuICAgICAgICAgICAgbGVmdDogd2luZG93LmlubmVyV2lkdGgvMiAtIEBvZmZzZXRXaWR0aC8yIC0gMTBcbiAgICAgICAgICAgIDUwMFxuICAgICAgICAgICAgLT5cbiAgICAgICAgICAgICAgICAkKEApLmNzc1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3N0YXRpYydcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnYXV0bydcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgcG9wdXBGaWcuYW5pbWF0ZVxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogcG9wdXBJbWcub3V0ZXJXaWR0aCgpXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogcG9wdXBJbWcub3V0ZXJIZWlnaHQoKVxuICAgICAgICAgICAgICAgICAgICA1MDBcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmVhcidcbiAgICAgICAgICAgICAgICBwb3B1cEltZy5hbmltYXRlXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgICAgICAgICA1MDBcbiAgICAgICAgICAgICAgICAgICAgJ2xpbmVhcidcbiAgICAgICAgICAgICAgICAgICAgLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwRmlnLmNzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICdhdXRvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3B1cEltZy5jc3MgcG9wdXBJbWdDU1NcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwRmlnLmFuaW1hdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZmlnV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpZ1dpZHRoKmltZ1JhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNzAwXG5cbiAgICAgICAgcG9wdXAub24gJ2NsaWNrJywgLT5cbiAgICAgICAgICAgICQoQCkucmVtb3ZlQ2xhc3MoJ2Z1bGxzY3JlZW4nKVxuICAgICAgICAgICAgY2FwdGlvbi5oaWRlKClcbiAgICAgICAgICAgICQoQCkuY3NzKCdvcGFjaXR5JywgMClcbiAgICAgICAgICAgIHBvcHVwSW1nLmNzcyBpbml0SW1nQ1NTXG4gICAgICAgICAgICBwb3B1cEZpZy5jc3MoJ3dpZHRoJywgJzIwcHgnKS5jc3MoJ2hlaWdodCcsICcyMHB4JylcbiAgICAgICAgICAgIC5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJylcbiAgICAgICAgICAgIHNob3dCdG4ucmVtb3ZlQ2xhc3MgJ2ljb24tYXJyb3ctdXAnXG4gICAgICAgICAgICBwb3B1cE5hdi5oaWRlKClcblxuICAgICAgICAjIGRvZGHEhyBlZmVrdCBwb3dpxJlrc3phbmlhIHBvxYLEhWN6b25lZ28gelxuICAgICAgICAjIHByemVtaWVzemN6YW5pZW0ga2xpa25pxJl0ZWdvIG9icmF6a2FcbiAgICAgICAgIyB0YWsgamFrIHcgb3NYXG5cbiAgICBwb3B1cCA9ICQoJy5wb3B1cCcpXG5cbiAgICBwb3B1cEZpZyA9IHBvcHVwLmZpbmQgJ2ZpZ3VyZSdcbiAgICBwb3B1cEltZyA9IHBvcHVwLmZpbmQgJ2ltZydcbiAgICBwb3B1cE5hdiA9IHBvcHVwLmZpbmQgJ25hdidcbiAgICBwb3B1cE5hdi5oaWRlKClcbiAgICBwb3B1cE5hdi5vbiAnY2xpY2snLCAtPlxuICAgICAgICBmYWxzZVxuICAgIGNsb3NlQnRuID0gcG9wdXBOYXYuZmluZCAnLmljb24tY2xvc2UnXG4gICAgc2hvd0J0biA9IHBvcHVwTmF2LmZpbmQgJy5pY29uLWFycm93LWRvd24nXG4gICAgY2FwdGlvbiA9IHBvcHVwLmZpbmQgJ2ZpZ2NhcHRpb24nXG5cbiAgICAjIGV4aXQgZnVsbHNjcmVlbiBtb2RlXG4gICAgY2xvc2VCdG4ub24gJ2NsaWNrJywgLT5cbiAgICAgICAgcG9wdXAuY2xpY2soKVxuXG4gICAgIyB0b2dnbGUgY2FwdGlvbiB2aXNpYmlsaXR5XG4gICAgc2hvd0J0bi5vbiAnY2xpY2snLCAtPlxuICAgICAgICBpbWdIZWlnaHQgPSBwb3B1cEltZy5vdXRlckhlaWdodCgpXG4gICAgICAgIG5hdkhlaWdodCA9ICQoQCkucGFyZW50KCkub3V0ZXJIZWlnaHQoKVxuICAgICAgICBjYXB0aW9uLm91dGVySGVpZ2h0KGltZ0hlaWdodCAtIG5hdkhlaWdodClcbiAgICAgICAgY2FwdGlvbi5jc3MoJ3RvcCcsIG5hdkhlaWdodClcbiAgICAgICAgY2FwdGlvbi5zbGlkZVRvZ2dsZSA1MDBcbiAgICAgICAgJChAKS50b2dnbGVDbGFzcygnaWNvbi1hcnJvdy11cCcpXG5cbiAgICAkKHdpbmRvdykub24gJ3Jlc2l6ZScsIC0+XG4gICAgICAgIGltZ0hlaWdodCA9IHBvcHVwSW1nLm91dGVySGVpZ2h0KClcbiAgICAgICAgbmF2SGVpZ2h0ID0gcG9wdXBOYXYub3V0ZXJIZWlnaHQoKVxuICAgICAgICBjYXB0aW9uLm91dGVySGVpZ2h0KGltZ0hlaWdodCAtIG5hdkhlaWdodClcbiAgICAgICAgY2FwdGlvbi5jc3MoJ3RvcCcsIG5hdkhlaWdodClcblxuICAgIHBvcHVwSW1nLm9uICdjbGljaycsIChlKSAtPlxuICAgICAgICBwb3B1cE5hdi5mYWRlVG9nZ2xlIDUwMFxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG5cbiAgICBjYXB0aW9uLm9uICdjbGljaycsIChlKSAtPlxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4iXX0=
