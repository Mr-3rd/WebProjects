
let bitcoinObject =
{
    "bpi": {
        "EUR": {
            "code": "EUR",
                "description": "Euro",
                "rate": "815.8994",
                "rate_float": 815.8994,
                "symbol": "&euro;"
        },
        "GBP": {
            "code": "GBP",
                "description": "British Pound Sterling",
                "rate": "677.4879",
                "rate_float": 677.4879,
                "symbol": "&pound;"
        },
        "USD": {
            "code": "USD",
                "description": "United States Dollar",
                "rate": "728.4816",
                "rate_float": 728.4816,
                "symbol": "&#36;"
        }
    },
        "chartName": "Bitcoin",
        "disclaimer": "This data was generated by creating random numbers and mimics the Coinbase API JSON response structure. It is NOT real data. DO NOT USE THIS TO TRADE CRYPTOCURRENCY!",
        "time": {
        "updatedISO": "2023-02-14T20:16:14.370072"
    }
}

let dollarsToBitcoin = Math.round(100 * bitcoinObject.bpi.USD.rate_float).toFixed(2)

console.log(
   dollarsToBitcoin
)

for (let property in bitcoinObject) {
    console.log(property)
}

let rates = bitcoinObject.bpi

for (let currencyCode in rates) {
    let rateData = rates[currencyCode]
    console.log(rateData)

    let rate = rateData.rate
    let description = rateData.description

    console.log(`${description} ${rate}`)


}


