function verifier(){
    var txt=document.getElementById("avis");
    var cont=txt.value;
    var parent=document.getElementById("Me_contacter4")
    if (cont==''){
        var txt1=document.createElement("p")
        txt1.innerHTML="*Ce Champ est obligatoire!!!"
        txt1.style.color="red"
        parent.appendChild(txt1)
    }
    

   
}
