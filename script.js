const displayFocus_input = document.querySelector(".subtela")
const displayHistory_input = document.querySelector(".supTela")

const button_numbers = document.querySelectorAll(".btn_number")

let focusValue
let historyValue
let sybolvalue
let estadoButtonOpe = false

adicionarNumberoDis()
function adicionarNumberoDis(){
    button_numbers.forEach((number)=>{
        let valueClick = number.innerHTML
        number.addEventListener("click", ()=>{
            if(String(focusValue).length > 9){
                return
            }else{
                if(estadoButtonOpe){
                    focusValue = ""
                    displayFocus_input.innerHTML = focusValue
                    displayFocus_input.innerHTML += valueClick
                    focusValue = displayFocus_input.innerHTML
                    estadoButtonOpe = false
                }else{
                    displayFocus_input.innerHTML += valueClick
                    focusValue = displayFocus_input.innerHTML
                }
            }
        })
    })
}
function addnumberHistory(number, sybol){
    sybolvalue = sybol
    historyValue = number
    displayHistory_input.innerHTML = historyValue + " " + sybol 
}
function processPre_Operation(sybol){
    addnumberHistory(focusValue, sybol)
    focusValue = ""
    displayFocus_input.innerHTML = focusValue
}
const operations = {
    divisao: (value01, value02)=>{
        return Number(value01) / Number(value02)
    },
    multiplicacao: (value01, value02)=>{
        return Number(value01) * Number(value02)
    },
    subtracao: (value01, value02)=>{
        return Number(value01) - Number(value02)
    },
    soma: (value01, value02)=>{
        return Number(value01) + Number(value02)
    }
}
function divisaoBtt(el){
    let sybol = el.innerHTML
    processPre_Operation(sybol)
}
function multiplicacaoBtt(el){
    let sybol = el.innerHTML
    processPre_Operation(sybol)
}
function subtracaoBtt(el){
    let sybol = el.innerHTML
    processPre_Operation(sybol)
}
function somaBtt(el){
    let sybol = el.innerHTML
    processPre_Operation(sybol)
}
function porcentagem(){
    focusValue = Number(focusValue)/100
    displayFocus_input.innerHTML = focusValue
}
function deletarC(){
    focusValue = ""
    historyValue = ""
    displayFocus_input.innerHTML = focusValue
    displayHistory_input.innerHTML = historyValue
    estadoButtonOpe = false
}
function deletarCE(){
    let valueString = String(focusValue).substring(0, focusValue.length - 1)
    focusValue = valueString
    displayFocus_input.innerHTML = focusValue
}
function equalsBtt(){
    estadoButtonOpe = true
    if(historyValue){
        equalizarValores(focusValue, historyValue)
    }else{
        return
    }
}

function equalizarValores(value01, value02){
    let resultadoValue
    if(sybolvalue === "÷"){
        resultadoValue = operations.divisao(value02, value01)
    }
    if(sybolvalue === "×"){
        resultadoValue = operations.multiplicacao(value02, value01)
    }
    if(sybolvalue === "-"){
        resultadoValue = operations.subtracao(value02, value01)
    }
    if(sybolvalue === "+"){
        resultadoValue = operations.soma(value02, value01)
    }
    historyValue = ""
    displayHistory_input.innerHTML = historyValue
    focusValue = ""
    if(String(resultadoValue).length > 10){
        let num_fac = String(resultadoValue).split("")
        let resultTratado = []
        for(let i = 0; i < 10; i++){resultTratado.push(num_fac[i])}
        resultadoValue =  Number(resultTratado.join(""))
    }
    focusValue = resultadoValue
    displayFocus_input.innerHTML = focusValue

}
let num = "12344"
console.log(num.split("").join(""))