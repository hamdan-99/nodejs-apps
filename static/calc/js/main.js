async function  _Calclate (op) {
    const number1 = document.querySelector('#number1').value;
    const number2 = document.querySelector('#number2').value;
    document.querySelector('#result').textContent ='';
    document.querySelector('#error').textContent ='';
  const url = `/api/calc/${op}`
    const res = await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({number1, number2})
    });
    let json;
    try{
        json = await res.json();
    }catch{
    document.querySelector('#error').textContent =
    'Server returned a bad response. Try again later!'
    }
    if(json.status && json.status ==='ok'){
        document.querySelector('#result').textContent = json.result;
    }else{
        document.querySelector('#error').textContent =json.message;
    }
}
document.querySelector('#botton-add').addEventListener('click', ()=>{
    _Calclate(`add`);
});
document.querySelector('#botton-subtract').addEventListener('click', ()=>{
    _Calclate('subtract');
});document.querySelector('#botton-divide').addEventListener('click', ()=>{
    _Calclate('divide');
});document.querySelector('#botton-multiply').addEventListener('click', ()=>{
    _Calclate('multiply');
});

function openCity(cityName,elmnt,color) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;
  
  }
  document.getElementById("defaultOpen").click();