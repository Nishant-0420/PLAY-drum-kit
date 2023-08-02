

function fun(){
   var a=this.innerHTML
   console.log(a)
   switch (a) {
      case 'w':
         var audio= new Audio('./sounds/tom-1.mp3');
         audio.play();
         break;
      case 'a':
         var audio= new Audio('./sounds/tom-2.mp3');
         audio.play();
         break;
         case 's':
         var audio= new Audio('./sounds/tom-3.mp3');
         audio.play();
         break;
         case 'd':
         var audio= new Audio('./sounds/tom-4.mp3');
         audio.play();
         break;
         case 'j':
         var audio= new Audio('./sounds/snare.mp3');
         audio.play();
         break;
         case 'k':
         var audio= new Audio('./sounds/crash.mp3');
         audio.play();
         break;
         case 'l':
         var audio= new Audio('./sounds/kick-bass.mp3');
         audio.play();
         break;

        default:
         console.log("press on button not anywhere else")
         break;
   }

   animation(a)
 
}

var a=document.querySelectorAll(".drum")
for(var i=0;i<a.length;i++){
   a[i].addEventListener("click",fun) 
}


document.addEventListener("keydown", function(event){
   var k= event.key
   switch (k) {
      case 'w':
         var audio= new Audio('./sounds/tom-1.mp3');
         audio.play();
         break;
      case 'a':
         var audio= new Audio('./sounds/tom-2.mp3');
         audio.play();
         break;
         case 's':
         var audio= new Audio('./sounds/tom-3.mp3');
         audio.play();
         break;
         case 'd':
         var audio= new Audio('./sounds/tom-4.mp3');
         audio.play();
         break;
         case 'j':
         var audio= new Audio('./sounds/snare.mp3');
         audio.play();
         break;
         case 'k':
         var audio= new Audio('./sounds/crash.mp3');
         audio.play();
         break;
         case 'l':
         var audio= new Audio('./sounds/kick-bass.mp3');
         audio.play();
         break;

        default:
         console.log(" wrong key")
         break;
   }
 
   animation(k)
} 
)

function animation(ani){
   var addAnimation = document.querySelector("."+ani)
   addAnimation.classList.add("pressed")
   setTimeout(function()
   {addAnimation.classList.remove("pressed")} , 100)
}