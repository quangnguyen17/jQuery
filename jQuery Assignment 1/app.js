$(document).ready(function () {
    $(".box").click(function () {
        $(this).hide("slow");
    });

    $("#restore").click(function () {
        $(".box").show();
    });
});