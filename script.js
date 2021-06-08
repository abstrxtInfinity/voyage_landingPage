function toggleMenu() {
    const menuToggle = document.querySelector('.icon')
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')

}

function videoToggle() {
    const playVideo = document.querySelector('.video')
    playVideo.classList.toggle('active')
    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}
