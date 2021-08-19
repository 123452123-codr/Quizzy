var fname = document.getElementById('fname');
var mclass = document.getElementById('mclass');
var date = document.getElementById('date');
var next = document.getElementById('submitDetails');

window.onload = function(){
    var checkConnection = navigator.onLine;
    if(checkConnection == false)
    {
        window.open("offline.html","_self");
    }
    else
    {
        var dustbin = 2;
    }
};

next.addEventListener("click", function(){
    if(fname.value == null || mclass.value == null || date.value == null)
    {
        alert("Please fill out all the fields.");
    }
    else
    {
        const text = {Name: fname.value, ClassOpted: mclass.value, SubmitDate: date.value};
        const store = JSON.stringify(text);
        sessionStorage.setItem("Store", store);
        window.open("quiz.html","_self");
    }
});