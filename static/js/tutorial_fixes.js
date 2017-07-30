(function(){
    $("#modal").removeClass();
    $("#modal").addClass("modal");
    modalContent = $("<div/>");
    modalContent.addClass("modal-content");
    modalDialog = $("<div/>");
    modalDialog.addClass("modal-dialog");
    modalContent.append($("#modal").children());
    modalDialog.append(modalContent);
    $("#modal").prepend(modalDialog);
}());