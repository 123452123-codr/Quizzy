var fname = document.getElementById('fname');
var mclass = document.getElementById('mclass');
var date = document.getElementById('date');
var next = document.getElementById('submitDetails');

next.addEventListener("click", function(){
    const text = {Name: fname, ClassOpted: mclass, SubmitDate: date};
    const store = JSON.stringify(text);
    localStorage.setItem("Details", store);
    window.open("quiz.html","_self");
});