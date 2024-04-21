var counter_animate = 0

document.addEventListener('DOMContentLoaded', function() { 

  try{
    document.getElementById('mobile_menu').onclick = function(e) {
      console.log('click')
      counter_animate += 360;
      document.getElementById("logo").style.transform = "rotate("+counter_animate+"deg)";  
    }
  } catch{}
  


  rotate_logo()

  
})

function rotate_logo(){

  try{
    document.getElementById('about').onclick = function() {
      counter_animate += 360;
      document.getElementById("logo").style.transform = "rotate("+counter_animate+"deg)";
    }
  } catch{}

  brands = document.getElementsByClassName('navbar-brand')
  for (var i = 0; i < brands.length; i++) {
    brands[i].onclick = function() {
      counter_animate += 360;
      //get elements by class name 'logo' and rotate them
      logos = document.getElementsByClassName('logo')
      for (var i = 0; i < logos.length; i++) {
        logos[i].style.transform = "rotate("+counter_animate+"deg)";
      }
    }

    brands[i].onmouseover = function() {
      counter_animate += 360;
      logos = document.getElementsByClassName('logo')
      for (var i = 0; i < logos.length; i++) {
        logos[i].style.transform = "rotate("+counter_animate+"deg)";
      }    
    }
    
  }
  

  non_signed_in_buttons = document.getElementsByClassName('non_signed_in_button')
  for (var i = 0; i < non_signed_in_buttons.length; i++) {
    non_signed_in_buttons[i].onclick = function(event) {

      counter_animate += 360;
      //get elements by class name 'logo' and rotate them
      logos = document.getElementsByClassName('logo')
      for (var i = 0; i < logos.length; i++) {
        logos[i].style.transform = "rotate("+counter_animate+"deg)";
      }
    }
  }

  document.getElementById('mobile_menu').onclick = function() {
    counter_animate += 360;
    logos = document.getElementsByClassName('logo')
    for (var i = 0; i < logos.length; i++) {
      logos[i].style.transform = "rotate("+counter_animate+"deg)";
    }     
  }

}

function ai_button(e) {
  document.querySelector(".calculator_selected").classList.remove("calculator_selected")
  document.getElementById('ai_category').classList.add("calculator_selected")

  document.getElementById('geotech_buttons').classList.add("d-none")
  document.getElementById('structural_buttons').classList.add("d-none")
  document.getElementById('tunnelling_buttons').classList.add("d-none")
  document.getElementById('contractor_buttons').classList.add("d-none")
  document.getElementById('ml_buttons').classList.remove("d-none")

  counter_animate += 360;
  document.getElementById("logo").style.transform = "rotate("+counter_animate+"deg)";

  e.stopPropagation();

}

function geotech_button(e) {
  console.log('click')
  document.querySelector(".calculator_selected").classList.remove("calculator_selected")
  document.getElementById('geotech_category').classList.add("calculator_selected")

  document.getElementById('geotech_buttons').classList.remove("d-none")
  document.getElementById('structural_buttons').classList.add("d-none")
  document.getElementById('tunnelling_buttons').classList.add("d-none")
  document.getElementById('contractor_buttons').classList.add("d-none")
  document.getElementById('ml_buttons').classList.add("d-none")

  counter_animate += 360;
  document.getElementById("logo").style.transform = "rotate("+counter_animate+"deg)";

  e.stopPropagation();

}

function structural_button(e) {

  document.querySelector(".calculator_selected").classList.remove("calculator_selected")
  document.getElementById('structural_category').classList.add("calculator_selected")

  document.getElementById('geotech_buttons').classList.add("d-none")
  document.getElementById('structural_buttons').classList.remove("d-none")
  document.getElementById('tunnelling_buttons').classList.add("d-none")
  document.getElementById('contractor_buttons').classList.add("d-none")
  document.getElementById('ml_buttons').classList.add("d-none")

  counter_animate += 360;
  document.getElementById("logo").style.transform = "rotate("+counter_animate+"deg)";

  e.stopPropagation();
}

function tunnelling_button(e) {
  document.querySelector(".calculator_selected").classList.remove("calculator_selected")
  document.getElementById('tunnelling_category').classList.add("calculator_selected")

  document.getElementById('geotech_buttons').classList.add("d-none")
  document.getElementById('structural_buttons').classList.add("d-none")
  document.getElementById('tunnelling_buttons').classList.remove("d-none")
  document.getElementById('contractor_buttons').classList.add("d-none")
  document.getElementById('ml_buttons').classList.add("d-none")


  counter_animate += 360;
  document.getElementById("logo").style.transform = "rotate("+counter_animate+"deg)";

  e.stopPropagation();
}

function contractor_button(e) {
  document.querySelector(".calculator_selected").classList.remove("calculator_selected")
  document.getElementById('contractor_category').classList.add("calculator_selected")

  document.getElementById('geotech_buttons').classList.add("d-none")
  document.getElementById('structural_buttons').classList.add("d-none")
  document.getElementById('tunnelling_buttons').classList.add("d-none")
  document.getElementById('contractor_buttons').classList.remove("d-none")
  document.getElementById('ml_buttons').classList.add("d-none")

  counter_animate += 360;
  document.getElementById("logo").style.transform = "rotate("+counter_animate+"deg)";

  e.stopPropagation();
}

