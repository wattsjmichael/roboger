$(document).ready(function(){
    $("#formOne").submit(function(event){
        event.preventDefault();
        const inputSent = $("input#sentence").val();
        let inputArray = inputSent.split(" ");
        console.log(inputArray);
       
        
        
        $("#result").text(capitalArray.join(" "));
    })
})