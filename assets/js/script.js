let answers = document.querySelectorAll('.accordion');
//answers[0].childNodes[3]
answers.forEach((item,index) => {
  item.addEventListener('click', () => {
    if(item.childNodes[3].classList.contains('active')) {
    item.childNodes[3].classList.remove('active');
  } else {
    item.childNodes[3].classList.add('active');
  }
    if(item.childNodes[1].classList.contains('bold')) {
      item.childNodes[1].classList.remove('bold');
    } else {
      item.childNodes[1].classList.add('bold');
    }
  })
});


let firstQuestion = document.getElementsByTagName('p')[0];
let firstAnswer = document.getElementsByTagName('p')[1];

let question = document.getElementsByTagName('div');

const h1 = document.querySelector('h1');

h1.addEventListener('click', () => {
  if(h1.classList.contains('red')){
    h1.classList.remove('red');
  } else {
    h1.classList.add('red');
  }
})

// firstQuestion.addEventListener('click', () => {
//   if(firstQuestion.classList.contains('bold')) {
//     firstQuestion.classList.remove('bold');
//   } else {
//     firstQuestion.classList.add('bold');
//   }
//   if(firstAnswer.classList.contains('active')) {
//     firstAnswer.classList.remove('active');
//   } else {
//     firstAnswer.classList.add('active');
//   }
// });