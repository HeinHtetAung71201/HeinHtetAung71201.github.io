"use strict";
let inputVal=document.querySelector(".inputB");
let fromVal=document.querySelector(".fromOpt");
let toVal=document.querySelector(".toOpt");
let result=document.querySelector(".result");
let history=document.querySelector(".history");
let history_list=document.querySelector(".historyList");

for(let opt in data.rates){
    // console.log(val, data.rates[val]);
    createOptions(fromVal,opt,data.rates[opt]);
    createOptions(toVal,opt,data.rates[opt]);

}
function createOptions(plate,opt,val){
    let option=document.createElement("option");
    let text=document.createTextNode(opt);
    option.setAttribute("value",toNum(val));
    option.appendChild(text);
    plate.appendChild(option);
}
//to change the string to int and remove comma
function toNum(num){
    return Number(num.replace(",",""));
}

//calculation
document.querySelector("#calculateBtn").addEventListener("click",function(e){
    e.preventDefault();
    let amount= inputVal.value;
    let fromAmt=fromVal.value;
    let toAmt=toVal.value;
    inputVal.focus();
    if(amount ,fromAmt ,toAmt){
            let finalResult=(amount*fromAmt)/toAmt; 
        result.innerHTML=finalResult.toFixed(2); 
        inputVal.value="";
        inputVal.focus();
        var options = document.querySelectorAll('#default');
    
        
        //getting value for history
        let date=new Date().toLocaleString();
        let from=fromVal.options[fromVal.selectedIndex].innerText;
        let to=toVal.options[toVal.selectedIndex].innerText;
        let total= finalResult.toFixed(2);
        let array=[date,from,to,total];
        createTr(array);
        setLocal();

        for (var i = 0, l = options.length; i < l; i++) {
            options[i].selected = options[i].defaultSelected;
        }setLocal();
    }
        else{
            alert(`Error!!\nPlease Insert any amount`);
        }
    
    //  alert(`Error \n Please Insert any amount`);
    

})
//getting the option text
// function getText(){
//     console.log();
// }
function createTr(x){
    let rowSpacer = document.getElementById("rowSpacer");
    if (rowSpacer){
        rowSpacer.remove();
    }
    let tr=document.createElement("tr");
    x.map(function(el){
        let td=document.createElement("td");
        let text=document.createTextNode(el);
        td.appendChild(text);
        tr.appendChild(td);
    })
   
    history_list.appendChild(tr);
};

//setting localstorage()
function setLocal(){
    localStorage.setItem("record", history_list.innerHTML);
};
(function () {
    if(localStorage.getItem("record")){
        history_list.innerHTML = localStorage.getItem("record");
    }else{
        history_list.innerHTML = `<tr id="rowSpacer" ><td colspan="4" style="
        height: 209px;
        background: #7070702e;
        width: 100%;
        border-radius: var(--radius);
    ">There is no Record</td>`;
    }
})();
document.querySelector("#clear").addEventListener("click",function(e){
    e.preventDefault();
    localStorage.clear();
    history_list.innerHTML="";
    result.innerHTML="0.00";
    history_list.innerHTML = `<tr id="rowSpacer" ><td colspan="4" style="
        height: 209px;
        background: #7070702e;
        width: 100%;
        border-radius: var(--radius);
    ">There is no Record</td>`;
})
// function changemode(){
//     document.querySelector("body").classList.toggle("darkmode");
// }
$(".dark").click(function(){
    $("body").toggleClass("darkmode");
})