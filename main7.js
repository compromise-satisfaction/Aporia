enchant();

function Game_load(width,height){
  var game = new Game(width,height);
  game.fps = 60;
  game.onload = function(){

    var Moto_Datas = {乗員:15,グノーシア:3,AC:true,バグ:true};
    var Datas = {};
    var Crews = null;
    var HANTEI = null;

    var Main_Scene = function(){
      var scene = new Scene();

      var Buttons = [];

      Button_Set(width/3*0,height-height/10*8,width/3,"エンジニア");
      Button_Set(width/3*1,height-height/10*8,width/3,"ドクター");
      Button_Set(width/3*2,height-height/10*8,width/3,"留守番");
      Button_Set(width/3*0,height-height/10*7,width/3,"消滅");
      Button_Set(width/3*1,height-height/10*7,width/3,"冷凍");
      Button_Set(width/3*2,height-height/10*7,width/3,"「");
      Button_Set(width/3*0,height-height/10*6,width/3,"人間");
      Button_Set(width/3*1,height-height/10*6,width/3,"取り消し");
      Button_Set(width/3*2,height-height/10*6,width/3,"グノーシア");
      Button_Set(width/3*0,height-height/10*5,width/3,"自分");
      Button_Set(width/3*1,height-height/10*5,width/3,"SQ");
      Button_Set(width/3*2,height-height/10*5,width/3,"しげみち");
      Button_Set(width/3*0,height-height/10*4,width/3,"セツ");
      Button_Set(width/3*1,height-height/10*4,width/3,"ジナ");
      Button_Set(width/3*2,height-height/10*4,width/3,"シピ");
      Button_Set(width/3*0,height-height/10*3,width/3,"オトメ");
      Button_Set(width/3*1,height-height/10*3,width/3,"レムナン");
      Button_Set(width/3*2,height-height/10*3,width/3,"沙明");
      Button_Set(width/3*0,height-height/10*2,width/3,"夕里子");
      Button_Set(width/3*1,height-height/10*2,width/3,"ジョナス");
      Button_Set(width/3*2,height-height/10*2,width/3,"ステラ");
      Button_Set(width/3*0,height-height/10*1,width/3,"コメット");
      Button_Set(width/3*1,height-height/10*1,width/3,"ラキオ");
      Button_Set(width/3*2,height-height/10*1,width/3,"ククルシカ");

      var Text1 = "";
      var Text2 = "";

      var Text_Area1 = new Entity();
      Text_Area1.moveTo(0,0);
      Text_Area1.width = width/2;
      Text_Area1.height = height/5;
      Text_Area1._element = document.createElement("textarea");
      Text_Area1._element.type = "textarea";
      Text_Area1._element.placeholder = "発言";
      Text_Area1._element.value = Text1;
      Text_Area1._element.style.fontSize = width/40;
      scene.addChild(Text_Area1);

      var Text_Area2 = new Entity();
      Text_Area2.moveTo(width/2,0);
      Text_Area2.width = width/2;
      Text_Area2.height = height/5;
      Text_Area2._element = document.createElement("textarea");
      Text_Area2._element.type = "textarea";
      Text_Area2._element.placeholder = "確定内容";
      Text_Area2._element.value = Text2;
      Text_Area2._element.style.fontSize = width/40;
      scene.addChild(Text_Area2);

      var What = "";

      function Button_Set(X,Y,W,A){
        var I = Buttons.length;
        Buttons[I] = new Entity();
        Buttons[I].moveTo(X,Y);
        Buttons[I].width = W;
        Buttons[I].height = height/10;
        Buttons[I]._element = document.createElement("input");
        Buttons[I]._element.type = "submit";
        Buttons[I]._element.value = A;
        Buttons[I]._style["font-size"] = height/30;
        Buttons[I].backgroundColor = "buttonface";
        scene.addChild(Buttons[I]);
        Buttons[I]._element.onclick = function(e){
          switch(A){
            case "取り消し":
              if(!Text1) game.replaceScene(Start_Scene());
              Text1 = Text1.replace(/(^|\n)(.+?)$/,"");
              if(Text1) What = "\n";
              else{
                What = "";
                Test1(Text1);
              };
              break;
            case "「":
              Text1 += A;
              What = "";
              break;
            case "グノーシア":
            case "人間":
              Text1 += "は" + A + "」";
              What = "\n";
              break;
            case "消滅":
            case "冷凍":
            case "エンジニア":
            case "ドクター":
            case "留守番":
              Text1 += "が" + A;
              What = "\n";
              break;
            default:
              Text1 += What + A;
              What = "と";
              break;
          };
          switch(What){
            case "\n":
              Test1(Text1);
              break;
          };
          Text_Area1._element.value = Text1;
          return;
        };
      };

      function Test1(Text){
        Datas.数 = {};
        Datas.エンジニア = true;
        Datas.ドクター = true;
        Datas.AC = Moto_Datas.AC;
        Datas.バグ = Moto_Datas.バグ;
        Datas.乗員 = Moto_Datas.乗員;
        Datas.グノーシア = Moto_Datas.グノーシア;
        Crews = {};
        HANTEI = {エンジニア:{},ドクター:{}};
        var Temp = null;
        var S_crews = {};
        var Values = Text.split("\n");
        for(var I = 0; I < Values.length; I++){
          Temp = Values[I].match(/^(.+)「(.+)は(人間|グノーシア)」$/);
          if(Temp){
            Values[I] = {タイプ:"判定",誰が:Temp[1],誰を:Temp[2],"結果":Temp[3]};
            continue;
          };
          Temp = Values[I].match(/^(.+)が(ドクター|エンジニア|消滅|冷凍|CS|凍結|消失|留守番)$/);
          if(Temp){
            switch(Temp[2]){
              case "CS":
              case "凍結":
              case "冷凍":
                Temp[2] = "コールドスリープ";
                break;
              case "消失":
                Temp[2] = "消滅";
                break;
              case "エンジニア":
              case "ドクター":
              case "留守番":
                Temp[3] = Temp[2];
                Temp[2] = "名乗";
                break;
            };
            Values[I] = {タイプ:Temp[2],誰が:Temp[1].split("と")};
            if(Temp[3]) Values[I].結果 = Temp[3];
            continue;
          };
        };
        Values.push([{"タイプ":"終了"}]);
        for(var I = 0; I < Values.length; I++){
          Temp = Values[I];
          if(!Temp) continue;
          Test2(Temp.誰が);
          Test2(Temp.誰を);
          switch(Temp.タイプ){
            case "判定":
              if(!Crews[Temp.誰が].認定){
                Crews[Temp.誰が].認定 = {};
                Crews[Temp.誰が].認定[Temp.誰が] = "人間";
              };
              if(!Crews[Temp.誰を].判定) Crews[Temp.誰を].判定 = {人間:[],グノーシア:[]};
              Crews[Temp.誰が].認定[Temp.誰を] = Temp.結果;
              Crews[Temp.誰を].判定[Temp.結果].push(Temp.誰が);
              if(Crews[Temp.誰が].疑){
                if(Temp.誰を!=Crews[Temp.誰が].疑[0]&&Temp.誰を!=Crews[Temp.誰が].疑[1]){
                  delete Crews[Temp.誰が].役割.エンジニア;
                  delete Crews[Temp.誰が].役割.乗員;
                  Crews[Temp.誰が].敵 = true;
                };
                delete Crews[Temp.誰が].疑;
              };
              break;
            case "CS":
            case "凍結":
            case "冷凍":
            case "コールドスリープ":
              for(var J = 0; J < Temp.誰が.length; J++) Crews[Temp.誰が[J]].ステータス = "コールドスリープ";
              break;
            case "消滅":
            case "消失":
              Temp.タイプ = "消滅";
              if(Temp.誰が.length==2) Temp.タイプ += "二人";
              for(var J = 0; J < Temp.誰が.length; J++){
                delete Crews[Temp.誰が[J]].役割.グノーシア;
                Crews[Temp.誰が[J]].ステータス = Temp.タイプ;
              };
              if(Temp.タイプ=="消滅二人"){
                delete Datas.バグ;
                Temp.タイプ = Object.keys(Crews);
                Temp.エンジニア = [];
                for(var J = 0; J < Temp.タイプ.length; J++){
                  if(Crews[Temp.タイプ[J]].役割.エンジニア&&!Crews[Temp.タイプ[J]].ステータス){
                    Temp.エンジニア.push(Temp.タイプ[J]);
                    Crews[Temp.タイプ[J]].疑 = Temp.誰が;
                  };
                };
                if(Temp.エンジニア.length==1) Crews[Temp.エンジニア[0]].確定 = "エンジニア";
                if(!Crews[Temp.誰が[0]].役割.バグ) Crews[Temp.誰が[1]].確定 = "バグ";
                if(!Crews[Temp.誰が[1]].役割.バグ) Crews[Temp.誰が[0]].確定 = "バグ";
                if(Crews[Temp.誰が[0]].役割.バグ&&Crews[Temp.誰が[1]].役割.バグ){
                  for(var J = 0; J < Temp.タイプ.length; J++){
                    if(Temp.誰が[0]!=Temp.タイプ[J]&&Temp.誰が[0]!=Temp.タイプ[J]) delete Crews[Temp.タイプ[J]].役割.バグ;
                  };
                };
              };
              break;
            case "名乗":
              switch(Temp.結果){
                case "エンジニア":
                case "ドクター":
                  Test3(Temp.誰が,Temp.結果);
                  delete Datas[Temp.結果];
                  for(var J = 0; J < Temp.誰が.length; J++){
                    Crews[Temp.誰が[J]].名乗 = {};
                    Crews[Temp.誰が[J]].名乗[Temp.結果] = true;
                  };
                  break;
                case "留守番":
                  for(var J = 0; J < Temp.誰が.length; J++) Crews[Temp.誰が[J]].確定 = Temp.結果;
                  break;
              };
              break;
          };
          Temp = Object.keys(Crews);
          for(var J = 0; J < Temp.length; J++){
            if(Crews[Temp[J]].確定){
              Crews[Temp[J]].実態 = {};
              Crews[Temp[J]].実態[Crews[Temp[J]].確定] = true;
              Crews[Temp[J]].役割 = Crews[Temp[J]].実態;
              delete Crews[Temp[J]].実態;
              switch(Crews[Temp[J]].確定){
                case "グノーシア":
                case "AC主義者":
                case "バグ":
                  delete Crews[Temp[J]].認定;
                  delete Crews[Temp[J]].判定;
                  Crews[Temp[J]].敵 = true;
                  break;
              };
              for(var K = 0; K < Temp.length; K++){
                if(!Crews[Temp[K]].確定&&Crews[Temp[J]].確定!="グノーシア"){
                  delete Crews[Temp[K]].役割[Crews[Temp[J]].確定];
                };
              };
            };
            if(!HANTEI.エンジニア[Temp[J]]&&!HANTEI.ドクター[Temp[J]]) continue;
            S_crews = JSON.parse(JSON.stringify(Crews));
            if(Crews[Temp[J]].判定){
              for(var K = 0; K < Crews[Temp[J]].判定.グノーシア.length; K++){
                delete S_crews[Crews[Temp[J]].判定.グノーシア[K]].役割.エンジニア;
                delete S_crews[Crews[Temp[J]].判定.グノーシア[K]].役割.ドクター;
                delete S_crews[Crews[Temp[J]].判定.グノーシア[K]].役割.乗員;
                S_crews[Crews[Temp[J]].判定.グノーシア[K]].敵 = true;
              };
            };
            S_crews.Temp = Object.keys(S_crews);
            for(var K = 0; K < S_crews.Temp.length; K++){
              if(Crews[Temp[J]].役割.エンジニア&&S_crews[S_crews.Temp[K]].役割.エンジニア){
                if(HANTEI.エンジニア.数&&Temp[J]!=S_crews.Temp[K]){
                  delete S_crews[S_crews.Temp[K]].役割.エンジニア;
                  delete S_crews[S_crews.Temp[K]].役割.乗員;
                  S_crews[S_crews.Temp[K]].敵 = true;
                };
              };
              if(Crews[Temp[J]].役割.ドクター&&S_crews[S_crews.Temp[K]].役割.ドクター){
                if(HANTEI.ドクター.数&&Temp[J]!=S_crews.Temp[K]){
                  delete S_crews[S_crews.Temp[K]].役割.ドクター;
                  delete S_crews[S_crews.Temp[K]].役割.乗員;
                  S_crews[S_crews.Temp[K]].敵 = true;
                };
              };
              if(Crews[Temp[J]].認定){
                if(S_crews[S_crews.Temp[K]].判定&&Crews[Temp[J]].認定[S_crews.Temp[K]]){
                  for(var L = 0; L < S_crews[S_crews.Temp[K]].判定.グノーシア.length; L++){
                    if(Crews[Temp[J]].認定[S_crews.Temp[K]]=="人間"){
                      delete S_crews[S_crews[S_crews.Temp[K]].判定.グノーシア[L]].役割.エンジニア;
                      delete S_crews[S_crews[S_crews.Temp[K]].判定.グノーシア[L]].役割.ドクター;
                      delete S_crews[S_crews[S_crews.Temp[K]].判定.グノーシア[L]].役割.乗員;
                      S_crews[S_crews[S_crews.Temp[K]].判定.グノーシア[L]].敵 = true;
                    };
                  };
                  for(var L = 0; L < S_crews[S_crews.Temp[K]].判定.人間.length; L++){
                    if(Crews[Temp[J]].認定[S_crews.Temp[K]]=="グノーシア"){
                      delete S_crews[S_crews[S_crews.Temp[K]].判定.人間[L]].役割.エンジニア;
                      delete S_crews[S_crews[S_crews.Temp[K]].判定.人間[L]].役割.ドクター;
                      delete S_crews[S_crews[S_crews.Temp[K]].判定.人間[L]].役割.乗員;
                      S_crews[S_crews[S_crews.Temp[K]].判定.人間[L]].敵 = true;
                    };
                  };
                };
              };
            };
            S_crews.確認 = true;
            while(S_crews.確認){
              S_crews.確認 = false;
              S_crews.エンジニア = 0;
              S_crews.ドクター = 0;
              S_crews.AC主義者 = 0;
              S_crews.バグ = 0;
              S_crews.敵 = 0;
              S_crews.処理グノーシア = 0;
              Datas.数.エンジニア = false;
              Datas.数.ドクター = false;
              Datas.数.グノーシア = 0;
              for(var K = 0; K < S_crews.Temp.length; K++){
                if(S_crews[S_crews.Temp[K]].役割.エンジニア) S_crews.エンジニア++;
                if(S_crews[S_crews.Temp[K]].役割.ドクター) S_crews.ドクター++;
                if(S_crews[S_crews.Temp[K]].敵) S_crews.敵++;
                if(S_crews[S_crews.Temp[K]].確定=="グノーシア"){
                  if(S_crews[S_crews.Temp[K]].ステータス) S_crews.処理グノーシア++;
                  Datas.数.グノーシア++;
                };
                if(S_crews[S_crews.Temp[K]].役割.AC主義者) continue;
                if(S_crews[S_crews.Temp[K]].役割.バグ) continue;
                if(!S_crews[S_crews.Temp[K]].名乗) continue;
                if(!S_crews[S_crews.Temp[K]].役割.グノーシア) continue;
                if(S_crews[S_crews.Temp[K]].名乗.エンジニア){
                  S_crews[S_crews.Temp[K]].疑惑 = true;
                  if(Datas.数.エンジニア) Datas.数.グノーシア++;
                  else Datas.数.エンジニア = true;
                };
                if(S_crews[S_crews.Temp[K]].名乗.ドクター){
                  S_crews[S_crews.Temp[K]].疑惑 = true;
                  if(Datas.数.ドクター) Datas.数.グノーシア++;
                  else Datas.数.ドクター = true;
                };
              };
              if(Datas.数.グノーシア > Datas.グノーシア || S_crews.処理グノーシア >= Datas.グノーシア){
                Crews[Temp[J]].敵 = true;
                break;
              };
              if(Datas.数.グノーシア==Datas.グノーシア){
                for(var K = 0; K < S_crews.Temp.length; K++){
                  if(S_crews[S_crews.Temp[K]].疑惑) continue;
                  if(S_crews[S_crews.Temp[K]].確定=="グノーシア") continue;
                  delete S_crews[S_crews.Temp[K]].役割.グノーシア;
                  if(!Crews[Temp[J]].認定) Crews[Temp[J]].認定 = {};
                  Crews[Temp[J]].認定[S_crews.Temp[K]] = "人間";
                };
              };
            };
            if(HANTEI.エンジニア.数&&!S_crews.エンジニア) Crews[Temp[J]].敵 = true;
            if(HANTEI.ドクター.数&&!S_crews.ドクター) Crews[Temp[J]].敵 = true;
            if(Crews[Temp[J]].敵){
              delete HANTEI.エンジニア[Temp[J]];
              delete HANTEI.ドクター[Temp[J]];
              delete Crews[Temp[J]].役割.エンジニア;
              delete Crews[Temp[J]].役割.ドクター;
              delete Crews[Temp[J]].役割.乗員;
              delete Crews[Temp[J]].判定;
              delete Crews[Temp[J]].認定;
            };
          };
          Datas.数.グノーシア = [];
          Datas.数.エンジニア = [];
          Datas.数.ドクター = [];
          Datas.数.AC主義者 = [];
          Datas.数.バグ = [];
          for(var J = 0; J < Temp.length; J++){
            if(Crews[Temp[J]].役割.グノーシア) Datas.数.グノーシア.push(Temp[J]);
            if(Crews[Temp[J]].役割.エンジニア) Datas.数.エンジニア.push(Temp[J]);
            if(Crews[Temp[J]].役割.ドクター) Datas.数.ドクター.push(Temp[J]);
            if(Crews[Temp[J]].役割.AC主義者) Datas.数.AC主義者.push(Temp[J]);
            if(Crews[Temp[J]].役割.バグ) Datas.数.バグ.push(Temp[J]);
          };
          if(Datas.数.グノーシア.length==Datas.グノーシア);
          if(Datas.数.エンジニア.length==1&&!Datas.エンジニア) Crews[Datas.数.エンジニア[0]].確定 = "エンジニア";
          if(Datas.数.ドクター.length==1&&!Datas.ドクター) Crews[Datas.数.ドクター[0]].確定 = "ドクター";
          if(Datas.数.AC主義者.length==1&&Temp.length==Datas.乗員) Crews[Datas.数.AC主義者[0]].確定 = "AC主義者";
          if(Datas.数.バグ.length==1&&!Datas.バグ) Crews[Datas.数.バグ[0]].確定 = "バグ";
          for(var J = 0; J < Temp.length; J++){
            switch(Crews[Temp[J]].確定){
              case "エンジニア":
              case "ドクター":
                HANTEI["真"+Crews[Temp[J]].確定] = Temp[J];
                break;
            };
          };
          for(var J = 0; J < Temp.length; J++){
            if(HANTEI.真エンジニア){
              if(Crews[HANTEI.真エンジニア].認定){
                switch(Crews[HANTEI.真エンジニア].認定[Temp[J]]){
                  case "人間":
                    if(Crews[Temp[J]].ステータス!="消滅"||!Crews[Temp[J]].役割.バグ) Crews[Temp[J]].人間 = true;
                    delete Crews[Temp[J]].役割.グノーシア;
                    break;
                  case "グノーシア":
                    Crews[Temp[J]].確定 = "グノーシア";
                    break;
                };
              };
            };
            if(HANTEI.真ドクター){
              if(Crews[HANTEI.真ドクター].認定){
                switch(Crews[HANTEI.真ドクター].認定[Temp[J]]){
                  case "人間":
                    if(!Crews[Temp[J]].役割.バグ) Crews[Temp[J]].人間 = true;
                    delete Crews[Temp[J]].役割.グノーシア;
                    break;
                  case "グノーシア":
                    Crews[Temp[J]].確定 = "グノーシア";
                    break;
                };
              };
            };
            if(Object.keys(Crews[Temp[J]].役割).length==1) Crews[Temp[J]].確定 = Object.keys(Crews[Temp[J]].役割)[0];
          };
        };
        Text = "";
        for(var I = 0; I < Temp.length; I++){
          if(Crews[Temp[I]].確定||Crews[Temp[I]].敵||Crews[Temp[I]].人間){
            if(Crews[Temp[I]].ステータス&&Moto_Datas.除外) continue;
            if(Crews[Temp[I]].確定!="留守番"){
              if(Text) Text += "\n";
              if(Crews[Temp[I]].確定){
                Text += Temp[I] + "は絶対に" + Crews[Temp[I]].確定 + "だ";
                continue;
              };
              if(Crews[Temp[I]].人間){
                Text += Temp[I] + "は絶対に人間だ";
                continue;
              };
              if(Crews[Temp[I]].敵) Text += Temp[I] + "は絶対に敵だ";
            };
          };
        };
        Text_Area2._element.value = Text;
        return;
      };

      function Test2(A){
        if(!A) return;
        if(typeof(A)=="string") A = [A];
        for(var I = 0; I < A.length; I++){
          if(!Crews[A[I]]){
            Crews[A[I]] = {役割:{グノーシア:true,乗員:true}};
            if(Datas.エンジニア) Crews[A[I]].役割.エンジニア = true;
            if(Datas.ドクター) Crews[A[I]].役割.ドクター = true;
            if(Datas.AC) Crews[A[I]].役割.AC主義者 = true;
            if(Datas.バグ) Crews[A[I]].役割.バグ = true;
          };
        };
        return;
      };

      function Test3(A,B){
        var C = "エンジニア";
        if(B=="エンジニア") C = "ドクター";
        var D = Object.keys(Crews);
        for(var I = 0; I < A.length; I++) HANTEI[B][A[I]] = true;
        for(var I = 0; I < D.length; I++){
          if(HANTEI[B][D[I]]) delete Crews[D[I]].役割[C];
          else if(!Crews[D[I]].ステータス&&Crews[D[I]].役割) delete Crews[D[I]].役割[B];
        };
        HANTEI[B].数 = Object.keys(HANTEI[B]).length;
        return;
      };

      scene.addEventListener("enterframe",function(e){
        if(Text1!=Text_Area1._element.value){
          Text1 = Text_Area1._element.value;
          Test1(Text1);
        };
        return;
      });

      return scene;
    };

    var Start_Scene = function(){
      var scene = new Scene();

      var Label1 = new Label();
      Label1.x = 0;
      Label1.y = height/20*1;
      Label1.font = height/20 + "px 'Arial'";
      Label1.text = "乗員:" + Moto_Datas.乗員;
      Label1.width = width;
      scene.addChild(Label1);

      var Label2 = new Label();
      Label2.x = 0;
      Label2.y = height/20*2;
      Label2.font = height/20 + "px 'Arial'";
      Label2.text = "グノーシア:"  + Moto_Datas.グノーシア;
      Label2.width = width;
      scene.addChild(Label2);

      var Label3 = new Label();
      Label3.x = 0;
      Label3.y = height/20*3;
      Label3.font = height/20 + "px 'Arial'";
      if(Moto_Datas.AC) Label3.text = "AC主義者:あり";
      else Label3.text = "AC主義者:なし";
      Label3.width = width;
      scene.addChild(Label3);

      var Label4 = new Label();
      Label4.x = 0;
      Label4.y = height/20*4;
      Label4.font = height/20 + "px 'Arial'";
      if(Moto_Datas.バグ) Label4.text = "バグ:あり";
      else Label4.text = "バグ:なし";
      Label4.width = width;
      scene.addChild(Label4);

      var Label5 = new Label();
      Label5.x = 0;
      Label5.y = height/20*5;
      Label5.font = height/20 + "px 'Arial'";
      if(Moto_Datas.除外) Label5.text = "消滅,冷凍者除外:する";
      else Label5.text = "消滅,冷凍者除外:しない";
      Label5.width = width;
      scene.addChild(Label5);

      var Buttons = [];

      Button_Set(0,height-height/10*1,width,"開始");
      Button_Set(0,height-height/10*2,width,"バグ");
      Button_Set(0,height-height/10*3,width,"AC主義者");
      Button_Set(0,height-height/10*4,width/2,"グノ+");
      Button_Set(width/2,height-height/10*4,width/2,"グノ-");
      Button_Set(0,height-height/10*5,width/2,"乗員+");
      Button_Set(width/2,height-height/10*5,width/2,"乗員-");
      Button_Set(0,height-height/10*6,width,"除外");

      function Button_Set(X,Y,W,A){
        var I = Buttons.length;
        Buttons[I] = new Entity();
        Buttons[I].moveTo(X,Y);
        Buttons[I].width = W;
        Buttons[I].height = height/10;
        Buttons[I]._element = document.createElement("input");
        Buttons[I]._element.type = "submit";
        Buttons[I]._element.value = A;
        Buttons[I]._style["font-size"] = height/15;
        Buttons[I].backgroundColor = "buttonface";
        scene.addChild(Buttons[I]);
        Buttons[I]._element.onclick = function(e){
          switch(A){
            case "除外":
            case "バグ":
            case "AC主義者":
              Moto_Datas[A.slice(0,2)] = !Moto_Datas[A.slice(0,2)];
              break;
            case "乗員+":
              Moto_Datas.乗員++;
              break;
            case "乗員-":
              Moto_Datas.乗員--;
              break;
            case "グノ+":
              Moto_Datas.グノーシア++;
              break;
            case "グノ-":
              Moto_Datas.グノーシア--;
              break;
            case "開始":
              game.replaceScene(Main_Scene());
              break;
            default:
              break;
          };
          Label1.text = "乗員:" + Moto_Datas.乗員;
          Label2.text = "グノーシア:" + Moto_Datas.グノーシア;
          if(Moto_Datas.AC) Label3.text = "AC主義者:あり";
          else Label3.text = "AC主義者:なし";
          if(Moto_Datas.バグ) Label4.text = "バグ:あり";
          else Label4.text = "バグ:なし";
          if(Moto_Datas.除外) Label5.text = "消滅,冷凍者除外:する";
          else Label5.text = "消滅,冷凍者除外:しない";
          return;
        };
        return;
      };

      return scene;
    };

    game.replaceScene(Start_Scene());
    return;
  };
  game.start();
};
