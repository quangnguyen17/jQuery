
function handleImages() {
    $('.cat').click(function () {
        var ranNum = Math.floor(Math.random() * 5) + 0;
        $(this).attr("src", `img/cat${ranNum}.png`);
    });

    $('.ninja').click(function () {
        var ranNum = Math.floor(Math.random() * 5) + 0;
        $(this).attr("src", `img/ninja${ranNum}.png`);
    });
}

// DOM is ready!
$(document).ready(function () {
    handleImages()
});