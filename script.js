$(document).ready(function(){
    
    $('#sum').click(function() {
       let firstNumber=$('#first_number').val();
       let secondNumber=$('#second_number').val();
       let total=+firstNumber+ +secondNumber;
       total=total.toFixed(1);    
       alert("Результат: \n" + " " + total);
    });
});