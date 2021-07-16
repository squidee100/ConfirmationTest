var check = false;

console.log("script.js loaded!");

function OnButton()
{
    if (check)
    {
        window.location.href = "nice.html";
    }
}

function CheckInput()
{
    if (document.getElementById("textinput").value == document.getElementById("passphrase").innerText)
    {
        check = true;
        document.getElementById("submitbutton").style.backgroundColor = "lime";
        document.getElementById("submitbutton").style.color = "black";
    }
    else
    {
        check = false;
        document.getElementById("submitbutton").style.backgroundColor = "darkgray";
        document.getElementById("submitbutton").style.color = "white";
    }
}

$("#textinput").on("change keyup paste", function(){
    CheckInput();
})

function GoBack()
{
    window.location.href = "index.html";
}

CheckInput();
