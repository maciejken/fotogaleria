$(function() {
  var figures;
  figures = $('.post');
  figures.on('click', function() {
    return $(this).find('figcaption').fadeToggle(500);
  });
  return figures.on('mousemove', function(e) {
    var offset, x, y;
    offset = $(this).offset();
    x = -(e.clientX - this.offsetLeft + offset.left) / 20;
    y = -(e.clientY - this.offsetTop + offset.top) / 20;
    return $(this).find('figure').css('background-position', x + 'px ' + y + 'px');
  });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJhcHAuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLENBQUEsQ0FBRSxTQUFBO0FBQ0UsTUFBQTtFQUFBLE9BQUEsR0FBVSxDQUFBLENBQUUsT0FBRjtFQUNWLE9BQU8sQ0FBQyxFQUFSLENBQVcsT0FBWCxFQUFvQixTQUFBO1dBQ2hCLENBQUEsQ0FBRSxJQUFGLENBQUksQ0FBQyxJQUFMLENBQVUsWUFBVixDQUNBLENBQUMsVUFERCxDQUNZLEdBRFo7RUFEZ0IsQ0FBcEI7U0FLQSxPQUFPLENBQUMsRUFBUixDQUFXLFdBQVgsRUFBd0IsU0FBQyxDQUFEO0FBQ3BCLFFBQUE7SUFBQSxNQUFBLEdBQVMsQ0FBQSxDQUFFLElBQUYsQ0FBSSxDQUFDLE1BQUwsQ0FBQTtJQUNULENBQUEsR0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQUYsR0FBWSxJQUFDLENBQUEsVUFBYixHQUEwQixNQUFNLENBQUMsSUFBbEMsQ0FBRCxHQUF5QztJQUM3QyxDQUFBLEdBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFGLEdBQVksSUFBQyxDQUFBLFNBQWIsR0FBeUIsTUFBTSxDQUFDLEdBQWpDLENBQUQsR0FBdUM7V0FFM0MsQ0FBQSxDQUFFLElBQUYsQ0FBSSxDQUFDLElBQUwsQ0FBVSxRQUFWLENBQW1CLENBQUMsR0FBcEIsQ0FBd0IscUJBQXhCLEVBQStDLENBQUEsR0FBSSxLQUFKLEdBQVksQ0FBWixHQUFnQixJQUEvRDtFQUxvQixDQUF4QjtBQVBGLENBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIkIC0+XG4gICAgZmlndXJlcyA9ICQoJy5wb3N0JylcbiAgICBmaWd1cmVzLm9uICdjbGljaycsIC0+XG4gICAgICAgICQoQCkuZmluZCAnZmlnY2FwdGlvbidcbiAgICAgICAgLmZhZGVUb2dnbGUoNTAwKVxuXG5cbiAgICBmaWd1cmVzLm9uICdtb3VzZW1vdmUnLCAoZSkgLT5cbiAgICAgICAgb2Zmc2V0ID0gJChAKS5vZmZzZXQoKVxuICAgICAgICB4ID0gLShlLmNsaWVudFggLSBAb2Zmc2V0TGVmdCArIG9mZnNldC5sZWZ0KS8yMFxuICAgICAgICB5ID0gLShlLmNsaWVudFkgLSBAb2Zmc2V0VG9wICsgb2Zmc2V0LnRvcCkvMjBcblxuICAgICAgICAkKEApLmZpbmQoJ2ZpZ3VyZScpLmNzcygnYmFja2dyb3VuZC1wb3NpdGlvbicsIHggKyAncHggJyArIHkgKyAncHgnKVxuIl19
