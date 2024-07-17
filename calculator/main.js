let tempNumber = '';
let waitCalNumber = 0;
let tempAction = '';
let result = '';

function numberClick(val){
    console.log('Number clicked: ' + val);
    tempNumber += val;
    waitCalNumber = parseFloat(tempNumber);
    printResult(tempNumber);
}

function actionClick(opt){
    console.log('Action clicked: ' + opt);
    tempAction = opt;
    result = waitCalNumber;
    clearAll();
}

const screenResult = document.querySelector('#screen-result');
function printResult(res){
    screenResult.innerHTML = res;
}

function clearAll(){
    screenResult.innerHTML = '0';
    tempNumber = '';
}

function calculateResult(){
    switch(tempAction){
        case '+':
            result = result + waitCalNumber;
            printResult(result);
            break;
            case '-':
            result = result - waitCalNumber;
            printResult(result);
            break;
            case '*':
            result = result * waitCalNumber;
            printResult(result);
            break;
            case '/':
            result = result / waitCalNumber;
            printResult(result);
            break;
    }
}