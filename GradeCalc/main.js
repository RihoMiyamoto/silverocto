var average;
function mult(value) {
    var o, t, h, f, i, s;
    o = document.getElementById("class1").value / 6;
    t = document.getElementById("class2").value / 6;
    h = document.getElementById("class3").value / 6;
    f = document.getElementById("class4").value / 6;
    i = document.getElementById("class5").value / 6;
    s = document.getElementById("class6").value / 6;
    average = o + t + h + f + i + s;
    average = (Math.round(average * 100) / 100).toFixed(2);
    changeColor(average);
    document.getElementById('output').value = average;

}

function changeColor(obj) {
    var amtLeft =0;
    var best = "Congrats on the " + obj;
    var mid = "Not bad";
    if (obj >= 90) {
        document.getElementById("grade_point_scale").style.backgroundColor = 'rgb(40, 252, 3)';
        document.getElementById("colorChange").style.backgroundColor = 'rgb(151, 255, 177)';
        document.getElementById("forms").style.color = 'black';
        document.getElementById("message").innerHTML = best;
    } else if (obj >= 80 && obj < 90) {
        document.getElementById("grade_point_scale").style.backgroundColor = 'rgb(184, 255, 54)';
        document.getElementById("colorChange").style.backgroundColor = 'rgb(203, 255, 158)';
        document.getElementById("forms").style.color = 'black';
        document.getElementById("message").innerHTML = mid;
    } else if (obj >= 70 && obj < 80) {
        document.getElementById("grade_point_scale").style.backgroundColor = 'rgb(255, 225, 0)';
        document.getElementById("colorChange").style.backgroundColor = 'rgb(255, 249, 158)';
        document.getElementById("forms").style.color = 'black';
        document.getElementById("message").innerHTML = mid;
    } else if (obj >= 60 && obj < 70) {
        document.getElementById("grade_point_scale").style.backgroundColor = 'rgb(255, 136, 0)';
        document.getElementById("colorChange").style.backgroundColor = 'rgb(255, 167, 105)';
        document.getElementById("forms").style.color = 'black';
        amtLeft = 70 - obj;
        worst = "You have " + amtLeft + " points left for a 70";
        document.getElementById("message").innerHTML = worst;
    } else if (obj < 60) {
        document.getElementById("grade_point_scale").style.backgroundColor = 'rgb(255, 0, 0)';
        document.getElementById("colorChange").style.backgroundColor = 'rgb(255, 161, 153)';
        document.getElementById("forms").style.color = 'white';
        amtLeft = 70 - obj;
        worst = "You have " + amtLeft + " points left for a 70";
        document.getElementById("message").innerHTML = worst;
    }
}