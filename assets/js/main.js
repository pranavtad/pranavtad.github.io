function navbar() {

    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
    
    var y = document.getElementById("navname");
    if (y.className === "name") {
        y.className += " responsive";
    } else {
        y.className = "name";
    }
}
