window.onload = function(){
    setTimeout(function(){
        let data = localStorage.getItem("Done");
        let simple = JSON.parse(data);
        var online = navigator.onLine;
        if(simple == 1)
        {
            window.open("","_self");
        }
        else if(online == false)
        {
            window.open("offline.html","_self");
        }
        else
        {
            window.location.replace("mainpage.html","_self");
        }
    }, 3000);
};