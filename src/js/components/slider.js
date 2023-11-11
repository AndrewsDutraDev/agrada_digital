const slider = {
  setCarouselProducts: function(carouselClass){
    $(carouselClass).slick({
      infinite: false,
      adaptiveHeight: true,
      slidesToShow: 4,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      }, 
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }]
    });
  },
  init: function () {
    console.log('init')
  },
};

export default slider;