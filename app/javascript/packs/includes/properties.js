$(function(){
    $("#show-tel").on("click", function(){
        var $this = $(this);
        $this.text( $this.data("telephone") );
    });
    $("#toggleDetails").on("click", function(){
        var details = $("#prop-details");
        details.toggleClass("open");
        console.log("toggleDetails working")
        if(details.hasClass("open")){
            $(this).text("Show less");
           console.log("show less")
        } else {
       $(this).text("Show more");

        }
            });
            });

console.log("properties.js working")
