function rowRemove(rowID) {
    $(rowID).remove();
}


function showForm() {
    $("#newRow").show();
}

function hideForm() {
    $("#newRow").hide();
}

$(function(){
    $("#submitButton").on("click", function(event){
        event.preventDefault();
        var name = $("#name").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        $('#table1 tr:last').after('<tr><td>' + name +'</td><td>'+lastname +'</td><td>'+email+'</td></tr>');
        
    })
})
 