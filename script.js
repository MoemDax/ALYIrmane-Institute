let gallerySection = document.getElementById('gallery');
let boxes = document.querySelectorAll('.gallery-box');
let button_left = document.querySelector('.button_1_left');
let button_right = document.querySelector('.button_1_right');
let currentIndex = 0;

let autoPlay = setInterval(slideRight, 5000);
let autoPlayActive = true;


gallerySection.addEventListener('mousemove', function() {
    if (autoPlayActive) {
        clearInterval(autoPlay);
        autoPlayActive = false;
    }
});


gallerySection.addEventListener('mouseleave', function() {
    if (!autoPlayActive) {
        autoPlay = setInterval(slideRight, 5000);
        autoPlayActive = true;
    }
});

function resetBoxes() {
    boxes.forEach(function (box) {
        box.classList.remove('active-left', 'active-right');
    });
}

function slideRight() {
    resetBoxes();
    currentIndex = currentIndex + 1;
    if (currentIndex >= boxes.length) {
        currentIndex = 0;
    }
    boxes[currentIndex].classList.add('active-right');
}

function slideLeft() {
    resetBoxes();
    currentIndex = currentIndex - 1;
    
    if (currentIndex < 0) {
        currentIndex = boxes.length - 1;
    }
    boxes[currentIndex].classList.add('active-left');
}


button_right.addEventListener('click', function() {
    clearInterval(autoPlay);
    autoPlayActive = false;
    slideRight(); 
    autoPlay = setInterval(slideRight, 5000);
    autoPlayActive = true;
});


button_left.addEventListener('click', function() {
    clearInterval(autoPlay);
    autoPlayActive = false;
    slideLeft(); 
    autoPlay = setInterval(slideRight, 5000);
    autoPlayActive = true;
}); 

