var imgs=["img/pic3.png","img/left.png","img/right.png","img/pic1.png","img/pic2.png","img/rotate.png","img/car.png","img/arrow.png",
  "img/twotext.png","img/twocar.png","img/twopic1.png","img/twocircle.png","img/rotate1.png","img/bigcarlight.png",
  "img/hand.png","img/img/car/Rouge Flamme.0000.png",
"img/img/car/Rouge Flamme.0001.png",
"img/img/car/Rouge Flamme.0002.png",
"img/img/car/Rouge Flamme.0003.png",
"img/img/car/Rouge Flamme.0004.png",
"img/img/car/Rouge Flamme.0005.png",
"img/img/car/Rouge Flamme.0006.png",
"img/img/car/Rouge Flamme.0007.png",
"img/img/car/Rouge Flamme.0008.png",
"img/img/car/Rouge Flamme.0009.png",
"img/img/car/Rouge Flamme.0010.png",
"img/img/car/Rouge Flamme.0011.png",
"img/img/car/Rouge Flamme.0012.png",
"img/img/car/Rouge Flamme.0013.png",
"img/img/car/Rouge Flamme.0014.png",
"img/img/car/Rouge Flamme.0015.png",
"img/img/car/Rouge Flamme.0016.png",
"img/img/car/Rouge Flamme.0017.png",
"img/img/car/Rouge Flamme.0018.png",
"img/img/car/Rouge Flamme.0019.png",
"img/img/car/Rouge Flamme.0020.png",
"img/img/car/Rouge Flamme.0021.png",
"img/img/car/Rouge Flamme.0022.png",
"img/img/car/Rouge Flamme.0023.png",
"img/img/car/Rouge Flamme.0024.png",
"img/img/car/Rouge Flamme.0025.png",
"img/img/car/Rouge Flamme.0026.png",
"img/img/car/Rouge Flamme.0027.png",
"img/img/car/Rouge Flamme.0028.png",
"img/img/car/Rouge Flamme.0029.png",
"img/img/car/Rouge Flamme.0030.png",
"img/img/car/Rouge Flamme.0031.png",
"img/img/car/Rouge Flamme.0032.png",
"img/img/car/Rouge Flamme.0033.png",
"img/img/car/Rouge Flamme.0034.png",
"img/img/car/Rouge Flamme.0035.png",
"img/img/car/Rouge Flamme.0036.png",
"img/img/car/Rouge Flamme.0037.png",
"img/img/car/Rouge Flamme.0038.png",
"img/img/car/Rouge Flamme.0039.png",
"img/img/car/Rouge Flamme.0040.png",
"img/img/car/Rouge Flamme.0041.png",
"img/img/car/Rouge Flamme.0042.png",
"img/img/car/Rouge Flamme.0043.png",
"img/img/car/Rouge Flamme.0044.png",
"img/img/car/Rouge Flamme.0045.png",
"img/img/car/Rouge Flamme.0046.png",
"img/img/car/Rouge Flamme.0047.png",
"img/img/car/Rouge Flamme.0048.png",
"img/img/car/Rouge Flamme.0049.png",
"img/img/car/Rouge Flamme.0050.png",
"img/img/car/Rouge Flamme.0051.png",
"img/img/car/Rouge Flamme.0052.png",
"img/img/car/Rouge Flamme.0053.png",
"img/img/car/Rouge Flamme.0054.png",
"img/img/car/Rouge Flamme.0055.png",
"img/img/car/Rouge Flamme.0056.png",
"img/img/car/Rouge Flamme.0057.png",
"img/img/car/Rouge Flamme.0058.png",
"img/img/car/Rouge Flamme.0059.png",
"img/img/car/Rouge Flamme.0060.png",
"img/img/car/Rouge Flamme.0061.png",
"img/img/car/Rouge Flamme.0062.png",
"img/img/car/Rouge Flamme.0063.png",
"img/img/car/Rouge Flamme.0064.png",
"img/img/car/Rouge Flamme.0065.png",
"img/img/car/Rouge Flamme.0066.png",
"img/img/car/Rouge Flamme.0067.png",
"img/img/car/Rouge Flamme.0068.png",
"img/img/car/Rouge Flamme.0069.png",
"img/img/car/Rouge Flamme.0070.png",
"img/img/car/Rouge Flamme.0071.png","img/img/car/360.png","img/img/car/jia.png","img/img/car/jian.png"
,"img/threetext.png","img/threetext1.png","img/threepic2s.png","img/suna.png","img/sunb.png","img/sunc.png",
"img/sund.png","img/sun.png","img/hidden4.png","img/hidden1.png","img/hidden2.png","img/hidden3s.png","img/sevenpic1.png",
"img/sevenpic2.png",
"img/sevenpic3.png"];
function imgload(){
   for (i = 0; i < imgload.arguments.length; i++) {
          imgs[i] = new Image()
          imgs[i].src = imgload.arguments[i]
        }
    $('#mengceng').hide();  
};
var count=0;
$.each(imgs, function(index, val) {
  var img=new Image();
  $(img).on('load', function() {
     $('#mengceng span').html(Math.round(count/imgs.length)+'%');
    if (count>=imgs.length-1) {
      $('#mengceng').hide();
    }
    count++;
  });
  $(img).attr({
    src: val,
  });
});

 $.fn.extend({
    add_ani:function(effect,duration,delay){
        $(this).addClass('ani');
        if (effect) {
            $(this).attr('swiper-animate-effect', effect);
        }
       if (duration) {
            $(this).attr('swiper-animate-duration', duration);
       }
        if ( delay) {
            $(this).attr('swiper-animate-delay', delay);
        }   
    }
 });
 var n=0;
 function movecar(){
        if (n>71) {
            n=0;
        }
        $("#box img").eq(n).show().siblings().hide();
        n++;
 }
