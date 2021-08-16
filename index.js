var fname = document.getElementById('fname').text;
var mclass = document.getElementById('mclass').text;
var date = document.getElementById('date').text;
var next = document.getElementById('submitDetails');

next.addEventListener("click", function(){
    if(fname == null && mclass == null && date == null || fname != null && mclass == null && date == null || fname == null && mclass != null && date == null || fname == null && mclass == null && date != null || fname != null && mclass != null && date == null || fname == null && mclass != null && date != null || fname != null && mclass == null && date != null)
    {
        alert("Please fill out all the fields.");
    }
    else
    {
        const text = {Name: fname, ClassOpted: mclass, SubmitDate: date};
        var database = firebase.database();
        database.ref('Info').set(text);
        window.open("quiz.html","_self");
    }
});