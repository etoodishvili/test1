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







const bagimage1 = document.querySelector('.bagimage1');
const trash = document.querySelector('#trash');
trash.addEventListener('click', ( )=> {
  bagimage1.classList.remove('.bagimage1');

})

// star

$('.starRating span').click(function(){
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  $(this).parent().addClass('starRated');
  
  // Added for Demo
  let rating = $(this).index() + 1;
  $('#currentRating').html( "<small>Rating: <b>" + rating + "</b></small>" );
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