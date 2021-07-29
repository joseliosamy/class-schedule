

//Inicializando variáveis
const submit = document.querySelector("button[name='submit']");




function insertResults(days){
  let pResults = document.querySelector(".result p");
  
  if(pResults.outerText == ""){
    pResults.insertAdjacentHTML("beforeend", ` Suas aulas ocorrerão `)
    if(days.length == 2){
      for( i = 0; i < days.length; i++){
        console.log(days[i])
        pResults.insertAdjacentHTML("beforeend", `<strong>${days[i]}</strong>`)
      }

      document.querySelector(".result p strong").insertAdjacentHTML("afterend", ` e `)
      
    } else if(days.length > 2) {
      document.querySelector(".result p strong").lenght = document.querySelector(".result p").childElementCount

      document.querySelector(".result p strong").lenght

      for( i = 0; i < days.length; i++){
        
        pResults.insertAdjacentHTML("beforeend", `<strong>${days[i]},</strong>`)
      }
      if(document.querySelector(".result p strong").lenght == document.querySelector(".result p").childElementCount){
        console.log(days[i])
      }

    }
    else{
      pResults.insertAdjacentHTML("beforeend", `<strong>${days[0]}</strong>`)
      
    }

  }
}






function activeStatusResults(){
  let inputValue = document.querySelector("input[name='code']").value;
  const statusResults = document.querySelector("form");
  const statusError = document.querySelector(".status_error");
  const statusSuccessful = document.querySelector(".status_successful");
  const result = document.querySelector("form .result");
  console.log(inputValue.length)

  if(inputValue.length > 0){
    statusResults.style.height = '290px'
    statusSuccessful.style.display = 'flex'
    statusSuccessful.style = 'animation: boom 200ms'
    result.style.display = 'flex'
    statusError.style.display = 'none'
  }
  if(inputValue.length == 0 ){
    statusResults.style.height = '220px'
    statusSuccessful.style.display = 'none'
    result.style.display = 'none'
    statusError.style.display = 'flex'
  }
}

submit.addEventListener('click', ()=>{
  const inputValue = document.querySelector("input[name='code']").value;
  activeStatusResults()
  //Inicializando variáveis
  var count = 0;
  var decifreDay = [];
  var decifreTurn = "";
  var decifreSchedule;


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
          decifreDay.push("Segunda-Feira");
          break;
  
        case '3' : 
          decifreDay.push("Terça-Feira");
          break;
          
        case '4' : 
          decifreDay.push("Quarta-Feira");
          break;
  
        case '5' : 
          decifreDay.push("Quinta-Feira");
          break;
  
        case '6' : 
          decifreDay.push("Sexta-Feira");
          break;
  
        case '7' : 
          decifreDay.push("Sábado");
          break;
      }
    }
  }
  insertResults(decifreDay);


    console.log(`Essas aulas ocorrerão na ${decifreDay}, durante a ${decifreTurn}, de 8:00 às 14:00h.`)

});








