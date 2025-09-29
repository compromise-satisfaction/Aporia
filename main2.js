enchant();

function Game_load(width,height){
  var game = new Game(width,height);
  game.fps = 20;
  game.onload = function(){

    var Hand_Cards_Scene = function(){
      var scene = new Scene();

      var S = 1.8;
      var KSW = 212/S;
      var KSH = 310/S;
      var Cards = [];
      var Images = [];

      var MANNAKA_X = width/2-KSW/2;
      var MANNAKA_Y = height/2-KSH/2;

      for(var I = 0; I < Card_Name.length; I++){
        Cards.push(Create_Image(0,0,KSW,KSH,Card_Name[I][0],Card_Name[I][1],Card_Name[I][2],Card_Name[I][3],Card_Name[I][4]));
      };

      for(var I = 0; I < Cards.length; I++){
        Cards[I].表 = Create_Image(0,0,KSW,KSH,Cards[I].Name,Cards[I]._element.src);
        Cards[I].表.scale(0,1);
        Cards[I]._element.src = Cards[I].裏;
        scene.removeChild(Cards[I].表);
        scene.removeChild(Cards[I]);
        scene.addChild(Cards[I].表);
        scene.addChild(Cards[I]);
        Temp = width - KSW;
        Temp /= (Cards.length - 1);
        Temp *= I;
        Cards[I].moveTo(Temp,MANNAKA_Y);
        Cards[I].表.moveTo(Temp,MANNAKA_Y);
      };

      var Shining = Create_Image(0,0,KSW,KSH,"シャイニング","image/シャイニング.png");
      Shining.opacity = 0;

      var Deck = [];
      var Hand = [];
      var Except = [];
      var Cemetery = [];

      for(var I = 0; I < Cards.length; I++) Deck.push(Cards[I]);
      Deck_Set(Deck,width-KSW*1,height/4,20);

      function Array_Shuffle(Array){
        var Temp = [];
        var I = 0;
        while(Array.length){
          I = Math.floor(Math.random()*(Array.length));
          Temp.push(Array[I]);
          Array.splice(I,1);
        };
        while(Temp.length){
          I = Math.floor(Math.random()*(Temp.length));
          Array.push(Temp[I]);
          Temp.splice(I,1);
        };
        return(Array);
      };

      function Create_Image(X,Y,W,H,N,C,S,K,Z){
        var I = Images.length;
        Images[I] = new Entity();
        Images[I].moveTo(X,Y);
        Images[I].width = W;
        Images[I].height = H;
        Images[I]._element = document.createElement("img");
        Images[I]._element.src = C;
        Images[I].キーカード = K;
        if(Z) Images[I].Number = JSON.stringify(Z);
        else Images[I].Number = JSON.stringify(I);
        Images[I].Name = N;
        Images[I].裏 = S;
        while(Images[I].Number.length<10) Images[I].Number = "0" + Images[I].Number;
        Images[I].初期 = {X:X,Y:Y,Y:Y,W:W,H:H};
        scene.addChild(Images[I]);
        return(Images[I]);
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

      function Deck_Set(Deck,XX,YY,t,C){
        for(var I = 0; I < Deck.length; I++){
          Target = Deck[I];
          if(Target.表.scaleX){
            Target.シンクロ = true;
            Target = Target.表;
          };
          Target.tl.moveTo(XX-KSW/2+I/2,YY-KSH/2-I/2,t);
          Target.tl.and();
          Target.tl.rotateTo(0,t);
          if(C) Card_Flip(Deck[I],"表",t);
          else Card_Flip(Deck[I],"裏",t);
          scene.removeChild(Deck[I].表);
          scene.removeChild(Deck[I]);
          scene.addChild(Deck[I].表);
          scene.addChild(Deck[I]);
        };
        return;
      };

      function Hand_Set(Hand,XX,YY,t,C){
        if(!Hand.length) return;
        if(C) C = C.Number;
        for(var I = 0; I < Hand.length; I++) Hand[I] = [Hand[I].Number,Hand[I]];
        Hand.sort();
        for(var I = 0; I < Hand.length; I++){
          if(Hand[I][0]==C) Return_Card = I;
          Hand[I] = Hand[I][1];
        };
        XX -= KSW/2;
        t *= 2;
        switch(Hand.length){
          case 1://一枚の時何もしない
            Hand[0].tl.moveTo(XX,YY,t);
            Hand[0].tl.and();
            Hand[0].tl.rotateTo(0,t);
            if(!Hand[0].表.scaleX) Card_Flip(Hand[0],"表",t);
            scene.removeChild(Hand[0].表);
            scene.removeChild(Hand[0]);
            scene.addChild(Hand[0].表);
            scene.addChild(Hand[0]);
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
          if(I==Return_Card) Y -= KSH/8;
          Hand[I].tl.moveTo(X,Y,t);
          Hand[I].tl.and();
          Hand[I].tl.rotateTo(r,t);
          if(!Hand[I].表.scaleX) Card_Flip(Hand[I],"表",t);
        };
        for(var I = 0; I < Hand.length; I++){
          scene.removeChild(Hand[I].表);
          scene.removeChild(Hand[I]);
          scene.addChild(Hand[I].表);
          scene.addChild(Hand[I]);
        };
        return;
      };

      function Card_Flip(Target,A,t){
        switch(A){
          case "表":
            if(Target.scaleX){
              if(Target.tl.queue.length) Target.tl.and();
              Target.tl.scaleTo(0,1,t/2);
              if(Target.表.tl.queue.length) Target.表.tl.and();
              Target.表.tl.scaleTo(0,1,t/2);
              Target.表.tl.scaleTo(1,1,t/2);
            };
            break;
          case "裏":
            if(Target.表.scaleX){
              if(Target.表.tl.queue.length) Target.表.tl.and();
              Target.表.tl.scaleTo(0,1,t/2);
              if(Target.tl.queue.length) Target.tl.and();
              Target.tl.scaleTo(0,1,t/2);
              Target.tl.scaleTo(1,1,t/2);
            };
            break;
        };
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

      var SEs = {};
      var Put_SE = Create_SE("sound/1.mp3",1);
      var Draw_SE = Create_SE("sound/2.mp3",2);
      var Shuffle_SE = Create_SE("sound/3.mp3",3);

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

      function Deck_Shuffle(Deck,Shuffle_Time,Type){
        Temp = false;
        if(Type=="s") Point_Count = true;
        else{
          for(var I = 0; I < Deck.length; I++){
            if(Deck[I].シャイニングドロー){
              Temp = Deck[I];
              Deck.splice(I,1);
              delete Temp.シャイニングドロー;
              break;
            };
            if(Deck[I].キーカード){
              Temp = Deck[I];
              Deck.splice(I,1);
              break;
            };
          };
        };
        Deck = Array_Shuffle(Deck);
        if(Temp){
          switch(Type){
            default:
              Deck.push(Temp);
              break;
            case "b":
              Deck.unshift(Temp);
              break;
          };
        };
        for(var I = 0; I < Deck.length; I++){
          scene.removeChild(Deck[I].表);
          scene.removeChild(Deck[I]);
          scene.addChild(Deck[I].表);
          scene.addChild(Deck[I]);
        };
        Deck_Set(Deck,width-KSW,height/4,0);
        Sound_Play(Shuffle_SE);
        for(var I = 0; I < Deck.length; I++){
          Deck[I].tl.moveBy(0,-KSH/Deck.length*(Deck.length-I),Shuffle_Time);
          Deck[I].tl.moveBy(0, KSH/Deck.length*(Deck.length-I),Shuffle_Time);
          Deck[I].tl.moveBy(0, KSH/Deck.length*(Deck.length-I),Shuffle_Time);
          Deck[I].tl.moveBy(0,-KSH/Deck.length*(Deck.length-I),Shuffle_Time);
        };
        return;
      };

      var Label0 = new Label();
      Label0.y = height/10*1 + height/20*1;
      Label0.font = height/20 + "px 'Arial'";
      Label0.width = width;
      scene.addChild(Label0);

      var Label1 = new Label();
      Label1.y = height/10*2 + height/20*1;
      Label1.font = height/20 + "px 'Arial'";
      Label1.width = width;
      scene.addChild(Label1);

      var Label2 = new Label();
      Label2.y = height/10*3 + height/20*1;
      Label2.font = height/20 + "px 'Arial'";
      Label2.width = width;
      scene.addChild(Label2);

      var Label3 = new Label();
      Label3.y = height/10*4 + height/20*1;
      Label3.font = height/20 + "px 'Arial'";
      Label3.width = width;
      scene.addChild(Label3);

      var Label4 = new Label();
      Label4.y = height/10*5 + height/20*1;
      Label4.font = height/20 + "px 'Arial'";
      Label4.width = width;
      scene.addChild(Label4);

      var Label5 = new Label();
      Label5.y = height/10*6 + height/20*1;
      Label5.font = height/20 + "px 'Arial'";
      Label5.width = width;
      scene.addChild(Label5);

      var Point = 0;
      var Return_Card = 0;
      var Point_Count = false;

      window.addEventListener("keydown",function(e){
        if(Cards_Move_Check()||Shining.ドロー) return;
        switch(e.key){
          case "P":
            Point = 2525;
            break;
          case "n":
            if(!Deck.length) return;
            for(var I = 0; I < 5; I++){
              if(!Deck.length) break;
              Cemetery.push(Deck[Deck.length-1]);
              Deck.pop();
            };
            Deck_Set(Cemetery,width-KSW*2.5,height/4,8,true);
            break;
          case "N":
            if(!Deck.length) return;
            for(var I = 0; I < 5; I++){
              if(!Deck.length) break;
              Except.push(Deck[Deck.length-1]);
              Deck.pop();
            };
            Deck_Set(Except,width-KSW*4,height/4,8,true);
            break;
          case "m":
            if(!Deck.length) return;
            for(var I = 0; I < 5; I++){
              if(!Deck.length) break;
              Hand.push(Deck[Deck.length-1]);
              Deck.pop();
            };
            Return_Card = Hand.length - 1;
            Sound_Play(Draw_SE);
            Hand_Set(Hand,width/2,height/2,4,Hand[Hand.length-1]);
            break;
          case "d":
            if(!Hand.length) return;
            for(var I = 0; I < Hand.length; I++) Cemetery.push(Hand[I]);
            Hand = [];
            Sound_Play(Draw_SE);
            Deck_Set(Cemetery,width-KSW*2.5,height/4,8,true);
            break;
          case "r":
            if(!Cemetery.length) return;
            for(var I = Cemetery.length; I > 0; I--) Deck.push(Cemetery[I-1]);
            Cemetery = [];
            Deck_Set(Deck,width-KSW,height/4,8);
            break;
          case "R":
            if(!Hand.length) return;
            for(var I = 0; I < Hand.length; I++) Deck.push(Hand[I]);
            Hand = [];
            Hand_Set(Hand,width/2,height/2,2);
            Deck_Set(Deck,width-KSW,height/4,8);
            break;
          case "c":
            Card_Deck(Cemetery,"c");
            break;
          case "C":
            Card_Deck(Except,"e");
            break;
          case "t":
            if(!Deck.length) break;
            if(Point < 25) break;
            Point -= 25;
            if(!Rand(3)&&Shining_Draw.length){
            //if(Shining_Draw.length){
              Temp = Rand(Shining_Draw.length);
              Temp = [Shining_Draw[Temp],Temp];
              Shining_Draw.splice(Temp[1],1);
              Temp = Temp[0];
              Temp = Create_Image(Deck[Deck.length-1].x,Deck[Deck.length-1].y,KSW,KSH,Temp[0],Temp[1],Temp[2],Temp[3],Temp[4]);
              Temp.表 = Create_Image(Deck[Deck.length-1].x,Deck[Deck.length-1].y,KSW,KSH,Temp.Name,Temp._element.src);
              Temp.表.scale(0,1);
              Temp._element.src = Temp.裏;
              Shining.ドロー = true;
              Temp.シャイニングドロー = true;
              Cards.push(Temp);
              Deck.unshift(Temp);
            };
          case "b":
          case "s":
          case "S":
            if(!Deck.length) return;
            Deck_Shuffle(Deck,2,e.key);
            break;
            case "x":
              if(!Cemetery.length) return;
              Deck.push(Cemetery[Cemetery.length-1]);
              Cemetery.pop();
              Sound_Play(Draw_SE);
              Deck_Set(Deck,width-KSW,height/4,8);
              break;
            case "z":
              if(!Except.length) return;
              Deck.push(Except[Except.length-1]);
              Except.pop();
              Sound_Play(Draw_SE);
              Deck_Set(Deck,width-KSW,height/4,8);
              break;
        };
      });

      scene.addEventListener("enterframe",function(e){
        if(Shining.ドロー){
          Shining.ドロー = Deck.length - 1;
          Shining.x = Deck[Shining.ドロー].x;
          Shining.y = Deck[Shining.ドロー].y;
          scene.removeChild(Shining);
          scene.addChild(Shining);
          if(!Shining.tl.queue.length){
            Shining.tl.fadeOut(5);
            Shining.tl.fadeIn(15);
          };
        };
        for(var I = 0; I < Cards.length; I++){
          if(Cards[I].シンクロ){
            Cards[I].x = Cards[I].表.x;
            Cards[I].y = Cards[I].表.y;
            Cards[I].rotation = Cards[I].表.rotation;
          }
          else{
            Cards[I].表.x = Cards[I].x;
            Cards[I].表.y = Cards[I].y;
            Cards[I].表.rotation = Cards[I].rotation;
          };
        };
        if(Point) Label0.text = "ポイント:" + Point;
        else Label0.text = "";
        if(Hand.length){
          Label1.text = Hand[Return_Card].Name;
          Label2.text = "手札:" + Hand.length + "枚";
        }
        else{
          Label1.text = "";
          Label2.text = "";
        };
        if(Deck.length) Label3.text = "デッキ:" + Deck.length + "枚";
        else Label3.text = "";
        if(Cemetery.length) Label4.text = "墓地:" + Cemetery.length + "枚";
        else Label4.text = "";
        if(Except.length) Label5.text = "除外:" + Except.length + "枚";
        else Label5.text = "";
        if(Cards_Move_Check()) return;
        for(var I = 0; I < Cards.length; I++) if(!Cards[I].表.scaleX) delete Cards[I].シンクロ;
        if(game.input.right&&Hand.length){
          Return_Card++;
          if(Return_Card == Hand.length) Return_Card = 0;
          Hand_Set(Hand,width/2,height/2,2);
        };
        if(game.input.left&&Hand.length){
          Return_Card--;
          if(Return_Card < 0) Return_Card = Hand.length - 1;
          Hand_Set(Hand,width/2,height/2,2);
        };
        if(game.input.up){
          if(Shining.ドロー) return;
          Card_Deck(Deck);
          Point_Count = false;
        };
        if(game.input.down){
          Shining.opacity = 0;
          Shining.tl.queue = [];
          Shining.ドロー = false;
          if(!Deck.length) return;
          if(Deck.length > 33 && Point_Count){
            Point += Deck.length - 33;
            Point_Count = false;
          };
          Hand.push(Deck[Deck.length-1]);
          Deck.pop();
          Sound_Play(Draw_SE);
          Hand_Set(Hand,width/2,height/2,4,Hand[Hand.length-1]);
        };
        return;
      });

      function Card_Deck(Deck,C){
        if(!Hand.length) return;
        Deck.push(Hand[Return_Card]);
        Hand.splice(Return_Card,1);
        if(Return_Card == Hand.length) Return_Card--;
        Sound_Play(Draw_SE);
        Hand_Set(Hand,width/2,height/2,4);
        switch(C){
          case "e":
            Deck_Set(Deck,width-KSW*4,height/4,8,C);
            break;
          case "c":
            Deck_Set(Deck,width-KSW*2.5,height/4,8,C);
            break;
          default:
            Deck_Set(Deck,width-KSW,height/4,8);
            break;
        }
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

      return scene;
    };

    function Rand(N){
      return(Math.floor(Math.random()*(N)));
    };

    game.replaceScene(Hand_Cards_Scene());
    return;
};
game.start();
};
