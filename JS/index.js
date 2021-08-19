window.addEventListener("scroll",function(){
    var header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>0);
})


$(document).ready(function(){
    $(window).scroll(function(){
     var scroll = $(window).scrollTop();
       if(scroll>150){
        $("#nav").css("background-color", "#d3d3d3");
         }
         else {
        $("#nav").css("background", "transparent");
         }
        })
     })

var pageLink = window.location.href;
var pageTitle = String(document.title).replace(/\&/g, '%26');

function fbs_click() { window.open(`http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }
      
function tbs_click() { window.open(`https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }

function lbs_click() { window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }

function rbs_click() { window.open(`https://www.reddit.com/submit?url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }

function pbs_click() { window.open(`https://www.pinterest.com/pin/create/button/?&text=${pageTitle}&url=${pageLink}&description=${pageTitle}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }
