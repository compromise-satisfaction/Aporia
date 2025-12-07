window.onload = function(){
  draw();
};

var Card_Name = {};
/*
Card_Name["1"] = "35c5489dc023959b25bb3b76b7006015";
Card_Name["2"] = "baad6d19baa471a642592a9a4ec17f84";
Card_Name["3"] = "3ec24ea37fad233f63d2f0745ef04a5b";
Card_Name["4"] = "185b7303ee8c09d356f0493ba6c7ecaf";
Card_Name["5"] = "e2d480212b8e6b051029461bfac00d1c";
Card_Name["6"] = "8c0f10b3598b3330ae054cefe6f2539f";
Card_Name["7"] = "79397fe01ab099f80da2a663185543ab";
Card_Name["8"] = "f977f1aa259f7c271cdca40340c966be";
Card_Name["9"] = "250fa17035807979ffde3788002e6c62";
Card_Name["10"] = "94bd4d323bb274bcc6d203859aa8c5c0";
Card_Name["11"] = "ec43788a116257d3035e82b1d8157bff";
Card_Name["12"] = "b725b9649b1d9cc877b418ae8f428b14";
Card_Name["13"] = "3214b385abaf76d72c3a226900689303";
Card_Name["14"] = "7585c2e2562905835d6bddd7ebcc6b80";
Card_Name["15"] = "b40e0ca66b0be3fc93d6d97e368278c6";
Card_Name["16"] = "3c1d45fe283f092390d76135f13e0adb";
Card_Name["17"] = "4e1bd3bc7b4b7a4431f06cecbed4a8b3";
Card_Name["18"] = "91874e4234a396ddf7d7243d0653e69a";
Card_Name["19"] = "f30cdac5dd5508719c6297c013dd6b71";
Card_Name["20"] = "26c3b45f6567713285db7372878c66bb";
Card_Name["21"] = "d6d1b56ef8bdf372cafc273404ade091";
Card_Name["22"] = "cc2e4cd382c00fbad33a89da75547d11";
Card_Name["23"] = "5e0f50ab6913ad37cd73ec1562173f36";
Card_Name["24"] = "ea46fc8bd323a8dc5c58cad71fd7cb90";
Card_Name["25"] = "64a292591c222caae6b89cc448d22fe8";
Card_Name["26"] = "666f3066dd785cd8a99dadedbc26efd6";
Card_Name["27"] = "99545632e709fce912150d8a7520de0e";
Card_Name["28"] = "604530a08c5bd25557617c875f07c891";
Card_Name["29"] = "d66fe2c4386dff71dc1cbf03c39b37f9";
Card_Name["30"] = "d15c91fecfaacc9656e71c5ca9ff2185";
Card_Name["31"] = "de63d61d5139b505d77c4d4b23a2612f";
Card_Name["32"] = "14d2b7f3a9bc453bae5ffd5d891303f1";
Card_Name["33"] = "8366a40f2388f3718e951808b2433e25";
Card_Name["34"] = "e620a98b8c2631ba8f7264b43380c1a9";
Card_Name["35"] = "b47645e207dfac18482baff538ca8dca";
Card_Name["36"] = "c2c4aeff157425c4f6faadc83ee17dae";
Card_Name["37"] = "a9afc15b1ce92084127184b5a17cc01e";
Card_Name["38"] = "4f764235de5a05d8d03dd884ff95126e";
Card_Name["39"] = "1d3243e6fe0df281fd6b785def872538";
Card_Name["40"] = "7940180b68d6c0f387ec9a8ff26c7f17";
Card_Name["41"] = "fec915a82a3f4030ee48eae17866496c";
Card_Name["42"] = "c30c7fe755d90f5496ebe9c281b368ab";
Card_Name["43"] = "619721c60a0dceb67f899c8b2d8bee7c";
Card_Name["44"] = "589a4fcc903a1faab40b1e46b54c77f9";
Card_Name["45"] = "799a17ee9e9119623bdcdd4a51015b56";
Card_Name["46"] = "b764dd72c0b450083735ba68a5a14eda";
Card_Name["47"] = "78f4f477fad1f250e14c0936836e99aa";
Card_Name["48"] = "19111a073e3599e75f6ab7c69a51ff5c";
Card_Name["49"] = "738f7cf999120e2a6a0c017888127ac6";
Card_Name["50"] = "6b5ef77249fa74622c7a7f8449962fdc";
*/

var Data_Names = {};

var Datas = null;
var Result = null;
Result = "14";
Datas = ["1","1","1","2","2","2","3","3","3"];
Datas.push("4");
Datas.push("4");
Datas.push("4");
Datas.push("5");
Datas.push("5");
Datas.push("5");
Datas.push("6");
Datas.push("6");
Datas.push("6");
Datas.push("7");
Datas.push("7");
Datas.push("7");
Datas.push("8");
Datas.push("8");
Datas.push("8");
Datas.push("9");
Datas.push("9");
Datas.push("9");
Datas.push("10");
Datas.push("10");
Datas.push("10");
Datas.push("11");
Datas.push("11");
Datas.push("11");
Datas.push("12");
Datas.push("12");
Datas.push("12");
Datas.push("13");
Datas.push("13");
Datas.push("13");
Datas.push("14");

Result = new URLSearchParams(document.location.search);
Datas = ["1","2","3","10","11","12"];

