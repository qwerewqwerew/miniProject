$(function () {
  let winH = $(window).innerHeight();
  let winW = $(window).innerWidth();
  let vidH = $(".main-video video").innerHeight();
  let vidW = $(".main-video video").innerWidth();

   setInterval(videoResizeFn, 100);
  
   $(window).resize(function () {
     videoResizeFn();
   });
  function videoResizeFn() {

    winH = $(window).innerHeight();
    winW = $(window).innerWidth();
    vidH = $(".main-video video").innerHeight();
    vidW = $(".main-video video").innerWidth();

    //1. 비디오박스의 높이=창높이
    $(".main-video").css({ width: 100 + "%", height: winH });
    
    if (winH > vidH) {
      $(".main-video video").css({ width: "auto", height: winH });   
    }
    if (winW > vidW) {
      $(".main-video video").css({ width: winW, height: "auto" });
    }

    //정렬
    $(".main-video video").css({
      marginTop: (winH - vidH) / 2,
      marginLeft: (winW - vidW) / 2,
    });
  }
});
