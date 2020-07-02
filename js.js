 $("document").ready(function()
  {
         $(".nam11").hide();
         $(".booker").hide();
         $("#websiteName1").hide();
         $("#websiteName2").hide();


         $(".nam1").hover(function()
         {
           $(this).css("opacity","100%");

           $("#websiteName1").show();
           $("#websiteName1").css("text-decoration","none");




         });
        $(".nam1").mouseout(function()
        {
           $(this).css("opacity","60%");
           $("#websiteName1").hide();


        });
         $(".nam2").hover(function()
         {
           $(this).css("opacity","100%");
           $("#websiteName2").show();


         });
        $(".nam2").mouseout(function()
        {
           $(this).css("opacity","60%");
         $("#websiteName2").hide();

        });
       /*  $(".buttonnp").hover(function()
         {
                $(this).css('box-shadow', '10px', '10px', '5px', '#000');
              });*/

           var scroll_start = 0;
   var startchange = $('#ima');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', '#343a40');
         $(".buttonn").css('background-color','#000');
              $(".buttonnp").css('background-color', '#fff');


       } else {
          $('.navbar').css('background-color', 'transparent');
           $(".buttonn").css('background-color','transparent');
              $(".buttonnp").css('background-color', 'transparent');
       }
   });
 }
  
    $(".cv").click(function(){
      window.location.href="myCV.pdf";

    })

          $(window).scroll(function(){
       if($(this).scrollTop()>40){
        $("#but").fadeIn();
        }
       else{
        $("#but").fadeOut();
      }
      });
      $("#but").click(function(){
        $("html,body").animate({scrollTop :0},2000);
      });


        /* $(window).scroll(function()
         {
           if($(this).scrollTop()>40)
            {
              
               
            }
           else
            {
              
            }
         });*/
      $("#home").click(function(){
        $("html,body").animate({scrollTop :0},2000);

      });
    
      $("#skills").click(function(){
        $("html,body").animate({scrollTop :670},2000);
      });

       
      $("#projects").click(function(){
        $("html,body").animate({scrollTop :1620},2000);
      });
       
      $("#OurTeam").click(function(){
        $("html,body").animate({scrollTop :2400},2000);
      });
    
      $("#contact").click(function(){
        $("html,body").animate({scrollTop :3020},2000);

      });
      $(".logo").click(function(){
        $("html,body").animate({scrollTop :3780},2000);

      });
     /*//////////////////////////////for arrow///////////////////////////////////*/
 const $icon = document.querySelector('.icon');
const $arrow = document.querySelector('.arrow');

$icon.onclick = () => {
  $arrow.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });
}





  });
