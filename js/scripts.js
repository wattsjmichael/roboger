function robogerTranslate(number){
    let output =[];
    for (i =0; i<=number; i++){
        if (i.toString().includes(3)){
                output.push("Wont you be my neighbor?");
            } else if (i.toString().includes(2)) {
                output.push("boop!")
            } else if (i.toString().includes(1)) {
                output.push("Beep!")
            } else {
                output.push(i);
                }
                
        }
        return output;
    };
        


$(document).ready(function(){
    $("#formOne").submit(function(event){
        event.preventDefault();
        
        let userInput =$("#numberVal").val();
        let newArray = robogerTranslate(userInput);
        
        let joinedArray = [];
        joinedArray.push(newArray.join(" "));
        
        let msg =new SpeechSynthesisUtterance(joinedArray)
        speechSynthesis.speak(msg);
        

        $("#result").text(joinedArray);
        $("#result").show();
    });
});