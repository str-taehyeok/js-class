const mainMenus = document.querySelectorAll(".menu-wrap .menu");
const subMenuUl = document.querySelectorAll(".sub-menu-wrap ul");
const subMenus = document.querySelectorAll(".sub-menu-wrap .sub-menu");
const slideWrap = document.querySelector(".slide-wrap");
const noticeBtn = document.querySelector(".notice-btn");

let count = 0;

mainMenus.forEach((menu) => {
  menu.addEventListener("mouseover", () => {
    subMenuUl.forEach((ul) => {
      ul.style.height = "200px";
    })
  })

  menu.addEventListener("mouseleave", () => {
    subMenuUl.forEach((ul) => {
      ul.style.height = "0";
    })
  })

})


subMenus.forEach((sub, i) => {
  sub.addEventListener("mouseover", () => {
    let mainIndex = Math.floor(i / 4);
    subMenuUl.forEach((ul) => {
      mainMenus[mainIndex].style.backgroundColor = "black";
      mainMenus[mainIndex].style.color = "white";
      ul.style.height = "200px";
    })
  })

  sub.addEventListener("mouseleave", () => {
    let mainIndex = Math.floor(i / 4);
    subMenuUl.forEach((ul) => {
      mainMenus[mainIndex].style.backgroundColor = "white";
      mainMenus[mainIndex].style.color = "#333";
      ul.style.height = "0";
    })
  })
})

setInterval(() => {
  count++
  console.log(count)
  let imageHeight = 300;
  if(count >= 3) {
    count = 0;
  }
  slideWrap.style.transform = `translate(0, -${imageHeight * count}px)`;
}, 3000)

// 클릭 이벤트
function showGallery(){
  console.log("콘솔")
}

noticeBtn.onclick = function(){
  console.log("추가!")
}
