var obj = {
  coins:[
      {
        name: "fiveCent",
        value: 0.05,
        text: "5 Cent Coins",
        count: 0
      },
      {
        name: "tenCent",
        value: 0.10,
        text: "10 Cent Coins",
        count: 0
      },
      {
        name: "twentyFiveCent",
        value: 0.25,
        text: "25 Cent Coins",
        count: 0
      },
      {
        name: "OneDollar",
        value: 1,
        text: "1 Dollar Coins",
        count: 0
      },
      {
        name: "twoDollars",
        value: 2,
        text: "2 Dollar Coins",
        count: 0
      },
      {
        name: "fiveDollars",
        value: 5,
        text: "5 Dollar Bills",
        count: 0
      },
      {
        name: "tenDollars",
        value: 10,
        text: "10 Dollar Bills",
        count: 0
      },
      {
        name: "twentyDollars",
        value: 20,
        text: "20 Dollar Bills",
        count: 0
      },
      {
        name: "fiftyDollars",
        value: 50,
        text: "50 Dollar Bills",
        count: 0
      },
      {
        name: "hundredDollars",
        value: 100,
        text: "100 Dollar Bills",
        count: 0
      },
  ],
  total:0,
  last: null,
};

var html
function updatehtml() {html = `<tr>
  <th class="c1">Denomination</th>
  <th class="c2"></th>
  <th class="c3">Count</th>
  <th class="c4"></th>
  <th class="c5">Amount</th>
</tr>`;
html += obj.coins.map(a=>`<tr>
  <td class="c1">
    <label for="${a.name}">${a.text}</label>
  </td>
  <td class ="c2">
    <span>X</span>
  </td>
  <td class="c3">
    <input type="tel" id="${a.name}" value="${a.count==0?"":a.count}" onkeyup="update(this)">
  </td>
  <td class="c4">
      <span>=</span>
  </td>
  <td class="c5">
  <span id="${a.name}r">$${(a.count*a.value).toFixed(2)}</span>
  </td>
</tr>`).join("\n");
}
window.onload = function(){
  updatehtml();
  document.getElementById("load").innerHTML = html;
  obj.total = obj.coins.reduce((a,b)=>a+b.value*b.count,0);
  document.getElementById("totalr").innerHTML="$"+obj.total.toFixed(2);
};
var test;
function update(element){
  var input = element.value*1
  if(Number.isInteger(input)){
    obj.reset=false;
    var coin = obj.coins.filter(a=>a.name==element.id)[0];
    coin.count = input;
    document.getElementById(coin.name+"r").innerHTML = "$"+(coin.count*coin.value).toFixed(2);
    obj.total = obj.coins.reduce((a,b)=>a+b.value*b.count,0);
    document.getElementById("totalr").innerHTML="$"+obj.total.toFixed(2);
  }
  else{var coin = obj.coins.filter(a=>a.name==element.id)[0];
    element.value=coin.count}
}

function reset(){
  if(obj.reset){return;}
obj.last = obj.coins.map(a=>{return {name:a.name, value:a.value, text:a.text, count:a.count};});
obj.coins.map((a)=>{a.count=0;});
obj.total = 0;
window.onload();
obj.reset=true;
}

function loadlast(){
  obj.reset =false;
  console.log("test");
  if(obj.last!=null){
    console.log("test");
    var temp=obj.coins;
    obj.coins=obj.last;
    obj.last = temp;
    window.onload();}
  else{}
}

//service worker
if(navigator.serviceWorker){
    navigator.serviceWorker.register("sw.js");
}
