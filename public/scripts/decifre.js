//Inicializando variáveis
const submit = document.querySelector("button[name='submit']");
//Variável que captura o evento de pressão no enter
const enterPress = document.querySelector("body").addEventListener("keydown", ()=>{
  var tecla = event.keyCode; 
  
  if(tecla == 13){
    submitPage();
  }
})


    //FUNÇÕES
//Função que faz toda a manipulação dos dados provenientes do inputValue/código
const submitPage = ()=>{  
  //Previnindo que o página seja recarregada ao apertar enter
  event.preventDefault()
  //Inicializando variáveis
  const inputValue = document.querySelector("input[name='code']").value;
  var count = 0;
  var qtdInputValue = [];
  var decifreSchedule = [];
  var decifreDay = [];
  var decifreTurn = "";

  //Preenchendo todo o array com 0
  for(i = 0; i < 6; i++){ 
    qtdInputValue[i] = 0;
  }

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
        for(j = 2; j <= 7; j++){
          if(j != inputValue[i]){

          }
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
      }
    }
  }
 
  //Percorrendo array inputValue a partir da posição do turno
  switch(decifreTurn){
    //Casos da manhã
    case 'Manhã' : {
      //Zerando o valor das posições do inputValue
      for(i = 0; i < 5; i++) qtdInputValue[i] = 0;
      
      //Percorrendo o inputValue a partir da posição do turno
      for(i = count; i < inputValue.length; i++){
        //Registrando os horários de acordo com o turno
        switch(inputValue[i]){
          case '1' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[0] += (inputValue[i] * 10);

            if(qtdInputValue[0] == 10) 
              decifreSchedule.push( {comeco: "7:00h",fim : "8:00h"} )

            break;

          case '2' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[1] += (inputValue[i] * 10);

            if(qtdInputValue[1] == 20) 
              decifreSchedule.push( {comeco: "8:00h",fim : "9:00h"} )
            break;

          case '3' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[2] += (inputValue[i] * 10);

            if(qtdInputValue[2] == 30) 
              decifreSchedule.push( {comeco: "9:00h",fim : "10:00h"} )
            break;

          case '4' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[3] += (inputValue[i] * 10);

            if(qtdInputValue[3] == 40) 
              decifreSchedule.push( {comeco: "10:00h",fim : "11:00h"} )
            break;

          case '5' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[4] += (inputValue[i] * 10);

            if(qtdInputValue[4] == 50) 
              decifreSchedule.push( {comeco: "11:00h",fim : "12:00h"} )
            break;
        }
      }
      break;
    }


    //Casos da Tarde
    case 'Tarde' : {
      //Zerando o valor das posições do inputValue
      for(i = 0; i < 5; i++) qtdInputValue[i] = 0;

      //Percorrendo o inputValue a partir da posição do turno
      for(i = count; i < inputValue.length; i++){
        //Registrando os horários de acordo com o turno
        switch(inputValue[i]){
          case '1' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[0] += (inputValue[i] * 10);

            if(qtdInputValue[0] == 10) 
              decifreSchedule.push( {comeco: "13:00h",fim : "14:00h"} )
            break;

          case '2' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[1] += (inputValue[i] * 10);

            if(qtdInputValue[1] == 20) 
              decifreSchedule.push( {comeco: "14:00h",fim : "15:00h"} )
            break;

          case '3' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[2] += (inputValue[i] * 10);

            if(qtdInputValue[2] == 30) 
              decifreSchedule.push( {comeco: "15:00h",fim : "16:00h"} )
            break;

          case '4' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[3] += (inputValue[i] * 10);

            if(qtdInputValue[3] == 40) 
              decifreSchedule.push( {comeco: "16:00h",fim : "17:00h"} )
            break;

          case '5' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[4] += (inputValue[i] * 10);

            if(qtdInputValue[4] == 50) 
              decifreSchedule.push( {comeco: "17:00h",fim : "18:00h"} )
            break;

          case '6' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[5] += (inputValue[i] * 10);

            if(qtdInputValue[5] == 60) 
              decifreSchedule.push( {comeco: "18:00h",fim : "19:00h"} )
            break;
        }
      }
      break;
    }


    //Casos da noite
    case 'Noite' : {
      //Zerando o valor das posições do inputValue
      for(i = 0; i < 5; i++) qtdInputValue[i] = 0;

      //Percorrendo o inputValue a partir da posição do turno
      for(i = count; i < inputValue.length; i++){
        //Registrando os horários de acordo com o turno
        switch(inputValue[i]){
          case '1' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[0] += (inputValue[i] * 10);

            if(qtdInputValue[0] == 10) 
              decifreSchedule.push( {comeco: "19:00h",fim : "19:50h"} )
            break;

          case '2' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[1] += (inputValue[i] * 10);

            if(qtdInputValue[1] == 20)
              decifreSchedule.push( {comeco: "19:50h",fim : "20:40h"} )
            break;

          case '3' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[2] += (inputValue[i] * 10);

            if(qtdInputValue[2] == 30)
              decifreSchedule.push( {comeco: "20:40h",fim : "21:30h"} )
            break;

          case '4' :
            //Fazendo com que cada digito referente ao horário só seja informado 1 vez
            qtdInputValue[3] += (inputValue[i] * 10);

            if(qtdInputValue[3] == 40)
              decifreSchedule.push( {comeco: "21:30h",fim : "22:20h"} )
            break;
        }
      }
      break;
    }
  }
  
  activeStatusResults(count)
  insertResults(decifreDay, decifreTurn, decifreSchedule);
};
submit.addEventListener('click', submitPage);


