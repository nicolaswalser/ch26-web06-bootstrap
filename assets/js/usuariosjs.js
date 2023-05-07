let url = "https://reqres.in/api/users?delay=3";
fetch(url)
  .then((response) => response.json())
  .then((users) => showData(users))
  .catch((error) => console.log(error));

const showData = (users) => {
  let cards = "";
  for (let user of users.data) {
    let card = `
      <div class="col">
        <div class="card">
          <img src="${user.avatar}" class="card-img-top rounded" alt="${user.first_name} ${user.last_name}" style="max-width: 150px">
          <div class="card-body">
            <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
            <p class="card-text">${user.email}</p>
          </div>
        </div>
      </div>
    `;
    cards += card;
  }
  document.getElementById("data").innerHTML = `
    <div class="row row-cols-1 row-cols-md-3 g-4">
      ${cards}
    </div>
  `;
};
