console.log("JavaScript test");

minutesInput = document.querySelector('.minutes');

secondsInput = document.querySelector('.seconds');

minutesInput.addEventListener('input', restrictNumber);
function restrictNumber (e) {
  var newValue = this.value.replace();
  this.value = newValue;
}

secondsInput.addEventListener('input', restrictNumber);
function restrictNumber (e) {
  var newValue = this.value.replace();
  this.value = newValue;
}

var meditate = document.querySelector('.meditate-btn');
var exercise = document.querySelector('.exercise-btn');
var study = document.querySelector('.study-btn');
var medActive = document.querySelector('#meditate-btn');
var studyActive = document.querySelector('#study-btn');
var exerciseActive = document.querySelector('#exercise-btn');


meditate.addEventListener('click', changeMediBtnColor)
exercise.addEventListener('click', changeExerBtnColor)
study.addEventListener('click', changeStudyBtnColor)

function changeMediBtnColor() {
  meditate.classList.add('med-btn-selected');
  medActive.src = "assets/meditate-active.svg";
  exercise.classList.remove('exercise-btn-selected');
  exerciseActive.src = "assets/exercise.svg";
  study.classList.remove('study-btn-selected');
  studyActive.src = "assets/study.svg";
}

function changeExerBtnColor() {
  meditate.classList.remove('med-btn-selected');
  medActive.src = "assets/meditate.svg";
  exercise.classList.add('exercise-btn-selected');
  exerciseActive.src = "assets/exercise-active.svg";
  study.classList.remove('study-btn-selected');
  studyActive.src = "assets/study.svg";
}

function changeStudyBtnColor() {
  meditate.classList.remove('med-btn-selected');
  medActive.src = "assets/meditate.svg";
  exercise.classList.remove('exercise-btn-selected');
  exerciseActive.src = "assets/exercise.svg";
  study.classList.add('study-btn-selected');
  studyActive.src = "assets/study-active.svg";
}
