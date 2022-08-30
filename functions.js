async function loadIntoTable(amazonURL, neweggURL, table) {
  const amazonRow = table.querySelector('[name="amazon row"]');
  const status = amazonRow.querySelector('[name="status"]')
  fetch(amazonURL)
    .then(response => response.json())
    .then(data => {
  
  const { availability } = data;

  //clear table
  status.innerHTML = "";
  
  const stockDiv = document.createElement("div");
  const stockText = document.createElement("p");
  
  stockText.textContent = availability;

  if (availability == "In Stock") {
    stockDiv.className = "InStock";
  }
  else {
    stockDiv.className = "OutOfStock";
  }

  //populate data table
  stockDiv.appendChild(stockText);
  status.appendChild(stockDiv);
  })

  const neweggRow = table.querySelector('[name="newegg row"]');
  const neweggStatus = neweggRow.querySelector('[name="status"]')
  fetch(neweggURL)
    .then(response => response.json())
    .then(data => {
  
  const { availability } = data;

  //clear table
  neweggStatus.innerHTML = "";
  
  const stockDiv = document.createElement("div");
  const stockText = document.createElement("p");
  
  stockText.textContent = availability;

  if (availability == "In Stock") {
    stockDiv.className = "InStock";
  }
  else {
    stockDiv.className = "OutOfStock";
  }

  //populate data table
  stockDiv.appendChild(stockText);
  neweggStatus.appendChild(stockDiv);
  })
}

loadIntoTable("https://csce315team38.herokuapp.com/amazon/1", "https://csce315team38.herokuapp.com/newegg/1", document.getElementById("PS5 table"));
loadIntoTable("https://csce315team38.herokuapp.com/amazon/2", "https://csce315team38.herokuapp.com/newegg/2", document.getElementById("XBox table"));
loadIntoTable("https://csce315team38.herokuapp.com/amazon/3", "https://csce315team38.herokuapp.com/newegg/3", document.getElementById("Switch table"));
loadIntoTable("https://csce315team38.herokuapp.com/amazon/4", "https://csce315team38.herokuapp.com/newegg/4", document.getElementById("Pixel6 table"));
loadIntoTable("https://csce315team38.herokuapp.com/amazon/5", "https://csce315team38.herokuapp.com/newegg/5", document.getElementById("5900X table"));
// const btn = document.getElementById('btn');

// btn.addEventListener('click', function handleClick(event) {
//   // 👇️ if you are submitting a form
//   event.preventDefault();

//   const inputs = document.querySelectorAll('#email, #ASIN, #Discord');

//   inputs.forEach(input => {
//     input.value = '';
//   });
// });

