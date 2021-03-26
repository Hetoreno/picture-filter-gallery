const button = document.querySelectorAll(".list li");
const list = document.querySelectorAll(".itembox");



button.forEach(function(event){
    event.addEventListener("click",function(){

            for (let i=0; i < button.length; i++){
                button[i].classList.remove("active");
            }
            event.classList.add("active");

            list.forEach(function(current){
            current.style.display="none";
            let pics = event.textContent.toLowerCase();
            if(current.getAttribute("data-att")===pics || pics ==="all"){
                current.style.display = "block";
            }
        })
    })
});