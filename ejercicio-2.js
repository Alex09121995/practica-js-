
/*
realiza una funcion que nos permita realizar las 4 operaciones
aritmeticas basica(sumar, restar, dividir y multiplicar),la funcion
debe resivir tres parametros, (a y b), que resiven los numeros a 
calcular y "operation" la cual indica que vamos a realizar
*/


function calcular(){
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let operation = document.getElementById("operacion").value;
    let resultado = document.getElementById("resultado");


    if(!isNaN(a) && !isNaN (b) ){//Identifica si a y b son numeros
        }else {// En caso de no ser asi
        resultado.textContent=(`${a} o ${b} no son numeros `)//imprime en consola que no son numeros
        resultado.textContent=`coloque un numero valido` //Imprime el tipo de dato que tienen a y b
     }
    switch(operation){

    case "sumar": // En caso de que sea suma 
        total= a+b
        resultado.textContent= ` la suma es ${total} `//Suma los parametros
        break

    case "restar":
        total=a-b
        resultado.textContent= ` la restar es ${total} `   // Resta los parametros
        break

    case "multiplicar":
        total=a*b
        resultado.textContent= ` la multiplicacion es ${total} `//multiplica los parametros
        break
    
    case "dividir":
            total=a/b//Divide los parametros
            resultado.textContent= ` la divicion es ${total} `
        break
    case "son pares"://esta parte del codigo identifica si el numero es par 
        let comp = [a, b];  
        let c = comp.filter(numero => numero % 2 === 0);
//usamos una variable  para contener y la funcion filter para sacar los numero que son pares                
        if (c.length > 0) {// si en c hay mas de 0 numeros en el nuevo array
            if(c.length==2){ resultado.textContent= ` ${a} y ${b} son pares`;//si no hay numero pares me va a imprimir los numeros que no son pares en esta parte del codigo
            }else if(c.length==1){resultado.textContent= ` ${c} es un numero par`}}
        if(comp.length==2){resultado.textContent= ` no son son pares: ${a} y ${b}`; }
        else {resultado.textContent= ` no es par: ${c}`; } 
        break;
}}

