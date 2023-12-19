console.log("CPU Loaded");
document.addEventListener('DOMContentLoaded', init);
const sheetID ='1S9x6T4sjwJeoKXnyW_fTF6fDNcTu4tfhRHPxmMScvIY';
var modal;

function init() {
    console.log("coontnets laoded");
    modal = document.getElementById("myModal");


}


function verify() 
{
    var certiNo = document.getElementById("certiIn").value;
    if(certiNo.length==0) 
    {
        alert("Please enter Certificate Number");
        return 0;
    }
    document.getElementById("cover-spin").style.display="block";
    
    let q = 'Select * Where B ="'+certiNo+'"';
    const query = encodeURIComponent(q);
    var url = 'https://docs.google.com/spreadsheets/d/' + sheetID + '/gviz/tq?tq=' + query;
    var data;
    fetch(url)
        .then(res => res.text())
        .then(rep => {

            data = JSON.parse(rep.substring(47).slice(0, -2));
            console.log(data);
           
        if(data["table"]['rows'].length>0)
        {
            document.getElementById("notFound").style.display="none";
            document.getElementById("certiNo").innerHTML=""+certiNo;
            document.getElementById("name").innerHTML=""+data["table"]['rows'][0]["c"][2]["v"];
            document.getElementById("type").innerHTML=""+data["table"]['rows'][0]["c"][3]["v"];
            document.getElementById("event").innerHTML=""+data["table"]['rows'][0]["c"][4]["v"];
            document.getElementsByClassName("certiDetails")[0].style.display="block";
            document.getElementsByClassName("modal-header")[0].innerHTML=`<h1><i class="fa fa-check-circle" style="color: rgb(0,0,0);font-size: 40px; padding-right:20px;"></i>Certificate Verified</h1>`;
            modal.style.display = "block";
            
        }
        else
        notFound();
        document.getElementById("cover-spin").style.display="none";
        })

    
}
function certi_close() {
    modal.style.display = "none";
}

function notFound()
{
    //document.getElementsByClassName("modal-header")[0].style.backgroundColor = "#f72e14";
    document.getElementsByClassName("modal-header")[0].innerHTML=`<h1><i class="fa fa-close" style="color: rgb(0,0,0);font-size: 40px; padding-right:20px;"></i>Not Found</h1>`;
    document.getElementsByClassName("certiDetails")[0].style.display="none";
    document.getElementById("notFound").style.display="block";
    modal.style.display = "block";
}