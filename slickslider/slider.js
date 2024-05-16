const prevBtn = $('.left');
const nextBtn = $('.right');
const images = $('.img');

let numberOfPicture = 0;

nextBtn.on('click', function() {
  images.eq(numberOfPicture).fadeOut('slow', function() {
    $(this).removeClass('active');
    if (numberOfPicture == images.length - 1) {
      numberOfPicture = 0;
    } else {
      numberOfPicture++;
    }
    images.eq(numberOfPicture).fadeIn('slow', function() {
      $(this).addClass('active');
    });
  });
});

prevBtn.on('click', function() {
  images.eq(numberOfPicture).fadeOut('slow', function() {
    $(this).removeClass('active');
    if (numberOfPicture == 0) {
      numberOfPicture = images.length - 1;
    } else {
      numberOfPicture--;
    }
    images.eq(numberOfPicture).fadeIn('slow', function() {
      $(this).addClass('active');
    });
  });
});
