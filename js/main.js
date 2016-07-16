/*
 *	Site:christophermelville.com
 *	Author: christopher melville
 *	Date: june 2016
 *	Comments: personal website
 */


   /* * * * * * * * * * * * * * *
  * re-size content Div's
  * * * * * * * * * * * * * * */

    $(document).ready(function(){
      console.log('doc ready resize');
      resizeDiv();
    });

    window.onload = function() {
      console.log('onload resize');
      resizeDiv();
    }

    window.onresize = function(event) {
      console.log('window onresize resize');
      resizeDiv();
    };

    function resizeDiv() {
      var vpw, vph;
      if($(window).width() > 992) {
        // large size - 3 boxes horizontal
        vpw = $(window).width()/2;
        vph = $(window).height()/2;     
      } else if($(window).width() > 768 && $(window).width() < 992 ) {
        // medium size - 2 boxes horizontal
        vpw = $(window).width()/3;
        vph = $(window).height()/3;         
      } else if ($(window).width() < 768) {
        // small mobile screens
        vpw = 600;
        vph = 600;
        vc = 200;
      }

      $(".content").css("height", vph + "px");
    };



    
   /* * * * * * * * * * * * * * *
  * animate headings 
  * * * * * * * * * * * * * * */
  window.onload = function() {

    // stagger animation accross headings
    $('#intro > h2').animate({
      opacity: 1.0,
      marginLeft: 0,
    }, 400);

    $('#about > h2').animate({
      opacity: 1.0,
      marginLeft: 0,
    }, 600);

    $('#projects > h2').animate({
      opacity: 1.0,
      marginLeft: 0,
    }, 800);

    $('#moai > h2').animate({
      opacity: 1.0,
      marginLeft: 0,
    }, 1000);
    $('#moai-tag1').animate({
      opacity: 1.0,
    }, 2500);
    $('#moai-tag2').animate({
      opacity: 1.0,
    }, 2500);

    $('#emailLink').animate({
      opacity: 1.0,
      marginLeft: 0,
    }, 1400);

    $('p, a').animate({
      opacity: 1.0,
    }, 2500);      
  }

   /* * * * * * * * * * * * * * *
  *
  * * * * * * * * * * * * * * */

   /* * * * * * * * * * * * * * *
  *
  * * * * * * * * * * * * * * */