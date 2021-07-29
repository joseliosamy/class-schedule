

//Inicializando variáveis
const submit = document.querySelector("button[name='submit']");




function insertResults(days){
  let pResults = document.querySelector(".result p");
  pResults.innerHTML = ""
  
  //Se o pResults no html não tiver texto
  if(pResults.outerText == ""){
    //Se a quantidade de posições for apenas 1
    if(days.length == 1){
      pResults.insertAdjacentHTML("beforeend", ` Suas aulas ocorrerão `)
      
      pResults.insertAdjacentHTML("beforeend", `<strong>${days[0]}.</strong>`)
    }
    //Se a quantidade de posiççoes do array days for igual a 2
    else if(days.length == 2){
      pResults.insertAdjacentHTML("beforeend", ` Suas aulas ocorrerão `)

      //Percorrendo o array days
      for( i = 0; i < days.length; i++){
        console.log("Igual a 2 ativo")
        //Inserindo os dias existentes no array
        pResults.insertAdjacentHTML("beforeend", `<strong>${days[i]}</strong>`)
      }
      //Inserindo o e
      document.querySelector(".result p strong").insertAdjacentHTML("afterend", ` e `)
      document.querySelector(".result p").insertAdjacentHTML("afterend", `.`)
    } 
    //Se a quantidade de posições do array days for maior que 2
    else if(days.length > 2) {
      pResults.insertAdjacentHTML("beforeend", ` Suas aulas ocorrerão `)

      //Percorrendo o array days
      for( i = 0; i < days.length; i++){
        //Quando o loop chegar a uma posição do fim, ele não vai mais executar

        if(i < (days.length - 1)){
          //Inserindo os dias sem virgula
          pResults.insertAdjacentHTML("beforeend", `<strong>${days[i]}</strong>`)
          //Inserindo a virgula
          if(i < days.length -2){
            pResults.insertAdjacentHTML("beforeend", `, `)
          }
        }

        //Quando o i for igual ao days.lenght, usar esse texto pResults.insertAdjacentHTML("beforeend", `<strong> e ${days[i]}. </strong>`)
        else if(i == (days.length - 1)){
          pResults.insertAdjacentHTML("beforeend", ` e <strong>${days[i]}. </strong>`)
          return
        }
      }
    }
  }
}





//Função que ativa os sstatus de erro ou sucesso no html
function activeStatusResults(){
  let inputValue = document.querySelector("input[name='code']").value;
  const statusAll = document.querySelectorAll(".status p");
  const status = document.querySelector(".status");
  const statusResults = document.querySelector("form");
  const statusError = document.querySelector(".status_error");
  const statusSuccessful = document.querySelector(".status_successful");
  const result = document.querySelector("form .result");
  console.log(inputValue.length)
  
  for(i = 0; i < inputValue.length; i++){
    switch(inputValue[i]){
      case '0' :
      case '1' :
      case '8' :
      case '9' : {
        if(statusError && statusSuccessful){
          document.querySelector(".status_error").parentElement.removeChild(document.querySelector(".status_error"))
          document.querySelector(".result p").innerHTML = ""
        }
        status.insertAdjacentHTML("beforeend", `
        <p class="status_error">Erro: o código contém caractéres inválidos!
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">    
            <path d="M 15 3 C 14.168432 3 13.456063 3.5067238 13.154297 4.2285156 L 2.3007812 22.947266 L 2.3007812 22.949219 A 2 2 0 0 0 2 24 A 2 2 0 0 0 4 26 A 2 2 0 0 0 4.140625 25.994141 L 4.1445312 26 L 15 26 L 25.855469 26 L 25.859375 25.992188 A 2 2 0 0 0 26 26 A 2 2 0 0 0 28 24 A 2 2 0 0 0 27.699219 22.947266 L 27.683594 22.919922 A 2 2 0 0 0 27.681641 22.917969 L 16.845703 4.2285156 C 16.543937 3.5067238 15.831568 3 15 3 z M 13.787109 11.359375 L 16.212891 11.359375 L 16.011719 17.832031 L 13.988281 17.832031 L 13.787109 11.359375 z M 15.003906 19.810547 C 15.825906 19.810547 16.318359 20.252813 16.318359 21.007812 C 16.318359 21.748812 15.825906 22.189453 15.003906 22.189453 C 14.175906 22.189453 13.679688 21.748813 13.679688 21.007812 C 13.679688 20.252813 14.174906 19.810547 15.003906 19.810547 z">
            </path>
          </svg>
        </p>
      `)
        return
      }
    }
  }
  if(inputValue.length > 0){
    if(!document.querySelector(".status_successful")){
      if(document.querySelector(".status_error")){
        document.querySelector(".status_error").parentElement.removeChild(document.querySelector(".status_error"))
      }
      status.insertAdjacentHTML("beforeend", `
        <p class="status_successful">Decifrado com sucesso! 
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"
            <path/>
          </svg>
        </p>
      `)
      result.style.height = '10vh'
    }
  }
  if(inputValue.length == 0 ){
    if(document.querySelector(".status_error")){
      document.querySelector(".status_error").parentElement.removeChild(document.querySelector(".status_error"))
    }
    if(!document.querySelector(".status_error")){
      if(document.querySelector(".status_successful")){
        document.querySelector(".status_successful").parentElement.removeChild(document.querySelector(".status_successful"))
      }
      
      status.insertAdjacentHTML("beforeend", `
        <p class="status_error">Erro ao decifrar
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">    
            <path d="M 15 3 C 14.168432 3 13.456063 3.5067238 13.154297 4.2285156 L 2.3007812 22.947266 L 2.3007812 22.949219 A 2 2 0 0 0 2 24 A 2 2 0 0 0 4 26 A 2 2 0 0 0 4.140625 25.994141 L 4.1445312 26 L 15 26 L 25.855469 26 L 25.859375 25.992188 A 2 2 0 0 0 26 26 A 2 2 0 0 0 28 24 A 2 2 0 0 0 27.699219 22.947266 L 27.683594 22.919922 A 2 2 0 0 0 27.681641 22.917969 L 16.845703 4.2285156 C 16.543937 3.5067238 15.831568 3 15 3 z M 13.787109 11.359375 L 16.212891 11.359375 L 16.011719 17.832031 L 13.988281 17.832031 L 13.787109 11.359375 z M 15.003906 19.810547 C 15.825906 19.810547 16.318359 20.252813 16.318359 21.007812 C 16.318359 21.748812 15.825906 22.189453 15.003906 22.189453 C 14.175906 22.189453 13.679688 21.748813 13.679688 21.007812 C 13.679688 20.252813 14.174906 19.810547 15.003906 19.810547 z">
            </path>
          </svg>
        </p>
      `)
      result.style.height = '0'
    }

  }
}

