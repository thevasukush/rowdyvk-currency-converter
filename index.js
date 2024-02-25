import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_1qXnlWrZh9VQdzQlhbLFhzZ0sAH0hOFEvVLc3RsE');

convertCurrency('USD','INR',10);

 export async function convertCurrency(fromCurrency,toCurrency,units){
    const res=await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier=res.data[toCurrency];
    return multiplier=units;
}
