
 function slideright() {
    var element = document.getElementById("slide-div");
    element.classList.add("slide-right");
    element.classList.remove("slide-left");
 }
 function slideleft() {
    var element = document.getElementById("slide-div");
    element.classList.remove("slide-right");
    element.classList.add("slide-left");
 }


 
 function color() {
   var element = document.getElementById("mycard-priority");
   element.classList.toggle("mystyle");
}
function color1() {
   var element = document.getElementById("mycard-priority1");
   element.classList.toggle("mystyle");
}
function color2() {
   var element = document.getElementById("mycard-priority2");
   element.classList.toggle("mystyle");
}
function color3() {
   var element = document.getElementById("mycard-priority3");
   element.classList.toggle("mystyle");
}
function color4() {
   var element = document.getElementById("mycard-priority4");
   element.classList.toggle("mystyle");
}
function color5() {
   var element = document.getElementById("mycard-priority5");
   element.classList.toggle("mystyle");
}
function color6() {
   var element = document.getElementById("mycard-priority6");
   element.classList.toggle("mystyle");
}
function color7() {
   var element = document.getElementById("mycard-priority7");
   element.classList.toggle("mystyle");
}
function color8() {
   var element = document.getElementById("mycard-priority8");
   element.classList.toggle("mystyle");
}
function color9() {
   var element = document.getElementById("mycard-priority9");
   element.classList.toggle("mystyle");
}
function color10() {
   var element = document.getElementById("mycard-priority10");
   element.classList.toggle("mystyle");
}
function color11() {
   var element = document.getElementById("mycard-priority11");
   element.classList.toggle("mystyle");
}
function color12() {
   var element = document.getElementById("mycard-priority12");
   element.classList.toggle("mystyle");
}
function color13() {
   var element = document.getElementById("mydiv13");
   element.classList.toggle("mystyle");
}



// toggle overlay


function toggleoverlaybutton1() {
   var element = document.getElementById("toggle-div1");
   element.classList.toggle("toggle-overlay");
}  
function toggleoverlaybutton2() {
   var element = document.getElementById("toggle-div2");
   element.classList.toggle("toggle-overlay");
}  
function toggleoverlaybutton3() {
   var element = document.getElementById("toggle-div3");
   element.classList.toggle("toggle-overlay");
}  

function toggleoverlaybutton4() {
   var element = document.getElementById("toggle-div4");
   element.classList.toggle("toggle-overlay");
}  

function toggleoverlaybutton5() {
   var element = document.getElementById("toggle-div5");
   element.classList.toggle("toggle-overlay");
}  

function toggleoverlaybutton6() {
   var element = document.getElementById("toggle-div6");
   element.classList.toggle("toggle-overlay");
}  

function toggleoverlaybutton7() {
   var element = document.getElementById("toggle-div7");
   element.classList.toggle("toggle-overlay");
}  

function toggleoverlaybutton8() {
   var element = document.getElementById("toggle-div8");
   element.classList.toggle("toggle-overlay");
}  

function toggleoverlaybutton9() {
   var element = document.getElementById("toggle-div9");
   element.classList.toggle("toggle-overlay");
}  

function toggleoverlaybutton10() {
   var element = document.getElementById("toggle-div10");
   element.classList.toggle("toggle-overlay");
}  

function toggleoverlaybutton11() {
   var element = document.getElementById("toggle-guest1");
   element.classList.toggle("toggle-overlay-guest");
}  

function toggleoverlaybutton12() {
   var element = document.getElementById("toggle-guest2");
   element.classList.toggle("toggle-overlay-guest");
}  

function toggleoverlaybutton13() {
   var element = document.getElementById("toggle-guest3");
   element.classList.toggle("toggle-overlay-guest");
}  


