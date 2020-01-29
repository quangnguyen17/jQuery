
var imageIDs = []

function loadImages() {
    for (var i = 0; i < 12; i++) {
        code = `<div class="col-3 p-1">
            <img id="${i}" class="w-100 h-100 bg-success border border-warning" src="prm-images/${i}.${fileExt(i)}" alt="">
        </div>`;

        $(".row").append(code);
        imageIDs.push(i);
    }
}

function handleHoveringEffects() {
    $('img').hover(function () {
        // In
        var ranNum = Math.floor(Math.random() * 12) + 0;
        $(this).attr('src', `prm-images/${ranNum}.${fileExt(ranNum)}`);
    }, function () {
        // Out
        var imageID = $(this).attr('id');
        $(this).attr('src', `prm-images/${imageID}.${fileExt(imageID)}`);
    });
}

function fileExt(index) {
    return (index > 8) ? "png" : "jpg";
}

// DOM is ready.
$(document).ready(function () {
    loadImages();
    handleHoveringEffects()
});