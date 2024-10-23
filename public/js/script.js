let pageName = document.getElementById("pageName").innerHTML;

setNav (pageName);

iterateNews ();

function setNav (current) {
  document.querySelectorAll("nav a").forEach((element) => element.classList.remove("current"));
  document.querySelectorAll("menu").forEach((element) => element.classList.remove("menu-current"));
  if (current == "index") {
    document.querySelector("#indexNav").classList.add("menu-current");
    document.querySelector("#aIndex").style.color = "white";
    console.log(document.querySelector("#aIndex").classList);
    console.log(pageName);
  } else if (current == "cnn") {
    document.querySelector("#cnnNav").classList.add("menu-current");
    document.querySelector("#aCnn").style.color = "white";
    console.log(document.querySelector("#aCnn").classList);
    console.log(pageName);
  } else if (current == "rnn") {
    document.querySelector("#rnnNav").classList.add("menu-current");
    document.querySelector("#aRnn").style.color = "white";
    console.log(document.querySelector("#aRnn").classList);
    console.log(pageName);
  } else if (current == "transformer") {
    document.querySelector("#tranNav").classList.add("menu-current");
    document.querySelector("#aTran").style.color = "white";
    console.log(document.querySelector("#aTran").classList);
    console.log(pageName);
  } else if (current == "news") {
    document.querySelector("#newsNav").classList.add("menu-current");
    document.querySelector("#aNews").style.color = "white";
    console.log(document.querySelector("#aNews").classList);
    console.log(pageName);
  }
}

function iterateNews () {
  let newsList = "";
  if(pageName == "news") {
    newsList = document.getElementById("news").innerHTML;
  }
  let newsArray = JSON.parse(newsList);
  let newsString = "";
  console.log(newsArray.length);
  newsArray.forEach((element) => {
    newsString += "<div class='newsEntry'>" + 
      "<div class='newsImage'>" + "<a href='" + 
        element.url + 
        "'><img class='thumbnail' src='" + 
        element.image + 
        "'></a></div>" + 
      "<div class='newsTitle'><h2>" + 
        "<a href='" + 
        element.url + "'>" +  
        element.title + "</a>" +
        "</h2></div>" + 
      "</div>";
  });
  document.getElementById("newsInfo").innerHTML = newsString;
}