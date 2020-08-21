$(document).ready(function(){
    $("#formOne").submit(function(event){
        event.preventDefault();
        const userInput =$("input#number").val();
        let newArray = [userInput]     
        console.log(newArray);
    });
});