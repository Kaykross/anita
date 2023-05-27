document.addEventListener("DOMContentLoaded",  function(e){
    const style = `
    <style>
    @font-face { 
        font-family: "fnt0_41609";
        src: url("/data/fonts/fnt0.woff");
    }
    @font-face { 
        font-family: "fnt1_41609"; 
        src: url("/data/fonts/fnt1.woff");
    }
    @font-face {
         font-family: "fnt2_41609";
         src: url("/data/fonts/fnt2.woff");
        }
    @font-face {
         font-family: "fnt3_41609";
         src: url("/data/fonts/fnt3.woff");
        }
    @font-face {
         font-family: "fnt4_41609"; 
         src: url("/data/fonts/fnt4.woff")
        }
    @font-face { font-family: "qPFn"; src: url("/data/fonts/fnt1.woff")}
    @font-face { font-family: "qPFnb"; src: url("/data/fonts/fnt3.woff")}
</style>
    `
    //  document.body.insertAdjacentHTML("afterbegin",style);

     console.log(document.body);
     console.log(document.querySelector("style"));

    


      QuizPlayer.start("content", "ykcrdumnxo3t-nbg1kcs660c2", data, 1, "", false, false, "prompt", function(player) {
        player.initializationCompleteEvent().addHandler(function() {
            var preloader = document.getElementById("preloader");
            preloader.parentNode.removeChild(preloader);
        })
    });

})