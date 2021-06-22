function displayNews() {
  var queryURL = `https://gnews.io/api/v4/search?q=example&token=abacafece583fa895704071ecb610081`
  
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data.articles[0])
      for (var i = 0; i < 9; i++) {
        $("#displayheadline").append(`
            <a href="${data.articles[i].url} class="news-headlines">${data.articles[i].title}</a>
          `)
        
      }

    })

}

displayNews();