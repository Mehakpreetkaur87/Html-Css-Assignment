function loadData() {
  
  const dataContainer = document.getElementById("data");
  dataContainer.textContent = "Loading...."

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
        dataContainer.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        setTimeout(function () {
          document.getElementById("data").innerHTML += "<p>" + data[i].name + "</p>";
        }, 1000);
      }
    })
    .catch(function(err) {
        dataContainer.innerHTML = "Failed to load User data."
      console.log(err);

    });
}



