const btns = document.querySelectorAll(".btn");
const storeItems = document.querySelector("#store-items");
const search = document.querySelector("#search-item");
const data = document.querySelectorAll("div[data-item]");

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    storeItems.innerHTML = "";
    search.innerHTML = "";
    let filter = e.target.dataset.filter;
    data.forEach((i) => {
      if (filter == i.dataset.item) {
        storeItems.prepend(i);
      } else if (filter == 'all') {
        for (all of data) {
          storeItems.prepend(all);
        }
      }
    });
  });
});

search.addEventListener('input', (event) => {
  storeItems.innerHTML = "";
  let searchQuery = event.target.value;
  data.forEach((i) => {
    let match = i.dataset.item.match(searchQuery);
    if (match) {
      storeItems.prepend(i);
    }
  });
});
