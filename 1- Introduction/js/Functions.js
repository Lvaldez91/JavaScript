function testFunction(){
    return "Hello World!!";
}

function testFunction2(text, number){
    return text + number;
}

function testFunction3(param1, param2, param3){
    let x = param1;
    let y = param2;
    let z = param3;

    let result = x + y + z;

    alert(result);
}

let v = testFunction3(23, 123, 'I am Luz');
let text = "The texto is large " + v + " .";