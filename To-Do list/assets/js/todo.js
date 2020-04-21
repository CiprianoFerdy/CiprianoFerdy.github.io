
//check off todos

$("ul").on("click", "li", function () {
    $(this).toggleClass('completed');
});

//click on icon to remove item
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    });
    event.stopPropagation();
});

//input new ToDo
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // get value from input
        var todoText = $(this).val();
        $(this).val("")
        //append to li
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").click(function () {
    $("input").fadeToggle();
});






