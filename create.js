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
    if(maintext1.value.match("")){
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
       
        
    }
}
function newElement() {
    var li = document.createElement("li");
    var li1 = document.createElement("li1");
    var li2 = document.createElement("li2");
    var li3 = document.createElement("li3");

    var inputValue = document.getElementById("maintext1").value;
    var inputValue1 = document.getElementById("maintext2").value;
    var inputValue2 = document.getElementById("maintext5").value;
    var inputValue3 = document.getElementById("maintext6").value;

    var t = document.createTextNode(inputValue);
    var t1 = document.createTextNode(inputValue1);
    var t2 = document.createTextNode(inputValue2);
    var t3 = document.createTextNode(inputValue3);

    li.appendChild(t);
    li1.appendChild(t1);
    li2.appendChild(t2);
    li3.appendChild(t3);

    document.getElementById("c1").appendChild(li);
    document.getElementById("c2").appendChild(li1);
    document.getElementById("c3").appendChild(li2);
    document.getElementById("c4").appendChild(li3);
    
   }

