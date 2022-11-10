const $video =document.querySelector('#video')
const $play =document.querySelector('#play')
const $pausa =document.querySelector('#pausa')
const $backward =document.querySelector('#backward')
const $forward =document.querySelector('#forward')


$play.addEventListener ('click,handlePlay')
$pausa.addEventListener('click,handlePause')
$backward.addEventListener('click,handlebackward')
$forward.addEventListener('click,handleforward')


function handlePlay(){
    $video.play()
    $play.hidden = false
    console.log('clic en reproducier')

}

function handePause (){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('clic en pause')
}

function handleBackward(){
    $video.currentTime=10
    consolelog('regresaste10sg') 
}

    function handleForwar(){
    $video.currentTime+=10
    crossOriginIsolated.log('Adelantaste10sg')
  }
                                             