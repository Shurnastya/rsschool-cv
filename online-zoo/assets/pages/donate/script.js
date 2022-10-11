function anchor(){
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const blockId = anchor.getAttribute('href');
            document.querySelector('' + blockId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    };
};


let input = document.querySelector(".input-number");

input.oninput = function () {
    this.value = this.value.substr(0, 4);
};