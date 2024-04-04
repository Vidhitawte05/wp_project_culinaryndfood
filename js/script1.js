function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-rating i');
  
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-index'));
        setRating(rating);
      });
  
      star.addEventListener('mouseover', () => {
        const rating = parseInt(star.getAttribute('data-index'));
        highlightStars(rating);
      });
  
      star.addEventListener('mouseout', () => {
        const currentRating = parseInt(document.querySelector('.star-rating').getAttribute('data-rating'));
        highlightStars(currentRating);
      });
    });
  
    function setRating(rating) {
      document.querySelector('.star-rating').setAttribute('data-rating', rating);
      highlightStars(rating);
  
      // Add logic to send the rating to your server or perform any other action
      console.log('Selected rating:', rating);
    }
  
    function highlightStars(rating) {
      stars.forEach(star => {
        const starIndex = parseInt(star.getAttribute('data-index'));
        star.classList.toggle('active', starIndex <= rating);
      });
    }
  });
  