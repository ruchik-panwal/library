const library = [{
    cardNo: 1,
    author: "",
    title: "",
    status: ""
}];



count = 0;

// Status button Animation
function statAni() {

    ani = gsap.to(".statInd", {
        x: "106%",
        backgroundColor: "#0AE448",
        duration: 1,
        delay: 0,
        ease: "expo.inOut"
    })
}


// This takes the input from the status button and shows the animation
const readBtn = document.querySelectorAll("#status");
readBtn.forEach((readBtn) => {

    readBtn.addEventListener('click', () => {
        if (readBtn.value == "Read") {
            count = 0;
            ani.reverse();
        }

        if (readBtn.value == "Not Read" && count == 0) {
            statAni();
            count = 1;
        }
    })

});



