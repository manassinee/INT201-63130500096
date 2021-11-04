function sol1(){
let sec = document.getElementById('Section2')
let group = sec.getElementsByClassName('group5')[0];
group.innerHTML = "TUS,PHAI,GUS,FERN,DOSE";

let attr = document.createAttribute("style");
attr.value = "color:blue";
group.setAttributeNode(attr);
}
sol1()