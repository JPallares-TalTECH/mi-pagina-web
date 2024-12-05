        //declaración de variables globales
        let num1, num2, resultado
        let operacion, pregunta

        //funcion que realiza la operación de cálculo
        function realizarOperacion(n1, n2, operacion){
            if (operacion == "suma") {
                return (n1 + n2);
            } 
            else if (operacion == "resta") {
                return (n1 - n2);
            }
            else if (operacion == "multiplicacion" || operacion == "multiplicación") {
                return (n1 * n2);
            }
            else if (operacion == "division" || operacion == "división") {
                if (n2 == 0) {//se evalúa si el segundo número es cero para controlar el error de división por cero
                    return "No es posible realizar una division por cero: "+n1+"/"+n2
                }   else {
                        return (num1 / num2);
                    }
            }
            else {
                return "Operación no valida..."
            }
        }
        //Bucle para controlar las iteraciones y se pueda hacer el proceso varias veces
        while(operacion != "salir") {

            num1=parseFloat(prompt("Ingrese el primer numero: "));
            num2=parseFloat(prompt("Ingrese el segundo numero: "));
            operacion=prompt("Ingrese la operación (suma, resta, multiplicación, división) o digite la palabra 'salir' si desea salir de la calculadora: ").toLowerCase();

            if (operacion == "salir") {
                console.log("¡¡Gracias por usar la calculadora!! | ¡¡Hasta luego!!");
                document.write("¡¡Gracias por usar la calculadora!! | ¡¡Hasta luego!!");
                break //Si digita 'salir' en operación se sale del ciclo y cierra el programa
            }
            else {
                resultado=realizarOperacion(num1,num2,operacion);
            }
            console.log("El resultado es: "+resultado);
            document.write("El resultado es: "+resultado+"<br>");
            //Se convierte la respuesta a minuscula y se condiciona la respuesta a 'si' o 'no' para controlar salidas no deseadas
            pregunta = prompt("Desea realizar otra operacion? ").toLowerCase();

            if (pregunta == "si" || pregunta == "no") {
                if (pregunta == "si") {
                    continue
                } 
                else if (pregunta == "no") {
                    console.log("¡¡Gracias por usar la calculadora!! | ¡¡Hasta luego!!");
                    document.write("¡¡Gracias por usar la calculadora!! | ¡¡Hasta luego!!");
                    break
                }
            }
            else {
                console.log("Por favor responda 'si' o 'no'");
                document.write("Por favor responda 'si' o 'no' o escriba 'salir' cuando se le solicite la operación a realizar <br><br>")
                continue
            }
        }
