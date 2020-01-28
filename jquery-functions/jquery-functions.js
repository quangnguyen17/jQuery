var functions = [
    { title: ".click" }, { title: ".hide" }, { title: ".show" }, { title: ".toggle" },
    { title: ".slideDown" }, { title: ".slideUp" }, { title: ".slideToggle" }, { title: ".fadeIn" }, { title: ".fadeOut" },
    { title: ".addClass" }, { title: ".before" }, { title: ".after" }, { title: ".append" },
    { title: ".html" }, { title: ".attr" }, { title: ".val" }, { title: ".text" }
];

function setupUI() {
    var html = "";

    for (var index = 0; index < functions.length; index++) {
        html += `<div id="${index}" class="col-4 m-0 p-5">
        <button class="btn btn-outline-dark mb-5 mr-5">${functions[index].title}</button>
        <div class="text-box d-inline-block align-middle">
            <h1>${functions[index].title}</h1>
            <p>Example using ${functions[index].title}</p>
            </div>
        </div>`;
    }

    $('.row').append(html);
}

// Document is finished loading! :)
$(document).ready(function () {
    setupUI();

    // .click, .hide, .show, .toggle
    $('#0 button').click(function () {
        $('#0 p').text("Button has been clicked.").addClass('red');
        console.log("Button has been clicked.");
    });

    $('#1 button').click(function () {
        $('#1 p').hide();
        console.log("Paragraph is now hidden.");
    });

    $('#2 p').hide();
    $('#2 button').click(function () {
        $('#2 p').show();
        console.log("Paragraph is now shown.");
    });

    $('#3 button').click(function () {
        $('#3 p').toggle();
        console.log("Paragraph is now being toggled to show / hide.");
    });

    // .slideDown, .slideUp, .slideToggle, .fadeIn, .fadeOut
    $('#4 button').click(function () {
        $('#4 p').slideDown();
    });

    $('#5 button').click(function () {
        $('#5 p').slideIn();
    });

    $('#6 button').click(function () {
        $('#6 p').slideToggle();
    });
});