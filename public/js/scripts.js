$(document).ready(function() {

      // use jQuery to update progress bar
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        
        //update progress
        var step = $(e.target).data('step');
        var percent = (parseInt(step) / 5) * 100;
        
        $('.progress-bar').css({width: percent + '%'});
        $('.progress-bar').text("Step " + step + " of 5");
        
      });

    });