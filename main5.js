enchant();

function Game_load(width,height){
  var game = new Game(width,height);
  game.fps = 60;
  game.onload = function(){

    var Result_Scene = function(Datas){
      var scene = new Scene();

      var Background = new Entity();
      Background._element = document.createElement("img");
      Background._element.src = "https://raw.githubusercontent.com/compromise-satisfaction/novel_game/gh-pages/画像/半透明(黒).png";
      Background.width = width;
      Background.height = height;
      //scene.addChild(Background);

      var Card_Name = {};
      Card_Name["機皇帝ワイゼル∞"] = "35c5489dc023959b25bb3b76b7006015";
      Card_Name["機皇帝グランエル∞"] = "baad6d19baa471a642592a9a4ec17f84";
      Card_Name["機皇帝スキエル∞"] = "3ec24ea37fad233f63d2f0745ef04a5b";
      Card_Name["機皇帝ワイゼル∞－S・アブソープション"] = "185b7303ee8c09d356f0493ba6c7ecaf";
      Card_Name["機皇枢インフィニティ・コア"] = "e2d480212b8e6b051029461bfac00d1c";
      Card_Name["機皇兵ワイゼル・アイン"] = "8c0f10b3598b3330ae054cefe6f2539f";
      Card_Name["機皇兵スキエル・アイン"] = "79397fe01ab099f80da2a663185543ab";
      Card_Name["機皇兵グランエル・アイン"] = "f977f1aa259f7c271cdca40340c966be";
      Card_Name["機皇兵廠オブリガード"] = "250fa17035807979ffde3788002e6c62";
      Card_Name["機皇神龍アステリスク"] = "94bd4d323bb274bcc6d203859aa8c5c0";
      Card_Name["機皇神龍トリスケリア"] = "ec43788a116257d3035e82b1d8157bff";
      Card_Name["機皇神マシニクル∞"] = "b725b9649b1d9cc877b418ae8f428b14";
      Card_Name["絶望神アンチホープ"] = "3214b385abaf76d72c3a226900689303";
      Card_Name["アフター・グロー"] = "7585c2e2562905835d6bddd7ebcc6b80";
      Card_Name["伝説の都 アトランティス"] = "b40e0ca66b0be3fc93d6d97e368278c6";
      Card_Name["モリンフェン"] = "3c1d45fe283f092390d76135f13e0adb";
      Card_Name["デスハムスター"] = "4e1bd3bc7b4b7a4431f06cecbed4a8b3";
      Card_Name["スマイル・ワールド"] = "91874e4234a396ddf7d7243d0653e69a";
      Card_Name["海月－ジェリーフィッシュ－"] = "f30cdac5dd5508719c6297c013dd6b71";
      Card_Name["山"] = "26c3b45f6567713285db7372878c66bb";
      Card_Name["ペンギン・ナイトメア"] = "d6d1b56ef8bdf372cafc273404ade091";
      Card_Name["はにわ"] = "cc2e4cd382c00fbad33a89da75547d11";
      Card_Name["岩石の精霊"] = "5e0f50ab6913ad37cd73ec1562173f36";
      Card_Name["バニーラ"] = "ea46fc8bd323a8dc5c58cad71fd7cb90";
      Card_Name["光天使ブックス"] = "64a292591c222caae6b89cc448d22fe8";
      Card_Name["死のメッセージ「H」"] = "666f3066dd785cd8a99dadedbc26efd6";
      Card_Name["ジャンク・シンクロン"] = "99545632e709fce912150d8a7520de0e";
      Card_Name["増殖するG"] = "604530a08c5bd25557617c875f07c891";
      Card_Name["N・アクア・ドルフィン"] = "d66fe2c4386dff71dc1cbf03c39b37f9";
      Card_Name["ドラゴニックP"] = "d15c91fecfaacc9656e71c5ca9ff2185";
      Card_Name["カオス・ソルジャー"] = "de63d61d5139b505d77c4d4b23a2612f";
      Card_Name["混沌帝龍 －終焉の使者－"] = "14d2b7f3a9bc453bae5ffd5d891303f1";
      Card_Name["時械神メタイオン"] = "8366a40f2388f3718e951808b2433e25";
      Card_Name["サイボーグドクター"] = "e620a98b8c2631ba8f7264b43380c1a9";
      Card_Name["フレムベル・マジカル"] = "b47645e207dfac18482baff538ca8dca";
      Card_Name["希望皇アストラル・ホープ"] = "c2c4aeff157425c4f6faadc83ee17dae";
      Card_Name["不明"] = "不明";

      var IMAGE_U = "image/";

      var Data_Names = {};

      var SSS = 0.9;
      var Hand = [];
      var KSW = 450*SSS;
      var KSH = 654*SSS;

      function Create_Card(Cards,src){
        var Length = Cards.length;
        Cards[Length] = new Sprite();
        Cards[Length]._element = document.createElement("img");
        Cards[Length].width = KSW;
        Cards[Length].height = KSH;
        Cards[Length]._element.src = "https://i.gyazo.com/" + src + ".png";
        scene.addChild(Cards[Length]);
        return;
      };

      for(var I = 0; I < Datas.length; I++) Create_Card(Hand,Card_Name[Datas[I]]);
      Hand_Set(Hand,width/2,height/2-KSH/1.5,0);

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

      function Hand_shuffle(Hand,XX,YY,XR,YR,t){
        XX -= Hand[0].width/2;
        var X = XX;
        var Y = YY;
        var r = [];
        var R = [];
        var Number = null;
        if(Hand.length==1) Hand[0].tl.moveTo(X,Y,t);
        else{
          for(var I = 0; I < Hand.length; I++) r[I] = [360 / Hand.length * I,I];
          while(r.length){
            Number = Rand(r.length);
            R[R.length] = r[Number][0];
            r.splice(Number,1);
          };
          for(var I = 0; I < Hand.length; I++){
            X = XX;
            Y = YY;
            X -= Math.sin(R[I] * Math.PI / 180) * XR;
            Y -= Math.cos(R[I] * Math.PI / 180) * YR;
            Hand[I].tl.moveTo(X,Y,t);
            Hand[I].tl.and();
            Hand[I].tl.rotateBy(1000+Rand(360),t);
          };
        };
        return;
      };

      return scene;
    };
    var result = new URLSearchParams(document.location.search);
    result = result.get("card").split(",");
    game.replaceScene(Result_Scene(result));
    return;
};
game.start();
};
