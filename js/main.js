$( document ).ready(function() {
  // Stycky header
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 128) {
        $('nav').addClass('fixed-header');
        $('.home-hero').addClass('jump-fix');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('.home-hero').removeClass('jump-fix');
    }
  });

  // Pie chart
  function sliceSize(dataNum, dataTotal) {
    return (dataNum / dataTotal) * 360;
  }
  function addSlice(sliceSize, pieElement, offset, sliceID, color) {
    $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;
    $("."+sliceID).css({
      "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
    });
    $("."+sliceID+" span").css({
      "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
      "background-color": color
    });
  }
  function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
    var sliceID = "s"+dataCount+"-"+sliceCount;
    var maxSize = 179;
    if(sliceSize<=maxSize) {
      addSlice(sliceSize, pieElement, offset, sliceID, color);
    } else {
      addSlice(maxSize, pieElement, offset, sliceID, color);
      iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
    }
  }
  function createPie(dataElement, pieElement) {
    var listData = [];
    $(dataElement+" span").each(function() {
      listData.push(Number($(this).html()));
    });
    var listTotal = 0;
    for(var i=0; i<listData.length; i++) {
      listTotal += listData[i];
    }
    var offset = 0;
    var color = [
      "#0040b1", 
      "#0060d6", 
      "#037df0", 
      "#0ca4ff", 
      "#49f9c0", 
      "purple", 
      "turquoise", 
      "forestgreen", 
      "navy", 
      "gray"
    ];
    for(var i=0; i<listData.length; i++) {
      var size = sliceSize(listData[i], listTotal);
      iterateSlices(size, pieElement, offset, i, 0, color[i]);
      $(dataElement+" li:nth-child("+(i+1)+") .round").css("background", color[i]);
      $(dataElement+" li:nth-child("+(i+1)+") span, li:nth-child("+(i+1)+") i").css("color", color[i]);
      offset += size;
    }
  }
  createPie(".pieID.legend", ".pieID.pie");
  // End Pie Chart  

  // Smooth scroll
  $('.go-to-link').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 102
        }, 1000);
        return false;
      }
    }
  });
  $('#burger').click(function() {
    $(this).toggleClass('open');
  });


  $('.show_animete_1').waypoint(function() {
    $('.container_1').css('display', 'block');
  }, { offset: '70%' });
  $('.show_animete_2').waypoint(function() {
    $('.container_2').css('display', 'block');
  }, { offset: '70%' });
  $('.show_animete_3').waypoint(function() {
    $('.container_3').css('display', 'block');
  }, { offset: '70%' });
  $('.show_animete_4').waypoint(function() {
    $('.container_4').css('display', 'block');
  }, { offset: '70%' });
  $('.show_animete_5').waypoint(function() {
    $('.container_5').css('display', 'block');
  }, { offset: '70%' });

});
