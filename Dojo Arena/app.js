
var imageSelected = false;

var ninjas = [
    { text: "Select Ninja", value: "select-ninja" },
    { text: "Donny", value: "donny" },
    { text: "Leo", value: "leo" },
    { text: "Mikey", value: "mikey" },
    { text: "Raphael", value: "raphael" },
    { text: "Neil Instructor", value: "neil-1" },
    { text: "Neil The Kool DJJJ", value: "neil-0" },
];

function bgColorToBlack() {
    if (!imageSelected) {
        $(".row").css("background-image", "none");
    }
}

function buttonClicked() {
    imageSelected = true;
    var imageName = $(this).text();

    $(".row").css("background-image", `url(images/${imageName}.jpg)`);
    $(".col-4").addClass("background-transparent");
    $(".col-4 h1").text("Select Players");
    $(".select-players").show();
    $(".buttons button").hide();
    $('#back').show();
}

function backClicked() {
    imageSelected = false;
    bgColorToBlack();
    $(".col-4 h1").text("Select Arena");
    $(".select-players").hide();
    $(".buttons button").show();
    $('#left').val("select-ninja");
    $('#right').val("select-ninja");
    $('#left-img').attr("src", ``);
    $('#right-img').attr("src", ``);
    $(this).hide();
}

function valueChanged(event) {
    var val = event.target.value;
    var id = event.target.id;

    console.log(val, id);

    if (val != "select-ninja") {
        $(`#${id}-img`).attr("src", `images/${val}.png`);
    }

    (val != "select-ninja") ? $(`#${id}-img`).show() : $(`#${id}-img`).hide();
}

function renderPlayers(players) {
    var code = "";

    for (var x = 0; x < players; x++) {
        code += `<select id="${x == 0 ? "left" : "right"}">`;

        for (var index in ninjas) {
            code += `<option value="${ninjas[index].value}">${ninjas[index].text}</option>`;
        }

        code += "</select>";
    }

    $('.select-players').append(code);
}

$(document).ready(function () {
    // Pre-set
    renderPlayers(2);
    $(".select-players").hide();
    $('#left-img').hide();
    $('#right-img').hide();
    $('#back').hide();

    // hover
    $(".buttons button").hover(function () {
        var imageName = $(this).text();
        $(".row").css("background-image", `url(images/${imageName}.jpg)`);
    }, bgColorToBlack);

    $(".buttons button").click(buttonClicked);
    $('#left').change(valueChanged);
    $('#right').change(valueChanged);
    $('#back').click(backClicked)
});