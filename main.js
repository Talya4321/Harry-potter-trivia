

function startgame(){
    p1_name = document.getElementById("p1_name").value;
p2_name = document.getElementById("p2_name").value;
    localStorage.setItem("p1_name",p1_name);
    localStorage.setItem("p2_name",p2_name);
console.log("working");
    window.location = "gamepage.html";
}