//Função que faz toda a manipulação dos dados provenientes do inputValue/código
submit.addEventListener('click', ()=>{
  //Inicializando variáveis
  const inputValue = document.querySelector("input[name='code']").value;
  activeStatusResults()
  var count = 0;
  var qtdInputValue = [];
  var decifreDay = [];
  var decifreTurn = "";

  //Preenchendo todo o array com 0
  for(i = 0; i < 6; i++) qtdInputValue[i] = 0;

  //Separando as variáveis por tipo
  //Percorrendo as posicões do inputValue(turno)
  for( i = 0; i <= inputValue.length; i++){
    //Descobrindo quantos dígitos relacionados ao dia da semana existem antes do turno
    if(
      inputValue[i] == 'M' ||
      inputValue[i] == 'm' ||

      inputValue[i] == 'T' ||
      inputValue[i] == 't' ||

      inputValue[i] == 'N' ||
      inputValue[i] == 'n'
      ){
        count = i;
    }

    //Percorrendo a string inputValue e descobrindo os dias e o turno do código
    switch(inputValue[i]){
      //Descobrindo o turno 
      case 'M' :
      case 'm' : {
        decifreTurn = "Manhã";
        break;
      }
      case 'T' :
      case 't' : {
        decifreTurn = "Tarde";
        break;
      }
      case 'N' :
      case 'n' : {
        decifreTurn = "Noite";
        break;
      }
      default :
        if(
          inputValue[i] != 'M' || 
          inputValue[i] != 'm' ||
          inputValue[i] != 'T' ||
          inputValue[i] != 't' ||
          inputValue[i] != 'N' ||
          inputValue[i] != 'n'
          ){
            console.log(`Turno ${inputValue[i]} não existe`)
          }
        break;
    } 
  }
  //Percorrendo as posicões do inputValue(dias da semana)
  for( i = 0; i <= inputValue.length; i++){
    //Caso a valor do i for maior ou igual ao count(valor de quebra, determinado pelo turno do código) ele não irá executar mais
    
    if(i < count){
      //Descobrindo os dias
      switch(inputValue[i]){
        case '2' : 
          //Fazendo com que o digito referente ao dia só seja informado 1 vez
          if(inputValue[i] == 2){
            qtdInputValue[0] += (inputValue[i] * 10);
            console.log(qtdInputValue)
            if(qtdInputValue[0] == 20) decifreDay.push("Segunda-Feira");
          }
          break;
  
        case '3' : 
          //Fazendo com que o digito referente ao dia só seja informado 1 vez
          if(inputValue[i] == 3){
            qtdInputValue[1] += (inputValue[i] * 10);
            if(qtdInputValue[1] == 30) decifreDay.push("Terça-Feira");
          }
          
          break;
          
        case '4' : 
          //Fazendo com que o digito referente ao dia só seja informado 1 vez
          if(inputValue[i] == 4){
            qtdInputValue[2] += (inputValue[i] * 10);
            if(qtdInputValue[2] == 40) decifreDay.push("Quarta-Feira");
          }
          
          break;
  
        case '5' : 
          //Fazendo com que o digito referente ao dia só seja informado 1 vez
          if(inputValue[i] == 5){
            qtdInputValue[3] += (inputValue[i] * 10);
            if(qtdInputValue[3] == 50) decifreDay.push("Quinta-Feira");
          }
          
          break;
  
        case '6' : 
          //Fazendo com que o digito referente ao dia só seja informado 1 vez
          if(inputValue[i] == 6){
            qtdInputValue[4] += (inputValue[i] * 10);
            if(qtdInputValue[4] == 60) decifreDay.push("Sexta-Feira");
          }
          
          break;
  
        case '7' : 
          //Fazendo com que o digito referente ao dia só seja informado 1 vez
          if(inputValue[i] == 7){
            qtdInputValue[5] += (inputValue[i] * 10);
            if(qtdInputValue[5] == 70) decifreDay.push("Sábado");
          }
          break;

          default : 
            console.log("erro")
        }
      }
  }
  for(i = 0; i < inputValue.length; i++){
    switch(inputValue[i]){
      case '0' :
      case '1' :
      case '8' :
      case '9' : {
        return
      }
      default :
      console.log("opa")
      insertResults(decifreDay);
    }
  }


    console.log(`Essas aulas ocorrerão na ${decifreDay}, durante a ${decifreTurn}, de 8:00 às 14:00h.`)

});








