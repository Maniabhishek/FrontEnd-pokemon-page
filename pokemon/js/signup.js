function passworderror()
{
    var x = document.forms["myforms"];
    var text = "";
    var i;
    for(i=0;i<x.length;i++)
        {
            text +=x.elements[i].value + "<br>";
        }
    
    document.getElementById("tests").innerHTML = test;
}




