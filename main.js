const searchInput =document.querySelector("#search-input");

searchInput.addEventListener("keydown",function(event){
    if(event.code === "Enter"){
        search();
    }
})

function search(){
    const input=searchInput.value;

    window.location.href = "https://www.google.com/search?q="+ input +"&rlz=1C1RXQR_enIN974IN974&oq"+ input+"&aqs=chrome..69i57j46i433i512j0i512j0i131i433i512j0i512j0i131i433i512l2j0i512j0i131i433j0i512.1857j0j4&sourceid=chrome&ie=UTF-8"
}