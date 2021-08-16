var fname = document.getElementById('fname').text;
var mclass = document.getElementById('mclass').text;
var date = document.getElementById('date').text;
var next = document.getElementById('submitDetails');

next.addEventListener("click", function(){
    const text = {Name: fname, ClassOpted: mclass, SubmitDate: date};
    const store = JSON.stringify(text);
    localStorage.setItem("Store", store);
    window.open("quiz.html","_self");
});