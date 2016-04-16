(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function() {
  var exampleModule = {};

  publicMethod();
  init();
  attachEvents();

  function init() {
    
  };

  function attachEvents() {
    $('.news-slider__controls-btn').on('click', newsArrowClick);
  };

  function newsArrowClick(e) {
    e.preventDefault();
    var $this = $(this),
        container = $this.closest('.news-slider_wrap'),
        list = container.find('.news-slider__list'),
        items = container.find('.news-slider__item'),
        activeSlide = items.filter('.active'),
        nextSlide = activeSlide.next(),
        prevSlide = activeSlide.prev(),
        firstSlide = items.first(),
        lastSlide = items.last(),
        sliderOffset = container.offset().left,
        reqPos = 0;

    if ($this.hasClass('news-slider__controls-btn_next')) {
      if (nextSlide.length) {
        reqPos = nextSlide.offset().left  - sliderOffset;

        removeActiveClass(nextSlide);
      } else {
        reqPos = firstSlide.offset().left - sliderOffset;
        firstSlide.addClass('active')
                 .siblings()
                 .removeClass('active');
      }
    } else {
      if (prevSlide.length) {
        reqPos = prevSlide.offset().left - sliderOffset;

        prevSlide.addClass('active')
                 .siblings()
                 .removeClass('active');
      } else {
        reqPos = lastSlide.offset().left - sliderOffset;
        lastSlide.addClass('active')
                 .siblings()
                 .removeClass('active');
      }
    }

    list.css('left', '-=' + reqPos + 'px');

  };

  function removeActiveClass(slide) {
    slide.addClass('active')
                 .siblings()
                 .removeClass('active');
  };

  function publicMethod() {
    exampleModule = {
      // name : public function
    }
  };

  window.moduleName = exampleModule;
})();

},{}],2:[function(require,module,exports){
var homePage = require('./_modules/homePage.js');
},{"./_modules/homePage.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxPcGVuc2VydmVyXFxkb21haW5zXFxpcGFkQXBwc1xcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiRDovT3BlbnNlcnZlci9kb21haW5zL2lwYWRBcHBzL2FwcC9qcy9fbW9kdWxlcy9ob21lUGFnZS5qcyIsIkQ6L09wZW5zZXJ2ZXIvZG9tYWlucy9pcGFkQXBwcy9hcHAvanMvZmFrZV83MTMxYTIzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIjsoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGV4YW1wbGVNb2R1bGUgPSB7fTtcclxuXHJcbiAgcHVibGljTWV0aG9kKCk7XHJcbiAgaW5pdCgpO1xyXG4gIGF0dGFjaEV2ZW50cygpO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gYXR0YWNoRXZlbnRzKCkge1xyXG4gICAgJCgnLm5ld3Mtc2xpZGVyX19jb250cm9scy1idG4nKS5vbignY2xpY2snLCBuZXdzQXJyb3dDbGljayk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbmV3c0Fycm93Q2xpY2soZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICBjb250YWluZXIgPSAkdGhpcy5jbG9zZXN0KCcubmV3cy1zbGlkZXJfd3JhcCcpLFxyXG4gICAgICAgIGxpc3QgPSBjb250YWluZXIuZmluZCgnLm5ld3Mtc2xpZGVyX19saXN0JyksXHJcbiAgICAgICAgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLm5ld3Mtc2xpZGVyX19pdGVtJyksXHJcbiAgICAgICAgYWN0aXZlU2xpZGUgPSBpdGVtcy5maWx0ZXIoJy5hY3RpdmUnKSxcclxuICAgICAgICBuZXh0U2xpZGUgPSBhY3RpdmVTbGlkZS5uZXh0KCksXHJcbiAgICAgICAgcHJldlNsaWRlID0gYWN0aXZlU2xpZGUucHJldigpLFxyXG4gICAgICAgIGZpcnN0U2xpZGUgPSBpdGVtcy5maXJzdCgpLFxyXG4gICAgICAgIGxhc3RTbGlkZSA9IGl0ZW1zLmxhc3QoKSxcclxuICAgICAgICBzbGlkZXJPZmZzZXQgPSBjb250YWluZXIub2Zmc2V0KCkubGVmdCxcclxuICAgICAgICByZXFQb3MgPSAwO1xyXG5cclxuICAgIGlmICgkdGhpcy5oYXNDbGFzcygnbmV3cy1zbGlkZXJfX2NvbnRyb2xzLWJ0bl9uZXh0JykpIHtcclxuICAgICAgaWYgKG5leHRTbGlkZS5sZW5ndGgpIHtcclxuICAgICAgICByZXFQb3MgPSBuZXh0U2xpZGUub2Zmc2V0KCkubGVmdCAgLSBzbGlkZXJPZmZzZXQ7XHJcblxyXG4gICAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzKG5leHRTbGlkZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVxUG9zID0gZmlyc3RTbGlkZS5vZmZzZXQoKS5sZWZ0IC0gc2xpZGVyT2Zmc2V0O1xyXG4gICAgICAgIGZpcnN0U2xpZGUuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocHJldlNsaWRlLmxlbmd0aCkge1xyXG4gICAgICAgIHJlcVBvcyA9IHByZXZTbGlkZS5vZmZzZXQoKS5sZWZ0IC0gc2xpZGVyT2Zmc2V0O1xyXG5cclxuICAgICAgICBwcmV2U2xpZGUuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcVBvcyA9IGxhc3RTbGlkZS5vZmZzZXQoKS5sZWZ0IC0gc2xpZGVyT2Zmc2V0O1xyXG4gICAgICAgIGxhc3RTbGlkZS5hZGRDbGFzcygnYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAuc2libGluZ3MoKVxyXG4gICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaXN0LmNzcygnbGVmdCcsICctPScgKyByZXFQb3MgKyAncHgnKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlQWN0aXZlQ2xhc3Moc2xpZGUpIHtcclxuICAgIHNsaWRlLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgIC5zaWJsaW5ncygpXHJcbiAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBwdWJsaWNNZXRob2QoKSB7XHJcbiAgICBleGFtcGxlTW9kdWxlID0ge1xyXG4gICAgICAvLyBuYW1lIDogcHVibGljIGZ1bmN0aW9uXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgd2luZG93Lm1vZHVsZU5hbWUgPSBleGFtcGxlTW9kdWxlO1xyXG59KSgpO1xyXG4iLCJ2YXIgaG9tZVBhZ2UgPSByZXF1aXJlKCcuL19tb2R1bGVzL2hvbWVQYWdlLmpzJyk7Il19
