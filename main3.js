enchant();

function Game_load(width,height){
  var game = new Game(width,height);
  game.fps = 60;
  game.onload = function(){

    var Hand_Cards_Scene = function(){
      var scene = new Scene();

      var S = 2;
      var KSW = 212/S;
      var KSH = 310/S;
      var Cards = [];
      var Images = [];

      var MANNAKA_X = width/2-KSW/2;
      var MANNAKA_Y = height/2-KSH/2;

      for(var I = 0; I < Card_Name.length; I++) Cards.push(Create_Image(0,0,KSW,KSH,Card_Name[I]));

      var Hand = [];
      var Deck = [];
      var Cemetery = [];
      var Cemetery_GO = 0;

      for(var I = 0; I < Cards.length; I++) Cards[I].場所 = "デッキ";
      Cards_Set(20);
      Cards.push(Create_Image(0,0,KSW,KSH,Shining_Draw[14]));
      Cards[Cards.length-1].場所 = "ニードルワーム";
      Cards[Cards.length-1]._element.src = "image/ニードルワーム.png";
      scene.addChild(Cards[Cards.length-1]);

      var Shining = new Entity();
      Shining.width = KSW;
      Shining.height = KSH;
      Shining._element = document.createElement("img");
      Shining._element.src = "image/シャイニング.png";
      Shining.場所 = "ニードルワーム";
      Shining.opacity = 0;
      Shining.addEventListener("touchstart",function(e){
        switch(Cemetery_GO){
          case 0:
            Cemetery_GO = 5;
            break;
          case "無限":
            Cemetery_GO = 0;
            break;
          default:
            Cemetery_GO = "無限";
            Shining.opacity = 0.5;
            break;
        };
      });
      scene.addChild(Shining);

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
          for(var I = 0; I < Cards.length; I++) Cards[I].tl.queue = [];
          Sound_Play(Draw_SE);
          switch(this.場所){
            case "ニードルワーム":
              Cemetery_GO = 5;
              break;
            case "手札":
              this.場所 = "墓地";
              this.墓地 = Cemetery.length;
              break;
            case "墓地":
              this.場所 = "デッキ";
              break;
            case "デッキ":
              if(!Cemetery_GO) this.場所 = "手札";
              else{
                this.場所 = "墓地";
                this.墓地 = Cemetery.length;
                if(Cemetery_GO!="無限") Cemetery_GO--;
              };
              break;
            default:
              console.log(this.場所);
              break;
          };
          Cards_Set(10);
          return;
        });
        return(Images[I]);
      };

      function Cards_Set(t){
        Hand = [];
        Deck = [];
        Cemetery = [];
        for(var I = 0; I < Cards.length; I++){
          switch(Cards[I].場所){
            case "手札":
              Hand.push(Cards[I]);
              break;
            case "デッキ"  :
              Deck.push(Cards[I]);
              break;
            case "墓地":
              Cemetery[Cards[I].墓地] = Cards[I];
              break;
          };
        };
        Cemetery_Set(Cemetery,width-KSW/2,KSH/2,t);
        Deck_Set(Deck,t);
        Hand_Set(Hand,width/2,KSH/4,t/2);
        return;
      };

      function Cards_Move_Check(){
        var Move = false;
        for(var I = 0; I < Cards.length; I++){
          if(Cards[I].tl.queue.length){
            Move = true;
            break;
          };
        };
        return(Move);
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
          Temp /= 5;
          Temp *= J;
          Temp2 = height/2 - KSH;
          Temp2 /= 4;
          Temp2 *= K;
          Temp2 += KSH * 2;
          Deck[I].tl.moveTo(Temp,Temp2,t);
          Deck[I].tl.and();
          Deck[I].tl.rotateTo(0,t);
          J++;
          if(J==6){
            K++;
            J = 0;
          };
        };
        Z_axis(Deck);
        return;
      };

      function Cemetery_Set(Deck,XX,YY,t){
        Temp = Deck;
        Deck = [];
        for(var I = 0; I < Temp.length; I++) if(Temp[I]) Deck.push(Temp[I]);
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
            Z_axis(Hand);
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

      scene.addEventListener("enterframe",function(e){
        if(Cemetery_GO){
          if(!Shining.tl.queue.length){
            if(Cemetery_GO=="無限"){
              Shining.tl.fadeIn(5);
              Shining.tl.fadeOut(5);
            }
            else{
              Shining.tl.fadeIn(20*(6-Cemetery_GO));
              Shining.tl.fadeOut(10*(6-Cemetery_GO));
            };
          };
        };
        return;
      });

      return scene;
    };

    game.replaceScene(Hand_Cards_Scene());
    return;
  };
  game.start();
};
