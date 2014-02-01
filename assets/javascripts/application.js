//****************************************************************************************************
//
// .. INIT
//
//****************************************************************************************************
//
// .. arcticModal
//
$.arcticmodal('setDefault', {
  overlay: {
    css: {
      backgroundColor: '#000',
      opacity: .66
    }
  },
  openEffect: {
    speed: 200
  },
  closeEffect: {
    speed: 200
  }
});

//
// .. Accounting
//
accounting.settings = {
  currency: {
    decimal: '.',
    thousand: ' ',
    precision: 2
  },
  number: {
    decimal : '.',
    thousand: ' ',
    precision: 0
  }
}



//****************************************************************************************************
//
// .. EVENTS
//
//****************************************************************************************************
//
// .. Open dialog
//
$(document).on('click touchstart', '[data-dialog="true"]', function() {
  var url = $(this).data('url');
  
  $.arcticmodal({
    type: 'ajax',
    url: url
  });
  
  return false;
});

//
// .. Close dialog
//
$(document).on('click touchstart', '.js-dialog_close', function() {
  $.arcticmodal('close');
});



//****************************************************************************************************
//
// .. READY
//
//****************************************************************************************************
$(function() {
  
  // $('#header').stickyHeader();
  // $('#footer').stickyFooter();



  //****************************************************************************************************
  //
  // .. DOUBLE HOVER
  //
  //****************************************************************************************************
  doubleHover('a.double-hover', 'hover');



  //****************************************************************************************************
  //
  // .. FORMS
  // .. $('#checkbox').customForm() to init single element; $('body').customForm() to init all elements
  //
  //****************************************************************************************************
  $('.form').customForm();



  //****************************************************************************************************
  //
  // .. SCROLL TO
  //
  //****************************************************************************************************
  $('a[data-scroll="true"]').on('click touchstart', function() {
    var      anchor = $(this).attr('href'),
        destination = $(anchor).offset().top;
    
    $('html, body').animate({scrollTop: destination}, 500);
    
    return false;
  });



  //****************************************************************************************************
  //
  // .. ACCOUNTING
  //
  //****************************************************************************************************
  //
  // .. Number
  //
  $('.format-number').each(function() {
    var
      number = parseInt($(this).text()),
      formatNumber = accounting.formatNumber(number);

    $(this).text(formatNumber);
  });

  //
  // .. Money
  //
  $('.format-money').each(function() {
    var c = accounting.settings.currency;

    if ($(this).hasClass('__rub')) {
      c.format = '%v';
    } else if ($(this).hasClass('__usd')) {
      c.symbol = '$';
      c.format = '%s%v';
    } else if ($(this).hasClass('__eur')) {
      c.symbol = '€';
      c.format = '%s%v';
    }

    var
      number = parseFloat($(this).text()),
      formatMoney = accounting.formatMoney(number);
    
    if ($(this).hasClass('__rub')) {
      $(this).text(formatMoney).append('&nbsp;<i class="fa fa-ruble"></i>');
    } else {
      $(this).text(formatMoney);
    }
  });



  //****************************************************************************************************
  //
  // .. RESIZE
  //
  //****************************************************************************************************
  $(window).smartresize(function() {

    // $('#header').stickyHeader();
    // $('#footer').stickyFooter();

  });
  
});