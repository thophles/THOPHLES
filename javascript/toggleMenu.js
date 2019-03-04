var navOpen = false;
var myNav = document.getElementById("myNav");
var butt = document.getElementById("button");
var menu = document.getElementById("men");
function openNav()
  {
     myNav.style.display = "block";
     myNav.style.opacity = 1;
     butt.classList.add("is-active");
     menu.classList.remove("animateMenuReverse");
     menu.classList.add("animateMenu");
     navOpen = true;
  }
  function closeNav()
  {
     myNav.style.opacity = 0;
     myNav.style.display = "none";
     butt.classList.remove("is-active");
     menu.classList.remove("animateMenu");
     menu.classList.add("animateMenuReverse");
     navOpen = false;

  }
  function toggleNav()
  {
     if (navOpen == false)
     {
       openNav();
     }
     else
     {
       closeNav();
     }
  }
