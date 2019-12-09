var identificador;
function alternar(valor){
    identificador= valor.id;
    switch (identificador) {
        case "llantas":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el "llantas"
          for(i=1;i<7;i++){
            document.getElementById(i).src= "/img/llantas.png";
          }
          break;
        case "neumaticos":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el "neumaticos"
          for(i=1;i<7;i++){
            document.getElementById(i).src= "/img/neumatico.png";
          }
          break;
        case "otros":
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con "otros"
          for(i=1;i<7;i++){
            document.getElementById(i).src= "/img/dados.png";
          }
          break;
      }
    
}