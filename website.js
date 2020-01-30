
/*
let picture1 = document.getElementById('pic1')
const oldWidth = picture1.clientWidth;

console.log(oldWidth);


const resizeMe = (element) => {

    let counter = 0;

    for (let i = oldWidth; i > 0; i--) {
        setTimeout(() => {
            element.style.width = i;
        }, counter++);
    }
    for (let i = 0; i < oldWidth; i++) {
        setTimeout(() => {
            element.style.width = i;
        }, counter++);
    }
}


picture1.addEventListener('click', function () {
    resizeMe(this);
});
*/




//hover 1st Image 
const picture1 = document.getElementById('pic1')
picture1.addEventListener('mouseover', function () {
    this.style.width = 200;
});

picture1.addEventListener('mouseout', function () {
    this.style.width = 250;
});

//hover 2nd Image
try {
    const picture2 = document.getElementById('pic2')
    picture2.addEventListener('mouseover', function () {
        this.style.width = 200;
    });
    picture2.addEventListener('mouseout', function () {
        this.style.width = 250;
    });
} catch (err) {
    console.log(err);
}


//Hover 3rd Image
const picture3 = document.getElementById('pic3')
picture3.addEventListener('mouseover', function () {
    // this.style.width = 200;
});
picture3.addEventListener('mouseout', function () {
    // this.style.width = 250;
});