//Função que ativa os sstatus de erro ou sucesso no html
function activeStatusResults(turnPosition){
  let inputValue = document.querySelector("input[name='code']").value;
  const status = document.querySelector(".status");
  const result = document.querySelector("form .result");

  //Caso a inputValue com a posição turnPosition que é referente a posição do turno seja diferente dos valores aceitos
  if(
    inputValue[turnPosition] != 'M' &&
    inputValue[turnPosition] != 'm' &&

    inputValue[turnPosition] != 'T' &&
    inputValue[turnPosition] != 't' &&

    inputValue[turnPosition] != 'N' &&
    inputValue[turnPosition] != 'n' &&
    inputValue[turnPosition] != undefined
    ){
      //Caso o status de erro ou o status de sucesso não existam
      if(!document.querySelector(".status_error") && !document.querySelector(".status_successful")){
        //Inserir a mensagem de erro de caracteres
        status.insertAdjacentHTML("beforeend", `
          <p class="status_error">Erro: o código contém caractéres inválidos!
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">    
              <path d="M 15 3 C 14.168432 3 13.456063 3.5067238 13.154297 4.2285156 L 2.3007812 22.947266 L 2.3007812 22.949219 A 2 2 0 0 0 2 24 A 2 2 0 0 0 4 26 A 2 2 0 0 0 4.140625 25.994141 L 4.1445312 26 L 15 26 L 25.855469 26 L 25.859375 25.992188 A 2 2 0 0 0 26 26 A 2 2 0 0 0 28 24 A 2 2 0 0 0 27.699219 22.947266 L 27.683594 22.919922 A 2 2 0 0 0 27.681641 22.917969 L 16.845703 4.2285156 C 16.543937 3.5067238 15.831568 3 15 3 z M 13.787109 11.359375 L 16.212891 11.359375 L 16.011719 17.832031 L 13.988281 17.832031 L 13.787109 11.359375 z M 15.003906 19.810547 C 15.825906 19.810547 16.318359 20.252813 16.318359 21.007812 C 16.318359 21.748812 15.825906 22.189453 15.003906 22.189453 C 14.175906 22.189453 13.679688 21.748813 13.679688 21.007812 C 13.679688 20.252813 14.174906 19.810547 15.003906 19.810547 z">
              </path>
            </svg>
          </p>
        `)
      }
      //Se o status de erro existir
      else if(document.querySelector(".status_error")){
        //Remover a mensagem de erro normal
        document.querySelector(".status_error").parentElement.removeChild(document.querySelector(".status_error"))

        //Inserir o erro de caracteres
        status.insertAdjacentHTML("beforeend", `
          <p class="status_error">Erro: o código contém caractéres inválidos!
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">    
              <path d="M 15 3 C 14.168432 3 13.456063 3.5067238 13.154297 4.2285156 L 2.3007812 22.947266 L 2.3007812 22.949219 A 2 2 0 0 0 2 24 A 2 2 0 0 0 4 26 A 2 2 0 0 0 4.140625 25.994141 L 4.1445312 26 L 15 26 L 25.855469 26 L 25.859375 25.992188 A 2 2 0 0 0 26 26 A 2 2 0 0 0 28 24 A 2 2 0 0 0 27.699219 22.947266 L 27.683594 22.919922 A 2 2 0 0 0 27.681641 22.917969 L 16.845703 4.2285156 C 16.543937 3.5067238 15.831568 3 15 3 z M 13.787109 11.359375 L 16.212891 11.359375 L 16.011719 17.832031 L 13.988281 17.832031 L 13.787109 11.359375 z M 15.003906 19.810547 C 15.825906 19.810547 16.318359 20.252813 16.318359 21.007812 C 16.318359 21.748812 15.825906 22.189453 15.003906 22.189453 C 14.175906 22.189453 13.679688 21.748813 13.679688 21.007812 C 13.679688 20.252813 14.174906 19.810547 15.003906 19.810547 z">
              </path>
            </svg>
          </p>
        `)
      }
      //Se o status de sucesso existir
      else if(document.querySelector(".status_successful")){
        console.log("sucesso")
        //Setando a altura do painel de resultado para 0
        results.style.height = "0";
        results.style.padding = '0';

        //Removendo o status de sucesso
        document.querySelector(".status_successful").parentElement.removeChild(document.querySelector(".status_successful"))

        //Inserindo a mensagem de erro de caracteres
        status.insertAdjacentHTML("beforeend", `
          <p class="status_error">Erro: o código contém caractéres inválidos!
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">    
              <path d="M 15 3 C 14.168432 3 13.456063 3.5067238 13.154297 4.2285156 L 2.3007812 22.947266 L 2.3007812 22.949219 A 2 2 0 0 0 2 24 A 2 2 0 0 0 4 26 A 2 2 0 0 0 4.140625 25.994141 L 4.1445312 26 L 15 26 L 25.855469 26 L 25.859375 25.992188 A 2 2 0 0 0 26 26 A 2 2 0 0 0 28 24 A 2 2 0 0 0 27.699219 22.947266 L 27.683594 22.919922 A 2 2 0 0 0 27.681641 22.917969 L 16.845703 4.2285156 C 16.543937 3.5067238 15.831568 3 15 3 z M 13.787109 11.359375 L 16.212891 11.359375 L 16.011719 17.832031 L 13.988281 17.832031 L 13.787109 11.359375 z M 15.003906 19.810547 C 15.825906 19.810547 16.318359 20.252813 16.318359 21.007812 C 16.318359 21.748812 15.825906 22.189453 15.003906 22.189453 C 14.175906 22.189453 13.679688 21.748813 13.679688 21.007812 C 13.679688 20.252813 14.174906 19.810547 15.003906 19.810547 z">
              </path>
            </svg>
          </p>
        `)
      }
    return
  }

  //Percorrendo o inputValue
  for(i = 0; i < inputValue.length; i++){
    //Percorrendo as posições do inputValue
    switch(inputValue[i]){
      //Se algum desses existir no inputValue antes do caractere do turno
      case '0' :
      case '1' :
      case '8' :
      case '9' : {
        //Se o status de erro exisitr
        if(document.querySelector(".status_error")){
          //Removendo o status de erro
          document.querySelector(".status_error").parentElement.removeChild(document.querySelector(".status_error"))
        }
        //Se o status de sucesso existir
        else if(document.querySelector(".status_successful")){
          //Removendo o status de sucesso
          document.querySelector(".status_successful").parentElement.removeChild(document.querySelector(".status_successful"))
        }
        //Inserindo o status de erro de caracteres
        status.insertAdjacentHTML("beforeend", `
        <p class="status_error">Erro: o código contém caractéres inválidos!
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">    
            <path d="M 15 3 C 14.168432 3 13.456063 3.5067238 13.154297 4.2285156 L 2.3007812 22.947266 L 2.3007812 22.949219 A 2 2 0 0 0 2 24 A 2 2 0 0 0 4 26 A 2 2 0 0 0 4.140625 25.994141 L 4.1445312 26 L 15 26 L 25.855469 26 L 25.859375 25.992188 A 2 2 0 0 0 26 26 A 2 2 0 0 0 28 24 A 2 2 0 0 0 27.699219 22.947266 L 27.683594 22.919922 A 2 2 0 0 0 27.681641 22.917969 L 16.845703 4.2285156 C 16.543937 3.5067238 15.831568 3 15 3 z M 13.787109 11.359375 L 16.212891 11.359375 L 16.011719 17.832031 L 13.988281 17.832031 L 13.787109 11.359375 z M 15.003906 19.810547 C 15.825906 19.810547 16.318359 20.252813 16.318359 21.007812 C 16.318359 21.748812 15.825906 22.189453 15.003906 22.189453 C 14.175906 22.189453 13.679688 21.748813 13.679688 21.007812 C 13.679688 20.252813 14.174906 19.810547 15.003906 19.810547 z">
            </path>
          </svg>
        </p>
      `)
        break;
      }
    }
  }

  //Se a quantidade de posições do inputValue for maior que 0
  if(inputValue.length > 0){
    //Se o status de sucesso não exisitr
    if(!document.querySelector(".status_successful")){
      //Se o status de erro exisitr
      if(document.querySelector(".status_error")){
        //Removendo o status de erro
        document.querySelector(".status_error").parentElement.removeChild(document.querySelector(".status_error"))
      }
      //Inserindo o status de sucesso
      status.insertAdjacentHTML("beforeend", `
        <p class="status_successful">Decifrado com sucesso! 
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z"
            <path/>
          </svg>
        </p>
      `)
      //Setando a altura do painel de resultado para 10vh
      result.style.height = '100%'
      result.style.padding = '20px 10px'
    }
  }
  //Se a quantidade de posições do inputValue for igual a 0
  if(inputValue.length == 0 ){
    //Se o status de erro existir
    if(document.querySelector(".status_error")){
      //Removendo o status de erro
      document.querySelector(".status_error").parentElement.removeChild(document.querySelector(".status_error"))
    }
    //Se o status de erro não existir
    if(!document.querySelector(".status_error")){
      //Se o status de sucesso existir
      if(document.querySelector(".status_successful")){
        //Inserindo o status de sucesso
        document.querySelector(".status_successful").parentElement.removeChild(document.querySelector(".status_successful"))
      }
      //Inserindo o status de erro normal
      status.insertAdjacentHTML("beforeend", `
        <p class="status_error">Erro ao decifrar
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">    
            <path d="M 15 3 C 14.168432 3 13.456063 3.5067238 13.154297 4.2285156 L 2.3007812 22.947266 L 2.3007812 22.949219 A 2 2 0 0 0 2 24 A 2 2 0 0 0 4 26 A 2 2 0 0 0 4.140625 25.994141 L 4.1445312 26 L 15 26 L 25.855469 26 L 25.859375 25.992188 A 2 2 0 0 0 26 26 A 2 2 0 0 0 28 24 A 2 2 0 0 0 27.699219 22.947266 L 27.683594 22.919922 A 2 2 0 0 0 27.681641 22.917969 L 16.845703 4.2285156 C 16.543937 3.5067238 15.831568 3 15 3 z M 13.787109 11.359375 L 16.212891 11.359375 L 16.011719 17.832031 L 13.988281 17.832031 L 13.787109 11.359375 z M 15.003906 19.810547 C 15.825906 19.810547 16.318359 20.252813 16.318359 21.007812 C 16.318359 21.748812 15.825906 22.189453 15.003906 22.189453 C 14.175906 22.189453 13.679688 21.748813 13.679688 21.007812 C 13.679688 20.252813 14.174906 19.810547 15.003906 19.810547 z">
            </path>
          </svg>
        </p>
      `)
      //Setando a altura do painel de resultados para 0
      result.style.height = '0'
      result.style.padding = '0'
    }
  }
}

