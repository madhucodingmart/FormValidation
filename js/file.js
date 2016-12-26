$(document).ready(function() {

    $("#status").hide();
    $("#msg").hide();
    $("#spousename").hide();
    $("#spousename1").hide();
});

function mail() {
    var str = document.getElementById("doj").value;
    var pos = str.search("@");
    var dot = str.search(".");
    var res = str.slice(pos + 1, dot - 4);
    var result = "";
    if (str.length >= 4) {
        document.getElementById("result").innerHTML = "Congratulations you have a " + " " + res + " " + "account";
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid email ID";
    }
}

function nam() {
    var nameres = "";
    var nameval = document.getElementById("name").value;
    var nice = "Nice name!" + " " + nameval;
    var warn = "Please Enter your Full name";
    if (nameval.length >= 3) {
        document.getElementById("nameres").innerHTML = nice;
    } else {
        document.getElementById("nameres").innerHTML = warn;
    }
}

function agecheck() {
    var x, text;

    x = document.getElementById("age").value;

    if (x > 0 && x < 4) {
        text = "Age is too low";

    } else if (x >= 4 && x < 18) {
        text = "You are not allowed to register";
    } else if (x >= 18 && x < 25) {
        text = "You are allowed";
    } else {
        text = "Allowed But,";
        $("#status").show();
        spouse();
    }
    document.getElementById("ageval").innerHTML = text;
}

function msg() {
    $("#msg").show();
}

function spouse() {
    $('input[type="checkbox"]').click(function() {
        if ($("#married").prop("checked")) {
            $("#spousename").show();
        } else if (!($("#married").prop("checked"))) {
            $("#spousename").hide();
        }
    });
}
