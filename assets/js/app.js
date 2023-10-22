/* Sidebar Scale Function */
const body = document.querySelector("body"),
      sideBar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box");
      /* modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"); */

      toggle.addEventListener("click", () => {
        sideBar.classList.toggle("closed");
      });
    
      searchBtn.addEventListener("click", () =>{
        sideBar.classList.remove("closed");
      })


//Swich Function Dark Mode 2.0
const swichTheme = () => {
    //Get root elements and date theme value
    const rootElement = document.documentElement;
    let swichMode = document.querySelector('.mode'),
        dataTheme = rootElement.getAttribute('data-theme'),
            newTheme
    
    newTheme = (dataTheme === 'light') ? 'dark' : 'light'
    if (newTheme === 'dark'){
        swichMode.classList.add('active');
        document.querySelector('.mode-text').innerText = "Light Mode"
    } else{
        swichMode.classList.remove('active');
        document.querySelector('.mode-text').innerText = "Dark Mode"
    }
  
    //Set the new HTML attribute
    rootElement.setAttribute('data-theme', newTheme)
}
  
//Add event listner for the theme switcher
document.querySelector('.switch').addEventListener('click', swichTheme)