import './style.css'

//toggle beer list


const arrow = document.querySelector("#arrow");
arrow.addEventListener("click", toggleList)

function toggleList() {
  const beerList = document.querySelector("#beer-types-elements");
  const beerTypesTitle = document.querySelector("#beer-types")

  if (arrow.classList.contains("down")) {
    beerList.classList.remove("hidden");
    arrow.classList.remove("down");
    arrow.classList.add("up");
  } else {
    beerList.classList.add("hidden");
    arrow.classList.remove("up");
    arrow.classList.add("down");
  }

  const mobileView = window.matchMedia('(max-width: 767px')

  if (mobileView.matches) {
    if (arrow.classList.contains("up")) {
      beerTypesTitle.style.backgroundColor = "var(--section-background)"
    } else {
      beerTypesTitle.style.backgroundColor = "transparent"
    }
  }
}


//sorting

const arrow2 = document.querySelector("#arrow2");
arrow2.addEventListener("click", sort)

function sort() {
  if (arrow2.classList.contains("down2")) {
    arrow2.classList.remove("down2");
    arrow2.classList.add("up2");
  } else {
    arrow2.classList.remove("up2");
    arrow2.classList.add("down2");
  }
}

//opening your order

const openOrderButton = document.querySelector("#open-order")
openOrderButton.addEventListener("click", toggleOrder)

function toggleOrder() {

  if (openOrderButton.classList.contains("order-up")) {
  document.querySelector("#order").style.height = "90vh";
  openOrderButton.classList.remove("order-up");
  openOrderButton.classList.add("order-down");
  } else {
    document.querySelector("#order").style.height = "20vh"
    openOrderButton.classList.remove("order-down");
    openOrderButton.classList.add("order-up");
  }
}