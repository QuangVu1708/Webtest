let index = 1;
changeImage = function () {
    let images = ["Picture4.png", "Picture5.png", "Picture6.png"]
    document.getElementById('img').src = images[index];
    index++;
    if (index == 3) {
        index = 0;
    }
}
setInterval(changeImage, 4000)