let btn = document.querySelectorAll('button');
        
for(let i = 0; i<btn.length; i++){

    btn[i].addEventListener('click',function(){
        for(let m = 0; m<btn.length;m++){
            btn[m].classList.remove('active');
        }
        btn[i].classList.add('active');
    })
    
}

/*


    _slick.slick({
        'dots':true,
        nextArrow:$('.main_1_btn2'),
        prevArrow:$('.main_1_btn1'),

    });

*/

   

    $('.main_5_inner2').slick({
        slidesToShow : 5,        // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,
        arrows : true, //나중에 true
        autoplay : true,            // 자동 스크롤 사용 여부
        autoplaySpeed : 3000,
        nextArrow:$('.main_5_btn1'),
        prevArrow:$('.main_5_btn2'), 
       
    })

    $('.slider1').slick({
'centerMode': true,
'centerPadding': '60px',
'slidesToShow': 6,
   arrows : true,
   nextArrow:$('.main_5_btn1'),
   prevArrow:$('.main_5_btn2'), 
// responsive: [
// {
// breakpoint: 768,
// settings: {
// arrows: false,
// centerMode: true,
// centerPadding: '80px',
// slidesToShow: 3
// }
// },
// {
// breakpoint: 480,
// settings: {
// arrows: false,
// centerMode: true,
// centerPadding: '80px',
// slidesToShow: 1
// }
// }
// ]
});

$('.main_side1').click(function(){

  $('.pop_cal').fadeIn().css('display','flex');


})


$('.pop_up_cancel, .pop_close_wrap').click(function(){
  $('.pop_cal').fadeOut();
})




// setTimeout(function(){

//   $('.log_txt').each(function(){
//     let span = $('.log_txt').children();
  
//     let duration = 100;
  
//     span.each(function(i,e){
  
//       setTimeout(function(){
//         $(span).eq(i).css({'opacity': 1});
//         console.log(i);
//       }, duration*(i+1));
  
//     }); //each

  
//   });//each






// },500); //setTimeOut



$('.main_7_phto').children().click(function(){


  let picData = $(this).data('bg');

  let bgUrl = 'img/';


  $(this).parent().parent().siblings('.main_7_timg').css({
    'backgroundImage' : `url(${bgUrl}${picData})` 
  });

});//사진바꾸기 


//************************************************************ */


      var _slick = $('.main_slider');

      function typeInit(target, str, destroy) {
         var typedOptions = {
               strings: [str],
               typeSpeed: 30,
               cursorChar: ""
            },
            _typedjs = new Typed(target, typedOptions);

         if (destroy === true) {
            _typedjs.destroy();
         }
      } //typeInit END

      _slick.on("init", function(event, slick) {
            var _current = _slick.find("[data-slick-index='0']"),
               _input = _current.find("[data-typed]"),
               _inputNative = _input[0],
               _data = _input.data("typed");

            typeInit(_inputNative, _data);
         });

         
      _slick.on("afterChange", function(event, slick, currentSlide) {
        var _getCurrent = _slick.find(
          "[data-slick-index='" + currentSlide + "']"
       ),
       _getInput = _getCurrent.find("[data-typed]"),
       _getInputNative = _getInput[0],
       _getData = _getInput.data("typed"),
        
       _getAll = $("[data-slick-index]"),
       _getAllInput = _getAll.find("[data-typed]"),
       _getAllInputNative = _getAllInput[0];

    //destroy
    typeInit(_getAllInputNative, _getData, true);
    _getAllInput
       .html("")
       .next().remove();

    //init
    typeInit(_getInputNative, _getData);

         });

      _slick.slick({
        'dots':true,
        nextArrow:$('.main_1_btn2'),
        prevArrow:$('.main_1_btn1'),
      });
 
// ****************밑은 탭메뉴



	$('.tab_menu li').mouseover(function(){
		let i = $(this).index();
      $('.tab_container').slideDown();
      $('.tab_container_wrap').children().eq(i).show().siblings().hide();
      

	});
	$('.tab_container').mouseleave(function(){
		$('.tab_container').slideUp();
	});



