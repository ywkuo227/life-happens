var stockNews = document.getElementById("stock-news")
var stockTicker = document.getElementById("stockTicker")







function stockMarket(){
    fetch("http://api.marketstack.com/v1/eod/latest?access_key=bbb691e5ae8c59cd63c176ecacb21f80&symbols=AAPL,MSFT")
    .then(response => {
        console.log(response)
        return response.json()

    })
    .then(data => {console.log(data.data)
        for(var i = 0; i < data.data.length; i++){
            var listItem = document.createElement("li");
            listItem.textContent= data.data[i].symbol +  " High: " + data.data[i].high + " Low: " + data.data[i].low;

            stockTicker.append(listItem)
        } 
    });
}













stockMarket()

