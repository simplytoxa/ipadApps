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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ljZWNhdDA2MjAxNC9pcGFkQXBwcy9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvaWNlY2F0MDYyMDE0L2lwYWRBcHBzL2FwcC9qcy9fbW9kdWxlcy9ob21lUGFnZS5qcyIsIi9ob21lL2ljZWNhdDA2MjAxNC9pcGFkQXBwcy9hcHAvanMvZmFrZV8yN2U4MzI0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiOyhmdW5jdGlvbigpIHtcclxuICB2YXIgZXhhbXBsZU1vZHVsZSA9IHt9O1xyXG5cclxuICBwdWJsaWNNZXRob2QoKTtcclxuICBpbml0KCk7XHJcbiAgYXR0YWNoRXZlbnRzKCk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBhdHRhY2hFdmVudHMoKSB7XHJcbiAgICAkKCcubmV3cy1zbGlkZXJfX2NvbnRyb2xzLWJ0bicpLm9uKCdjbGljaycsIG5ld3NBcnJvd0NsaWNrKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBuZXdzQXJyb3dDbGljayhlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgIGNvbnRhaW5lciA9ICR0aGlzLmNsb3Nlc3QoJy5uZXdzLXNsaWRlcl93cmFwJyksXHJcbiAgICAgICAgbGlzdCA9IGNvbnRhaW5lci5maW5kKCcubmV3cy1zbGlkZXJfX2xpc3QnKSxcclxuICAgICAgICBpdGVtcyA9IGNvbnRhaW5lci5maW5kKCcubmV3cy1zbGlkZXJfX2l0ZW0nKSxcclxuICAgICAgICBhY3RpdmVTbGlkZSA9IGl0ZW1zLmZpbHRlcignLmFjdGl2ZScpLFxyXG4gICAgICAgIG5leHRTbGlkZSA9IGFjdGl2ZVNsaWRlLm5leHQoKSxcclxuICAgICAgICBwcmV2U2xpZGUgPSBhY3RpdmVTbGlkZS5wcmV2KCksXHJcbiAgICAgICAgZmlyc3RTbGlkZSA9IGl0ZW1zLmZpcnN0KCksXHJcbiAgICAgICAgbGFzdFNsaWRlID0gaXRlbXMubGFzdCgpLFxyXG4gICAgICAgIHNsaWRlck9mZnNldCA9IGNvbnRhaW5lci5vZmZzZXQoKS5sZWZ0LFxyXG4gICAgICAgIHJlcVBvcyA9IDA7XHJcblxyXG4gICAgaWYgKCR0aGlzLmhhc0NsYXNzKCduZXdzLXNsaWRlcl9fY29udHJvbHMtYnRuX25leHQnKSkge1xyXG4gICAgICBpZiAobmV4dFNsaWRlLmxlbmd0aCkge1xyXG4gICAgICAgIGZpbmRSZXFQb3MobmV4dFNsaWRlKTtcclxuICAgICAgICByZW1vdmVBY3RpdmVDbGFzcyhuZXh0U2xpZGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbmRSZXFQb3MoZmlyc3RTbGlkZSk7XHJcbiAgICAgICAgcmVtb3ZlQWN0aXZlQ2xhc3MoZmlyc3RTbGlkZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChwcmV2U2xpZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgZmluZFJlcVBvcyhwcmV2U2xpZGUpO1xyXG4gICAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzKHByZXZTbGlkZSk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZpbmRSZXFQb3MobGFzdFNsaWRlKTtcclxuICAgICAgICByZW1vdmVBY3RpdmVDbGFzcyhsYXN0U2xpZGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdC5jc3MoJ2xlZnQnLCAnLT0nICsgcmVxUG9zICsgJ3B4Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWN0aXZlQ2xhc3Moc2xpZGUpIHtcclxuICAgICAgc2xpZGUuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgLnNpYmxpbmdzKClcclxuICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kUmVxUG9zKHNsaWRlKSB7XHJcbiAgICAgIHJlcVBvcyA9IHNsaWRlLm9mZnNldCgpLmxlZnQgLSBzbGlkZXJPZmZzZXQ7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIHB1YmxpY01ldGhvZCgpIHtcclxuICAgIGV4YW1wbGVNb2R1bGUgPSB7XHJcbiAgICAgIC8vIG5hbWUgOiBwdWJsaWMgZnVuY3Rpb25cclxuICAgIH1cclxuICB9O1xyXG5cclxuICB3aW5kb3cubW9kdWxlTmFtZSA9IGV4YW1wbGVNb2R1bGU7XHJcbn0pKCk7XHJcbiIsInZhciBob21lUGFnZSA9IHJlcXVpcmUoJy4vX21vZHVsZXMvaG9tZVBhZ2UuanMnKTsiXX0=
