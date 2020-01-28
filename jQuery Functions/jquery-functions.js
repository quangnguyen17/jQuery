
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
            <p value="here comes nothing valuable!" type="text">Example using ${functions[index].title}</p>
            </div>
        </div>`;
    }

    $('.row').append(html);
}

function handlejQueryFunctions() {
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
    $('#4 p').css("display", "none");
    $('#4 button').click(function () {
        $('#4 p').slideDown(function () {
            console.log("slide down");
        });
    });

    $('#5 button').click(function () {
        $('#5 p').slideUp(function () {
            console.log("slide up");
        });
    });

    $('#6 button').click(function () {
        $('#6 p').slideToggle();
    });

    $('#7 p').fadeOut();
    $('#7 button').click(function () {
        $('#7 p').fadeIn();
    });

    $('#8 button').click(function () {
        $('#8 p').fadeOut(function () {
            $('#8 h1').fadeOut();
        });
    });

    // .addClass, .before, .after
    $('#9 button').click(function () {
        $('#9 p').addClass('red');
    });

    $('#10 button').click(function () {
        $('#10 p').before("<p>Test using 'before' function.</p>");
    });

    $('#11 button').click(function () {
        $('#11 p').after("<p>Test using 'after' function.</p>");
    });

    // .append, ,html, attr, .val, .text
    $('#12 button').click(function () {
        $('#12 p').append("<p>Test using 'append' function.</p>");
    });

    $('#13 button').click(function () {
        $('#13 p').html("<p>.html function test #1</p>");
    });

    $('#14 button').click(function () {
        var type = $('#14 p').attr("type");
        $('#14 p').text(`attr [type]: ${type}`);
    });

    $('#15 button').click(function () {
        var value = $('#15 p').val("value");
        $('#15 p').text(`attr [value]: ${value}`);
    });

    $('#16 button').click(function () {
        $('#16 p').text("text has been set!");
    });
}

$(document).ready(function () {
    setupUI();
    handlejQueryFunctions();
});