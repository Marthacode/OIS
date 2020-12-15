let api_url = "slider.json";
$.getJSON(api_url, function(data){
  $.each(data.results, function(i, item){
    let active ='';
    if(i===0)
       active = "active";
    $(`
    <div class="carousel-item ${active}">
      <a href="${item.url}">
        <img class="d-block w-100" src="${item.photo}" alt="${item.title}">
      </a>
    </div>
    `).appendTo(".carousel-inner");

  });
});