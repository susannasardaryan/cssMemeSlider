let imageTexts = ['They are fine', 'Me too', 'Me when i see Deadlines', "Let's go", 'wow'];
let imageText = document.querySelector('.slider-text');
let image = document.querySelector('.image');
let sliderControls = document.querySelector('.slider-controls');
sliderControls.innerHTML = '';

for (let i = 0; i < imageTexts.length; i++) {
    sliderControls.innerHTML += `<div class="slider-control"><span></span></div>`;
}

let sliderControl = document.querySelectorAll('.slider-control');
let lastIndex=0;
sliderControl[0].querySelector('span').classList.toggle('active');

for (let i = 0; i < sliderControl.length; i++) {

    sliderControl[i].addEventListener("click", () => {
        imageText.textContent='';
        imageText.classList.remove('animateText');
        setTimeout(()=>{     
            for(let j=0; j<imageTexts[i].length; j++){
                imageText.textContent += imageTexts[i][j];
                imageText.classList.add('animateText');
            }
        },500);
        image.src = './images/meme' + i + '.jpg';
        image.classList.toggle('animate');
        sliderControl[i].querySelector('span').classList.toggle('active');

        sliderControl[lastIndex].querySelector('span').classList.remove('active');

        lastIndex = i;
    })

}