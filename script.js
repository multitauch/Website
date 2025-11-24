document.addEventListener('DOMContentLoaded', function() {
  if (window.location.hash === '#pictures') {
    var instagramCard = document.getElementById('instagram-card');
    if (instagramCard) {
      instagramCard.classList.add('blink');
      setTimeout(function() {
        instagramCard.classList.remove('blink');
      }, 700);
      instagramCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  var navPictures = document.getElementById('nav-pictures');
  if (navPictures) {
    navPictures.addEventListener('click', function(e) {
      var instagramCard = document.getElementById('instagram-card');
      if (instagramCard) {
        setTimeout(function() {
          instagramCard.classList.add('blink');
          setTimeout(function() {
            instagramCard.classList.remove('blink');
          }, 700);
        }, 300);
      }
    });
  }
});