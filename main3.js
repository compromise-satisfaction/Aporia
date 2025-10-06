enchant();

function Game_load(width,height){
  var game = new Game(width,height);
  game.fps = 60;
  game.onload = function(){

    var Hand_Cards_Scene = function(){
      var scene = new Scene();

      var S = 3;
      var KSW = 212/S;
      var KSH = 310/S;
      var Cards = [];
      var Images = [];

      var MANNAKA_X = width/2-KSW/2;
      var MANNAKA_Y = height/2-KSH/2;

      var J = 0;
      var K = 0;
      for(var I = 0; I < Card_Name.length; I++){
        Temp = width - KSW;
        Temp /= 19;
        Temp *= J;
        Temp2 = height/2 - KSH;
        Temp2 /= 2;
        Temp2 *= K;
        Temp2 += height/2
        Cards.push(Create_Image(Temp,Temp2,KSW,KSH,Card_Name[I]));
        J++;
        if(J==20){
          K++;
          J = 0;
        };
      };

      var Hand = [];
      var Deck = [];
      var Cemetery = [];
      var Cemetery_GO = 0;

      for(var I = 0; I < Cards.length; I++) Deck.push(Cards[I]);
      Deck_Set(Deck,0);
      Cards.push(Create_Image(0,0,KSW,KSH,Shining_Draw[14]));
      Cards[Cards.length-1].場所 = "ニードルワーム";

      function Create_Image(X,Y,W,H,Data){
        var I = Images.length;
        Images[I] = new Entity();
        Images[I].moveTo(X,Y);
        Images[I].width = W;
        Images[I].height = H;
        Images[I]._element = document.createElement("img");
        Images[I]._element.src = Data[1];
        if(Data[4]) Images[I].Number = JSON.stringify(Data[4]);
        else Images[I].Number = JSON.stringify(I);
        while(Images[I].Number.length<10) Images[I].Number = "0" + Images[I].Number;
        Images[I].addEventListener("touchstart",function(e){
          switch(this.場所){
            case "ニードルワーム":
              Cemetery_GO = 5;
              break;
            case "手札":
              this.場所 = "墓地";
              Cemetery.push(this);
              Hand.splice(this.Target,1);
              break;
            case "墓地":
              this.場所 = "デッキ";
              Deck.push(Cemetery[Cemetery.length-1]);
              Cemetery.pop();
              break;
            default:
              if(Cemetery_GO){
                this.場所 = "墓地";
                Cemetery.push(this);
                Cemetery_GO--;
              }
              else{
                this.場所 = "手札";
                Hand.push(this);
              };
              Deck.splice(this.Target,1);
              break;
          };
          Deck_Set(Deck,20);
          Hand_Set(Hand,width/2,height/12,10);
          Cemetery_Set(Cemetery,width-KSW*2.5,height/4,20);
          return;
        });
        scene.addChild(Images[I]);
        return(Images[I]);
      };

      function Deck_Set(Deck,t){
        J = 0;
        K = 0;
        for(var I = 0; I < Deck.length; I++) Deck[I] = [Deck[I].Number,Deck[I]];
        Deck.sort();
        for(var I = 0; I < Deck.length; I++){
          Deck[I] = Deck[I][1];
          Deck[I].Target = I;
          Temp = width - KSW;
          Temp /= 19;
          Temp *= J;
          Temp2 = height/2 - KSH;
          Temp2 /= 2;
          Temp2 *= K;
          Temp2 += height/2
          Deck[I].tl.moveTo(Temp,Temp2,t);
          Deck[I].tl.and();
          Deck[I].tl.rotateTo(0,t);
          J++;
          if(J==20){
            K++;
            J = 0;
          };
        };
        Z_axis(Deck);
        return;
      };

      function Cemetery_Set(Deck,XX,YY,t){
        for(var I = 0; I < Deck.length; I++){
          Deck[I].tl.moveTo(XX-KSW/2+I/2,YY-KSH/2-I/2,t);
          Deck[I].tl.and();
          Deck[I].tl.rotateTo(0,t);
        };
        Z_axis(Deck);
        return;
      };

      function Hand_Set(Hand,XX,YY,t){
        if(!Hand.length) return;
        for(var I = 0; I < Hand.length; I++) Hand[I] = [Hand[I].Number,Hand[I]];
        Hand.sort();
        for(var I = 0; I < Hand.length; I++){
          Hand[I] = Hand[I][1];
          Hand[I].Target = I;
        };
        XX -= KSW/2;
        t *= 2;
        switch(Hand.length){
          case 1://一枚の時何もしない
            Hand[0].tl.moveTo(XX,YY,t);
            Hand[0].tl.and();
            Hand[0].tl.rotateTo(0,t);
            Z_axis(Hand[0]);
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
        Z_axis(Hand);
        return;
      };

      function Z_axis(IMAGES){
        for(var I = 0; I < IMAGES.length; I++){
          scene.removeChild(IMAGES[I]);
          scene.addChild(IMAGES[I]);
        };
        return;
      };

      var SEs = {};
      var Big_SE = Create_SE("sound/4.mp3",1);
      var Put_SE = Create_SE("sound/1.mp3",2);
      var Draw_SE = Create_SE("sound/2.mp3",3);

      function Create_SE(C,N){
        SEs[N] = document.createElement("audio");//サウンド
        SEs[N].src = C;
        return(SEs[N]);
      };

      function Sound_Play(SE){
        SE.currentTime = 0;
        SE.play();
        return;
      };

      return scene;
    };

    game.replaceScene(Hand_Cards_Scene());
    return;
  };
  game.start();
};
