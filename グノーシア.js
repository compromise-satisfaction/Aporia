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

    function SET_color(){
      var MMM = "break";
      var BBB = "buttonface";
      var Temp = Object.keys(Buttons);
      for(var I = 0; I < Temp.length; I++){
        MMM = "black";
        BBB = "buttonface";
        Buttons[Temp[I]]._style.color = MMM;
        Buttons[Temp[I]].backgroundColor = BBB;
        if(!Datas.乗員番号) continue;
        if(!Datas.乗員番号[Temp[I]]) continue;
        if(Datas.乗員データ[Datas.乗員番号[Temp[I]]]){
          if(Datas.乗員データ[Datas.乗員番号[Temp[I]]].人間) BBB = "yellow";
          if(Datas.乗員データ[Datas.乗員番号[Temp[I]]].敵) BBB = "red";
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
              BBB = "blue";
              break;
            case "ドクター":
              BBB = "purple";
              break
            case "留守番":
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
        Buttons[Temp[I]]._style.color = MMM;
        Buttons[Temp[I]].backgroundColor = BBB;
      };
      Text_Areas.確定内容._element.value = Datas.確定内容;
      return;
    };

    function Text_Area_Set(X,I){
      if(X) X = width/X;
      Texts[I] = "";
      Text_Areas[I] = new Entity();
      Text_Areas[I].moveTo(X,0);
      Text_Areas[I].width = width/2;
      Text_Areas[I].height = height/5;
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
      if(Now_Scene=="メイン") X = width/3*X;
      else if(X) X = width/X;
      W = width/W;
      Buttons[I] = new Entity();
      Buttons[I].moveTo(X,height-height/10*Y);
      Buttons[I].width = W;
      Buttons[I].height = height/10;
      Buttons[I]._element = document.createElement("input");
      Buttons[I]._element.type = "submit";
      Buttons[I]._element.value = I;
      if(Now_Scene=="メイン") Buttons[I]._style["font-size"] = height/30;
      else Buttons[I]._style["font-size"] = height/15;
      Buttons[I].backgroundColor = "buttonface";
      Scenes[Now_Scene].addChild(Buttons[I]);
      Buttons[I]._element.onclick = function(e){
        switch(I){
          case "除外":
          case "バグ":
          case "AC主義者":
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
            if(!Texts.発言){
              game.replaceScene(Start_Scene());
              return;
            };
            Texts.発言 = Texts.発言.replace(/(^|\n)(.+?)$/,"");
            if(Texts.発言) What = "\n";
            else{
              What = "";
              Test(Texts.発言);
            };
            break;
          case "「":
            Texts.発言 += I;
            What = "";
            break;
          case "グノーシア":
          case "人間":
            Texts.発言 += "は" + I + "」";
            What = "\n";
            break;
          case "消滅":
          case "冷凍":
          case "エンジニア":
          case "ドクター":
          case "留守番":
            Texts.発言 += "が" + I;
            What = "\n";
            break;
          default:
            if(Datas.乗員データ[I]) console.log(Datas.乗員データ[I]);
            Texts.発言 += What + I;
            What = "と";
            break;
        };
        if(What=="\n") Test(Texts.発言);
        if(Now_Scene=="メイン"){
          Text_Areas.発言._element.value = Texts.発言;
          SET_color();
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
      Label_Set("AC主義者",3);
      Label_Set("バグ",4);
      Label_Set("除外",5);

      Button_Set(0,1,1,"開始",15);
      Button_Set(0,2,1,"バグ",15);
      Button_Set(0,3,1,"AC主義者",15);
      Button_Set(0,4,2,"グノ+",15);
      Button_Set(2,4,2,"グノ-",15);
      Button_Set(0,5,2,"乗員+",15);
      Button_Set(2,5,2,"乗員-",15);
      Button_Set(0,6,1,"除外",15);

      Scenes[Now_Scene].addEventListener("enterframe",function(e){
        Labels.乗員.text = "乗員:" + Datas.乗員数データ.乗員;
        Labels.グノーシア.text = "グノーシア:" + Datas.乗員数データ.グノーシア;
        Labels.AC主義者.text = "AC主義者:";
        Labels.バグ.text = "バグ:";
        Labels.除外.text = "消滅と冷凍を除外:";
        if(Datas.乗員数データ.AC主義者) Labels.AC主義者.text += "いる";
        else Labels.AC主義者.text += "いない";
        if(Datas.乗員数データ.バグ) Labels.バグ.text += "いる";
        else Labels.バグ.text += "いない";
        if(Datas.乗員数データ.除外) Labels.除外.text += "する";
        else Labels.除外.text += "しない";
        return;
      });

      return(Scenes[Now_Scene]);
    };

    var Main_Scene = function(){
      Now_Scene = "メイン";
      if(!Scenes[Now_Scene]) Scenes[Now_Scene] = new Scene();
      else return(Scenes[Now_Scene]);

      Text_Area_Set(0,"発言");
      Text_Area_Set(2,"確定内容");

      Button_Set(0,8,3,"エンジニア");
      Button_Set(1,8,3,"ドクター");
      Button_Set(2,8,3,"留守番");
      Button_Set(0,7,3,"消滅");
      Button_Set(1,7,3,"冷凍");
      Button_Set(2,7,3,"「");
      Button_Set(0,6,3,"人間");
      Button_Set(1,6,3,"取り消し");
      Button_Set(2,6,3,"グノーシア");
      Button_Set(0,5,3,"自分");
      Button_Set(1,5,3,"SQ");
      Button_Set(2,5,3,"しげみち");
      Button_Set(0,4,3,"セツ");
      Button_Set(1,4,3,"ジナ");
      Button_Set(2,4,3,"シピ");
      Button_Set(0,3,3,"オトメ");
      Button_Set(1,3,3,"レムナン");
      Button_Set(2,3,3,"沙明");
      Button_Set(0,2,3,"夕里子");
      Button_Set(1,2,3,"ジョナス");
      Button_Set(2,2,3,"ステラ");
      Button_Set(0,1,3,"コメット");
      Button_Set(1,1,3,"ラキオ");
      Button_Set(2,1,3,"ククルシカ");

      Scenes[Now_Scene].addEventListener("enterframe",function(e){
        if(Test_Text){
          Text_Areas.発言._element.value = Test_Text;
          Datas.乗員数データ = Test_Datas;
          Test_Text = false;
          What = "\n";
        };
        if(Texts.発言!=Text_Areas.発言._element.value){
          Texts.発言 = Text_Areas.発言._element.value;
          Test(Texts.発言);
          SET_color();
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
