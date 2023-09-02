let sidebar=document.getElementById("sidebar");
let label=document.getElementById("label");
let label_1=document.getElementById("label_1");



function label_click() {
    sidebar.style.display="block"
    label.style.display="none"
    label_1.style.display="block"
}
function sidemenu_click() {
    sidebar.style.display="none"
    label.style.display="block"
    label_1.style.display="none"
}






label.onclick=label_click;
label_1.onclick=sidemenu_click;