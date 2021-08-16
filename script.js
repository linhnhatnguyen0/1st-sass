// const btn = document.getElementsByClassName("btn");
// var i;

// for (var i=0 ; i<btn.length();i++){
//     btn[i].addEventListener("click", function() {
//         const text = document.getElementsById("text-display");
//         if (text.style.display === "none")
//         {
//             text.style.display = "block";
//         }
//         else{
//             text.style.display = "none";
//         }
//     })
// }



$(document).ready(function(){
    $('.faq-list-element-question.active').parent().children('.faq-list-element-answer').slideDown();
    $('.faq-list-element').click(function(){
        $(this).children('.faq-list-element-question').toggleClass("active"); 
        $(this).children('.faq-list-element-answer').slideToggle();
    })
});