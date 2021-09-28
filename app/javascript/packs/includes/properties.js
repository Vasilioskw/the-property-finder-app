$(function(){
    $("#show-tel").on("click", function(){
        var $this = $(this);
        $this.find("span").text( $this.data("telephone") );
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

    $("#send-message-to-agent").on("click", function(){
            agent_id = $("#agent_id").val(),
            first_name = $("#message-first-name").val(),
            last_name = $("#message-last-name").val(),
            email = $("#message-email").val(),
            message = $("#message-text").val();
                 
            $.ajaxSetup({
                headers: {
                  'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                }
              });

        $.ajax({    
            url: "/agent/message",
            method: 'POST',
            dataType: "json",
              beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
            data: {
                agent_id: agent_id,
                first_name: first_name,
                last_name: last_name,
                email: email,
                message: message
            },
            success: function(data){
                console.log(data);
            }
        });

    });

    $('#contact-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var modal = $(this);
    })
});

console.log("properties.js working")
