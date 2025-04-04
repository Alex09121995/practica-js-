
/*
realiza una funcion que nos permita realizar las 4 operaciones
aritmeticas basica(sumar, restar, dividir y multiplicar),la funcion
debe resivir tres parametros, (a y b), que resiven los numeros a 
calcular y "operation" la cual indica que vamos a realizar
*/
function calcular(a , b,operation){
    if(!isNaN(a) && !isNaN (b) ){//Identifica si a y b son numeros
        }else {// En caso de no ser asi
        console.log(`${a} o ${b} no son numeros `)//imprime en consola que no son numeros
        console.log(typeof(a) , typeof(b))//Imprime el tipo de dato que tienen a y b
     }
    switch(operation){

    case "suma": // En caso de que sea suma 
        console.log(a+b)//Suma los parametros
        break

    case "restar":
            console.log(a-b)// Resta los parametros
        break

    case "multiplicar":
            console.log(a*b)//multiplica los parametros
        break
    
    case "dividir":
            console.log(a/b)//Divide los parametros
        break
    case "son pares"://esta parte del codigo identifica si el numero es par 
        let comp = [a, b];  
            let c = comp.filter(numero => numero % 2 === 0);
//usamos una variable  para contener y la funcion filter para sacar los numero que son pares                
            if (c.length > 0) {// si en c hay mas de 0 numeros en el nuevo array
                console.log(`Son pares: ${c.join(', ')}`);//  entonces me va a imprimir en la consola los numeros 
            } else {//si no hay numero pares me va a imprimir los numeros que no son pares en esta parte del codigo
                console.log(`${a} y ${b} no son pares`);//si no hay numero pares me va a imprimir los numeros que no son pares en esta parte del codigo
            }
        break;
}}

calcular(6,6,"suma")