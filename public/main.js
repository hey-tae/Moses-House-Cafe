const size = document.querySelectorAll('.size')
const coffee = document.querySelectorAll('.coffee')
const submit = document.querySelector('#submit')

let orderForm = ['', '', '', '']

/*************************************
**                                  **
**    SENDING ORDER TO BARISTA      **
**                                  **
**************************************/


// iterate on size buttons, add click events ['', 'size', '', '']
Array.from(size).forEach(function(btn) {
  btn.addEventListener('click', function(e){
    orderForm[1] = e.target.innerText
    console.log(orderForm[1])
  })
})

// iterate on coffee buttons, add click events ['', '', 'coffee', '']
Array.from(coffee).forEach(function(btn) {
  btn.addEventListener('click', function(e){
    orderForm[2] = e.target.innerText
    console.log(orderForm[2])
  });
})

// iterate on dairy buttons, add click events  ['', '', '', 'dairy']
// Array.from(dairy).forEach(function(btn) {
//   btn.addEventListener('click', function(e){
//     
//     // arr[2] = 'e.target.id'
//   });
// })


// submit button clicked
submit.addEventListener('click', () => {

    // get name value on submit
    orderForm[0] = document.querySelector('input').value // from #custName ID
    orderForm[3] = 'soy milk'

    console.log(orderForm)
    fetch('javahouse', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'orderForm': orderForm // let orderForm = ['', '', '',]
      })
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
})  


