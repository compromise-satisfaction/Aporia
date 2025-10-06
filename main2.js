enchant();

function Game_load(width,height){
  var game = new Game(width,height);
  game.fps = 60;
  game.onload = function(){


    var Scene_s = {};
    var New_Scene = false;
    var Big_Card_src = null;
    var Keydown_P = 1;
    var Scene_Change = 0;
    function Play_Scene_Set(Name){
      New_Scene = false;
      if(Scene_s[Name]) return(Scene_s[Name]);
      else{
        New_Scene = true;
        Scene_s[Name] = new Scene();
      };
      return(Scene_s[Name]);
    };

    var Big_Card_Scene = function(W,H){
      var scene = Play_Scene_Set("画像拡大");
      if(!New_Scene) return scene;

      var Background = new Entity();
      Background._element = document.createElement("img");
      Background._element.src = "https://raw.githubusercontent.com/compromise-satisfaction/novel_game/gh-pages/画像/半透明(黒).png";
      Background.width = width;
      Background.height = height;

      var Card = new Entity();
      Card._element = document.createElement("img");
      Card._element.src = Big_Card_src;
      Card.width = width;
      Card.height = width / W * H;
      if(Card.height < height) Card.y = (height - Card.height) / 2;
      else{
        Card.height = height;
        Card.width = height / H * W;
        Card.x = (width - Card.width) / 2;
      };

      scene.addChild(Background);
      scene.addChild(Card);

      window.addEventListener("keydown",function(e){
        if(Keydown_P!=2||Scene_Change) return;
        switch(e.key){
          case " ":
            Keydown_P = 1;
            Scene_Change = 5;
            game.popScene();
            break;
          case "b":
            if(Card.tl.queue.length) return;
            if(Card.y){
              Card.tl.moveTo(Card.x,0,5);
              Card.tl.and();
              Card.tl.scaleTo(1,1,5);
            }
            else{
              Card.tl.moveTo(Card.x,75,5);
              Card.tl.and();
              Card.tl.scaleTo(1.8,1.8,5);
            };
            break;
          default:
            console.log(e.key);
            break;
        };
        return;
      });

      scene.addEventListener("enterframe",function(e){
        if(Card._element.src != Big_Card_src) Card._element.src = Big_Card_src;
        if(Scene_Change){
          Scene_Change--;
          if(Scene_Change < 0) Scene_Change = 0;
          return;
        };
        return;
      });

      return scene;
    };
    var Hand_Cards_Scene = function(){
      var scene = new Scene();

      var S = 1.8;
      var KSW = 212/S;
      var KSH = 310/S;
      var Cards = [];
      var Images = [];

      var MANNAKA_X = width/2-KSW/2;
      var MANNAKA_Y = height/2-KSH/2;

      for(var I = 0; I < Card_Name.length; I++) Cards.push(Create_Image(0,0,KSW,KSH,Card_Name[I]));

      for(var I = 0; I < Cards.length; I++){
        scene.addChild(Cards[I].表);
        scene.addChild(Cards[I].裏);
        scene.addChild(Cards[I]);
        Cards[I].面 = "裏";
        Temp = width - KSW;
        Temp /= (Cards.length - 1);
        Temp *= I;
        Cards[I].moveTo(Temp,MANNAKA_Y);
      };

      var Shining = {};

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

      function Create_Image(X,Y,W,H,Data){
        var I = Images.length;
        Images[I] = new Entity();
        Images[I].moveTo(X,Y);
        Images[I].width = W;
        Images[I].height = H;
        Images[I]._element = document.createElement("img");
        Images[I]._element.src = "image/シャイニング.png";
        Images[I].キーカード = Data[3];
        Images[I].opacity = 0;
        if(Data[4]) Images[I].Number = JSON.stringify(Data[4]);
        else Images[I].Number = JSON.stringify(I);
        Images[I].名前 = Data[0];
        Images[I].表 = new Entity();
        Images[I].表.moveTo(X,Y);
        Images[I].表.width = W;
        Images[I].表.height = H;
        Images[I].表._element = document.createElement("img");
        Images[I].表._element.src = Data[1];
        Images[I].裏 = new Entity();
        Images[I].裏.moveTo(X,Y);
        Images[I].裏.width = W;
        Images[I].裏.height = H;
        Images[I].裏._element = document.createElement("img");
        Images[I].裏._element.src = Data[2];
        while(Images[I].Number.length<10) Images[I].Number = "0" + Images[I].Number;
        Images[I].初期 = {X:X,Y:Y,Y:Y,W:W,H:H};
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

      function Z_axis(IMAGES,A){
        for(var I = 0; I < IMAGES.length; I++){
          scene.removeChild(IMAGES[I].表);
          scene.removeChild(IMAGES[I].裏);
          scene.removeChild(IMAGES[I]);
          if(IMAGES[I].面=="表"&&!A) scene.addChild(IMAGES[I].裏);
          scene.addChild(IMAGES[I].表);
          scene.addChild(IMAGES[I].裏);
          scene.addChild(IMAGES[I]);
        };
        return;
      };

      function Deck_Set(Deck,XX,YY,t,C){
        for(var I = 0; I < Deck.length; I++){
          Deck[I].tl.moveTo(XX-KSW/2+I/2,YY-KSH/2-I/2,t);
          Deck[I].tl.and();
          Deck[I].tl.rotateTo(0,t);
          switch(C){
            default:
              Card_Flip(Deck[I],"裏",t);
              break;
            case "c":
              delete Deck[I].面固定;
            case "e":
              Card_Flip(Deck[I],"表",t);
              break;
          };
        };
        Z_axis(Deck,true);
        return;
      };

      var Hand_F_B = "表";

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
            Card_Flip(Hand[0],Hand_F_B,t);
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
          if(I==Return_Card) Y -= KSH/8;
          Hand[I].tl.moveTo(X,Y,t);
          Hand[I].tl.and();
          Hand[I].tl.rotateTo(r,t);
          Card_Flip(Hand[I],Hand_F_B,t);
        };
        Z_axis(Hand);
        return;
      };

      function Card_Flip(Target,A,t){
        if(Target.面固定) if(Target.面固定!=A) return;
        if(Target.面==A) return;
        Target.面 = A;
        Target.裏.tl.scaleTo(0,1,t/2);
        Target.裏.tl.scaleTo(1,1,t/2);
        Target.表.tl.scaleTo(0,1,t/2);
        Target.表.tl.scaleTo(1,1,t/2);
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
      var Big_SE = Create_SE("sound/4.mp3",1);
      var Put_SE = Create_SE("sound/1.mp3",2);
      var Draw_SE = Create_SE("sound/2.mp3",3);
      var Shuffle_SE = Create_SE("sound/3.mp3",4);

      var Voices = [];
      Voices.push(Create_SE("sound/1.wav",5));
      Voices.push(Create_SE("sound/2.wav",6));

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
        Z_axis(Deck);
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
      var Opacity = false;
      var Point_Count = false;

      window.addEventListener("keydown",function(e){
        if(Cards_Move_Check()||Shining.ドロー||Keydown_P!=1||Scene_Change) return;
        switch(e.key){
          case "o":
            Opacity = false;
            break;
          case "O":
            Opacity = true;
            break;
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
            Deck_Set(Cemetery,width-KSW*2.5,height/4,20,"c");
            break;
          case "N":
            if(!Deck.length) return;
            for(var I = 0; I < 5; I++){
              if(!Deck.length) break;
              Except.push(Deck[Deck.length-1]);
              Deck.pop();
            };
            Deck_Set(Except,width-KSW*4,height/4,20,"e");
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
            Hand_Set(Hand,width/2,height/2,10,Hand[Hand.length-1]);
            break;
          case "d":
            if(!Hand.length) return;
            Temp = 1;
            for(var I = 0; I < Hand.length; I++){
              if(Hand[I].名前=="絶望神アンチホープ") Temp++;
              else Temp = 0;
              if(Hand[I].名前=="天の川コズミックワンショルダー"&&!I) Temp = "アイカツ";
              Cemetery.push(Hand[I]);
            };
            Hand = [];
            switch(Temp){
              case 4:
                Temp = Voices[0];
                break;
              case "アイカツ":
                Temp = Voices[1];
                break;
              default:
                Temp = Draw_SE;
                break;
            };
            Sound_Play(Temp);
            Deck_Set(Cemetery,width-KSW*2.5,height/4,20,"c");
            break;
          case "q":
          if(Hand_F_B=="表") return;
            Hand_F_B = "表";
            Hand_Set(Hand,width/2,height/2,20);
            break;
          case "w":
          if(Hand_F_B=="裏") return;
            Hand_F_B = "裏";
            Hand_Set(Hand,width/2,height/2,20);
            break;
          case "r":
            if(!Cemetery.length) return;
            for(var I = Cemetery.length; I > 0; I--) Deck.push(Cemetery[I-1]);
            Cemetery = [];
            Deck_Set(Deck,width-KSW,height/4,20);
            break;
          case "R":
            if(!Hand.length) return;
            for(var I = 0; I < Hand.length; I++) Deck.push(Hand[I]);
            Hand = [];
            Hand_Set(Hand,width/2,height/2,6);
            Deck_Set(Deck,width-KSW,height/4,20);
            break;
          case "c":
            Card_Deck(Cemetery,"c");
            break;
          case "C":
            Card_Deck(Except,"e");
            break;
          case "T":
            if(!Deck.length) return;
            if(Shining_Draw.length){
              Temp = Rand(Shining_Draw.length);
              Temp = [Shining_Draw[Temp],Temp];
              Shining_Draw.splice(Temp[1],1);
              Temp = Temp[0];
              Temp = Create_Image(Deck[Deck.length-1].x,Deck[Deck.length-1].y,KSW,KSH,Temp);
              Temp.面 = "裏";
              scene.addChild(Temp.表);
              scene.addChild(Temp.裏);
              scene.addChild(Temp);
              Cards.push(Temp);
              Deck.push(Temp);
            };
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
              Temp = Create_Image(Deck[Deck.length-1].x,Deck[Deck.length-1].y,KSW,KSH,Temp);
              Temp.面 = "裏";
              Shining.ドロー = true;
              Temp.シャイニングドロー = true;
              Cards.push(Temp);
              Deck.unshift(Temp);
            };
          case "b":
          case "s":
          case "S":
            if(!Deck.length) return;
            Deck_Shuffle(Deck,6,e.key);
            break;
          case "e":
            if(!Hand.length) return;
            delete Hand[Return_Card].面固定;
            Card_Flip(Hand[Return_Card],Hand_F_B,8);
            break;
          case "v":
          if(!Hand.length) return;
            Hand[Return_Card].面固定 = "裏";
            Card_Flip(Hand[Return_Card],"裏",8);
            break;
          case "V":
            if(!Hand.length) return;
            Hand[Return_Card].面固定 = "表";
            Card_Flip(Hand[Return_Card],"表",8);
            break;
          case "x":
            if(!Cemetery.length) return;
            Deck.push(Cemetery[Cemetery.length-1]);
            Cemetery.pop();
            Sound_Play(Draw_SE);
            Deck_Set(Deck,width-KSW,height/4,20);
            break;
          case "z":
            if(!Except.length) return;
            Deck.push(Except[Except.length-1]);
            Except.pop();
            Sound_Play(Draw_SE);
            Deck_Set(Deck,width-KSW,height/4,20);
            break;
          case " ":
            if(!Hand.length) return;
            Big_Card_src = Hand[Return_Card].表._element.src;
            Keydown_P = 2;
            Scene_Change = 5;
            Sound_Play(Big_SE);
            game.pushScene(Big_Card_Scene(KSW,KSH));
            break;
          default:
            console.log(e.key);
            break;
        };
      });

      scene.addEventListener("enterframe",function(e){
        if(Scene_Change){
          Scene_Change--;
          if(Scene_Change < 0) Scene_Change = 0;
          return;
        };
        if(Shining.ドロー){
          if(!Deck[Deck.length-1].tl.queue.length){
            Deck[Deck.length-1].tl.fadeOut(5);
            Deck[Deck.length-1].tl.fadeIn(15);
          };
        };
        for(var I = 0; I < Cards.length; I++){
          if(!Cards[I].表.scaleX&&!Cards[I].裏.scaleX){
            if(Cards[I].裏.opacity) Cards[I].裏.opacity = 0;
            else Cards[I].裏.opacity = 1;
          };
          Cards[I].表.x = Cards[I].x;
          Cards[I].表.y = Cards[I].y;
          Cards[I].表.rotation = Cards[I].rotation;
          Cards[I].裏.x = Cards[I].x;
          Cards[I].裏.y = Cards[I].y;
          Cards[I].裏.rotation = Cards[I].rotation;
        };
        if(Point) Label0.text = "ポイント:" + Point;
        else Label0.text = "";
        if(Hand.length){
          Label1.text = Hand[Return_Card].名前;
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
        if(Cards_Move_Check()&&!Shining.ドロー) return;
        for(var I = 0; I < Hand.length; I++){
          break;
          if(I==Return_Card) Hand[I].opacity = 0.5;
          else Hand[I].opacity = 0;
        };
        if(game.input.right&&Hand.length){
          Return_Card++;
          if(Return_Card == Hand.length) Return_Card = 0;
          Hand_Set(Hand,width/2,height/2,6);
        };
        if(game.input.left&&Hand.length){
          Return_Card--;
          if(Return_Card < 0) Return_Card = Hand.length - 1;
          Hand_Set(Hand,width/2,height/2,6);
        };
        if(game.input.up){
          if(Shining.ドロー) return;
          Card_Deck(Deck);
          Point_Count = false;
        };
        if(game.input.down){
          Shining.ドロー = false;
          if(!Deck.length) return;
          Deck[Deck.length-1].opacity = 0;
          Deck[Deck.length-1].tl.queue = [];
          if(Deck.length > 33 && Point_Count){
            Point += Deck.length - 33;
            Point_Count = false;
          };
          Hand.push(Deck[Deck.length-1]);
          Deck.pop();
          Sound_Play(Draw_SE);
          Hand_Set(Hand,width/2,height/2,10,Hand[Hand.length-1]);
        };
        return;
      });

      function Card_Deck(Deck,C){
        if(!Hand.length) return;
        Deck.push(Hand[Return_Card]);
        Temp = Hand[Return_Card];
        Hand.splice(Return_Card,1);
        if(Return_Card == Hand.length) Return_Card--;
        Sound_Play(Draw_SE);
        Hand_Set(Hand,width/2,height/2,10);
        switch(C){
          case "e":
            Deck_Set(Deck,width-KSW*4,height/4,20,C);
            break;
          case "c":
            Deck_Set(Deck,width-KSW*2.5,height/4,20,C);
            break;
          default:
            Deck_Set(Deck,width-KSW,height/4,20);
            break;
        }
        return;
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
