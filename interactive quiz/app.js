const correctAnswers = ['B', 'A', 'A'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit',e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value];

    //check answers
    userAnswers.forEach((answer, index)=>{
        if(answer===correctAnswers[index]){
            score += 20;
        }
    });
    console.log(score);
});