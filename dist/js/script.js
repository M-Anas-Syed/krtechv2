var windowHeight = window.innerHeight;
var scrollArea = 1000 - windowHeight;
var image = document.getElementById('aboutpic');

window.addEventListener('scroll', function(){
    var scrollTop = window.pageYOffset;
    var scrollPercent = scrollTop/scrollArea;
    image.style.top = scrollPercent*window.innerHeight*-0.04 + 'px';
})