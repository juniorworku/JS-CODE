var NumberOfDrums = document.querySelectorAll(".drum").length; 
for (var i=0; i<NumberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "z":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "x":
                var audio = new Audio('sounds/kick-base.mp3');
                audio.play();
                break;
            case "c":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
             case "v":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
             case "b":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                 break;
             case "n":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "m":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            default:
                break;
        }
       
    });

}