// // lighting round
function toggleoverlay1() {
   var element = document.getElementById("overlay-red1");
   element.classList.toggle("overlay-red");
   var element = document.getElementById("svg-overlay1");
   element.classList.toggle("svg-overlay");
   var element = document.getElementById("text-overlay1");
   element.classList.toggle("text-color-red");
}  
function toggleoverlay2() {
   var element = document.getElementById("overlay-red2");
   element.classList.toggle("overlay-red");
   var element = document.getElementById("svg-overlay2");
   element.classList.toggle("svg-overlay");
   var element = document.getElementById("text-overlay2");
   element.classList.toggle("text-color-red");
}  
function toggleoverlay3() {
    var element = document.getElementById("overlay-red3");
    element.classList.toggle("overlay-red");
    var element = document.getElementById("svg-overlay3");
    element.classList.toggle("svg-overlay");
    var element = document.getElementById("text-overlay3");
    element.classList.toggle("text-color-red");
} 
function toggleoverlay4() {
   var element = document.getElementById("overlay-red4");
   element.classList.toggle("overlay-red");
   var element = document.getElementById("svg-overlay4");
   element.classList.toggle("svg-overlay");
   var element = document.getElementById("text-overlay4");
   element.classList.toggle("text-color-red");
} 
function toggleoverlay5() {
   var element = document.getElementById("overlay-red5");
   element.classList.toggle("overlay-red");
   var element = document.getElementById("svg-overlay5");
   element.classList.toggle("svg-overlay");
   var element = document.getElementById("text-overlay5");
   element.classList.toggle("text-color-red");
}  
function toggleoverlay6() {
   var element = document.getElementById("overlay-red6");
   element.classList.toggle("overlay-red");
   var element = document.getElementById("svg-overlay6");
   element.classList.toggle("svg-overlay");
   var element = document.getElementById("text-overlay6");
   element.classList.toggle("text-color-red");
}   
function toggleoverlay7() {
   var element = document.getElementById("overlay-red7");
   element.classList.toggle("overlay-red");
   var element = document.getElementById("svg-overlay7");
   element.classList.toggle("svg-overlay");
   var element = document.getElementById("text-overlay7");
   element.classList.toggle("text-color-red");
}   

// dropdown
function filterFunction() {
   var input, filter, ul, li, a, i;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   div = document.getElementById("myDropdown");
   a = div.getElementsByTagName("a");
   for (i = 0; i < a.length; i++) {
     txtValue = a[i].textContent || a[i].innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
       a[i].style.display = "";
     } else {
       a[i].style.display = "none";
     }
   }
 }
 

//  display table
function displaytable(){
   var x = document.getElementById("mydiv");
   if(x.style.display === "none"){
       x.style.display = "block"
   }else{
       x.style.display = "none"
   }
}
function displaytable2(){
   var x = document.getElementById("mydiv2");
   if(x.style.display === "none"){
       x.style.display = "block"
   }else{
       x.style.display = "none"
   }
}
function displaytable3(){
   var x = document.getElementById("mydiv3");
   if(x.style.display === "none"){
       x.style.display = "block"
   }else{
       x.style.display = "none"
   }
}
function displaytable4(){
   var x = document.getElementById("mydiv4");
   if(x.style.display === "none"){
       x.style.display = "block"
   }else{
       x.style.display = "none"
   }
}
function displaytable5(){
   var x = document.getElementById("mydiv5");
   if(x.style.display === "none"){
       x.style.display = "block"
   }else{
       x.style.display = "none"
   }
}
function displaytable6(){
   var x = document.getElementById("mydiv6");
   if(x.style.display === "none"){
       x.style.display = "block"
   }else{
       x.style.display = "none"
   }
}
function displaytable7(){
   var x = document.getElementById("mydiv7");
   if(x.style.display === "none"){
       x.style.display = "block"
   }else{
       x.style.display = "none"
   }
}
function displaytable8(){
   var x = document.getElementById("mydiv8");
   if(x.style.display === "none"){
       x.style.display = "block"
   }else{
       x.style.display = "none"
   }
}
function displaytable9(){
   var x = document.getElementById("mydiv9");
   if(x.style.display === "none"){
       x.style.display = "block"
   }else{
       x.style.display = "none"
   }
}



// desktop 2


// svg roadblock

function svgchange(){
   var element = document.getElementById("svg-div");
   element.classList.toggle("svgclass");
}
function svgchange1(){
   var element = document.getElementById("svg-div1");
   element.classList.toggle("svgclass");
}

// slide from right

// for notification
function shownotification() {
   var element = document.getElementById("mynotification");
   element.classList.add("slide-show");
   element.classList.remove("slide-hide");
   var element1 = document.getElementById("novu-body");
   element1.classList.add("blured-bgwhite");
    }
   function hidenotification() {
   var element = document.getElementById("mynotification");
   element.classList.remove("slide-show");
   element.classList.add("slide-hide");
   var element1 = document.getElementById("novu-body");
   element1.classList.remove("blured-bgwhite");
   }

   // for usermenu
