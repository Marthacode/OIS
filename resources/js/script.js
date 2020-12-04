
  function initFreshChat() {
    window.fcWidget.init({
      token: "ee1e1117-d0d4-44ec-bd85-e23c00a9842e",
      host: "https://wchat.freshchat.com"
    });
  }
  function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);

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