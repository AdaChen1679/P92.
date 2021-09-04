var p1name = localStorage.getItem("P1n");
var p2name = localStorage.getItem("P2n");

p1score = 0;
p2score = 0;

document.getElementById("p1_name").innerHTML = p1name + " : " ;
document.getElementById("p2_name").innerHTML = p2name + " : " ;

document.getElementById("p1_score").innerHTML = p1score;
document.getElementById("p2_score").innerHTML = p2score;

document.getElementById("qturn").innerHTML = "Question Turn - " + p1name;
document.getElementById("aturn").innerHTML = "Answer Turn - " + p2name;

var result;

function send()
{
    number1 = document.getElementById("N1").value;
    number2 = document.getElementById("N2").value;
    result = parseInt(number1)*parseInt(number2);
    var q = "<h4>"+ number1 +" X "+ number2 +"</h4>";
    var a = "<h4>Answer : <input type='text' id='uanswer'></h4>";
    var cb = "<button onclick='check()' class='btn btn-info'>Check</button>"
    var row = q+a+cb;

    document.getElementById("output").innerHTML = row;
    document.getElementById("N1").value = "";
    document.getElementById("N2").value = "";
    document.getElementById("uanswer").value = "";
}

var qt = "p1";
var at = "p2";

function check()
{
  var get_ans = document.getElementById("uanswer").value;

  if (get_ans== result)
  {
    if (at== "p1")
    {
        p1score = p1score + 1;
        document.getElementById("p1_score").innerHTML = p1score;
    }
    else if(at== "p2")
    {
        p2score = p2score + 1;
        document.getElementById("p2_score").innerHTML = p2score;
    }
  }

  if(qt== "p1")
  {
      qt="p2";
      document.getElementById("qturn").innerHTML = "Question Turn - " + p2name;
  }

  else if(qt== "p2")
  {
      qt="p1";
      document.getElementById("qturn").innerHTML = "Question Turn - " + p1name;
  }

  if(at== "p1")
  {
      at="p2";
      document.getElementById("aturn").innerHTML = "Answer Turn - " + p2name;
  }

  else if(at== "p2")
  {
      at="p1";
      document.getElementById("aturn").innerHTML = "Answer Turn - " + p1name;
  }
}