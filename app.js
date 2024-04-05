
/* tıklamam olayını işleyen işlev*/
 function toogleDetails(event){
    const details = event.currentTarget;
    const summary = details.querySelector("summary");
    const img = summary.querySelector("img");
    const detailsContent = details.querySelector(".faq-content");
    
    if (details.open) {
        // Açık olduğunda, açık ikonunu kapat ve detayları gizle
         img.src = "assets/icons8-add-50.png";
         detailsContent.style.maxHeight = "0";
    } else {
        // Kapalı oldugunda, açık ikonunu aç ve detayları göster
        img.src = "assets/icons8-minus-50.png";
        detailsContent.style.maxHeight = detailsContent.scrollHeight + "px";
    }
    
}
//tum details ogelerini sec ve tıklama olayını dinle 
const detailsElements = document.querySelectorAll("details");
detailsElements.forEach((details)=>
{
    details.addEventListener("click",toogleDetails);
}); 
