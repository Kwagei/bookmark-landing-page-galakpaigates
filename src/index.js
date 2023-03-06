document.addEventListener("DOMContentLoaded", function openClose(){
    document.querySelector("#question1DownArrow").onclick = function displayAnswer1(){
      if (document.querySelector('.answer1Text').style.display == "none") {
        document.querySelector('.answer1Text').style.display = "list-item"
      }

      else {
        document.querySelector(".answer1Text").style.display = "none"
      }
    }

    document.querySelector("#question2DownArrow").onclick = function displayAnswer2(){
      if (document.querySelector('#answer2Text').style.display == "none") {
        document.querySelector('#answer2Text').style.display = "list-item"
      }

      else {
        document.querySelector("#answer2Text").style.display = "none"
      }
    }

    document.querySelector("#question3DownArrow").onclick = function displayAnswer3(){
      if (document.querySelector('#answer3Text').style.display == "none") {
        document.querySelector('#answer3Text').style.display = "list-item"
      }

      else {
        document.querySelector("#answer3Text").style.display = "none"
      }
    }

    document.querySelector("#question4DownArrow").onclick = function displayAnswer4(){
      if (document.querySelector('#answer4Text').style.display == "none") {
        document.querySelector('#answer4Text').style.display = "list-item"
      }

      else {
        document.querySelector("#answer4Text").style.display = "none"
      }
    }

    document.querySelector(".displayOtherContentSvg").onclick = function displayOtherContent(){
      if (document.querySelector('.otherContentList').style.display == "none") {
        document.querySelector('.otherContentList').style.display = "list-item"
      }

      else {
        document.querySelector(".otherContentList").style.display = "none"
      }
    }
  });