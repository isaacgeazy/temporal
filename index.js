async function converterMoeda() {

    DolarToReal()
    EuroToReal()
    PesoToReal()

}
const DolarToReal = async function () {

    const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
    const result = await response.json()
    let converterStringToNumber = Number(result.USDBRL.ask)
    let calculo = 2 * converterStringToNumber
    console.log(calculo)

}

const EuroToReal = async function () {

    const response = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-BRL')
    const result = await response.json()
    let converterStringToNumber = Number(result.EURBRL.ask)
    let calculo = 2 * converterStringToNumber
    console.log(calculo)

}
const PesoToReal = async function () {

    const response = await fetch('https://economia.awesomeapi.com.br/json/last/BRL-ARS')
    const result = await response.json()
    let converterStringToNumber = Number(result.BRLARS.ask)
    let calculo = 1 * converterStringToNumber
    console.log(calculo)

}

converterMoeda()