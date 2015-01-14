$(document).ready(function() {


  // array of uri's to images
  var images = [
    'http://fillmurray.com/1000/1500',
    'http://fillmurray.com/1100/1500',
    'http://fillmurray.com/1200/1500',
    'http://fillmurray.com/1300/1500',
    'http://fillmurray.com/1400/1500',
  ];
  // start at first image, remember arrays are zero indexed
  var index = 0;


  // initialize each marray-go-round component on the page
  $('.marray-go-round').each(function() {
    // $this will store the current marry-go-round element
    var $this = $(this);
    // stores the images count with the arrays length property
    var imagesCount = images.length;

    function updateImageIndicator() {
      // replace the text of the indicator element with jQuery's html method
      $this.find('.marray-go-round__indicator').html((index+1) + '/' + imagesCount);
    }

    function displayImage() {
      // apply background image css to the image element with jQuery's css method
      $this.find('.marray-go-round__image').css('background-image', 'url(' + images[index] + ')');
      // always update the image indicator when when are changing the image
      updateImageIndicator();
    }

    // initialize carousel by showing first image and updating the indicator
    displayImage();

    // show next image on next button click
    $this.find('.marray-go-round__next').on('click', function() {
      index = index + 1;

      // in case we click the next button on the last image, wrap to the
      // beginning of the set by setting index to 0
      if (index >= imagesCount) {
        index = 0;
      }

      displayImage();
    });

    // show previous image on previous button click
    $this.find('.marray-go-round__previous').on('click', function() {
      index = index - 1;

      // in case we click the previous button on the first image, wrap to the
      // end of the set by setting index to the images count-1 to account for
      // zero indexing
      if (index < 0) {
        index = imagesCount-1;
      }

      displayImage();
    });
  });


});
