function changeImage() {
    let displayImage = document.getElementById('image1')
    if (displayImage.src.match('image/daruma.jpg')) {
        displayImage.src = 'image/jaxa.jpg'
    } else if (displayImage.src.match('image/jaxa.jpg')){
        displayImage.src = 'image/chatarou.jpg'
    } else {
        displayImage.src = 'image/daruma.jpg'
    }
}
function darkMode(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}