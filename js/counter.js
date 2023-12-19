var speed = 50;


function incEltNbr(id) 
{
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}


function Increase()
{
    incEltNbr("nbr");
    incEltNbr("nbr2");
    incEltNbr("nbr3");
    incEltNbr("nbr4");
}
Increase()
