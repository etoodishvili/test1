let togglebutton = document.getElementById('togglebutton');
let navbarlinks = document.getElementById('navbarlinks');

togglebutton.addEventListener('click',function() {
  navbarlinks.classList.toggle('active');
})

let box = document.getElementById('box');
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

$('.starRating span').click(function(){
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  $(this).parent().addClass('starRated');
  
  // Added for Demo
  let rating = $(this).index() + 1;
  $('#currentRating').html( "<small>Rating: <b>" + rating + "</b></small>" );
});









// likes
const likes = document.querySelectorAll(".fa-thumbs-up");
likes.forEach(likeIcon => {
  likeIcon.addEventListener("click", () => {
    console.log(likeIcon)
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
    console.log(likeIcon)
    if(likeIcon.style.color == "red") {
      likeIcon.style.color = "#C1C1C1";
    } else {
      likeIcon.style.color = "red"
    }
  })
});