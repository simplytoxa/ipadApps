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
