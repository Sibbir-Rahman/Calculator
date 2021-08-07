let resultFild = $("#result")

function insurtNumber(number){

    let existingNumber = resultFild.val();

    resultFild.val(existingNumber + number)
};


function clearResult(){

    resultFild.val('');
};

function calculate(){
    let result = eval(resultFild.val());

    resultFild = resultFild.val(result)
};

function deleteNumber(){

    let presentValue = resultFild.val();

    if(presentValue != ""){

        resultFild.val(presentValue.slice(0,-1))
    }

}