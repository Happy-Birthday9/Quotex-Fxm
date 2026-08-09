const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll(".menu-btn");

buttons.forEach(btn=>{
    btn.onclick=()=>{

        buttons.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");

        pages.forEach(p=>p.classList.remove("active"));

        document
        .getElementById(btn.dataset.page)
        .classList.add("active");

    };
});

const analyseText=[
"📷 Screenshot Uploaded",
"🔍 Reading Candles...",
"📊 Detecting Trend...",
"📈 Checking EMA...",
"📉 Checking RSI...",
"🕯 Detecting Pattern...",
"📐 Support & Resistance...",
"💹 Volume Analysis...",
"🤖 AI Confidence...",
"✅ Final Decision..."
];

function startAnalysis(type){

const loading=document.getElementById(type+"Loading");
const result=document.getElementById(type+"Result");

loading.innerHTML="";
result.style.display="none";

let i=0;

const timer=setInterval(()=>{

if(i<analyseText.length){

const line=document.createElement("div");
line.innerHTML=analyseText[i];

loading.appendChild(line);

line.animate(
[
{opacity:0,transform:"translateY(20px)"},
{opacity:1,transform:"translateY(0px)"}
],
{
duration:350,
fill:"forwards"
}
);

loading.scrollTop=loading.scrollHeight;

i++;

}else{

clearInterval(timer);

const signal=Math.random()>0.5?"UP":"DOWN";

result.style.display="block";
result.innerHTML=signal;

result.className="result";

if(signal==="UP"){
result.classList.add("up");
}else{
result.classList.add("down");
}

}

},700);

}

const realBtn=document.getElementById("realAnalyse");
if(realBtn){
realBtn.onclick=()=>startAnalysis("real");
}

const otcBtn=document.getElementById("otcAnalyse");
if(otcBtn){
otcBtn.onclick=()=>startAnalysis("otc");
}

const futureBtn=document.getElementById("futureBtn");

if(futureBtn){

futureBtn.onclick=()=>{

const market=document.getElementById("market").value;

const box=document.getElementById("futureResult");

box.innerHTML="";

for(let i=1;i<=10;i++){

const div=document.createElement("div");

const signal=Math.random()>0.5?"UP":"DOWN";

div.className="signal-card";

div.innerHTML=`
<h3>${market}</h3>
<p>Signal ${i}</p>
<h2 class="${signal==="UP"?"signal-up":"signal-down"}">
${signal}
</h2>
`;

box.appendChild(div);

}

};

}
