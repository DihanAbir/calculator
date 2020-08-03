function getHistory(){
   return document.getElementById("history").innerText; 
}
function printHistory(num){
    document.getElementById("history").innerText = num;
}
function getOutput(){
   return document.getElementById("output").innerText; 
}
function printOutput(num){
    if(num == ""){      
        document.getElementById("output").innerText = num;
    }

    else{
        document.getElementById("output").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value ;
}
function reverceNumber (num){
    return Number(num.replace('/,/g', ''))
}



var operator = document.getElementsByClassName("operator");
for (var i = 0; i<operator.length; i++){
    operator[i].addEventListener("click", function(){

        if(this.id == "clear"){
            printHistory("");
            printOutput("");
            console.log("clear fired")
        }
        else if (this.id == "backspace"){
            var output = reverceNumber(getOutput()).toString();
            if (output){
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        }

    });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i<number.length; i++){
    number[i].addEventListener("click", function(){
        var output = reverceNumber(getOutput());
        console.log(this.id)
        if(output != NaN){
            output = output + this.id;
            printOutput(output);
        }

    });
}