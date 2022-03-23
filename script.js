const tabs = document.querySelector(".tab");
const tabButton = document.querySelectorAll(".heading");
const contents = document.querySelectorAll(".tab-content");

document.getElementById("service-tab").onclick = function(){
    tabButton.forEach(e => {
        e.classList.remove("active"); //if service tab is clicked, I removed all active class of all tabs
    });

    contents.forEach(e => {
        e.classList.remove("active"); ////if service tab is clicked, I removed all active class of all contents
    });

    document.getElementById("Service").classList.add("active"); //add active class to service content and tab
    document.getElementById("service-tab").classList.add("active");

};

//same way as above
document.getElementById("stories-tab").onclick = function(){ 
    tabButton.forEach(e => {
        e.classList.remove("active");
    });

    contents.forEach(e => {
        e.classList.remove("active");
    });

    document.getElementById("Stories").classList.add("active");
    document.getElementById("stories-tab").classList.add("active");

};

document.getElementById("contact-tab").onclick = function(){
    tabButton.forEach(e => {
        e.classList.remove("active");
    });

    contents.forEach(e => {
        e.classList.remove("active");
    });

    document.getElementById("Contact").classList.add("active");
    document.getElementById("contact-tab").classList.add("active");

};