function showusermenu() {
   var element = document.getElementById("myusermenu");
   element.classList.add("slide-show");
   element.classList.remove("slide-hide");
   var element1 = document.getElementById("novu-body");
   element1.classList.add("blured-bgwhite");
    }
   function hideusermenu() {
   var element = document.getElementById("myusermenu");
   element.classList.remove("slide-show");
   element.classList.add("slide-hide");
   var element1 = document.getElementById("novu-body");
   element1.classList.remove("blured-bgwhite");
   }

   function showroadblock() {
      var element = document.getElementById("myroadblock");
      element.classList.add("slide-show");
      element.classList.remove("slide-hide");
      var element1 = document.getElementById("novu-body");
      element1.classList.add("blured-bgwhite");
  
  }

  function hideroadblock() {
   var element = document.getElementById("myroadblock");
   element.classList.remove("slide-show");
   element.classList.add("slide-hide");
   var element1 = document.getElementById("novu-body");
   element1.classList.remove("blured-bgwhite");

  }

  // key plan elements
  function showkeyplan() {
   var element = document.getElementById("mykeyplan");
   element.classList.add("slide-show");
   element.classList.remove("slide-hide");
   var element1 = document.getElementById("novu-body");
   element1.classList.add("blured-bgwhite");
  
  }

  function hidekeyplan() {
   var element = document.getElementById("mykeyplan");
   element.classList.remove("slide-show");
   element.classList.add("slide-hide");
   var element1 = document.getElementById("novu-body");
   element1.classList.remove("blured-bgwhite");
  }


//     // meetingnote
function showmeetingnote() {
   var element = document.getElementById("mymeetingnote");
   element.classList.add("slide-show");
   element.classList.remove("slide-hide");
   var element1 = document.getElementById("novu-body");
   element1.classList.add("blured-bgwhite");
  
  }


function hidemeetingnote() {
   var element = document.getElementById("mymeetingnote");
   element.classList.remove("slide-show");
   element.classList.add("slide-hide");
   var element1 = document.getElementById("novu-body");
   element1.classList.remove("blured-bgwhite");
  }



// attendee

function showattendee() {
   var element = document.getElementById("myattendee");
   element.classList.add("slide-show");
   element.classList.remove("slide-hide");
   var element1 = document.getElementById("novu-body");
   element1.classList.add("blured-bgwhite");
  
  }


function hideattendee() {
   var element = document.getElementById("myattendee");
   element.classList.remove("slide-show");
   element.classList.add("slide-hide");
   var element1 = document.getElementById("novu-body");
   element1.classList.remove("blured-bgwhite");
  }

   // reaction

      function showreaction() {
         var element = document.getElementById("myreaction");
         element.classList.add("slide-show");
         element.classList.remove("slide-hide");
         var element1 = document.getElementById("novu-body");
         element1.classList.add("blured-bgwhite");
        
        }
      
      
      function hidereaction() {
         var element = document.getElementById("myreaction");
         element.classList.remove("slide-show");
         element.classList.add("slide-hide");
         var element1 = document.getElementById("novu-body");
         element1.classList.remove("blured-bgwhite");
        }




      //   roadblock

      function showmemberroadblock1() {
         document.getElementById("dropdown-roadblock-1").classList.toggle("show-member");
 }
 function showmemberroadblock2() {
         document.getElementById("dropdown-roadblock-2").classList.toggle("show-member");
 }
 function showmemberroadblock3() {
         document.getElementById("dropdown-roadblock-3").classList.toggle("show-member");
 }
 function showmemberroadblock4() {
         document.getElementById("dropdown-roadblock-4").classList.toggle("show-member");
 }

 function showmember1() {
         document.getElementById("dropdown1").classList.toggle("show-member");
 }

 function showmember2() {
         document.getElementById("dropdown2").classList.toggle("show-member");
 }

 function showmember3() {
         document.getElementById("dropdown3").classList.toggle("show-member");
 }
 function showmember4() {
         document.getElementById("dropdown4").classList.toggle("show-member");
 }