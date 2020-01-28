var functions = [
    { title: ".click" }, { title: ".hide" }, { title: ".show" }, { title: ".toggle" },
    { title: ".slideDown" }, { title: ".slideUp" }, { title: ".slideToggle" }, { title: ".fadeIn" }, { title: ".fadeOut" },
    { title: ".addClass" }, { title: ".before" }, { title: ".after" }, { title: ".append" },
    { title: ".html" }, { title: ".attr" }, { title: ".val" }, { title: ".text" }
];

function setupUI() {
    var html = "";

    for (var index = 0; index < functions.length; index++) {
        html += `<div id="${index}" class="col-6 m-0 p-5">
        <button class="btn btn-outline-dark my-5 mr-5">${functions[index].title}</button>
        <div class="text-box d-inline-block align-middle">
            <h1>${functions[index].title}</h1>
            <p>Practice using ${functions[index].title}</p>
            </div>
        </div>`;
    }

    $('.row').append(html);
}

$(document).ready(function () {
    setupUI();

    $('#0 button').click(function () {
        $('#0 p').text("Button has been clicked!").addClass('red');
        console.log("Button has been clicked!");
    });

    $('#1 button').click(function () {
        $('#1 p').hide();
        console.log("Paragraph is now hidden!");
    });

    $('#1 button').click(function () {
        $('#1 p').hide();
        console.log("Paragraph is now hidden!");
    });
});