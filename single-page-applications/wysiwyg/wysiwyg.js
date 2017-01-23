var famousPeople = [
// one object
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinak.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},

// two object
{
  title: "Khan",
  name: "Ghengis",
  bio: "Founded one of the largest Empires",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/35/YuanEmperorAlbumGenghisPortrait.jpg",
  lifespan: {
    birth: 1162,
    death: 1227
  }
},

// three object
{
  title: "Politician",
  name: "Julius Ceaser",
  bio: "Roman Politician",
  image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/C%C3%A9sar_%2813667960455%29.jpg",
  lifespan: {
    birth: 100,
    death: "40ad"
  }
},

// four object
{
  title: "Fast Food Icon",
  name: "Ronald McDonald",
  bio: "He helps serves burgers and fries",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Ronwai01.JPG",
  lifespan: {
    birth: 1963,
    death: "alive"
  }
}]

// Add all the objects to the DOM
var outputEl = document.getElementById("outputEl");

for (var i = 0; i < famousPeople.length; i++) {

  var title = famousPeople[i].title;
  var name = famousPeople[i].name;
  var bio = famousPeople[i].bio;
  var image = famousPeople[i].image;
  var birth = famousPeople[i].lifespan.birth;
  var death = famousPeople[i].lifespan.death;

  outputEl.innerHTML += `
      <div class="person_container" id="person--${famousPeople.length}">
        <p>Title: ${title} Name: ${name}</p>
        <p>Biography: ${bio}</p>
        <p>Birth: ${birth} - ${death}</p>
        <p><img src="${image}" width="200" height="200"></p>
      </div>`
}

// We are grabbing the containers we just created "person_container"
var containerEl = document.getElementsByClassName("person_container");

// Event listeners are created for containerEl (class is personal_container)
// so we can toggle the class on and off
for (var i = 0; i < containerEl.length; i++) {
    containerEl[i].addEventListener("click", function (event) {
          this.classList.toggle("dotted");
    })
}

// our text area
var input = document.getElementById("editbiography");
input.addEventListener("keyup", textToBio);

function textToBio() {
    for (var j = 0; j < famousPeople.length; j++) {
        if (containerEl[j].classList.contains("dotted")) {
              containerEl[j].childNodes[3].innerHTML = input.value;
                  
        }
    }
}
