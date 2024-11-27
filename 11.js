const tabs=document.querySelectorAll(".tab-button");
const content=document.querySelectorAll(".text");

tabs.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{
        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        });
        tab.classList.add("active");
        content.forEach((text)=>{
            text.classList.remove("active");
        })
        content[index].classList.add("active");
    })
})