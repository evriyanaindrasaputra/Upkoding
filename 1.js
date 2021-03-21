let responseDatas = [];
document.addEventListener("DOMContentLoaded", (e) => {
  const URL_API = "https://reqres.in/api/users/";

  const fetchData = () => {
    window
      .fetch(URL_API)
      .then((response) => response.json())
      .then((data) => (responseDatas = data.data));
  };
  fetchData();
});
// element Selector
const searchText = document.querySelector("#searchThis");
const resultElement = document.querySelector(".result");
// end element Selector
searchText.addEventListener("input", (e) => {
  const result = responseDatas.filter((data) => {
    return (
      data.first_name.toLowerCase().includes(searchText.value.toLowerCase()) ||
      data.last_name.toLowerCase().includes(searchText.value.toLowerCase()) ||
      data.email.toLowerCase().includes(searchText.value.toLowerCase())
    );
  });
  resultElement.innerHTML = "";
  if (result.length <= 0) {
    alert(`maaf tidak ada data dengan ${searchText.value} `);
  } else {
    result.map((el) => {
      resultElement.innerHTML += `<div class="card">
      <div class="card-header">
        <img src="${el.avatar}" alt="${el.first_name}" />
      </div>
      <div class="card-desc">
        <p>Username : @${el.first_name}</p>
        <h2>Name : ${el.first_name} ${el.last_name}</h2>
        <p>Email : ${el.email}</p>
      </div>
      <button class="card-action">Contact Me !</button>
        `;
    });
  }
});
