enchant();

var EXE = "https://script.google.com/macros/s/AKfycbzQ37hSrPy6JEqz1YZnZqsiKujNZFd33PbdO-lb9d-tuAAEczrNQjXPt7uvgrd6uSAR/exec";
var Password = window.localStorage.getItem("コード");

function Game_load(width,height){
  var game = new Game(width,height);
  game.fps = 20;
  game.onload = function(){

    var Loading_Scene = function(){
      var scene = new Scene();

      var Background = new Entity();
      Background._element = document.createElement("img");
      Background._element.src = "https://raw.githubusercontent.com/compromise-satisfaction/novel_game/gh-pages/画像/半透明(黒).png";
      Background.width = width;
      Background.height = height;

      var Loading = new Entity();
      Loading._element = document.createElement("img");
      Loading._element.src = "https://raw.githubusercontent.com/compromise-satisfaction/novel_game/gh-pages/画像/読み込み中.gif";
      Loading.width = width;
      Loading.height = width/5;
      Loading.y = height/2 - Loading.height/2;

      scene.addChild(Background);
      scene.addChild(Loading);

      return scene;
    };

    var Result_Scene = function(Datas){
      var scene = new Scene();

      var Card_Name = {};
      Card_Name["機皇帝ワイゼル∞"] = 1;
      Card_Name["機皇帝グランエル∞"] = 2;
      Card_Name["機皇帝スキエル∞"] = 3;
      Card_Name["機皇帝ワイゼル∞－S・アブソープション"] = 4;
      Card_Name["機皇枢インフィニティ・コア"] = 5;
      Card_Name["機皇兵ワイゼル・アイン"] = 6;
      Card_Name["機皇兵スキエル・アイン"] = 7;
      Card_Name["機皇兵グランエル・アイン"] = 8;
      Card_Name["機皇兵廠オブリガード"] = 9;
      Card_Name["機皇神龍アステリスク"] = 10;
      Card_Name["機皇神龍トリスケリア"] = 11;
      Card_Name["機皇神マシニクル∞"] = 12;
      Card_Name["絶望神アンチホープ"] = 13;
      Card_Name["アフター・グロー"] = 14;
      Card_Name["バニーラ"] = "https://www.ka-nabell.com/img/card/card100001778_1.jpg";
      Card_Name["モリンフェン"] = "https://www.ka-nabell.com/img/card/card100222215_1.jpg";
      Card_Name["光天使ブックス"] = "https://www.ka-nabell.com/img/card/card100012511_1.jpg";
      Card_Name["ペンギン・ナイトメア"] = "https://www.ka-nabell.com/img/card/card1000517_1.jpg";
      Card_Name["死のメッセージ「H」"] = "https://www.ka-nabell.com/img/card/card100014937_1.jpg";

      var IMAGE_U = "https://raw.githubusercontent.com/compromise-satisfaction/Saved/refs/heads/master/GAS/image/";

      for(var I = 1; I < Datas.length; I++){
        Temp = Datas[I];
        Datas[I] = {};
        Datas[I].時間 = I + "日目";
        Datas[I].タイトル = Temp[1];
        Datas[I].URL = Card_Name[Temp[6]];
        if(JSON.stringify(Datas[I].URL).length < 3) Datas[I].URL = IMAGE_U + Datas[I].URL + ".png";
        Datas[I].初手 = Temp[4].split("\n");
        Datas[I].終手 = Temp[5].split("\n");
        for(var J = 0; J < Datas[I].初手.length; J++){
            Datas[I].初手[J] = Card_Name[Datas[I].初手[J]];
            if(JSON.stringify(Datas[I].初手[J]).length < 3) Datas[I].初手[J] = IMAGE_U + Datas[I].初手[J] + ".png";
        };
        for(var J = 0; J < Datas[I].終手.length; J++){
            Datas[I].終手[J] = Card_Name[Datas[I].終手[J]];
            if(JSON.stringify(Datas[I].終手[J]).length < 3) Datas[I].終手[J] = IMAGE_U + Datas[I].終手[J] + ".png";
        };
      };

      var Buttons = [];
      var Selects = [];
      var Text_Areas = [];
      var Json_Data = {};

      var Fast = [];
      var Last = [];
      var KSW = 450/4;
      var KSH = 654/4;

      function Create_Card(Cards,src){
        var Length = Cards.length;
        Cards[Length] = new Sprite();
        Cards[Length]._element = document.createElement("img");
        Cards[Length].width = KSW;
        Cards[Length].height = KSH;
        Cards[Length]._element.src = "https://raw.githubusercontent.com/compromise-satisfaction/Saved/refs/heads/master/GAS/image/" + src + ".png";
        scene.addChild(Cards[Length]);
        return;
      };

      for(var I = 0; I < 5; I++){
        Create_Card(Fast,14);
        Create_Card(Last,14);
      };
      Create_Card(Last,14);

      Hand_Set(Fast,width/5,height/2-KSH,20);
      Hand_Set(Last,width/5*4,height/2-KSH,20);

      var Images_size = new Image();

      var Images = new Sprite();
      Images._element = document.createElement("img");
      Images.y = height/10*2;
      Images.width = width;
      Images.height = width/16*9;
      scene.addChild(Images);

      var Label1 = new Label();
      Label1.y = height/10*1 + height/20*1;
      Label1.font = height/20 + "px 'Arial'";
      scene.addChild(Label1);

      var Label2 = new Label();
      Label2.x = width/5 - height/20*2;
      Label2.y = height/10*7;
      Label2.font = height/20 + "px 'Arial'";
      Label2.text = "初期手札";
      scene.addChild(Label2);

      var Label3 = new Label();
      Label3.x = width/2 - height/20*3;
      Label3.y = height/10*7;
      Label3.font = height/20 + "px 'Arial'";
      Label3.text = "ラストドロー";
      scene.addChild(Label3);

      var Label4 = new Label();
      Label4.x = width/5*4 - height/20*2;
      Label4.y = height/10*7;
      Label4.font = height/20 + "px 'Arial'";
      Label4.text = "最終手札";
      scene.addChild(Label4);

      Create_Select(0,height/10*0,width,height/10);
      //Create_Text_Area(0,height/10*7,width,height/10,Password,"ラストドロー");
      //Create_Text_Area(0,height/10*8,width,height/10,"","URL");
      //Create_Button(0,height/10*9,width,height/10,"これを消す");

      function Create_Select(X,Y,W,H){
       I = Selects.length;
       Selects[I] = new Entity();
       Selects[I].moveTo(X,Y);
       Selects[I].width = W;
       Selects[I].height = H;
       Selects[I]._element = document.createElement("select");

       Option = [];

       for (var i = 1; i < Datas.length; i++){
         Option[i] = document.createElement("option");
         Json_Data[i] = Datas[i];
         Images._element.src = Datas[i].URL;
         Images_size.src = Datas[i].URL;
         Option[i].value = i;
         Option[i].text = Datas[i].タイトル;
         Selects[I]._element.appendChild(Option[i]);
       };

       Images._element.src = "";

       scene.addChild(Selects[I]);
       return;
     };

      function Create_Button(X,Y,W,H,V){
          I = Buttons.length;
          Buttons[I] = new Entity();
          Buttons[I].moveTo(X,Y);
          Buttons[I].width = W;
          Buttons[I].height = H;
          Buttons[I]._element = document.createElement("input");
          Buttons[I]._element.type = "submit";
          Buttons[I]._element.value = V;
          Buttons[I]._element.Number = I;
          Buttons[I].backgroundColor = "buttonface";
          scene.addChild(Buttons[I]);
          Buttons[I]._element.onclick = function(e){
            console.log(ID);
            game.replaceScene(Loading_Scene());
            fetch(EXE,{method: 'POST'})
              .then(res => res.json())
              .then(result => {
              game.replaceScene(Result_Scene(result));
            },);
          };
          return;
        };

      function Create_Text_Area(X,Y,W,H,V,P){
        J = Text_Areas.length;
        Text_Areas[J] = new Entity();
        Text_Areas[J].moveTo(X,Y);
        Text_Areas[J].width = W;
        Text_Areas[J].height = H;
        Text_Areas[J]._element = document.createElement("input");
        Text_Areas[J]._element.type = "textarea";
        Text_Areas[J]._element.value = V;
        Text_Areas[J]._element.placeholder = P;
        scene.addChild(Text_Areas[J]);
        return;
      };

      var W = 0;
      var H = 0;
      var Time = null;
      var Times = null;
      var ID = null;

      function Hand_Set(Hand,XX,YY,t){
        XX -= KSW/2;
        t *= 2;
        switch(Hand.length){
          case 1://一枚の時何もしない
            Hand[0].tl.moveTo(XX,YY,t);
            Hand[0].tl.and();
            Hand[0].tl.rotateTo(0,t);
            Hand[0].tl.and();
            Hand[0].tl.scaleTo(0,1,t/2);
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
          Hand[I].tl.moveTo(X,Y,t);
          Hand[I].tl.and();
          Hand[I].tl.rotateTo(r,t);
        };
        for(var I = 0; I < Hand.length; I++){
          scene.removeChild(Hand[I]);
          scene.addChild(Hand[I]);
        };
        return;
      };

      scene.addEventListener("enterframe",function(){
        /*
        if(Password!=Text_Areas[0]._element.value){
          Password = Text_Areas[0]._element.value;
          window.localStorage.setItem("コード",Password);
        };
        */
        if(Images.URL!=Selects[0]._element.value){
          Images.URL = Selects[0]._element.value;
          Images_size.src = Json_Data[Images.URL].URL;
          Images._element.src = Json_Data[Images.URL].URL;
          Label1.text = Json_Data[Images.URL].時間;
          ID = Json_Data[Images.URL].ID;
          for(var I = 0; I < Fast.length; I++){
            Fast[I]._element.src = Json_Data[Images.URL].初手[I];
          };
          for(var I = 0; I < Last.length; I++){
            Last[I]._element.src = Json_Data[Images.URL].終手[I];
          };
          //Text_Areas[0]._element.value = Images.URL;
          //Text_Areas[1]._element.value = Images.URL;
        };
        if(W!=Images_size.width||H!=Images_size.height){
          W = Images_size.width;
          H = Images_size.height;
          Images.width = width;
          Images.height = width/W*H;
          if(Images.height < height/10*4) Images.x = 0;
          else{
            Images.height = height/10*4;
            Images.width = Images.height*W/H;
            Images.x = (width-Images.width)/2;
          };
        };
      });

      return scene;
    };

    game.replaceScene(Loading_Scene());
    fetch(EXE,{method: 'POST'})
      .then(res => res.json())
      .then(result => {
        game.replaceScene(Result_Scene(result));
    },);
    return;
};
game.start();
};
