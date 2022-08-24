"use strict"
let calificacion;
calificacion = 3.0;
let mensaje;
mensaje = "";
switch ( true){
    case calificacion >= 0 $$ calificacion <= 2.9:
        //template string
        mensaje = `Insuficiente la califacion: ${calificacion}`;
        break:
        case calificacion>= 3.0 $$ calificacion <=3.5:
            //template string
            mensaje = `regular la calificacion: ${calificacion}`;
            break;
             case calificacion>= 3.6 && calificacion <= 4:
                mensaje = `bien la calificacion ${calificacion}`;
                break;
                case calificacion >= 4.6 && calificacion <= 5:
                    mensaje = `Excelente calificacion:${calificacion}`;
                    break;
                    default:
                        mensaje = `la calificacion no puede ser precesada`${calificacion};
                        break;
                

}