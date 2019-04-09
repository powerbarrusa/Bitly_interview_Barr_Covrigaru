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
        let shortened = []
        shortened.push(short.url)  
        for (let i = 0; i < shortened.length; i++){
          const table = document.querySelector("table")
          const addRow = document.createElement("tr")
          const addData = document.createElement("td")
          addData.innerText = shortened[i]
          addRow.appendChild(addData)
          table.appendChild(addRow)
        }
      })
    })
  })
}