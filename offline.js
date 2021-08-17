var waste = null;

window.onload = function(){
    var check = navigator.onLine;
    if(check == true)
    {
        window.open("index.html","_self");
    }
    else
    {
        waste = 2;
    }
};