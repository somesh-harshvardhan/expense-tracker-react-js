const getLocaleCurrency =  function(value,locale="en-US",currency="USD"){
    return (value).toLocaleString(locale,{
        currency : currency,
        style : 'currency',
        minimumFractionDigits : 0,
        maximumFractionDigits : 0

    })
}
export default getLocaleCurrency;