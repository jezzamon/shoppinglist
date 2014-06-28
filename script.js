$(document).ready(function() {
    
    $("#button").click(function() {
      $(this).effect("bounce");	
    var addItem = $("input[name=checkListItem]").val();
      
    $(".list").append('<div class="item">' + addItem + '</div>') ;

    });

    $(document).on("click", ".item", function() {
        $(this).remove();
    });
    $("input").focus(function() {
  		alert( "Handler for .focus() called." );
});

    });