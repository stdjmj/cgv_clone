//탭메뉴
var tab = $(".tab_group>.tab li");

tab.on("click", function () {
  var index = $(this).index();
  var content = $(".tab_group .tab_content").eq(index);

  $(this).addClass("on");
  $(this).siblings().removeClass("on");
  content.addClass("on");
  content.siblings().removeClass("on");
});

//상단 메뉴
var nav_bg = $("nav>.nav_bg");
var li = $("nav .nav>li");
var subs = $("nav .sub");

li.on("mouseover", function () {
  var max_height = 0;

  subs.each(function () {
    var temp = parseInt($(this).outerHeight());
    if (temp > max_height) {
      max_height = temp;
    }
  });

  nav_bg.show().css("height", max_height);
  subs.show().css("display", "block");
  console.log(max_height);
});

li.on("mouseleave", function () {
  nav_bg.hide().removeAttr("style");
  subs.show().css("display", "none");
});

//영화 예고편 재생
var video = document.querySelector("#movieVideo video");
var videoBtn = document.querySelector("#movieVideo .btn-wrapper .videoBtn");
var soundBtn = document.querySelector("#movieVideo .btn-wrapper .soundBtn");

setTimeout(function () {
  video.play();
}, 2000);

function videoController() {
  if (video.paused) {
    video.play();
    videoBtn.classList.remove("active");
  } else {
    video.pause();

    videoBtn.classList.add("active");
  }
}

function soundController() {
  if (video.muted) {
    //멈춤
    soundBtn.classList.add("active");
  } else {
    soundBtn.classList.remove("active");
  }

  video.muted = !video.muted;
}

//특별관

var img_path = [
  "./imgs/special/16382612660240.png",
  "./imgs/special/16382612660560.png",
  "./imgs/special/16390080561620.png",
  "./imgs/special/16553622935690.png",
];

$("#specialRoom .hoverChangeImgList>ul>li").on("mouseover", function () {
  var idx = $(this).index();

  $("#specialRoom .image>img").attr("src", img_path[idx]);

  $(this).siblings().removeClass("active");
  $(this).addClass("active");
});

//스크롤 내렸을 때 nav도 따라오기
document.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");

  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
