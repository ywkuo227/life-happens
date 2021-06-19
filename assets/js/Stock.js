function displayStock() {
    fetch("https://finnhub.io/api/v1/crypto/symbol?exchange=binance&token=c370q5iad3ib6g7eg7t0")
        .then(response => {
            if (!response.ok) {
                throw Error("Error");
            }
            return response.json();

        })

        .then(data => {
            console.log(data.data);
            var html = data.data
                .map(user => {
                    return `
            <div id="money">
                <p> Name: ${user.name}</p>
            </div>`
                        ;
                })
                .join("");
            console.log(html);
            document.querySelector('#money').innerHTML(html);
        })
    .catch(error => {
        console.log(error);
    });
}
displayStock();


  

