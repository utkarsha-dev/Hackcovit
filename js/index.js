var maintext1 = document.getElementById("maintext1");
var maintext2 = document.getElementById("maintext2");
var maintext3 = document.getElementById("maintext3");
var maintext4 = document.getElementById("maintext4");
var sb = document.getElementById("submitbutton");


function subimit(){
    var db = firebase.firestore();
    var phoneno = /^\d{10}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!maintext2.value.match(mailformat)){
        alert("Not a valid Email");
    }
    else if(!maintext4.value.match(phoneno)){
        alert("Not a valid Phone Number");
    }
    else{
        db.collection("Organization").doc().set({
            name: (maintext1.value + ""),
            email: (maintext2.value + ""),
            event: (maintext3.value + ""),
            phone: (maintext4.value + ""),
        }).then(function (doc){
            alert ("You have successfully submitted your event registration form");
            window.history.back();
            
        });
        sb.disabled = true;
        
    }
}