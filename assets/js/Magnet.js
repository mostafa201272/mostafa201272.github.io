/*
 
 *********************************************************************************************************************************************
 *                                      ========== Magnet Framework Script ==========                                                        *
 *********************************************************************************************************************************************

 ******************************************************* BEGIN LICENSE BLOCK *****************************************************************
 *                                                                                                                                           *       
 *                                 ---             ---             -  	          -----------------                                          *
 *                                 ----           ----            ---	         /-----------------\                                         *
 *                                 -----         -----           -----	         -------------------                                         *
 *                                 ------       ------          -------	         ---                                                         *
 *                                 -------     -------         ---------	     ---                                                         *
 *                                 --------   --------    	  ----/ \----	     ---    ----                                                 *
 *                                 --- ----- ----- ---   	 ----/   \----       ---    -  ----------                                        *
 *                                 ---  ---------  ---  	---------------      ---    -  ----------                                        *
 *                                 ---   -------   ---	   ------   --------     ---    ----      ---                                        *
 *                                 ---    -----    ---    ------     --------    -------------------                                         *
 *                                 ---     ---     ---   ------       --------   \----------------/                                          *
 *                                 ---      -      ---  ------         --------   ----------------                                           *
 *                             =========================================================================                                     *
 *                                                                                                                                           *
 *                                                                                                                                           *
 * Distributed under the BSD license:                                                                                                        *
 *                                                                                                                                           *
 * Copyright (c) 2019,  Mostafa Mahmoud El-sherbiniy , mostafa201272@yahoo.com , https://www.facebook.com/Eng.Moustafa.Mahmoud.Elsherbiniy.  *
 * All rights (R) reserved .                                                                                                                 *
 *                                                                                                                                           *
 * Redistribution and use in source and binary forms, with or without                                                                        *
 * modification, are permitted provided that the following conditions are met:                                                               *
 *     * Redistributions of source code must retain the above copyright                                                                      *
 *       notice, this list of conditions and the following disclaimer.                                                                       *
 *     * Redistributions in binary form must reproduce the above copyright                                                                   *
 *       notice, this list of conditions and the following disclaimer in the                                                                 *
 *       documentation and/or other materials provided with the distribution.                                                                *
 *     * Neither the name of Ajax.org B.V. nor the                                                                                           *
 *       names of its contributors may be used to endorse or promote products                                                                *
 *       derived from this software without specific prior written permission.                                                               *
 *                                                                                                                                           *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND                                                           *
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED                                                             *
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE                                                                    *
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY                                                                             *
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES                                                                *
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;                                                              *
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND                                                               *
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT                                                                *
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS                                                             *
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.                                                                              *
 *                                                                                                                                           *
 * ********************************************************* END LICENSE BLOCK ***************************************************************

 */


/* 
    ****************************************************************************
    =======                Start Of Side Nav Bar Script                  =======
    ****************************************************************************
*/

// Main Variables
var mobile_menu_visible = 0,
    mobile_menu_initialized = false,
    toggle_initialized = false;

// Magnet Side Nav Bar Function
function Magnet_Side_Nav(){
    
    window_width = $(window).width();
    
    // Init navigation toggle for small screens
    if (window_width <= 991) {
        lbd.initRightMenu();
    }
    
    
    
    // activate collapse right menu when the windows is resized
    $(window).resize(function() {
        if ($(window).width() <= 991) {
            lbd.initRightMenu();
        }
    });
    
    
    // Nav Bar Width
    $(window).resize(function () {
        $(".Magnet-main-panel-sidenav .Magnet-TopNav").css("width",$(".Magnet-main-panel-sidenav").width());
    });
    
    $(".Magnet-main-panel-sidenav .Magnet-TopNav").css("width",$(".Magnet-main-panel-sidenav").width());
    
    // Toggle Side Bar Show Button Icon
	$(".Magnet-toglle-sideNavbar").click(function(){
		$(this).toggleClass("Selected");
		if($(this).hasClass("Selected")){
			$(this).html("<i class='fas fa-times'></i>");
		}else{
			$(this).html("<i class='fas fa-ellipsis-v'></i>");
		}
    });
    
    
    
    // dropdown menu in the side nav
    var slideNavDropdown = $('.Magnet-CatList-dropMenu');

    $('.Magnet-sidebar .Magnet-sidebar-wrapper .Magnet-categories .Magnet-categories-List').on('click', function () {
        $(this).toggleClass('opend').siblings().removeClass('opend');
        if ($(this).hasClass('opend')){
            $(this).find('.Magnet-CatList-dropMenu').slideToggle('fast');
            $(this).siblings().find('.Magnet-CatList-dropMenu').slideUp('fast');
        }else {
            $(this).find('.Magnet-CatList-dropMenu').slideUp('fast');
        }
    });
    
}

