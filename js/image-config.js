var images = [
    { src: 'img/taipei-101.jpg', title: '台北101' },
    { src: 'img/national-palace-museum.jpg', title: '國立故宮博物院' },
    { src: 'img/longshan-temple.jpg', title: '龍山寺' },
    { src: 'img/grand-hotel.jpg', title: '圓山大飯店' },
    { src: 'img/chiang-kai-shek-memorial-hall.jpg', title: '中正紀念堂' }
];

window.onload = function () {
    var gridSize = document.querySelector('#levelPanel input[type="radio"]:checked').getAttribute('value');
    imagePuzzle.startGame(images, gridSize);
};
function restart() {
    var gridSize = document.querySelector('#levelPanel input[type="radio"]:checked').getAttribute('value');
    imagePuzzle.startGame(images, gridSize);
}
function rules() {
    alert('重新排列圖像部分，使其正確形成圖片。\n將計算您的總步數。');
}
function about() {
    alert('為李亨利開發及所有。');
}