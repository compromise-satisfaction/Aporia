enchant();

function Game_load(width,height){
  var game = new Game(width,height);
  game.fps = 60;
  game.onload = function(){

    var Now_Scene = null;
    var Scenes = {};
    var Labels = {};
    var Buttons = {};
    var Text_Areas = {};
    var Texts = {};
    var What = "";
    var Player_Name = window.localStorage.getItem("自分");
    if(!Player_Name) Player_Name = "よっちー";
    var B_font = [];

    function SET_color(){
      var MMM = "break";
      var BBB = "buttonface";
      var Temp = Object.keys(Buttons);
      for(var I = 0; I < Temp.length; I++){
        MMM = "black";
        BBB = "buttonface";
        if(Temp[I]=="(自分)") Buttons[Temp[I]]._element.value = Player_Name;
        Buttons[Temp[I]]._style.color = MMM;
        Buttons[Temp[I]].backgroundColor = BBB;
        if(Temp[I]=="(自分)") Temp[I] = Player_Name;
        if(!Datas.乗員番号) continue;
        if(!Datas.乗員番号[Temp[I]]) continue;
        if(Datas.乗員データ[Datas.乗員番号[Temp[I]]]){
          if(Datas.乗員データ[Datas.乗員番号[Temp[I]]].人間) BBB = "yellow";
          if(Datas.乗員データ[Datas.乗員番号[Temp[I]]].敵) BBB = "orange";
          switch(Datas.乗員データ[Datas.乗員番号[Temp[I]]].確定){
            case "グノーシア":
              BBB = "red";
              break;
            case "バグ":
              BBB = "gray";
              break;
            case "AC主義者":
              BBB = "pink";
              break;
            case "エンジニア":
              BBB = "lightblue";
              break;
            case "ドクター":
              BBB = "purple";
              break
            case "留守番":
              BBB = "#d9ffc9";
              break;
            case "乗員":
              BBB = "green";
              break;
          };
          switch(Datas.乗員データ[Datas.乗員番号[Temp[I]]].ステータス){
            case "消滅":
            case "消滅二人":
              MMM = "red";
              break;
            case "コールドスリープ":
              MMM = "blue";
              break;
          };
        };
        if(Temp[I]==Player_Name) Temp[I] = "(自分)";
        Buttons[Temp[I]]._style.color = MMM;
        Buttons[Temp[I]].backgroundColor = BBB;
      };
      Text_Areas.矛盾内容._element.value = Datas.矛盾内容;
      Text_Areas.確定内容._element.value = Datas.確定内容;
      return;
    };

    function Button_Set_Again(){
      var Number = [{},{},{}];
      var Set_B = [];
      var Temp = Object.keys(Buttons);
      for(var I = 0; I < Temp.length; I++){
        if(!Datas.乗員番号) continue;
        if(!Datas.乗員番号[Temp[I]]) continue;
        if(Datas.乗員データ[Datas.乗員番号[Temp[I]]]){
          switch(Datas.乗員データ[Datas.乗員番号[Temp[I]]].ステータス){
            case undefined:
              Number[0][Temp[I]] = true;
              break;
            case "コールドスリープ":
              Number[1][Temp[I]] = true;
              break;
            case "消滅":
              Number[2][Temp[I]] = true;
              break;
          }
        };
      };
      for(var I = 11; I < B_font.length; I++){
        if(Number[0][B_font[I]]||(!Number[1][B_font[I]]&&!Number[2][B_font[I]])){
          if(Number[0][B_font[I]]) Set_B.push(B_font[I]);
          else{
            if(Object.keys(Datas.乗員番号).length!=Datas.乗員数データ.乗員){
              Set_B.push(B_font[I]);
            };
          };
        };
      };
      for(var I = 11; I < B_font.length; I++) if(Number[1][B_font[I]]) Set_B.push(B_font[I]);
      for(var I = 11; I < B_font.length; I++) if(Number[2][B_font[I]]) Set_B.push(B_font[I]);
      for(var I = 11; I < B_font.length; I++) Buttons[B_font[I]].moveTo(height*2,height*2);
      var J = 1;
      var K = 3;
      for(var I = 0; I < Set_B.length; I++){
        Buttons[Set_B[I]].moveTo(width/5*J,height-height/10*K);
        J++;
        if(J>4){
          K--;
          J = 0;
        };
      };
      return;
    };

    function Text_Area_Set(X,I){
      X = width/3*X;
      Texts[I] = "";
      Text_Areas[I] = new Entity();
      Text_Areas[I].moveTo(X,height/5);
      Text_Areas[I].width = width/3;
      Text_Areas[I].height = height/2;
      Text_Areas[I]._element = document.createElement("textarea");
      Text_Areas[I]._element.type = "textarea";
      Text_Areas[I]._element.placeholder = I;
      Text_Areas[I]._element.value = Texts[I];
      Text_Areas[I]._element.style.fontSize = width/40;
      Scenes[Now_Scene].addChild(Text_Areas[I]);
      return;
    };

    function Label_Set(I,Y){
      Labels[I] = new Label();
      Labels[I].x = 0;
      Labels[I].y = height/20*Y;
      Labels[I].font = height/20 + "px 'Arial'";
      Labels[I].text = Texts[I];
      Labels[I].width = width;
      Scenes[Now_Scene].addChild(Labels[I]);
      return;
    };

    function Button_Set(X,Y,W,I){
      if(Now_Scene=="メイン") X = width/5*X;
      else if(X) X = width/X;
      W = width/W;
      Buttons[I] = new Entity();
      Buttons[I].moveTo(X,height-height/10*Y);
      Buttons[I].width = W;
      Buttons[I].height = height/10;
      Buttons[I]._element = document.createElement("input");
      Buttons[I]._element.type = "submit";
      Buttons[I]._element.Name = I;
      Buttons[I]._element.value = I;
      if(Now_Scene=="メイン") Buttons[I]._style["font-size"] = height/(30*Tate);
      else Buttons[I]._style["font-size"] = height/20;
      Buttons[I].backgroundColor = "buttonface";
      Scenes[Now_Scene].addChild(Buttons[I]);
      Buttons[I]._element.onclick = function(e){
        if(I=="(自分)") I = Player_Name;
        switch(I){
          case "エンジニア切替":
            Datas.乗員数データ.エンジニア = !Datas.乗員数データ.エンジニア;
            break;
          case "ドクター切替":
            Datas.乗員数データ.ドクター = !Datas.乗員数データ.ドクター;
            break;
          case "除外":
          case "バグ":
          case "AC主義者":
          case "守護天使":
            Datas.乗員数データ[I] = !Datas.乗員数データ[I];
            break;
          case "乗員+":
            if(Datas.乗員数データ.乗員 < 15) Datas.乗員数データ.乗員++;
            break;
          case "乗員-":
            if(Datas.乗員数データ.乗員 > 5) Datas.乗員数データ.乗員--;
            break;
          case "グノ+":
            if(Datas.乗員数データ.グノーシア < 6) Datas.乗員数データ.グノーシア++;
            break;
          case "グノ-":
            if(Datas.乗員数データ.グノーシア > 1) Datas.乗員数データ.グノーシア--;
            break;
          case "開始":
            game.replaceScene(Main_Scene());
            break;
          case "取り消し":
            if(!Texts.日誌){
              game.replaceScene(Start_Scene());
              return;
            };
            Texts.日誌 = Texts.日誌.replace(/(^|\n)(.+?)$/,"");
            if(Texts.日誌) What = "\n";
            else{
              What = "";
              Test(Texts.日誌);
            };
            break;
          case "「":
            Texts.日誌 += I;
            if(Datas.冷凍[0]){
              if(Datas.乗員データ[Datas.乗員番号[Datas.冷凍[Datas.冷凍.length-1].発言]].役割.ドクター){
                if(!Datas.冷凍[Datas.冷凍.length-1].誰が[1]){
                  Texts.日誌 += Datas.乗員名[Datas.冷凍[Datas.冷凍.length-1].誰が[0]].名前;
                };
              };
            };
            What = "";
            break;
          case "グノーシア":
            Texts.日誌 += "はグノーシア」";
            What = "\n";
            break;
          case "全員":
          case "自分だけ":
            Datas.自分 = !Datas.自分;
            if(Buttons[I]._element.value=="全員") Buttons[I]._element.value = "自分だけ";
            else Buttons[I]._element.value = "全員";
            break;
          case "人間・留守番":
            if(Texts.日誌.match(/\n[^\n]+?「[^\n]+?$/)) Texts.日誌 += "は人間」";
            else Texts.日誌 += "が留守番";
            What = "\n";
            break;
          case "消滅":
            if(What == "\n") Texts.日誌 += "\n消滅無し";
            else Texts.日誌 += "が" + I;
            What = "\n";
            break;
          case "冷凍":
          case "エンジニア":
          case "ドクター":
          case "留守番":
          case "嘘":
            Texts.日誌 += "が" + I;
            What = "\n";
            break;
          default:
            if(Datas.冷凍[0]) Datas.冷凍[Datas.冷凍.length-1].発言 = I;
            if(Datas.乗員データ[I]) console.log(Datas.乗員データ[I]);
            Texts.日誌 += What + I;
            What = "と";
            break;
        };
        if(What=="\n") Test(Texts.日誌);
        if(Now_Scene=="メイン"){
          Text_Areas.日誌._element.value = Texts.日誌;
          window.localStorage.setItem("日誌",Texts.日誌);
          window.localStorage.setItem("乗員",JSON.stringify(Datas.乗員数データ));
          SET_color();
          Button_Set_Again();
        };
        if(Datas.プレイヤー名){
          Text_Areas.日誌._element.value = Text_Areas.日誌._element.value.replaceAll(Player_Name,Datas.プレイヤー名);
          Player_Name = Datas.プレイヤー名;
          delete Datas.プレイヤー名;
          window.localStorage.setItem("自分",Player_Name);
        };
        return;
      };
    };

    var Start_Scene = function(){
      Now_Scene = "スタート";
      if(!Scenes[Now_Scene]) Scenes[Now_Scene] = new Scene();
      else return(Scenes[Now_Scene]);

      Label_Set("乗員",1);
      Label_Set("グノーシア",2);
      Label_Set("エンジニア",3);
      Label_Set("ドクター",4);
      Label_Set("守護天使",5);
      Label_Set("AC主義者",6);
      Label_Set("バグ",7);
      Label_Set("除外",8);

      Button_Set(0,1,2,"開始",15);
      Button_Set(2,2,2,"バグ",15);
      Button_Set(0,2,2,"AC主義者",15);
      Button_Set(0,3,2,"グノ+",15);
      Button_Set(2,3,2,"グノ-",15);
      Button_Set(0,4,2,"乗員+",15);
      Button_Set(2,4,2,"乗員-",15);
      Button_Set(0,5,2,"エンジニア切替",15);
      Button_Set(2,5,2,"ドクター切替",15);
      Button_Set(2,6,2,"除外",15);
      Button_Set(2,1,2,"守護天使",15);

      Scenes[Now_Scene].addEventListener("enterframe",function(e){
        Labels.乗員.text = "乗員:" + Datas.乗員数データ.乗員;
        Labels.グノーシア.text = "グノーシア:" + Datas.乗員数データ.グノーシア;
        Labels.エンジニア.text = "エンジニア:";
        Labels.ドクター.text = "ドクター:";
        Labels.AC主義者.text = "AC主義者:";
        Labels.守護天使.text = "守護天使:";
        Labels.バグ.text = "バグ:";
        Labels.除外.text = "消滅と冷凍を除外:";
        if(Datas.乗員数データ.エンジニア) Labels.エンジニア.text += "いる";
        else Labels.エンジニア.text += "いない";
        if(Datas.乗員数データ.ドクター) Labels.ドクター.text += "いる";
        else Labels.ドクター.text += "いない";
        if(Datas.乗員数データ.守護天使) Labels.守護天使.text += "いる";
        else Labels.守護天使.text += "いない";
        if(Datas.乗員数データ.AC主義者) Labels.AC主義者.text += "いる";
        else Labels.AC主義者.text += "いない";
        if(Datas.乗員数データ.バグ) Labels.バグ.text += "いる";
        else Labels.バグ.text += "いない";
        if(Datas.乗員数データ.除外) Labels.除外.text += "する";
        else Labels.除外.text += "しない";
        return;
      });

      var Save = window.localStorage.getItem("日誌");
      if(Save){
        Test_Text = Save;
        Test_Datas = JSON.parse(window.localStorage.getItem("乗員"));
        game.replaceScene(Main_Scene());
      };

      return(Scenes[Now_Scene]);
    };

    var Main_Scene = function(){
      Now_Scene = "メイン";
      if(!Scenes[Now_Scene]) Scenes[Now_Scene] = new Scene();
      else return(Scenes[Now_Scene]);

      Text_Area_Set(0,"日誌");
      Text_Area_Set(1,"矛盾内容");
      Text_Area_Set(2,"確定内容");

      B_font.push("取り消し");
      B_font.push("嘘");
      B_font.push("全員");
      B_font.push("エンジニア");
      B_font.push("ドクター");
      B_font.push("消滅");
      B_font.push("冷凍");
      B_font.push("「");
      B_font.push("人間・留守番");
      B_font.push("グノーシア");

      B_font.push("(自分)");
      B_font.push("セツ");
      B_font.push("ジナ");
      B_font.push("SQ");
      B_font.push("ラキオ");

      B_font.push("ステラ");
      B_font.push("しげみち");
      B_font.push("シピ");
      B_font.push("コメット");
      B_font.push("ジョナス");

      B_font.push("ククルシカ");
      B_font.push("オトメ");
      B_font.push("沙明");
      B_font.push("レムナン");
      B_font.push("夕里子");

      var J = 0;
      var K = 10;
      for(var I = 0; I < B_font.length; I++){
        if(B_font[I]=="(自分)"){
          J = 0;
          K = 3;
        };
        Button_Set(J,K,5,B_font[I]);
        J++;
        if(J>4){
          K--;
          J = 0;
        };
      };

      Scenes[Now_Scene].addEventListener("enterframe",function(e){
        if(Test_Text){
          Text_Areas.日誌._element.value = Test_Text.replace(/\(自分\)/g,Player_Name);
          Datas.乗員数データ = Test_Datas;
          Test_Text = false;
          What = "\n";
        };
        if(Texts.日誌!=Text_Areas.日誌._element.value){
          Texts.日誌 = Text_Areas.日誌._element.value;
          Test(Texts.日誌);
          SET_color();
          Button_Set_Again();
        };
        return;
      });

      return(Scenes[Now_Scene]);
    };

    game.replaceScene(Start_Scene());
    return;
  };
  game.start();
};