var Draw = Result.get("draw");
var Cards = Result.get("card");
if(Cards) Datas = Cards.split("a");
var Days = Result.get("days");
var About = Result.get("about");
if(Draw) Result = Draw;
else Result = false;
switch(About){
  case "1":
    About = "初期手札";
    break;
  case "2":
    About = "最終手札";
    break;
  case "3":
    About = "シャッフル直前のデッキ";
    break;
};

var SSS = 0.9;
if(Result) SSS = 0.375;
var Hand = [];
var KSW = 450*SSS;
var KSH = 654*SSS;

function Create_Card(Cards,src){
  var Length = Cards.length;
  Cards[Length] = {};
  if(!Card_Name[src]) Card_Name[src] = "不明";
  Cards[Length].src = "../image/" + Card_Name[src] + ".png";
  if(src==Result) Cards[Length].枠 = true;
  return(Cards[Length]);
};

function Hand_Set(Hand,XX,YY){
  XX -= KSW/2;
  switch(Hand.length){
    case 1://一枚の時何もしない
      Hand[0].x = XX;
      Hand[0].y = YY;
      return;
    case 2://2~6枚
    case 3:
    case 4:
    case 5:
    case 6:
      R = [10*Hand.length,-10*Hand.length];
      XXX = 1;
      YYY = 1;
      break;
    default:
      R = [60+(Hand.length-6)/2,-60-(Hand.length-6)/2];
      XXX = 1+(Hand.length-6)/40;
      YYY = 1+(Hand.length-6)/60;
      break;
  };
  for(var I = 0; I < Hand.length; I++){
    r = (R[0] - R[1]) / (Hand.length - 1) * I;
    r = R[1] + r;
    X = Math.sin(r*Math.PI/180)*XXX;
    Y = Math.cos(r*Math.PI/180)*YYY;
    X = X + X*KSH;
    Y = Y - Y*KSW*1.2;
    Y += KSH*0.8;
    X += XX;
    Y += YY;
    Hand[I].x = X;
    Hand[I].y = Y;
    Hand[I].r = r;
    //Hand[I].tl.and();
    //Hand[I].tl.rotateTo(r,t);
  };
  return;
};

var D1 = [];
var D2 = [];
var D3 = [];
var D4 = [];

for(var I = 0; I < Datas.length; I++) Create_Card(Hand,Datas[I]);
if(!Result) Hand_Set(Hand,1777/2,1000/2-KSH/1.5);
else{
  for(var I = 0; I < Hand.length; I++){
    if(D1.length<10){
      D1.push(Hand[I]);
      continue;
    };
    if(D2.length<10){
      D2.push(Hand[I]);
      continue;
    };
    if(D3.length<10){
      D3.push(Hand[I]);
      continue;
    };
    if(D4.length<10){
      D4.push(Hand[I]);
      continue;
    };
  };
  for(var I = 0; I < D1.length; I++){
    Temp = 1777 - KSW;
    Temp /= 9;
    Temp *= I;
    D1[I].x = Temp;
    D1[I].y = 0;
  };
  for(var I = 0; I < D2.length; I++){
    Temp1 = 1777 - KSW;
    Temp1 /= 9;
    Temp1 *= I;
    Temp2 = 1000 - KSH;
    Temp2 /= 3;
    D2[I].x = Temp1;
    D2[I].y = Temp2;
  };
  for(var I = 0; I < D3.length; I++){
    Temp1 = 1777 - KSW;
    Temp1 /= 9;
    Temp1 *= I;
    Temp2 = 1000 - KSH;
    Temp2 /= 3;
    Temp2 *= 2;
    D3[I].x = Temp1;
    D3[I].y = Temp2;
  };
  for(var I = 0; I < D4.length; I++){
    Temp1 = 1777 - KSW;
    Temp1 /= 9;
    Temp1 *= I;
    Temp2 = 1000 - KSH;
    Temp2 /= 3;
    Temp2 *= 3;
    D4[I].x = Temp1;
    D4[I].y = Temp2;
  };
};

var canvas;
var ctx;
var img;
function draw() {
  canvas = document.getElementById("canvas");
  if(!canvas || !canvas.getContext) return false;
  ctx = canvas.getContext("2d");
  for(var I = 0; I < Hand.length; I++){
    img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = Hand[I].src;
    if(Result){
      ctx.drawImage(img,Hand[I].x,Hand[I].y,KSW,KSH);
      if(Hand[I].枠){
        img = new Image();
        img.src = "https://i.gyazo.com/7d31007a51d696bd8c13abfd1ffd8a36.png";
        ctx.drawImage(img,Hand[I].x,Hand[I].y,KSW,KSH);
        img.onload = function(){};
      };
    }
    else {
      angleRad = Hand[I].r*Math.PI/180;
      ctx.save();
      ctx.translate(Hand[I].x+KSW/2,Hand[I].y+KSH/2);
      ctx.rotate(angleRad);
      ctx.drawImage(img,-KSW/2,-KSH/2,KSW,KSH);
      ctx.restore();
    };
    img.onload = function(){};
  };
  canvas.toBlob(function(result){
    Result = URL.createObjectURL(result);
    console.log(Result);
    return(result);
  });
};

document.getElementById("download").onclick = (event) => {
  Text = "【アポリア"+Days+"】"+About+".png";
  navigator.clipboard.writeText(Text);
	let canvas = document.getElementById("canvas");
	let link = document.createElement("a");
	link.href = canvas.toDataURL("image/png");
	link.download = Text;
	link.click();
}
