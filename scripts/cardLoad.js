
function createCard() {
  
  for (var i = 0; i < 4; i++) {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(data => {
        return data.json();
    })
      .then(get => {
        console.log('TESTE')
        document.getElementById("cardLoading").innerHTML = `<li> <div class='cards-best-sellers'>
        <img  src='${get.message}'>
        <p class='tittle'>Tittle</p>
        <div class='price'>
            <p class='new-price'>$37.95</p>
            <p class='old-price'>$̶1̶0̶0̶.̶0̶0̶</p>
        </div>
        
        <p class='reviews-best-sellers'>44 reviews</p>
    </div> </li>`
        // cardLoading.push({
        //   image : get.message,
        //   title: "title",
        //   oldPrice: "$37.95",
        //   newPrice: "$̶1̶0̶0̶.̶0̶0̶",
        // });
    });
  }
}