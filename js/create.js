var maintext1 = document.getElementById("maintext1");
var maintext2 = document.getElementById("maintext2");
var maintext3 = document.getElementById("maintext3");
var maintext4 = document.getElementById("maintext4");
var maintext5 = document.getElementById("maintext5");
var maintext6 = document.getElementById("maintext6");

var sb = document.getElementById("submitbutton");


function subimit(){
    var db = firebase.firestore();
    var phoneno = /^\d{10}$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(maintext1.value.match(" ")){
        alert("Please enter valid title");
    }
  
    else{
        db.collection("Event").doc().set({
            Name: (maintext1.value + ""),
            Date: (maintext2.value + ""),
            Time: (maintext3.value + ""),
            Fee: (maintext4.value + ""),
            Skills: (maintext5.value + ""),
            Prize: (maintext6.value + ""),

        }).then(function (doc){
            alert ("You have successfully submitted your event");
            window.history.back();
            
        });
        sb.disabled = true;
        
    }
}