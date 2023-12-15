//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    /*console.log(question);*/
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function(){

      


       
      question.classList.toggle("show-text");
      questions.forEach(item => {
        console.log(item);

        if (item !== question) {
            item.classList.remove("show-text");
        }
    })
    });

    
   
})
