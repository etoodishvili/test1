let togglebutton = document.getElementById('togglebutton');
let navbarlinks = document.getElementById('navbarlinks');
togglebutton.addEventListener('click',function() {
  navbarlinks.classList.toggle('active');
})
const productPreview = document.querySelector('.product_preview');
const bottomSide = document.querySelector('.bottom-side');
const images = document.querySelectorAll('.little1');
console.log(images)
const topSide = document.createElement('div');
productPreview.appendChild(topSide);
topSide.classList.add('top-side');
topSide.style.cssText+= `background-image: url('images/paraiso1.jpg')`;
images.forEach(image => {
    image.addEventListener('click', function() {
        let src = image.src;
        topSide.style.cssText+= `background-image: url(${src})`;
        
    })
})
const sizes = document.querySelectorAll('.size');
function changeSize(){
  sizes.forEach(size=> size.classList.remove('active'));
  this.classList.add('active');
}
sizes.forEach(size => size.addEventListener('click',changeSize));
// star
const starDating = document.querySelector('.starRating');
const spans = starDating.querySelectorAll('span');
spans.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.add('active');
    starDating.classList.add('starRated');
  })
});
// dots
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length} ;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
const likes = document.querySelectorAll(".fa-thumbs-up");
likes.forEach(likeIcon => {
  likeIcon.addEventListener("click", () => {
    if(likeIcon.style.color == "green") {
      likeIcon.style.color = "#C1C1C1";
    } else {
      likeIcon.style.color = "green"
    }
  })
});
const disLikes = document.querySelectorAll(".fa-thumbs-down");
disLikes.forEach(likeIcon => {
  likeIcon.addEventListener("click", () => {
    if(likeIcon.style.color == "red") {
      likeIcon.style.color = "#C1C1C1";
    } else {
      likeIcon.style.color = "red"
    }
  })
});
// counter
$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});