let imageTexts = ['They are fine', 'Me too', 'Me when i see Deadlines', "Let's go", 'wow'];
let imageText = document.querySelector('.slider-text');
let image = document.querySelector('.image');
let sliderControls = document.querySelector('.slider-controls');
sliderControls.innerHTML = '';

for (let i = 0; i < imageTexts.length; i++) {
    sliderControls.innerHTML += `<span class="slider-control" data-index=${i}></span>`;
}

let sliderControl = document.querySelectorAll('.slider-control');
let lastIndex=0;
sliderControl[0].classList.toggle('active');
for (let i = 0; i < sliderControl.length; i++) {

    sliderControl[i].addEventListener("click", () => {
        imageText.textContent= imageTexts[i];
        image.src = './images/meme' + i + '.jpg';
        sliderControl[i].classList.toggle('active');

        sliderControl[lastIndex].classList.remove('active');

        lastIndex = i;
    })

}