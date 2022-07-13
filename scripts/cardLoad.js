let dogs = [];

async function createPetCard() {
  for (var i = 0; i < 3; i++) {
    var response = await fetch('https://dog.ceo/api/breeds/image/random');
    response = await response.json();
    dogs.push(response);
  }
}

createPetCard();

function loadingStop() {
  document.getElementById('box-load').style.display="none";
}


async function loadMorePetCards() {
  document.getElementById('loading').style.display="flex";
  setTimeout(() => {
  let cardPetRow = document.getElementById("cardLoading");
  let htmlCards = '';
  for (let index = 0; index < dogs.length; index++) {
    htmlCards += `<div class='cards-best-sellers'>
      <img  src='${dogs[index].message}'>
      <p class='tittle'>Tittle</p>
      <div class='price'>
        <p class='new-price'>$37.95</p>
        <p class='old-price'>$̶1̶0̶0̶.̶0̶0̶</p>
      </div>
    
      <p class='reviews-best-sellers'>44 reviews</p>
    </div>`;
  }
  cardPetRow.innerHTML = htmlCards;
  document.getElementById('loading').style.display="none";
  },
  3000
);
  await createPetCard();
}