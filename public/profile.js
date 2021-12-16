const completebtn = document.querySelectorAll('.complete')
const synth = window.speechSynthesis

/*************************************
**                                  **
** ORDER COMPLETED & TEXT TO SPEECH **
**                                  **
**************************************/
completebtn.forEach(btn => 
  btn.addEventListener('click', function(e) {

    let orderForm = ['', '', '', '']
    
    orderForm[0] = document.querySelector('.name').dataset.name
    orderForm[1] = document.querySelector('.size').dataset.size
    orderForm[2] = document.querySelector('.flavor').dataset.flavor
    orderForm[3] = document.querySelector('.milk').dataset.milk
    const barista = e.target.dataset.value
    const yellText =  `Sup ${orderForm[0]}, your order of a ${orderForm[1]} ${orderForm[2]} is completed by ${barista}`
    let yellThis = new SpeechSynthesisUtterance(yellText);
    synth.speak(yellThis);

    console.log(orderForm)

    fetch('messages', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'orderForm': orderForm,
        'barista': barista
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })

}))