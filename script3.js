
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