// Class Of Toggle Nav
lbd = {
    
    initRightMenu: function() {
        $sidebar_wrapper = $('.Magnet-sidebar-wrapper');
        if (!toggle_initialized) {
            $toggle = $('.Magnet-toglle-sideNavbar');

            $toggle.click(function() {

                if (mobile_menu_visible == 1) {
                    $('html').removeClass('nav-open');
                    mobile_menu_visible = 0;
                } else {
                    $('html').addClass('nav-open');
                    mobile_menu_visible = 1;

                }
            });

            toggle_initialized = true;
        }
    }
}

/* 
    ****************************************************************************
    =======               Start Of Side Nav Bar Script                   =======
    ****************************************************************************
*/



/* 
    ****************************************************************************
    =======       Start Of Move Magnet Elements Script                   =======
    ****************************************************************************
*/


function Magnet_Element_Move(target){

    var targetWidth = $(target).width(),
        targetHeight = $(target).height();
    
    // Set Cursor Position
    lx = targetWidth / 2;
    ly = targetHeight / 2;
    
   
    
    
    $(target).on({
        mousedown:function(){
            $(this).parents(".Magnet-ToolBox").addClass("move");
            $(this).css("cursor","move");
        },
        mouseup:function(){
            $(this).parents(".Magnet-ToolBox").removeClass("move");
            $(this).css("cursor","auto");
        }
    });
    

    $(document).on("mousemove",function(e){
        
        $(".move").offset({
            left: e.pageX - lx,
            top:e.pageY - ly
        });
        
    });

}

/* 
    ****************************************************************************
    =======       End Of Move Magnet Elements Script                   =======
    ****************************************************************************
*/

/* 
    ****************************************************************************
    =======                Start Of Slider Script                  =======
    ****************************************************************************
*/

// Magnet Slider Function
function MagnetSliders(targetSlader , interval = 5 , currentSlide = 1){
    
    // Get Slides Array // Done
    var Sliders = Array.from($("." + targetSlader + " .Magnet-Slider-front .Slides .Slide")); 
    

    // Get Slides Contaner // Done
    var slids =$("." + targetSlader + " .Slides .Slide");
    // Get Polits Container // Done
    var polits = $("." + targetSlader + " .slidesPoints-ul li");
    // Get Slides Polits As Array
    var sliderBolits = Array.from($("." + targetSlader + " .sliderPoint"));
    
    checker(Sliders,sliderBolits,slids,polits,currentSlide);
    
    
}
// Magnet Slider Function
function MagnetSlider(targetSlader , interval){
    
    // Get Slides Array // Done
    var Sliders = Array.from($("." + targetSlader + " .Magnet-Slider-front .Slides .Slide")); 
    // Get Polits Number // Done
    var SliderPolits = Sliders.length;
    // Current Slider
    var currentSlide = 1;
    
    // Generate Slider Bolits
    genPolits(targetSlader,SliderPolits);
    
    
    // Get Slides Contaner // Done
    var slids =$("." + targetSlader + " .Slides .Slide");
    // Get Polits Container // Done
    var polits = $("." + targetSlader + " .slidesPoints-ul li");
    // Get Slides Polits As Array
    var sliderBolits = Array.from($("." + targetSlader + " .sliderPoint"));
    
    checker(Sliders,sliderBolits,slids,polits,currentSlide);
    
    setInterval(function(){
        
        
        // Loop Slider
        if(currentSlide == SliderPolits){
            currentSlide = 0;
        }else{
            currentSlide++;
            checker(Sliders,sliderBolits,slids,polits,currentSlide);
        }
    },(interval * 1000))
    
    
    
}
function checker(Sliders,sliderBolits,slids,polits,currentSlide){
    // Remove Active Class From All Slides
    removeActiveSlide(Sliders ,sliderBolits);
    
    // Add Active Class To Slid
    slids.get(currentSlide - 1).classList.add("activeSlide");
    // Add Active Class To Polits
    polits.get(currentSlide - 1).classList.add("activePolit");
    
    
}
// Generate Slider Polits
function genPolits(targetSlader,SliderPolits){
    for(var i = 1 ; i <= SliderPolits ; i++){
        $("." + targetSlader + " .slidesPoints ul").append("<li class='sliderPoint' data-index='" + i + "'></li>");
    }
}
// Remove Active Class From Slides
function removeActiveSlide(Sliders ,sliderBolits){
    // remove active slide
    Sliders.forEach(function(sl){
        sl.classList.remove("activeSlide");
    });
    // remove active bolit
    sliderBolits.forEach(function(pl){
        pl.classList.remove("activePolit");
    });
}

/* 
    ****************************************************************************
    =======               Start Of Slider Script                   =======
    ****************************************************************************
*/

$(function(){
    
    
});








