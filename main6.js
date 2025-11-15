enchant();

function Game_load(width,height){
  var game = new Game(width,height);
  game.fps = 60;
  game.onload = function(){

    var Hand_Cards_Scene = function(){
      var scene = new Scene();

      var S = 0.48;
      var KSW = 212*S;
      var KSH = 310*S;
      var Cards = [];
      var Images = [];

      var MANNAKA_X = width/2-KSW/2;
      var MANNAKA_Y = height/2-KSH/2;

      for(var I = 0; I < Generally.length; I++) Cards.push(Create_Image(0,0,KSW,KSH,Generally[I]));

      Cards.push(Create_Image(0,0,KSW,KSH,Shining_Draw[0]));
      Cards.push(Create_Image(0,0,KSW,KSH,Shining_Draw[1]));
      Cards.push(Create_Image(0,0,KSW,KSH,Shining_Draw[3]));
      Cards.push(Create_Image(0,0,KSW,KSH,Shining_Draw[4]));
      Cards.push(Create_Image(0,0,KSW,KSH,Shining_Draw[5]));
      Cards.push(Create_Image(0,0,KSW,KSH,Shining_Draw[7]));
      Cards.push(Create_Image(0,0,KSW,KSH,Shining_Draw[8]));
      Cards.push(Create_Image(0,0,KSW,KSH,Shining_Draw[9]));
      Cards.push(Create_Image(0,0,KSW,KSH,Card_Name[3]));
      Cards.push(Create_Image(0,0,KSW,KSH,Card_Name[9]));
      Cards.push(Create_Image(0,0,KSW,KSH,Card_Name[15]));
      Cards.push(Create_Image(0,0,KSW,KSH,Card_Name[18]));
      Cards.push(Create_Image(0,0,KSW,KSH,Card_Name[21]));
      Cards.push(Create_Image(0,0,KSW,KSH,Card_Name[24]));
      Cards.push(Create_Image(0,0,KSW,KSH,Card_Name[27]));
      Cards.push(Create_Image(0,0,KSW,KSH,Card_Name[36]));
      Cards.push(Create_Image(0,0,KSW,KSH,Card_Name[39]));

      var Hand = [];
      var Deck = [];
      var Cemetery = [];
      var Cemetery_GO = 0;

      for(var I = 0; I < Cards.length; I++) Cards[I].場所 = "デッキ";

      var Button = new Entity();
      Button.moveTo(width-KSH,height-KSH);
      Button.width = KSH;
      Button.height = KSH;
      Button._element = document.createElement("input");
      Button._element.type = "submit";
      Button._element.value = "手札";
      Button._style["font-size"] = KSH/3.5;
      Button.backgroundColor = "buttonface";
      scene.addChild(Button);
      Button._element.onclick = function(e){
        Text = "アフターセット,";
        switch(Button._element.value){
          case "逆転":
            Temp = Cemetery;
            Cemetery = [];
            for(var I = 0; I < Temp.length; I++) if(Temp[I]) Cemetery.push(Temp[I]);
            Cemetery.reverse();
            for(var I = 0; I < Cemetery.length; I++) Cemetery[I].墓地 = I;
            Cards_Set(10);
            return;
          case "手札":
            Temp = Hand;
            Button._element.value = "デッキ";
            Text += "初期手札,";
            break;
          case "墓地":
            Temp = Cemetery;
            Button._element.value = "手札";
            Text += "シャッフル直前のデッキ,";
            break;
          case "デッキ":
            Temp = Deck;
            Button._element.value = "墓地";
            break;
        };
        for(var I = 0; I < Temp.length; I++){
          if(I) Text += "\n";
          Text += Temp[I].カード名;
        };
        navigator.clipboard.writeText(Text);
        return;
      };

      var GO_ZONE = false;

      var ButtonZ = new Entity();
      ButtonZ.moveTo(width-KSW-5-KSH,KSH+5);
      ButtonZ.width = KSH;
      ButtonZ.height = KSH;
      ButtonZ._element = document.createElement("input");
      ButtonZ._element.type = "submit";
      ButtonZ._element.value = "切替";
      ButtonZ._style["font-size"] = KSH/3.5;
      ButtonZ.backgroundColor = "buttonface";
      scene.addChild(ButtonZ);
      ButtonZ._element.onclick = function(e){
        switch(ButtonZ._element.value){
          case "墓地":
            GO_ZONE = false;
            Button._element.value = "墓地";
            ButtonZ._element.value = "切替";
            Cards_Set(10);
            break;
          case "切替":
            GO_ZONE = "墓地";
            Button._element.value = "逆転";
            ButtonZ._element.value = "墓地";
            Cards_Set(10);
            break;
        };
        return;
      };

      Cards_Set(50);

      function Create_Image(X,Y,W,H,Data){
        var I = Images.length;
        Images[I] = new Entity();
        Images[I].moveTo(X,Y);
        Images[I].width = W;
        Images[I].height = H;
        Images[I]._element = document.createElement("img");
        Images[I]._element.src = Data[1];
        Images[I].カード名 = Data[0];
        if(Data[4]) Images[I].Number = JSON.stringify(Data[4]);
        else Images[I].Number = JSON.stringify(I);
        while(Images[I].Number.length<10) Images[I].Number = "0" + Images[I].Number;
        Images[I].addEventListener("touchstart",function(e){
          for(var I = 0; I < Cards.length; I++) Cards[I].tl.queue = [];
          Sound_Play(Draw_SE);
          switch(this.場所){
            case "手札":
              this.場所 = "墓地";
              this.墓地 = Cemetery.length;
              break;
            case "墓地":
              this.場所 = "デッキ";
              if(GO_ZONE=="墓地"){
                GO_ZONE = false;
                Button._element.value = "墓地";
                ButtonZ._element.value = "切替";
              };
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
        if(GO_ZONE=="墓地"){
          Cemetery_Set(Deck,width-KSW/2,KSH/2,t);
          Deck_Set(Cemetery,t);
        }
        else{
          Cemetery_Set(Cemetery,width-KSW/2,KSH/2,t);
          Deck_Set(Deck,t);
        };
        Hand_Set(Hand,0,0,KSW,7,t/2);
        if(Hand.length==6) Cemetery_GO = "無限";
        else Cemetery_GO = 0;
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
        if(GO_ZONE!="墓地"){
          for(var I = 0; I < Deck.length; I++) Deck[I] = [Deck[I].Number,Deck[I]];
          Deck.sort();
        }
        else{
          Temp = Deck;
          Deck = [];
          for(var I = Temp.length; I >= 0; I--) if(Temp[I]) Deck.push([I,Temp[I]]);
        };
        var Tate = 6;
        var Yoko = 7;
        var Room = 0;
        var Multiple = 0;
        for(var I = 0; I < Deck.length; I++){
          Deck[I] = Deck[I][1];
          Deck[I].Target = I;
          Temp = width - KSW - Room;
          Temp /= (Yoko - 1);
          Temp *= J;
          Temp += Room + Multiple;
          Temp2 = height - KSH * 3 - 10;
          Temp2 /= (Tate - 1);
          Temp2 *= K;
          Temp2 += KSH * 2 - Multiple + 10;
          Deck[I].tl.moveTo(Temp,Temp2,t);
          Deck[I].tl.and();
          Deck[I].tl.rotateTo(0,t);
          if(Deck[I+1]){
            if(Deck[I].カード名==Deck[I+1][1].カード名&&false) Multiple += 10;
            else{
              J++;
              Multiple = 0;
              if(J==Yoko){
                K++;
                J = 0;
              };
            };
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
          Deck[I].tl.moveTo(XX-KSW/2,KSH+5,t);
          Deck[I].tl.and();
          Deck[I].tl.rotateTo(0,t);
        };
        Z_axis(Deck);
        return;
      };

      function Hand_Set(Hand,XX,YY,A,B,t){
        if(!Hand.length) return;
        for(var I = 0; I < Hand.length; I++){
          if(B == 7) Hand[I] = [Hand[I].Number,Hand[I]];
          else{
            if(I<10) Hand[I] = [0+I,Hand[I]];
            else Hand[I] = [I,Hand[I]];
          };
        };
        Hand.sort();
        for(var I = 0; I < Hand.length; I++){
          Hand[I] = Hand[I][1];
          Hand[I].Target = I;
          if(Hand.length < B) Temp = (width - KSW) / 6;
          else Temp = (width - A) / (Hand.length - 1);
          Temp *= I;
          Hand[I].tl.moveTo(Temp+XX,YY,t);
          Hand[I].tl.and();
          Hand[I].tl.rotateTo(0,t);
        };
        Z_axis(Hand,true);
        return;

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

      function Z_axis(IMAGES,A){
        if(A){
          for(var I = IMAGES.length-1; I >= 0; I--){
            scene.removeChild(IMAGES[I]);
            scene.addChild(IMAGES[I]);
          };
        }
        else{
          for(var I = 0; I < IMAGES.length; I++){
            scene.removeChild(IMAGES[I]);
            scene.addChild(IMAGES[I]);
          };
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
