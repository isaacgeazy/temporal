async function converterMoeda() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/last/BRL-ARS')
    const result = await response.json()
    console.log(result)
}

converterMoeda()