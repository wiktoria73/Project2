$(document).ready(function () {
        $('.js-nav a').click(function (event) {
          event.preventDefault();

          var url = $(this).attr('href');

          $("html, body").animate({ scrollTop: $(url).offset().top }, 1000);
        });
      });
