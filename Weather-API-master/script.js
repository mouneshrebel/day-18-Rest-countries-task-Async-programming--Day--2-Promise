var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.classList.add("row","m-3");

container.append(row);

var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((data1)=>foo(data1));

function foo(data1){
    for(var i=0; i<data1.length; i++){
        row.innerHTML+=`
        <div class="card" style="width: 18rem;padding:15px;margin:20px;)">
        <h5 class="card-title">${data1[i].name}</h5>
        <div class="imgdiv">
  <img src="${data1[i].flags.svg}" class="card-img-top" alt="..." style="width:257px;height:238px;>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Capital:${data1[i].capital}</li>
    <li class="list-group-item">Region:${data1[i].region}</li>
    <li class="list-group-item">country Code:${data1[i].code}</li>
  </ul>
  <div class="card-body">
    <a href="${data1[i].latlng}" class="card-link">Click for Weather</a>
  </div>
</div>

      `;
      document.body.append(container);
    }
}
