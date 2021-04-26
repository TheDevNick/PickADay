document.querySelector('#check').addEventListener('click', check)
document.querySelector('#check').addEventListener('click', color)


function check() {
  
    let day = document.querySelector('#day').value

  //Conditionals go here
  if(day === 'Monday' || day === "Thursday") {
    document.getElementById('placeToSee').innerHTML = `Today is class day`
  } else if (day === 'Tuesday') {
    document.getElementById('placeToSee').innerHTML = `Today is boring day`
  }
}

function color() {
  
    let day = document.querySelector('#day').value

  //Conditionals go here
  if(day === 'Saturday' || day === "Friday") {
    document.getElementById('placeToSee').innerHTML = `Study Day`
  } else if (day === 'Sunday') {
    document.getElementById('placeToSee').innerHTML = `Today is relax day`
    document.querySelector('body').style.backgroundColor = '#8e44ad'
    document.querySelector('h2').style.color = '#fff'
    document.querySelector('body').style.transition = '1.2s'
  }
}


