window.addEventListener("scroll", changeBg)

  function changeBg() {
    let navbar = document.getElementById("navi")
      if(window.scrollY  < 100 ) {
        navbar.classList.remove ("nav-color")
      } else {
        navbar.classList.add("nav-color")
      }
    }