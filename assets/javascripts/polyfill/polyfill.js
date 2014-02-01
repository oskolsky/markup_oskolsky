yepnope([
  {
    test: window.matchMedia,
    nope: '/assets/javascripts/polyfill/vendor/matchMedia.js'
  },

  {
    test: Modernizr.input.placeholder,
    nope: '/assets/javascripts/polyfill/vendor/jquery.placeholder.js'
  }
]);  