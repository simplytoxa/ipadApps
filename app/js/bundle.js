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
    $('.news-accordeon__trigger').on('click', openAccordeon);
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
        findReqPos(nextSlide);
        removeActiveClass(nextSlide);
      } else {
        findReqPos(firstSlide);
        removeActiveClass(firstSlide);
      }
    } else {
      if (prevSlide.length) {
        findReqPos(prevSlide);
        removeActiveClass(prevSlide);

      } else {
        findReqPos(lastSlide);
        removeActiveClass(lastSlide);
      }
    }

    list.css('left', '-=' + reqPos + 'px');

    function removeActiveClass(slide) {
      slide.addClass('active')
                   .siblings()
                   .removeClass('active');
    };

    function findReqPos(slide) {
      reqPos = slide.offset().left - sliderOffset;
    };
  };


  function openAccordeon(e) {
    e.preventDefault();
    var $this = $(this),
        list = $this.closest('.news-accordeon__list'),
        item = $this.closest('.news-accordeon__item'),
        items = list.find('.news-accordeon__item'),
        text = item.find('.news-accordeon__text'),
        otherContent = list.find('.news-accordeon__text'),
        duration = 300;

    if (!item.hasClass('active')) {
      items.removeClass('active');
      item.addClass('active');

      otherContent.slideUp(duration);
      text.slideDown(duration);
    } else{
      text.slideUp(duration);
      item.removeClass('active');
    }
  }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxPcGVuc2VydmVyXFxkb21haW5zXFxpcGFkQXBwc1xcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiRDovT3BlbnNlcnZlci9kb21haW5zL2lwYWRBcHBzL2FwcC9qcy9fbW9kdWxlcy9ob21lUGFnZS5qcyIsIkQ6L09wZW5zZXJ2ZXIvZG9tYWlucy9pcGFkQXBwcy9hcHAvanMvZmFrZV85NDJhM2U3My5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCI7KGZ1bmN0aW9uKCkge1xyXG4gIHZhciBleGFtcGxlTW9kdWxlID0ge307XHJcblxyXG4gIHB1YmxpY01ldGhvZCgpO1xyXG4gIGluaXQoKTtcclxuICBhdHRhY2hFdmVudHMoKTtcclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGF0dGFjaEV2ZW50cygpIHtcclxuICAgICQoJy5uZXdzLXNsaWRlcl9fY29udHJvbHMtYnRuJykub24oJ2NsaWNrJywgbmV3c0Fycm93Q2xpY2spO1xyXG4gICAgJCgnLm5ld3MtYWNjb3JkZW9uX190cmlnZ2VyJykub24oJ2NsaWNrJywgb3BlbkFjY29yZGVvbik7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbmV3c0Fycm93Q2xpY2soZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICBjb250YWluZXIgPSAkdGhpcy5jbG9zZXN0KCcubmV3cy1zbGlkZXJfd3JhcCcpLFxyXG4gICAgICAgIGxpc3QgPSBjb250YWluZXIuZmluZCgnLm5ld3Mtc2xpZGVyX19saXN0JyksXHJcbiAgICAgICAgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLm5ld3Mtc2xpZGVyX19pdGVtJyksXHJcbiAgICAgICAgYWN0aXZlU2xpZGUgPSBpdGVtcy5maWx0ZXIoJy5hY3RpdmUnKSxcclxuICAgICAgICBuZXh0U2xpZGUgPSBhY3RpdmVTbGlkZS5uZXh0KCksXHJcbiAgICAgICAgcHJldlNsaWRlID0gYWN0aXZlU2xpZGUucHJldigpLFxyXG4gICAgICAgIGZpcnN0U2xpZGUgPSBpdGVtcy5maXJzdCgpLFxyXG4gICAgICAgIGxhc3RTbGlkZSA9IGl0ZW1zLmxhc3QoKSxcclxuICAgICAgICBzbGlkZXJPZmZzZXQgPSBjb250YWluZXIub2Zmc2V0KCkubGVmdCxcclxuICAgICAgICByZXFQb3MgPSAwO1xyXG5cclxuICAgIGlmICgkdGhpcy5oYXNDbGFzcygnbmV3cy1zbGlkZXJfX2NvbnRyb2xzLWJ0bl9uZXh0JykpIHtcclxuICAgICAgaWYgKG5leHRTbGlkZS5sZW5ndGgpIHtcclxuICAgICAgICBmaW5kUmVxUG9zKG5leHRTbGlkZSk7XHJcbiAgICAgICAgcmVtb3ZlQWN0aXZlQ2xhc3MobmV4dFNsaWRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaW5kUmVxUG9zKGZpcnN0U2xpZGUpO1xyXG4gICAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzKGZpcnN0U2xpZGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAocHJldlNsaWRlLmxlbmd0aCkge1xyXG4gICAgICAgIGZpbmRSZXFQb3MocHJldlNsaWRlKTtcclxuICAgICAgICByZW1vdmVBY3RpdmVDbGFzcyhwcmV2U2xpZGUpO1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaW5kUmVxUG9zKGxhc3RTbGlkZSk7XHJcbiAgICAgICAgcmVtb3ZlQWN0aXZlQ2xhc3MobGFzdFNsaWRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpc3QuY3NzKCdsZWZ0JywgJy09JyArIHJlcVBvcyArICdweCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZUNsYXNzKHNsaWRlKSB7XHJcbiAgICAgIHNsaWRlLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGZpbmRSZXFQb3Moc2xpZGUpIHtcclxuICAgICAgcmVxUG9zID0gc2xpZGUub2Zmc2V0KCkubGVmdCAtIHNsaWRlck9mZnNldDtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5BY2NvcmRlb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICBsaXN0ID0gJHRoaXMuY2xvc2VzdCgnLm5ld3MtYWNjb3JkZW9uX19saXN0JyksXHJcbiAgICAgICAgaXRlbSA9ICR0aGlzLmNsb3Nlc3QoJy5uZXdzLWFjY29yZGVvbl9faXRlbScpLFxyXG4gICAgICAgIGl0ZW1zID0gbGlzdC5maW5kKCcubmV3cy1hY2NvcmRlb25fX2l0ZW0nKSxcclxuICAgICAgICB0ZXh0ID0gaXRlbS5maW5kKCcubmV3cy1hY2NvcmRlb25fX3RleHQnKSxcclxuICAgICAgICBvdGhlckNvbnRlbnQgPSBsaXN0LmZpbmQoJy5uZXdzLWFjY29yZGVvbl9fdGV4dCcpLFxyXG4gICAgICAgIGR1cmF0aW9uID0gMzAwO1xyXG5cclxuICAgIGlmICghaXRlbS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgaXRlbXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICBpdGVtLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgIG90aGVyQ29udGVudC5zbGlkZVVwKGR1cmF0aW9uKTtcclxuICAgICAgdGV4dC5zbGlkZURvd24oZHVyYXRpb24pO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICB0ZXh0LnNsaWRlVXAoZHVyYXRpb24pO1xyXG4gICAgICBpdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHB1YmxpY01ldGhvZCgpIHtcclxuICAgIGV4YW1wbGVNb2R1bGUgPSB7XHJcbiAgICAgIC8vIG5hbWUgOiBwdWJsaWMgZnVuY3Rpb25cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB3aW5kb3cubW9kdWxlTmFtZSA9IGV4YW1wbGVNb2R1bGU7XHJcbn0pKCk7XHJcbiIsInZhciBob21lUGFnZSA9IHJlcXVpcmUoJy4vX21vZHVsZXMvaG9tZVBhZ2UuanMnKTsiXX0=
