document.querySelector('#answer1DownArrow').onclick = function(){
    let answer1Text = document.querySelectorAll(".answer1Text")

    if (answer1Text.style.display == "none") {
        answer1Text.style.display = "list-item"
    }
};