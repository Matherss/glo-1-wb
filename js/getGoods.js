const getGoods = () => {
  const links = document.querySelectorAll(".navigation-link");

  const getData = () => {
    fetch("https://db-glo-default-rtdb.firebaseio.com/db.json")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("goods", JSON.stringify(data));
      });
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      getData();
    });
  });

  const goods = JSON.parse(localStorage.getItem("goods"));
  //   localStorage.removeItem("goods");
};
getGoods();
