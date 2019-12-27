 async function  _Caesars(op) { 
  const strToCaesarize = document.querySelector('#string').value;
  const shiftNumber = document.querySelector('#number').value;
  console.log('strToCaesarize :', strToCaesarize)
  console.log('shiftNumber :', shiftNumber)

  document.querySelector('#result').textContent ='';
  document.querySelector('#error').textContent ='';
 
  const res = await fetch('/api/caesars',{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      
      body:JSON.stringify({strToCaesarize, shiftNumber})
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

document.querySelector('#button').addEventListener('click', ()=>{
_Caesars('caesars');
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