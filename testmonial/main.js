const scene = document.querySelector(".scene"),
cards = document.querySelectorAll(".card");

cards.forEach((card)=>{
  // card.addEventListener("mouseover",(e)=>{
  //   e.preventDefault();
  //   if(scene.style.animationPlayState != "paused")
  //   scene.style.animationPlayState = "paused";
  // });
  // card.addEventListener("mouseleave",(e)=>{
  //   e.preventDefault();
  //   if(scene.style.animationPlayState != "running")
  //   scene.style.animationPlayState = "running";
  // })
  
  // card.addEventListener("focus",(e)=>{
  // card.style.boxShadow="0px 3px 5px #e14dba inset";
  //   card.firstElementChild.style.width = "100px";
  //   card.firstElementChild.style.height = "100px";
  //   card.firstElementChild.style.borderRadius = "50%";
  // //  console.log(e.target.nextElementSibling);
  //   card.firstElementChild.nextElementSibling.style.display="block";
  //  card.lastElementChild.style.filter="blur(0px)";
  // });
  
  // card.addEventListener("blur",(e)=>{
  //  card.style.boxShadow="none";
  //   card.firstElementChild.style.width = "100%";
  //   card.firstElementChild.style.height = "100%";
  //   card.firstElementChild.style.borderRadius = "0%";
  // //  console.log(e.target.nextElementSibling);
  //   card.firstElementChild.nextElementSibling.style.display="none";
  //      card.lastElementChild.style.filter="blur(300px)";
  // });
});