//Função insere os dados dentro do html
function insertResults(days, turn, schedule){
  let pResults = document.querySelector(".result p");
  pResults.innerHTML = ""
  const scheduleObject = { schedule };
  let endScheduleCount = 0;

  //Se o pResults no html não tiver texto
  if(pResults.outerText == ""){
    //Se a quantidade de posições for apenas 1
    if(days.length == 1){
      //Atribuindo o valor final do array de objetos scheduleObject
      endScheduleCount = scheduleObject.schedule.length - 1

      pResults.insertAdjacentHTML("beforeend", ` Suas aulas ocorrerão `)
      
      pResults.insertAdjacentHTML("beforeend", `<strong>${days[0]}</strong> pela <strong>${turn}</strong>, das <strong>${scheduleObject.schedule[0].comeco}</strong> às <strong>${scheduleObject.schedule[endScheduleCount].fim}.</strong>.`)

      endScheduleCount = 0;
    }
    //Se a quantidade de posiççoes do array days for igual a 2
    else if(days.length == 2){
      //Atribuindo o valor final do array de objetos scheduleObject
      endScheduleCount = scheduleObject.schedule.length - 1

      pResults.insertAdjacentHTML("beforeend", ` Suas aulas ocorrerão `)

      //Percorrendo o array days
      for( i = 0; i < days.length; i++){
        //Inserindo os dias existentes no array
        pResults.insertAdjacentHTML("beforeend", `<strong>${days[i]}</strong> `)
      }
      //Inserindo o e
      document.querySelector(".result p strong").insertAdjacentHTML("afterend", ` e `)
      document.querySelector(".result p").insertAdjacentHTML("beforeend", ` pela <strong>${turn}</strong>, das <strong>${scheduleObject.schedule[0].comeco}</strong> às <strong>${scheduleObject.schedule[endScheduleCount].fim}.`)

      endScheduleCount = 0;
    } 
    //Se a quantidade de posições do array days for maior que 2
    else if(days.length > 2) {
      //Atribuindo o valor final do array de objetos scheduleObject
      endScheduleCount = scheduleObject.schedule.length - 1

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
          pResults.insertAdjacentHTML("beforeend", ` e <strong>${days[i]}</strong> pela <strong>${turn}</strong>, das <strong>${scheduleObject.schedule[0].comeco}</strong> às <strong>${scheduleObject.schedule[endScheduleCount].fim}. </strong>`)
          return
        }
      }
      endScheduleCount = 0;
    }
  }
}

