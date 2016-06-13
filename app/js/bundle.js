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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxPcGVuc2VydmVyXFxkb21haW5zXFxpcGFkQXBwc1xcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiRDovT3BlbnNlcnZlci9kb21haW5zL2lwYWRBcHBzL2FwcC9qcy9fbW9kdWxlcy9ob21lUGFnZS5qcyIsIkQ6L09wZW5zZXJ2ZXIvZG9tYWlucy9pcGFkQXBwcy9hcHAvanMvZmFrZV9kOTA1ZDE0My5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIjsoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGV4YW1wbGVNb2R1bGUgPSB7fTtcclxuXHJcbiAgcHVibGljTWV0aG9kKCk7XHJcbiAgaW5pdCgpO1xyXG4gIGF0dGFjaEV2ZW50cygpO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gYXR0YWNoRXZlbnRzKCkge1xyXG4gICAgJCgnLm5ld3Mtc2xpZGVyX19jb250cm9scy1idG4nKS5vbignY2xpY2snLCBuZXdzQXJyb3dDbGljayk7XHJcbiAgICAkKCcubmV3cy1hY2NvcmRlb25fX3RyaWdnZXInKS5vbignY2xpY2snLCBvcGVuQWNjb3JkZW9uKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBuZXdzQXJyb3dDbGljayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgIGNvbnRhaW5lciA9ICR0aGlzLmNsb3Nlc3QoJy5uZXdzLXNsaWRlcl93cmFwJyksXHJcbiAgICAgICAgbGlzdCA9IGNvbnRhaW5lci5maW5kKCcubmV3cy1zbGlkZXJfX2xpc3QnKSxcclxuICAgICAgICBpdGVtcyA9IGNvbnRhaW5lci5maW5kKCcubmV3cy1zbGlkZXJfX2l0ZW0nKSxcclxuICAgICAgICBhY3RpdmVTbGlkZSA9IGl0ZW1zLmZpbHRlcignLmFjdGl2ZScpLFxyXG4gICAgICAgIG5leHRTbGlkZSA9IGFjdGl2ZVNsaWRlLm5leHQoKSxcclxuICAgICAgICBwcmV2U2xpZGUgPSBhY3RpdmVTbGlkZS5wcmV2KCksXHJcbiAgICAgICAgZmlyc3RTbGlkZSA9IGl0ZW1zLmZpcnN0KCksXHJcbiAgICAgICAgbGFzdFNsaWRlID0gaXRlbXMubGFzdCgpLFxyXG4gICAgICAgIHNsaWRlck9mZnNldCA9IGNvbnRhaW5lci5vZmZzZXQoKS5sZWZ0LFxyXG4gICAgICAgIHJlcVBvcyA9IDA7XHJcblxyXG4gICAgaWYgKCR0aGlzLmhhc0NsYXNzKCduZXdzLXNsaWRlcl9fY29udHJvbHMtYnRuX25leHQnKSkge1xyXG4gICAgICBpZiAobmV4dFNsaWRlLmxlbmd0aCkge1xyXG4gICAgICAgIGZpbmRSZXFQb3MobmV4dFNsaWRlKTtcclxuICAgICAgICByZW1vdmVBY3RpdmVDbGFzcyhuZXh0U2xpZGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbmRSZXFQb3MoZmlyc3RTbGlkZSk7XHJcbiAgICAgICAgcmVtb3ZlQWN0aXZlQ2xhc3MoZmlyc3RTbGlkZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChwcmV2U2xpZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgZmluZFJlcVBvcyhwcmV2U2xpZGUpO1xyXG4gICAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzKHByZXZTbGlkZSk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbmRSZXFQb3MobGFzdFNsaWRlKTtcclxuICAgICAgICByZW1vdmVBY3RpdmVDbGFzcyhsYXN0U2xpZGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdC5jc3MoJ2xlZnQnLCAnLT0nICsgcmVxUG9zICsgJ3B4Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWN0aXZlQ2xhc3Moc2xpZGUpIHtcclxuICAgICAgc2xpZGUuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kUmVxUG9zKHNsaWRlKSB7XHJcbiAgICAgIHJlcVBvcyA9IHNsaWRlLm9mZnNldCgpLmxlZnQgLSBzbGlkZXJPZmZzZXQ7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG5cclxuICBmdW5jdGlvbiBvcGVuQWNjb3JkZW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgbGlzdCA9ICR0aGlzLmNsb3Nlc3QoJy5uZXdzLWFjY29yZGVvbl9fbGlzdCcpLFxyXG4gICAgICAgIGl0ZW0gPSAkdGhpcy5jbG9zZXN0KCcubmV3cy1hY2NvcmRlb25fX2l0ZW0nKSxcclxuICAgICAgICBpdGVtcyA9IGxpc3QuZmluZCgnLm5ld3MtYWNjb3JkZW9uX19pdGVtJyksXHJcbiAgICAgICAgdGV4dCA9IGl0ZW0uZmluZCgnLm5ld3MtYWNjb3JkZW9uX190ZXh0JyksXHJcbiAgICAgICAgb3RoZXJDb250ZW50ID0gbGlzdC5maW5kKCcubmV3cy1hY2NvcmRlb25fX3RleHQnKSxcclxuICAgICAgICBkdXJhdGlvbiA9IDMwMDtcclxuXHJcbiAgICBpZiAoIWl0ZW0uaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgIGl0ZW1zLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgaXRlbS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICBvdGhlckNvbnRlbnQuc2xpZGVVcChkdXJhdGlvbik7XHJcbiAgICAgIHRleHQuc2xpZGVEb3duKGR1cmF0aW9uKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgdGV4dC5zbGlkZVVwKGR1cmF0aW9uKTtcclxuICAgICAgaXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIHB1YmxpY01ldGhvZCgpIHtcclxuICAgIGV4YW1wbGVNb2R1bGUgPSB7XHJcbiAgICAgIC8vIG5hbWUgOiBwdWJsaWMgZnVuY3Rpb25cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB3aW5kb3cubW9kdWxlTmFtZSA9IGV4YW1wbGVNb2R1bGU7XHJcbn0pKCk7XHJcbiIsInZhciBob21lUGFnZSA9IHJlcXVpcmUoJy4vX21vZHVsZXMvaG9tZVBhZ2UuanMnKTsiXX0=
