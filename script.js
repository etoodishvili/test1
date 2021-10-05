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
const input = document.querySelector('input')
const minBtn = document.querySelector('#min')
const plusBtn = document.querySelector('#plus')
const minValue = 0
const maxValue = 12

function checkButton() {
  if (input.value == minValue) {
    minBtn.disabled = true
    plusBtn.disabled = false
  } else if (input.value == maxValue) {
    minBtn.disabled = false
    plusBtn.disabled = true
  } else {
    minBtn.disabled = false
    plusBtn.disabled = false
  }
}


// Set button when first loaded
window.addEventListener('DOMContentLoaded', checkButton)

// Set button when input was changed
input.addEventListener('input', checkButton)


// Add listener when button has clicked
minBtn.addEventListener('click', () => {
  input.value = Number(input.value) - 1
  checkButton()
})

plusBtn.addEventListener('click', () => {
  input.value = Number(input.value) + 1
  checkButton()
})
