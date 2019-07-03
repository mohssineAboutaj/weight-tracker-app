$( document ).ready(function() {

/* menu drop down */
    $("#menu_toggle").on("click",()=>{
        $(".list-group").toggleClass("active");
        if($("#menu_toggle").text() ==="hide menu"){
            $("#menu_toggle").text("show menu");
            console.log("show menu");
        }
        else {
            $("#menu_toggle").text("hide menu");
        }
    })
/*-------*/

});