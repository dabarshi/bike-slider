const bikeImages = [
    './images/bike-1.png',
    './images/bike-2.png',
    './images/bike-3.png',
    './images/bike-4.jpg',
    './images/bike-5.png',
    './images/bike-6.png',
    './images/bike-7.png',
    './images/bike-8.png',
    './images/bike-9.png',
] ;

let count = 0;

setInterval(()=>{
    if (count === bikeImages.length){
        count = 0;
    }
    const sliderImage = document.getElementById('slider-image');
    const displayImage = bikeImages[count];
    sliderImage.setAttribute('src', `${displayImage}`)
    count++;

}, 1000)