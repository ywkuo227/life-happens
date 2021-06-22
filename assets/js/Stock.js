$(document).ready(function(){


});

$(".viewBtn").click(function(){
    $("#money").val()
    console.log(data)
})



fetch("http://api.marketstack.com/v1/eod?access_key=bbb691e5ae8c59cd63c176ecacb21f80&symbols=AAPL")
    .then(response => response.json())
    .then(data => console.log(data));
 
















