function mult(value){
    var o,t,h,f,i,s;
    var average;
    o = document.getElementById("class1").value/6;
    t = document.getElementById("class2").value/6;
    h = document.getElementById("class3").value/6;
    f = document.getElementById("class4").value/6;
    i = document.getElementById("class5").value/6;
    s = document.getElementById("class6").value/6;
    average = o+t+h+f+i+s;
    document.getElementById('output').value = average;
    document.getElementById('gpa').value = average;
}

let radioBtns = document.querySelectorAll("input[name='scale']");
let findSeledted = () => {
    let selected = document.querySelector("input[name = 'scale']:checked");
    console.log(selected);
}
radioRtns.forEach(radiioBtn =>{
    radioBtns.addEventListener("change", findSelected)
})