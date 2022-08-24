//누구를 선택할까?->변수에넣을까
// 1 . 버튼을 클릭한다.
//2. 패널이 보인다
var tabWrapper=$('.tab-wrapper'),targetLink=tabWrapper.find('.tab-menu a'),tabContent=tabWrapper.find('#tab-content>div');

//게시판 첫번째 패널보임
tabContent.eq(0).show();

//게시판 탭
targetLink.each(function(){
  var tg=$(this); //클릭한 targetLink
  var tgAnc=tg.attr('href');
  tg.click(function(){
    targetLink.removeClass('active');
    tg.addClass('active');
    tabContent.hide();
    $(tgAnc).show();
  })
})

