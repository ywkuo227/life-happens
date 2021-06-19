$(document).ready(function(){


    var news;

    function searchnews(news){
        var queryURL=   `https://gnews.io/api/v4/search?q=example&token=abacafece583fa895704071ecb610081`
        fetch(queryURL)
        .then(function(response) {
          return response.json();
        })
        .then(function(data){
          console.log(data);
          
        })
    
    }

searchnews("the wall street journal")



})