function touchcar(){
    var startX,endX,a=0,b=0;
    $(document).on("touchstart",function(e){
        startX = e.originalEvent.touches[0].pageX;
    });
    
    $(document).on("touchmove",function(e){
        endX = e.originalEvent.touches[0].pageX;
        a = parseInt((endX - startX)/10);
        
        if(a > b){
        n--;
        if(n < 0){
            n = 71;
        }
        }else if(a == b){
        n = n;  
        }else{
            n++;
            if(n > 71){
                n = 0;
            }
        }
        b = a;
        $("#box img").eq(n).show().siblings().hide();
    })
}
function sunimg(){
    $('.show:eq(0),.show:eq(1)').add_ani('bounceInRight','1s','0s');
    $('.show:eq(2),.show:eq(3)').add_ani('bounceInLeft','1s','1.2s');
    swiperAnimate(swiper);
}
 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    // initialSlide:8,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
         $('#sel-car img').hide();
         $('.show').hide();
         $('.slide2 img:eq(0)').add_ani('bounceInDown','1s','0s');
         $('.slide2 img:eq(1)').add_ani('bounceInRight','1s','0.5s');
         $('.slide5 img:eq(0)').add_ani('bounceInRight','1s','0s');
         $('.slide5 img:eq(1)').add_ani('bounceInRight','1s','1s');
         $('.slide5 .hand').add_ani('fadeIn','1s','1.5s');
         $('.show:eq(0),.show:eq(1)').add_ani('bounceInRight','1s','0s');
        $('.show:eq(2),.show:eq(3)').add_ani('bounceInLeft','1s','0s');
         $('.slide7 img:eq(0)').add_ani('bounceOutLeft','1s','0.5s')
         $('.slide7 img:eq(1)').add_ani('bounceInLeft','1s','1s')
         $('.slide7 img:eq(2)').add_ani('bounceInRight','1s','1s')
         $('.slide7 img:eq(3)').add_ani('bounceInLeft','1s','2s')
         $('.slide8 img:eq(0)').add_ani('zoomInRight','0.5s','0s')
         $('.slide8 img:eq(1)').add_ani('zoomIn','0.5s','1s')
         $('.slide8 img:eq(2)').add_ani('zoomInLeft','0.5s','0.5s')
        swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){ 
        swiperAnimate(swiper); //初始化完成开始动画
        console.log(swiper.activeIndex)
        if (swiper.activeIndex == 2) {
            $('#sel-btn a').eq(0).toggle(function() {
                $('#sel-car div').animate({top: '-0.5rem', left: '0rem'}, 500)
            }, function() {
                $('#sel-car div').animate({top: '1.5rem', left: '-2.6rem'}, 500);
            });
            $('#sel-btn a').eq(1).toggle(function() {
                $('#sel-car img').show();
            }, function() {
                $('#sel-car img').hide();
            });
            $('#sel-btn a').eq(2).toggle(function() {
                $('#sel-car div').animate({top: '-0.5rem', left: '-3rem'}, 500)
            }, function() {
                $('#sel-car div').animate({top: '1.5rem', left: '-2.6rem'}, 500);
            });
        };
        if (swiper.activeIndex == 3) {
            var n=0,index=1;
            touchcar();  
            $('#imgBtn img:eq(0)').toggle(function() {
                 time=setInterval(movecar,50);
            }, function() {
                clearInterval(time);
                touchcar();
            });
            $('#imgBtn img:eq(1)').on('touchstart', function() {
                index++;
                if (index>3) {
                    index=3
                }
                $("#box img").css('transform', 'scale('+0.5*(index+1)+','+0.5*(index+1));     
            });
            $('#imgBtn img:eq(2)').on('touchstart', function() {
                index--;
                if (index<0) {
                    index=0;
                }
                $("#box img").css('transform', 'scale('+0.5*(index+1)+','+0.5*(index+1));     
            })
        };
        if (swiper.activeIndex == 4) {
            $('.slide5 img:eq(0)').on('touchstart', function() {
                 $('.slide5>img:eq(0),.slide5>img:eq(1)').fadeOut(500,function(){
                     $('.show:eq(0),.show:eq(1)').fadeIn(1000, function() {
                          $('.show:eq(0),.show:eq(1)').fadeOut(500, function() {
                               $('.show:eq(2),.show:eq(3)').fadeIn(1000, function() {
                                   $('.show:eq(2),.show:eq(3)').fadeOut(500, function() {
                                        $('.slide5>img:eq(0),.slide5>img:eq(1)').fadeIn(1000);
                                   });
                               });
                          });
                     });
                 });  
            });
        }
        if (swiper.activeIndex == 6) {
            $('.slide7 img:eq(0)').fadeIn(1000, function() {
                $('.slide7>img:eq(1),.slide7>img:eq(2)').fadeIn(500,function(){
                     $('.slide7>img:eq(3)').fadeIn(500);
                })
            });
        }
    }
  }) 

