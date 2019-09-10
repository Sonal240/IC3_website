console.log("updated");

function nav_control() {
  document.querySelector(".navbar_control").className= "navbar fixed-top navbar-expand-lg navbar_control navbar-dark" ;
}

function nav_control_revert() {
  document.querySelector(".navbar_control").className= "navbar fixed-top navbar-expand-lg navbar_control" ;
}

document.addEventListener('DOMContentLoaded', function() {
  if(document.querySelector(".navbar_control")) {
    console.log("u got it");
    $(window).on("scroll", function() {
      var ypos = $(this).scrollTop(),
      yper = (ypos/100);
      if (yper > 1) {
        nav_control();
      }
      else {
        nav_control_revert();
      }
    });
  }
})

function changeME(element) {
  switch (element) {
    case 'About_Us':
      document.querySelector('.active').classList.remove("active");
      document.getElementById('nav2').classList.add("active");
      break;
    case 'contact_page':
      document.querySelector('.active').classList.remove("active");
      document.getElementById('nav4').classList.add("active");
      break;
    case 'homeComponent':
      document.querySelector('.active').classList.remove("active");
      document.getElementById('nav1').classList.add("active");
      break;
    case 'activities':
      document.querySelector('.active').classList.remove("active");
      document.getElementById('nav3').classList.add("active");
      break;
    case 'donation_page':
      document.querySelector('.active').classList.remove("active");
      document.getElementById('nav6').classList.add("active");
      break;
  }

  if(element[0]==='.') {
    element=element.substr(1);
    document.querySelector(".changing_component").innerHTML = '<iframe src="../components/'+element+'.html" width="100%" height="800px" type="text/html" />';
    }
  else {
    document.querySelector(".changing_component").innerHTML = '<iframe src="./components/'+element+'.html" width="100%" height="800px" type="text/html" />';
    }
}

function scrollFunction() {
  console.log("you scrolled!!!!");
}
