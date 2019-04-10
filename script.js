const bitlySDK = new BitlySDK({
    accessToken: 'a89e81300ce9d89d3d48b602be72e03048083f93'
  })

bitly()

function emptyField() {
  let check = document.querySelector(".inputfield").value
  if (check === ""){
    event.preventDefault()
    window.alert("Add a link!")
  }
}

function bitly() {
  const button = document.querySelector(".clicker")
  const input = document.querySelector(".inputfield")
  input.addEventListener("change", (e) => {
    let field = e.target.value
    button.addEventListener("click", (e) => {
      e.preventDefault()
      bitlySDK.shorten(field).then(function(short){
        console.log(short)
        let shortened = []
        let long = []
        shortened.push(short.url)  
        long.push(short.long_url)
        for (let i = 0; i < shortened.length; i++){
          const table = document.querySelector(".table")
          const addShort = document.createElement("div")
          const image = document.createElement("img")
          image.src = "./click-icon.svg"
          image.className = "bars"
          addShort.innerText = shortened[i]
          table.appendChild(addShort)
          table.appendChild(image)
        }
        for (let j = 0; j < long.length; j++){
          const table = document.querySelector(".table")
          const addLong = document.createElement("div")
          addLong.className = "long"
          addLong.innerText = long[j]
          table.appendChild(addLong)
        }
      })
    })
  })
}