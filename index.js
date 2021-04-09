var k=0;
console.log('asda')
function changeText(element, texts, time,k) { 
    var text = texts[k];
      element.innerHTML = text;
      setTimeout(function () {
        if(k==3){k=0;}
        else k=k+1;
        changeText(element, texts, time,k);
      }, time);
    
  
  }
console.log('asdaasd')
var element = document.getElementById("featureDesc");
var texts = [
  'Go Online and receive orders',
  'Notify Customer When Order is Ready & update prices',
  'Rate Customer Behaviour',
  'Manage Inventory'
];
var time = 3000;

changeText(element, texts, time,k);



  $(document).ready(function(){
  $(window).scroll(function(){
   var scroll = $(window).scrollTop();
     if(scroll>600){
      $("#nav").css("background-color", "#212529");
       }
       else {
      $("#nav").css("background", "transparent");
       }
      })
   })



   var a=0;
console.log('asda')
function changeText2(element, texts, time,a) { 
    var text = texts[a];
      element.innerHTML = text;
      setTimeout(function () {
        if(a==6){a=0;}
        else a=a+1;
        changeText2(element2, texts, time,a);
      }, time);
    
  
  }
console.log('asdaasd')
var element2 = document.getElementById("featureDesc2");
var texts = [
  'Sort Nearby Stores As per your preferences',
  'Compare from all Nearby Stores with Live Open/Close Status',
  'Type Item directly & Add to Cart or Choose from Listed items',
  'No List, No Worries. Just type and Add to Cart then place order',
  'Track Order Progress and get notified when it is packed and ready',
  'Review Order, choose Pickup timing & additionally put comments for Shop',
  'Add multiple nearby shops to your cart simultaneously'
];
var time = 3000;

changeText2(element2, texts, time,a);
