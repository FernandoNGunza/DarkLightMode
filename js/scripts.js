const changeThemeBtn=document.querySelector("#change-theme");



function toggleDarkMode(){

    document.body.classList.toggle("dark");
}

function loadTheme(){
    const darkMode=localStorage.getItem("dark");

    if(darkMode){
        toggleDarkMode();
    }
}
loadTheme();

changeThemeBtn.addEventListener("change", ()=>{

toggleDarkMode();

localStorage.removeItem("dark");

if(document.classList.body.contains("dark")){

    localStorage.setItem("dark", 1);
}

})