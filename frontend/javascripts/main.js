'use strict';

import $ from 'jquery';
import Swiper from 'swiper';

$(function() {
  let $qty = $('.products__meta--qty');
  $qty.find('a.reduce').on('click', function(event) {
    event.preventDefault();
    $qty.find('input').get(0).stepDown();
  });
  $qty.find('a.add').on('click', function(event) {
    event.preventDefault();
    $qty.find('input').get(0).stepUp();
  });

  $('.products__details').on('submit', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/cart/',
      error: function(xhr) {
        alert(xhr.status + ': ' + xhr.statusText);
      },
      success: function(response) {
        alert(response.status + ': ' + response.message + ' (' + response.itemID + ')');
      },
      data: $(event.target).serialize()
    });
  });

  new Swiper('.qor-top-slider', {
    autoplay: 10000,
    pagination: '.swiper-pagination',
    paginationClickable: true
  });

  new Swiper('.products__featured--slider', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 4,
    spaceBetween: 30
  });

  new Swiper('.products__gallery--top', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });

  let productsFeaturedSliderH = $('.products__featured--slider').width(),
    isMobile = window.matchMedia('only screen and (max-width: 760px)').matches,
    columnNuber = isMobile ? 2 : 4;

  $('.footer__change-language select').on('change', function() {
    var url = $(this).val();
    if (url) {
      window.location = url;
    }
    return false;
  });
});
