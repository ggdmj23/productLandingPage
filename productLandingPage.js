function getPlan() {
    
    if (document.getElementById('radio1').checked) {
        plan_value = document.getElementById('radio1').value;
    }
    else if (document.getElementById('radio2').checked) {
        plan_value = document.getElementById('radio2').value;
    }
    else if (document.getElementById('radio3').checked) {
        plan_value = document.getElementById('radio3').value;
    }
    return document.getElementById("purchase-choice").innerHTML = plan_value;
}

function getPrice() {
    
    if (document.getElementById('radio1').checked) {
        plan_price = 0 + " €";
    }
    else if (document.getElementById('radio2').checked) {
        plan_price = 15 + " €";
    }
    else if (document.getElementById('radio3').checked) {
        plan_price = 22 + " €";
    }
    return document.getElementById("purchase-total").innerHTML = plan_price;
}

function onChange (){
    
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    
    if (name != "" || lname != ""){
        document.getElementById("purchase-name").innerHTML = name;
        document.getElementById("purchase-last-name").innerHTML = lname;
        
    }
    else {
        document.getElementById("purchase-name").innerHTML = "Enter your name";
        document.getElementById("purchase-last-name").innerHTML = "Enter your last name";
        
    }
}





















