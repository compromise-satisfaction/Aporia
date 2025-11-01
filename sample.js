window.onload = function(){
  draw();
};

Result = 0;

var Card_Name = {};
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
Card_Name["不明"] = "不明";

var Data_Names = {};

var SSS = 0.9;
if(Result) SSS = 0.375;
var Hand = [];
var KSW = 450*SSS;
var KSH = 654*SSS;

function Create_Card(Cards,src){
  var Length = Cards.length;
  Cards[Length] = {};
  Cards[Length].width = KSW;
  Cards[Length].height = KSH;
  Cards[Length].src = "https://i.gyazo.com/" + Card_Name[src] + ".png";
  if(src==Result){
    Cards[Length].枠 = new Sprite();
    Cards[Length].枠._element = document.createElement("img");
    Cards[Length].枠.width = KSW;
    Cards[Length].枠.height = KSH;
    Cards[Length].枠._element.src = "image/結果.png";
  };
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
    //Hand[I].tl.and();
    //Hand[I].tl.rotateTo(r,t);
  };
  return;
};

Create_Card(Hand,1);
Create_Card(Hand,2);
Create_Card(Hand,3);
Create_Card(Hand,10);
Create_Card(Hand,11);
Create_Card(Hand,12);
Hand_Set(Hand,1777/2,1000/2-KSH/1.5);

var canvas;
var ctx;
var img = [];
function draw() {
  canvas = document.getElementById("canvas");
  if(!canvas || !canvas.getContext) return false;
  ctx = canvas.getContext("2d");
  for(var I = 0; I < Hand.length; I++){
    img = new Image();
    img.src = Hand[I].src;
    //ctx.beginPath();
    //ctx.arc(240, 160, 150, 0, Math.PI * 2, false);
    //ctx.clip();
    //ctx.drawImage(img,Hand[I].x,Hand[I].y);
    ctx.drawImage(img,I*100,0);
    ctx.font = 'bold 32px MS PGothic';
    ctx.fillStyle = '#ff0000';
    img.onload = function(){};
  };
  return;
};

document.getElementById('output').addEventListener('click', function() {
    canvas.toBlob(function(result) {
      console.log(result);
        var imageURL = URL.createObjectURL(result);
        console.log(imageURL);
        document.getElementById('result').innerHTML = '<img src="' + imageURL + '">';
    });
}, false);
/*
document.getElementById('output').addEventListener('click', function() {
    canvas.toBlob(function(result){
    console.log(result);
    var Token = "Bearer O7sR1zID6M-tZBhyEqN_uUn-Jdfw0Wy5pupomxXMdYs";
    var Headers = {Accept:"application/json",Authorization:Token};
    var Title = "タイトル";
    var Comment = "コメント"
    var Postdata = {imagedata:result,title:Title,desc:Comment};
    var Options = {method:"post",type:"jpeg",headers:Headers,payload:Postdata};
    var URL = "https://upload.gyazo.com/api/upload";
    fetch(URL,Options)
      .then(res => res.json())
      .then(result => {
        console.log(result);
    },);
},'image/png');});
*/
