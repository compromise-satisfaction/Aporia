var Datas = {確定内容:""};
Datas.乗員データ = {};
Datas.乗員数データ = {乗員:15,グノーシア:5,AC主義者:true,バグ:true,除外:false};

var Test_Datas = {乗員:15,グノーシア:3,AC主義者:true,バグ:true};
var Test_Text = "ジナとステラが留守番";
Test_Text += "\nオトメとセツとレムナンがドクター";
Test_Text += "\nコメットと自分がエンジニア";
Test_Text += "\nレムナンが冷凍";
Test_Text += "\n自分「コメットはグノーシア」";
Test_Text += "\nコメット「シピは人間」";
Test_Text += "\nオトメ「レムナンは人間」";
Test_Text += "\nセツ「レムナンはグノーシア」";
Test_Text += "\nしげみちが冷凍";
Test_Text += "\nシピが消滅";
Test_Text += "\n自分「セツは人間」";
Test_Text += "\nコメット「ラキオは人間」";
Test_Text += "\nセツ「しげみちはグノーシア」";
Test_Text += "\nオトメ「しげみちは人間」";
Test_Text += "\nオトメが冷凍";
Test_Text += "\nラキオが消滅";
Test_Text += "\n自分「夕里子は人間」";
Test_Text += "\nコメット「セツはグノーシア」";
Test_Text += "\nセツ「オトメは人間」";
Test_Text += "\nコメットが冷凍";
Test_Text += "\n夕里子が消滅";
Test_Text += "\n自分「SQはグノーシア」";
Test_Text += "\nセツ「コメットは人間」";
//セツは絶対に敵だ
Test_Text += "\n沙明が冷凍";
Test_Text += "\nジョナスとステラが消滅";
//自分は絶対にエンジニアだ
//SQは絶対にグノーシアだ

//*//
Test_Text  = "コメットが留守番";
Test_Text += "\nオトメとラキオがドクター";
Test_Text += "\nレムナンとジナと沙明がエンジニア";
Test_Text += "\nオトメが冷凍";
Test_Text += "\nジナ「ステラはグノーシア」";
Test_Text += "\n沙明「ジョナスは人間」";
Test_Text += "\nレムナン「自分はグノーシア」";
Test_Text += "\nラキオ「オトメはグノーシア」";
Test_Text += "\n自分が留守番";
Test_Datas = {乗員:12,グノーシア:3,AC主義者:true};
//*/

Test_Text = "自分としげみちとジョナスがエンジニア";
Test_Text += "\nシピとステラがドクター";
Test_Text += "\nしげみちが冷凍";
Test_Text += "\nセツが消滅";
Test_Text += "\n自分「シピは人間」";
Test_Text += "\nジョナス「ククルシカはグノーシア」";
Test_Text += "\nステラ「しげみちはグノーシア」";
Test_Text += "\nシピ「しげみちはグノーシア」";
Test_Text += "\nジョナスが冷凍";
Test_Text += "\nジナとステラが消滅";
Test_Text += "\n自分「ステラは人間」";
Test_Text += "\nシピ「ジョナスは人間」";
Test_Text += "\n沙明が冷凍";
Test_Text += "\nシピが消滅";
Test_Text += "\n自分「夕里子はグノーシア」";
Test_Text += "\n夕里子が冷凍";
Test_Text += "\nSQが消滅";
Test_Text += "\n自分「コメットはグノーシア」";
Test_Datas = {乗員:15,グノーシア:3,AC主義者:true,バグ:true};
Test_Text = "";

function Test(Text){
  Datas.乗員データ = {};
  Datas.現在 = {}
  Datas.現在.AC主義者 = Datas.乗員数データ.AC主義者;
  Datas.現在.バグ = Datas.乗員数データ.バグ;
  Datas.現在.グノーシア = Datas.乗員数データ.グノーシア;
  Datas.現在.敵 = Datas.現在.グノーシア;
  Datas.名乗り = {エンジニア:[],ドクター:[]};
  Datas.可能性 = {エンジニア:{},ドクター:{}};
  if(Datas.乗員数データ.AC主義者){
    Datas.現在.敵++;
    Datas.可能性.AC主義者 = {};
  };
  if(Datas.乗員数データ.バグ){
    Datas.現在.敵++;
    Datas.可能性.バグ = {};
  };
  Datas.現在.真 = {};
  Datas.生存エンジニア = {};
  Datas.報告 = [];
  Datas.調査 = {};
  var Temp = null;
  var Values = Text.split("\n");
  for(var I = 0; I < Values.length; I++){
    Temp = Hatugen_Syori(Values[I]);
    if(!Temp) continue;
    ADD_Crew(Temp.誰が);
    switch(Temp.タイプ){
      case "終了":
        break;
      case "判定":
        ADD_Crew([Temp.誰を]);
        ED_Tyousa(Temp.誰が[0],Temp.誰を,Temp.結果);
        break;
      case "CS":
      case "凍結":
      case "冷凍":
      case "コールドスリープ":
        for(var J = 0; J < Temp.誰が.length; J++){
          Datas.乗員データ[Temp.誰が[J]].ステータス = "コールドスリープ";
          delete Datas.生存エンジニア[Temp.誰が[J]];
        };
        break;
      case "消滅":
      case "消失":
        SYOUMETU(Temp.誰が);
        break;
      case "名乗":
        switch(Temp.結果){
          case "エンジニア":
          case "ドクター":
            ED_Nanori(Temp.誰が,Temp.結果);
            break;
          case "留守番":
            for(var J = 0; J < Temp.誰が.length; J++) Datas.乗員データ[Temp.誰が[J]].確定 = Temp.結果;
            break;
        };
        break;
    };
    Datas.log = Temp;
    Temp = Object.keys(Datas.乗員データ);
    Loop = true;
    Loops = 0;
    while(Loop){
      Loops++;
      Loop = false;
      if(Loops==10) breaka;
      SIN_HANTEI();
      for(var J = 0; J < Temp.length; J++){
        //Teki_Seiri(Temp[J]);
        Check_ED(Temp[J]);
        Kakutei(Temp[J]);
      };
      SIN_HANTEI();
      //Check_CS();
      Check_KAKUTEI();
    };
    ED = ["エンジニア","ドクター"];
    for(var J = 0; J < ED.length; J++){
      if(!Datas.現在.真[ED]&&Datas.名乗り[ED[J]]){
        for(var K  = 0; K < Datas.名乗り[ED[J]].length; K++){
          if(!Datas.可能性[ED[J]][Datas.名乗り[ED[J]][K]]) continue;
          if(Datas.矛盾) console.log("aaa");
          delete Datas.矛盾;
          Datas.保存 = JSON.stringify(Datas);
          Datas.現在.真.テスト = Datas.名乗り[ED[J]][K];
          Datas.現在.真[ED[J]] = Datas.現在.真.テスト;
          Datas.乗員データ[Datas.現在.真.テスト].確定 = ED[J];
          Log(ED[J] + "を"+Datas.現在.真.テスト + "と仮定");
          Loop = true;
          Loops = 0;
          while(Loop){
            Loops++;
            Loop = false;
            if(Loops==10) breaka;
            ///SIN_HANTEI();
            Check_KAKUTEI();
            for(var L = 0; L < Temp.length; L++){
              //Teki_Seiri(Temp[L]);
              Check_ED(Temp[L]);
              Kakutei(Temp[L]);
            };
            //Check_CS();
            SIN_HANTEI();
            Check_KAKUTEI();
          };
          if(Datas.矛盾){
            Log(Datas.現在.真.テスト + "が本物だと" + Datas.矛盾 + "が矛盾");
            Datas.保存 = JSON.parse(Datas.保存);
            delete Datas.保存.可能性[ED[J]][Datas.現在.真.テスト];
            Datas.保存.乗員データ[Datas.現在.真.テスト].敵 = "敵(" + Datas.矛盾 + "が矛盾)";
            Datas.保存 = JSON.stringify(Datas.保存);
          };
          Datas = JSON.parse(Datas.保存);
        };
      };
    };
    Check_KAKUTEI();
    SIN_HANTEI();
    continue;
    if(!SIN.エンジニア){
      MOTOMOTO.名乗り = JSON.stringify(Nanori);
      MOTOMOTO.存在 = JSON.stringify(Sonzai);
      MOTOMOTO.乗員 = JSON.stringify(Crews);
      MOTOMOTO.真 = JSON.stringify(SIN);
      MOTOMOTO.名乗り = JSON.parse(MOTOMOTO.名乗り);
      for(var J = 0; J < MOTOMOTO.名乗り.エンジニア.length; J++){
        SIN.エンジニア = MOTOMOTO.名乗り.エンジニア[J];
        SIN.テスト = SIN.エンジニア;
        Temp = Object.keys(Crews);
        Loop = true;
        Loops = 0;
        while(Loop){
          Loops++;
          Loop = false;
          if(Loops==10) breaka;
          for(var K = 0; K < Temp.length; K++){
            Kakutei(Temp[K]);
            Teki_Seiri(Temp[K]);
            SIN_HANTEI(Temp[K]);
            Check_ED(Temp[K]);
          };
          Check_CS();
          Check_KAKUTEI();
        };
        Nanori = JSON.parse(JSON.stringify(MOTOMOTO.名乗り));
        Sonzai = JSON.parse(MOTOMOTO.存在);
        Crews = JSON.parse(MOTOMOTO.乗員);
        SIN = JSON.parse(MOTOMOTO.真);
      };
    };
    if(!SIN.ドクター){
      MOTOMOTO.名乗り = JSON.stringify(Nanori);
      MOTOMOTO.存在 = JSON.stringify(Sonzai);
      MOTOMOTO.乗員 = JSON.stringify(Crews);
      MOTOMOTO.真 = JSON.stringify(SIN);
      MOTOMOTO.名乗り = JSON.parse(MOTOMOTO.名乗り);
      for(var J = 0; J < MOTOMOTO.名乗り.ドクター.length; J++){
        SIN.ドクター = MOTOMOTO.名乗り.ドクター[J];
        SIN.テスト = SIN.ドクター;
        Temp = Object.keys(Crews);
        Loop = true;
        Loops = 0;
        while(Loop){
          Loops++;
          Loop = false;
          if(Loops==10) breaka;
          for(var K = 0; K < Temp.length; K++){
            Kakutei(Temp[K]);
            Teki_Seiri(Temp[K]);
            SIN_HANTEI(Temp[K]);
            Check_ED(Temp[K]);
          };
          Check_CS();
          Check_KAKUTEI();
        };
        Nanori = JSON.parse(JSON.stringify(MOTOMOTO.名乗り));
        Sonzai = JSON.parse(MOTOMOTO.存在);
        Crews = JSON.parse(MOTOMOTO.乗員);
        SIN = JSON.parse(MOTOMOTO.真);
      };
    };
  };
  Text = "";
  for(var I = 0; I < Temp.length; I++){
    if(Datas.乗員データ[Temp[I]].確定||Datas.乗員データ[Temp[I]].敵||Datas.乗員データ[Temp[I]].人間){
      if(Datas.乗員データ[Temp[I]].ステータス&&Datas.乗員数データ.除外) continue;
      if(Datas.乗員データ[Temp[I]].確定!="留守番"){
        if(Text) Text += "\n";
        if(Datas.乗員データ[Temp[I]].確定){
          Text += Temp[I] + "は絶対に" + Datas.乗員データ[Temp[I]].確定 + "だ";
          continue;
        };
        if(Datas.乗員データ[Temp[I]].人間){
          Text += Temp[I] + "は絶対に人間だ";
          continue;
        };
        if(Datas.乗員データ[Temp[I]].敵) Text += Temp[I] + "は絶対に" + Datas.乗員データ[Temp[I]].敵 + "だ" ;
      };
    };
  };
  Datas.確定内容 = Text;
  Log(Datas);
  return;
};

function Hatugen_Syori(Text){
  Temp = Text.match(/^(.+)「(.+)は(人間|グノーシア)」$/);
  if(Temp) return({タイプ:"判定",誰が:[Temp[1]],誰を:Temp[2],"結果":Temp[3]});
  Temp = Text.match(/^(.+)が(ドクター|エンジニア|消滅|冷凍|CS|凍結|消失|留守番)$/);
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
    Text = {タイプ:Temp[2],誰が:Temp[1].split("と")};
    if(Temp[3]) Text.結果 = Temp[3];
  };
  return(Text);
};

function Check_KAKUTEI(){
  var Temp1 = Object.keys(Datas.可能性);
  var Temp2 = Object.keys(Datas.可能性);
  for(var I = 0; I < Temp1.length; I++){
    Temp2 = Object.keys(Datas.可能性[Temp1[I]]);
    if(Temp2.length==1){
      if(!Datas.乗員データ[Temp2[0]].確定){
        if(Temp1[I]=="エンジニア"||Temp1[I]=="ドクター") if(!Datas.名乗り[Temp1[I]][0]) continue;
        if(Temp1[I]=="AC主義者"||Temp1[I]=="バグ") if(Datas.現在[Temp1[I]]) continue;
        Datas.乗員データ[Temp2[0]].確定 = Temp1[I];
        Loop = true;
      };
    };
  };
  var Temp = Object.keys(Datas.乗員データ);
  var Temp1 = Object.keys(Datas.乗員データ);
  var Numbers = [[],[]];
  Datas.疑惑 = {エンジニア:[],ドクター:[]}
  for(var I = 0; I < Temp.length; I++){
    if(!Datas.乗員データ[Temp[I]].役割.グノーシア&&Datas.乗員データ[Temp[I]].報告){
      if(Datas.乗員データ[Temp[I]].報告.グノーシア){
        Temp1 = Object.keys(Datas.乗員データ[Temp[I]].報告.グノーシア);
        for(var J = 0; J < Temp1.length; J++){
          if(!Datas.乗員データ[Temp1[J]].敵) Loop = true;
          Datas.乗員データ[Temp1[J]].敵 = "敵(グノーシア判定矛盾)";
          delete Datas.可能性.エンジニア[Temp1[J]];
          delete Datas.可能性.ドクター[Temp1[J]];
          Temp2 = Object.keys(Datas.可能性.エンジニア);
          if(Temp2.length==1) Datas.現在.真.エンジニア = Temp2[0];
          Temp2 = Object.keys(Datas.可能性.ドクター);
          if(Temp2.length==1) Datas.現在.真.ドクター = Temp2[0];
        };
      };
    };
    if(Datas.乗員データ[Temp[I]].敵) Numbers[0].push(Temp[I]);
    if(Datas.乗員データ[Temp[I]].確定=="グノーシア") Numbers[1].push(Temp[I]);
    if(!Datas.乗員データ[Temp[I]].確定&&Datas.乗員データ[Temp[I]].名乗り){
      Datas.疑惑[Datas.乗員データ[Temp[I]].名乗り].push(Temp[I]);
    };
  };
  if(Numbers[1].length==Datas.現在.グノーシア){
    for(var I = 0; I < Temp.length; I++){
      if(Datas.乗員データ[Temp[I]].確定!="グノーシア"){
        if(Datas.乗員データ[Temp[I]].役割.グノーシア){
          delete Datas.乗員データ[Temp[I]].役割.グノーシア;
          Loop = true;
        };
      };
    };
  };
  if(Datas.現在.真.テスト&&Datas.現在.真.テスト==Datas.現在.真.エンジニア){
    Datas.疑惑.数 = Datas.疑惑.ドクター.length;
    if(Datas.疑惑.数) Datas.疑惑.数--;
    Datas.疑惑.数 += Numbers[0].length;
    if(Datas.疑惑.数==Datas.現在.敵){
      Datas.疑惑確認 = {};
      for(var I = 0; I < Numbers[0].length; I++) Datas.疑惑確認[Numbers[0][I]] = true;
      for(var I = 0; I < Datas.疑惑.ドクター.length; I++) Datas.疑惑確認[Datas.疑惑.ドクター[I]] = true;
      Datas.保存 = JSON.parse(Datas.保存);
      for(var I = 0; I < Temp.length; I++){
        if(!Datas.疑惑確認[Temp[I]]){
          if(!Datas.保存.乗員データ[Temp[I]].報告) Datas.保存.乗員データ[Temp[I]].報告 = {};
          if(!Datas.保存.乗員データ[Temp[I]].報告.人間) Datas.保存.乗員データ[Temp[I]].報告.人間 = {};
          Datas.保存.乗員データ[Temp[I]].報告.人間[Datas.現在.真.テスト] = "エンジニア";
          Datas.保存.調査[Datas.現在.真.テスト][Temp[I]] = "人間";
        };
      };
      Datas.保存 = JSON.stringify(Datas.保存);
    };
  };
  if(Datas.現在.真.テスト&&Datas.現在.真.テスト==Datas.現在.真.ドクター){
    Datas.疑惑.数 = Datas.疑惑.エンジニア.length;
    if(Datas.疑惑.数) Datas.疑惑.数--;
    Datas.疑惑.数 += Numbers[0].length;
    if(Datas.疑惑.数==Datas.現在.敵){
      Datas.疑惑確認 = {};
      for(var I = 0; I < Numbers[0].length; I++) Datas.疑惑確認[Numbers[0][I]] = true;
      for(var I = 0; I < Datas.疑惑.エンジニア.length; I++) Datas.疑惑確認[Datas.疑惑.エンジニア[I]] = true;
      Datas.保存 = JSON.parse(Datas.保存);
      for(var I = 0; I < Temp.length; I++){
        if(!Datas.疑惑確認[Temp[I]]){
          if(!Datas.保存.乗員データ[Temp[I]].報告) Datas.保存.乗員データ[Temp[I]].報告 = {};
          if(!Datas.保存.乗員データ[Temp[I]].報告.人間) Datas.保存.乗員データ[Temp[I]].報告.人間 = {};
          Datas.保存.乗員データ[Temp[I]].報告.人間[Datas.現在.真.テスト] = "ドクター";
          Datas.保存.調査[Datas.現在.真.テスト][Temp[I]] = "人間";
        };
      };
      Datas.保存 = JSON.stringify(Datas.保存);
    };
  };
  delete Datas.疑惑;
  delete Datas.疑惑確認;
  return;
  for(var I = 0; I < Temp.length; I++){
    if(Datas.乗員データ[Temp[I]].役割.エンジニア&&Datas.名乗り.エンジニア[0]) Numbers[0].push(Temp[I]);
    if(Datas.乗員データ[Temp[I]].役割.ドクター&&Datas.名乗り.ドクター) Numbers[1].push(Temp[I])
    if(Datas.乗員データ[Temp[I]].役割.AC主義者&&!Datas.現在.AC主義者) Numbers[2].push(Temp[I])
    if(Datas.乗員データ[Temp[I]].役割.バグ&&!Datas.現在.バグ) Numbers[3].push(Temp[I])
  };
  if(Numbers[0].length==1){
    if(!Datas.乗員データ[Numbers[0][0]].確定){
      Datas.乗員データ[Numbers[0][0]].確定 = "エンジニア";
      Loop = true;
    };
  };
  if(Numbers[1].length==1){
    if(!Datas.乗員データ[Numbers[1][0]].確定){
      Datas.乗員データ[Numbers[1][0]].確定 = "ドクター";
      Loop = true;
    };
  };
  if(Numbers[2].length==1){
    if(!Datas.乗員データ[Numbers[2][0]].確定){
      delete Datas.現在.AC主義者;
      Datas.乗員データ[Numbers[2][0]].確定 = "AC主義者";
      Loop = true;
    };
  };
  if(Numbers[3].length==1){
    if(!Datas.乗員データ[Numbers[3][0]].確定){
      delete Datas.現在.バグ;
      Datas.乗員データ[Numbers[3][0]].確定 = "バグ";
      Loop = true;
    };
  };
  return;
};

function Check_CS(){
  var Temp = Object.keys(Datas.乗員データ);
  for(var I = 0; I < Temp.length; I++){
    console.log(Temp[I]);
  };
  return;
  var Numbers = [Datas.グノーシア,0];
  var E = false;
  var D = false;
  for(var I = 0; I < Temp.length; I++){
    if(Crews[Temp[I]].ステータス!="コールドスリープ") continue;
    if(Crews[Temp[I]].確定=="グノーシア"){
      Numbers[1]++;
      continue;
    };
    if(Object.keys(Crews[Temp[I]].役割).length==2){
      if(Crews[Temp[I]].役割.グノーシア){
        if(Crews[Temp[I]].役割.エンジニア){
          Crews[Temp[I]].疑惑 = "グノーシア";
          if(E) Numbers[1]++;
          else E = true;
        };
        if(Crews[Temp[I]].役割.ドクター){
          Crews[Temp[I]].疑惑 = "グノーシア";
          if(D) Numbers[1]++;
          else D = true;
        };
      };
    };
  };
  Numbers = (Numbers[0]==Numbers[1]+1);
  for(var I = 0; I < Temp.length; I++){
    if(Numbers&&!Crews[Temp[I]].疑惑&&Crews[Temp[I]].確定!="グノーシア") delete Crews[Temp[I]].役割.グノーシア;
    delete Crews[Temp[I]].疑惑;
  };
  return;
};

function Check_ED(Darega){
  if(!Datas.乗員データ[Darega].名乗り) return;
  return;
  var Temp = Object.keys(Datas.調査[Darega]);
  for(var I = 0; I < Temp.length; I++){
    if(Temp[I]=="コメット"&&Darega=="セツ"&&Datas.現在.真.エンジニア){
      Log(Datas.現在.真.エンジニア);
      Log(Datas.乗員データ[Temp[I]]);
    };
    if(false&&Temp[I]=="コメット"&&Datas.現在.真.エンジニア){
      Log(Darega);
      Log(Datas.乗員データ[Temp[I]]);
    };
    if(Datas.乗員データ[Temp[I]].確定=="グノーシア"&&Datas.調査[Darega][Temp[I]]=="人間"){
      if(Datas.現在.真.エンジニア==Darega||Datas.現在.真.ドクター==Darega){
        //Temp = Datas.現在.真.テスト;
        //Datas = JSON.parse(Datas.保存);
        //Datas.乗員データ[Temp].敵 = "敵(" + Temp[I] + "のデータが変)";
        //return;
      };
      Datas.乗員データ[Darega].敵 = "敵(" + Temp[I] + "のデータが変)";
      //Loop = true;
      return;
    };
    if(Datas.乗員データ[Temp[I]].人間&&Datas.調査[Darega][Temp[I]]=="グノーシア"){
      if(Datas.現在.真.エンジニア==Darega||Datas.現在.真.ドクター==Darega){
        //Temp = Datas.現在.真.テスト;
        //Datas = JSON.parse(Datas.保存);
        //Datas.乗員データ[Temp].敵 = "敵(" + Temp[I] + "のデータが変)";
        //return;
      };
      Datas.乗員データ[Darega].敵 = "敵(" + Temp[I] + "のデータが変)";
      //Loop = true;
      return;
    };
  };
  return;
};

function Teki_Seiri(Darega){
  if(SIN.エンジニア){
    if(TEKININTEI[SIN.エンジニア]){
      if(TEKININTEI[SIN.エンジニア][Darega]) Crews[Darega].敵 = "真エンジニアと敵対";
    };
  };
  if(SIN.ドクター){
    if(TEKININTEI[SIN.ドクター]){
      if(TEKININTEI[SIN.ドクター][Darega]) Crews[Darega].敵 = "真ドクターと敵対";
    };
  };
  if(Darega.確定||!Crews[Darega].敵) return;
  var Numbers = Object.keys(Crews[Darega].役割).length;
  if(Tyousa[SIN.エンジニア]){
    if(Tyousa[SIN.エンジニア][Darega]=="グノーシア"){
      delete Crews[Darega].役割.AC主義者;
      delete Crews[Darega].役割.バグ;
    };
  };
  if(Tyousa[SIN.ドクター]){
    if(Tyousa[SIN.ドクター][Darega]=="グノーシア"){
      delete Crews[Darega].役割.AC主義者;
      delete Crews[Darega].役割.バグ;
    };
  };
  delete Crews[Darega].役割.エンジニア;
  delete Crews[Darega].役割.ドクター;
  delete Crews[Darega].役割.乗員;
  delete Crews[Darega].名乗;
  if(Crews[Darega].人間){
    if(Crews[Darega].確定){
      if(Crews[Darega].確定!="AC主義者"){
        MOTOMOTO.乗員 = JSON.parse(MOTOMOTO.乗員);
        MOTOMOTO.乗員[SIN.テスト].敵 = Crews[Darega].確定 + "である" + Darega + "を敵の人だと言った";
        MOTOMOTO.乗員 = JSON.stringify(MOTOMOTO.乗員);
        return;
      };
    };
    Crews[Darega].確定 = "AC主義者";
    Crews[Darega].役割 = {AC主義者:true};
  };
  if(Numbers != Object.keys(Crews[Darega].役割).length) Loop = true;
  return;
};

function SIN_HANTEI(){
  for(var I  = 0; I < Datas.報告.length; I++){
    if(Datas.現在.真.エンジニア==Datas.報告[I][0]||Datas.現在.真.ドクター==Datas.報告[I][0]){
      switch(Datas.報告[I][2]){
        case "人間":
          if(Datas.乗員データ[Datas.報告[I][1]].役割.グノーシア){
            delete Datas.乗員データ[Datas.報告[I][1]].役割.グノーシア;
            Loop = true;
          };
          if(!Datas.乗員データ[Datas.報告[I][1]].役割.バグ&&!Datas.乗員データ[Datas.報告[I][1]].人間){
            Datas.乗員データ[Datas.報告[I][1]].人間 = true;
            Loop = true;
          };
          break;
        case "グノーシア":
          if(!Datas.乗員データ[Datas.報告[I][1]].確定||!Datas.乗員データ[Datas.報告[I][1]].敵){
            Datas.乗員データ[Datas.報告[I][1]].敵 = "グノーシア";
            Datas.乗員データ[Datas.報告[I][1]].確定 = "グノーシア";
            Loop = true;
          };
          break;
        case "敵":
          if(!Datas.乗員データ[Datas.報告[I][1]].敵){
            Datas.乗員データ[Datas.報告[I][1]].敵 = "敵(真と矛盾)";
            delete Datas.可能性.エンジニア[Datas.報告[I][1]];
            delete Datas.可能性.ドクター[Datas.報告[I][1]];
            Temp = Object.keys(Datas.可能性.エンジニア);
            if(Temp.length==1) Datas.現在.真.エンジニア = Temp[0];
            Temp = Object.keys(Datas.可能性.ドクター);
            if(Temp.length==1) Datas.現在.真.ドクター = Temp[0];
            Loop = true;
          };
          break;
      };
    };
  };
  return;
  if(SIN.ドクター){
    if(SIN.ドクター=="セツ") console.log(Crews["自分"]);
    switch(NINTEI[SIN.ドクター][Darega]){
      default:
        if(Tyousa[SIN.ドクター][Darega]=="人間"){
          if(Crews[Darega].役割.グノーシア){
            delete Crews[Darega].役割.グノーシア;
            Loop = true;
          };
        };
        break;
      case "人間":
        if(!Crews[Darega].人間){
          Crews[Darega].人間 = true;
          Loop = true;
        };
        break;
      case "グノーシア":
      case "バグ":
        if(!Crews[Darega].確定){
          Crews[Darega].確定 = NINTEI[SIN.ドクター][Darega];
          Loop = true;
        };
        break;
    };
  };
  return;
};

function ZEN_TYOUSA(Darega){
  var Temp = null;
  var E_N = Object.keys(Datas.可能性.エンジニア);
  var D_N = Object.keys(Datas.可能性.ドクター);
  var N = Object.keys(Datas.乗員データ[Darega].役割).length;
  var H = {エンジニア:{グノーシア:true,人間:true},ドクター:{グノーシア:true,人間:true}};
  if(Datas.現在.真.エンジニア) H.エンジニア = {人間:false,グノーシア:false};
  if(Datas.現在.真.ドクター) H.ドクター = {人間:false,グノーシア:false};
  if(!Datas.乗員データ[Darega].報告) H = {グノーシア:"報告無し",人間:"報告無し"};
  else{
    if(!Datas.乗員データ[Darega].報告.人間) H.人間 = "報告無し";
    else{
      Temp = Datas.乗員データ[Darega].報告.人間;
      for(var I = 0; I < E_N.length; I++){
        if(E_N[I]==Darega) continue;
        if(!Temp[E_N[I]]) H.エンジニア.人間 = false;
      };
      for(var I = 0; I < D_N.length; I++) if(!Temp[D_N[I]]) H.ドクター.人間 = false;
    };
    if(!Datas.乗員データ[Darega].報告.グノーシア) H.グノーシア = "報告無し";
    else{
      Temp = Datas.乗員データ[Darega].報告.グノーシア;
      for(var I = 0; I < E_N.length; I++) if(!Temp[E_N[I]]) H.エンジニア.グノーシア = false;
      for(var I = 0; I < D_N.length; I++) if(!Temp[D_N[I]]) H.ドクター.グノーシア = false;
    };
  };
  if(!H.エンジニア) H.エンジニア = {};
  if(!H.ドクター) H.ドクター = {};
  if(H.人間){
    H.エンジニア.人間 = false;
    H.ドクター.人間 = false;
  };
  if(H.グノーシア){
    H.エンジニア.グノーシア = false;
    H.ドクター.グノーシア = false;
  };
  if(H.エンジニア.人間){
    delete Datas.乗員データ[Darega].役割.グノーシア;
    if(!Datas.乗員データ[Darega].ステータス) delete Datas.乗員データ[Darega].役割.バグ;
  };
  if(H.エンジニア.グノーシア) Datas.乗員データ[Darega].役割 = {グノーシア:true};
  if(H.ドクター.人間) delete Datas.乗員データ[Darega].役割.グノーシア;
  if(H.ドクター.グノーシア) Datas.乗員データ[Darega].役割 = {グノーシア:true};
  if(N!=Object.keys(Datas.乗員データ[Darega].役割).length) Loop = true;
  return;
};

function Kakutei(Darega){
  var Temp = Object.keys(Datas.乗員データ);
  for(var I = 0; I < Temp.length; I++){
    if(Object.keys(Datas.乗員データ[Temp[I]].役割).length==1){
      Datas.乗員データ[Temp[I]].確定 = Object.keys(Datas.乗員データ[Temp[I]].役割)[0];
    };
  };
  ZEN_TYOUSA(Darega);
  Temp = Object.keys(Datas.乗員データ[Darega].役割);
  if(!Datas.乗員データ[Darega].役割.グノーシア&&!Datas.乗員データ[Darega].役割.バグ) Datas.乗員データ[Darega].人間 = true;
  if(Datas.乗員データ[Darega].人間){
    if(Datas.乗員データ[Darega].敵){
      Datas.乗員データ[Darega].敵 = "AC主義者";
      Datas.乗員データ[Darega].役割 = {AC主義者:true};
    };
    delete Datas.乗員データ[Darega].役割.バグ;
    delete Datas.乗員データ[Darega].役割.グノーシア;
  };
  if(Datas.乗員データ[Darega].敵){
    delete Datas.乗員データ[Darega].役割.エンジニア;
    delete Datas.乗員データ[Darega].役割.ドクター;
    delete Datas.乗員データ[Darega].役割.乗員
    delete Datas.生存エンジニア[Darega];
    delete Datas.可能性.エンジニア[Darega];
    delete Datas.可能性.ドクター[Darega];
  };

  if(Datas.調査[Datas.現在.真.エンジニア]){
    if(Datas.調査[Datas.現在.真.エンジニア][Darega]){
      if(Datas.調査[Datas.現在.真.エンジニア][Darega]=="人間") delete Datas.乗員データ[Darega].役割.グノーシア;
      else{
        delete Datas.乗員データ[Darega].役割.エンジニア;
        delete Datas.乗員データ[Darega].役割.ドクター;
        delete Datas.乗員データ[Darega].役割.AC主義者;
        delete Datas.乗員データ[Darega].役割.バグ;
        delete Datas.乗員データ[Darega].役割.乗員;
        delete Datas.生存エンジニア[Darega];
      };
    };
  };
  if(Datas.調査[Datas.現在.真.ドクター]){
    if(Datas.調査[Datas.現在.真.ドクター][Darega]){
      if(Datas.調査[Datas.現在.真.ドクター][Darega]=="人間") delete Datas.乗員データ[Darega].役割.グノーシア;
      else{
        delete Datas.乗員データ[Darega].役割.エンジニア;
        delete Datas.乗員データ[Darega].役割.ドクター;
        delete Datas.乗員データ[Darega].役割.AC主義者;
        delete Datas.乗員データ[Darega].役割.バグ;
        delete Datas.乗員データ[Darega].役割.乗員;
        delete Datas.生存エンジニア[Darega];
      };
    };
  };

  if(!Temp.length){
    Datas.矛盾 = Darega;
    return;
  };

  if(Temp.length!=Object.keys(Datas.乗員データ[Darega].役割).length) Loop = true;
  if(Temp.length==1) Datas.乗員データ[Darega].確定 = Temp[0];
  if(!Datas.乗員データ[Darega].確定) return;
  Datas.乗員データ[Darega].役割 = {};
  Datas.乗員データ[Darega].役割[Datas.乗員データ[Darega].確定] = true;
  var Delete = Datas.乗員データ[Darega].確定;
  Temp = Object.keys(Datas.可能性);
  for(var I = 0; I < Temp.length; I++) if(Temp[I]!=Delete) delete Datas.可能性[Temp[I]][Darega];
  Temp = Object.keys(Datas.乗員データ);
  switch(Delete){
    case "エンジニア":
    case "ドクター":
      if(!Datas.現在.真[Delete]){
        Datas.現在.真[Delete] = Darega;
        if(Datas.現在.真.テスト) Log(Datas.現在.真.テスト+"が本物だと"+Darega+"が本物");
      }
      break;
    case "AC主義者":
    case "バグ":
      delete Datas.現在[Delete];
    case "グノーシア":
      Datas.乗員データ[Darega].敵 = Delete;
      break;
  };
  switch(Delete){
    case "乗員":
    case "留守番":
      Datas.乗員データ[Darega].人間 = true;
    case "グノーシア":
      return;
  };
  for(var I = 0; I < Temp.length; I++){
    if(Temp[I]==Darega) continue;
    if(!Datas.乗員データ[Temp[I]].人間&&!Datas.乗員データ[Temp[I]].役割.グノーシア&&!Datas.乗員データ[Temp[I]].役割.バグ){
      Datas.乗員データ[Temp[I]].人間 = true;
      Loop = true;
    };
    if(Object.keys(Datas.乗員データ[Temp[I]].役割).length>1&&Datas.乗員データ[Temp[I]].役割[Delete]){
      delete Datas.可能性[Delete][Temp[I]];
      delete Datas.乗員データ[Temp[I]].役割[Delete];
      Loop = true;
    };
  };
  return;
};

function ADD_Crew(A){
  if(!A) return;
  for(var I = 0; I < A.length; I++){
    if(!Datas.乗員データ[A[I]]){
      Datas.乗員データ[A[I]] = {役割:{グノーシア:true,乗員:true}};
      if(!Datas.名乗り.エンジニア[0]){
        Datas.可能性.エンジニア[A[I]] = true;
        Datas.乗員データ[A[I]].役割.エンジニア = true;
      };
      if(!Datas.名乗り.ドクター[0]){
        Datas.可能性.ドクター[A[I]] = true;
        Datas.乗員データ[A[I]].役割.ドクター = true;
      };
      if(Datas.現在.AC主義者){
        Datas.可能性.AC主義者[A[I]] = true;
        Datas.乗員データ[A[I]].役割.AC主義者 = true;
      };
      if(Datas.現在.バグ){
        Datas.可能性.バグ[A[I]] = true;
        Datas.乗員データ[A[I]].役割.バグ = true;
      };
    };
  };
  return;
};

var Log_True = true;

function Log(A){
  if(Log_True) console.log(A);
  return;
};

function ED_Tyousa(Darega,Darewo,KEKKA){
  if(Darega=="セツ"&&Darewo=="コメット") Log_True = true;
  var HANTAI = "グノーシア";
  if(KEKKA==HANTAI) HANTAI = "人間";
  var Temp = null;
  Datas.報告.push([Darega,Darewo,KEKKA]);
  Datas.調査[Darega][Darewo] = KEKKA;
  if(Darega==Datas.現在.真.エンジニア&&Datas.バグ疑惑){
    Datas.乗員データ[Darewo].確定 = "バグ";
    delete Datas.バグ疑惑;
  };
  if(!Datas.乗員データ[Darewo].報告) Datas.乗員データ[Darewo].報告 = {};
  if(!Datas.乗員データ[Darewo].報告[KEKKA]) Datas.乗員データ[Darewo].報告[KEKKA] = {};
  Datas.乗員データ[Darewo].報告[KEKKA][Darega] = Datas.乗員データ[Darega].名乗り;
  if(Datas.乗員データ[Darewo].名乗り&&KEKKA=="グノーシア"){
    if(Datas.乗員データ[Darewo].名乗り!=Datas.乗員データ[Darega].名乗り){
      Datas.報告.push([Darewo,Darega,"敵"]);
    };
  } ;
  if(Datas.乗員データ[Darewo].報告[HANTAI]){
    Temp= Object.keys(Datas.乗員データ[Darewo].報告[HANTAI]);
    for(var I = 0; I < Temp.length; I++){
      if(Datas.乗員データ[Darewo].報告[HANTAI][Temp[I]]!=Datas.乗員データ[Darega].名乗り){
        Datas.報告.push([Darega,Temp[I],"敵"]);
        Datas.報告.push([Temp[I],Darega,"敵"]);
      };
    };
  };
  return;
  KEKKA = [KEKKA];
  if(Sonzai.エンジニア[Darega]&&C_DEBUG){
    KEKKA[1] = C_DEBUG[1].length;
    delete C_DEBUG[0][Darega];
    if(Darewo==C_DEBUG[1][0]||Darewo==C_DEBUG[1][1]) Crews[Darewo].バグ疑惑 = Darega;
    if(!Object.keys((C_DEBUG[0]))[0]){
      if(!Crews[C_DEBUG[1][0]].バグ疑惑) delete Crews[C_DEBUG[1][0]].役割.バグ;
      if(C_DEBUG[1][1]) if(!Crews[C_DEBUG[1][1]].バグ疑惑) delete Crews[C_DEBUG[1][1]].役割.バグ;
      C_DEBUG = false;
    };
  };
  Tyousa[Darega][Darewo] = KEKKA[0];
  if(KEKKA[0]=="人間"){
    if(Sonzai.エンジニア[Darega]){
      if(KEKKA[1]==2) NINTEI[Darega][Darewo] = "バグ";
      else if(Crews[Darewo].バグ疑惑 != Darega) NINTEI[Darega][Darewo] = "人間";
    };
    if(!Crews[Darewo].役割.バグ) NINTEI[Darega][Darewo] = "人間";
  }
  else{
    NINTEI[Darega][Darewo] = "グノーシア";
    if(!TEKININTEI[Darewo]) TEKININTEI[Darewo] = {};
    TEKININTEI[Darega][Darewo] = true;
    TEKININTEI[Darewo][Darega] = true;
  };
  return;
  if(!Crews[Temp.誰が].認定){
    Crews[Temp.誰が].認定 = {};
    Crews[Temp.誰が].認定[Temp.誰が] = "人間";
  };
  if(!Crews[Temp.誰を].判定) Crews[Temp.誰を].判定 = {人間:[],グノーシア:[]};
  Crews[Temp.誰が].認定[Temp.誰を] = Temp.結果;
  if(!Crews[Temp.誰を].ステータス){
    if(!Crews[Temp.誰が].絶対) Crews[Temp.誰が].絶対 = {};
    Crews[Temp.誰が].絶対[Temp.誰を] = Temp.結果;
  };
  Crews[Temp.誰を].判定[Temp.結果].push(Temp.誰が);
  if(Crews[Temp.誰が].疑){
    if(Temp.誰を!=Crews[Temp.誰が].疑[0]&&Temp.誰を!=Crews[Temp.誰が].疑[1]){
      delete Crews[Temp.誰が].役割.エンジニア;
      delete Crews[Temp.誰が].役割.乗員;
      Crews[Temp.誰が].敵 = true;
    };
    delete Crews[Temp.誰が].疑;
  };
  return;
};

function SYOUMETU(Darega){
  Datas.消滅 = Darega;
  for(var I = 0; I < Darega.length; I++){
    Datas.乗員データ[Darega[I]].ステータス = "消滅";
    delete Datas.乗員データ[Darega[I]].役割.グノーシア;
    delete Datas.生存エンジニア[Darega[I]];
    if(I){
      delete Datas.現在.バグ;
      Temp = Object.keys(Datas.生存エンジニア);
      if(Temp.length==1){
        if(Datas.名乗り.エンジニア[Darega[0]]) Temp[1] = true;
        if(Datas.名乗り.エンジニア[Darega[1]]) Temp[1] = true;
        if(!Temp[1]){
          Datas.現在.真.エンジニア = [Temp[0]];
          Datas.乗員データ[Temp[0]].確定 = "エンジニア";
        };
      };
      if(!Datas.乗員データ[Darega[0]].役割.バグ) Datas.乗員データ[Darega[1]].確定 = "バグ";
      if(!Datas.乗員データ[Darega[1]].役割.バグ) Datas.乗員データ[Darega[0]].確定 = "バグ";
      if(Datas.乗員データ[Darega[0]].役割.バグ&&Datas.乗員データ[Darega[1]].役割.バグ){
        Temp = Object.keys(Datas.乗員データ);
        Datas.バグ疑惑 = {};
        for(var I = 0; I < Temp.length; I++){
          if(Temp[I]==Darega[0]||Temp[I]==Darega[1]){
            Datas.バグ疑惑[Temp[I]] = true;
            continue;
          };
          delete Datas.乗員データ[Temp[I]].役割.バグ;
        };
      };
    };
  };
  return;
};

function ED_Nanori(Darega,ED){
  var Temp = Object.keys(Datas.乗員データ);
  for(var I = 0; I < Temp.length; I++){
    if(!Datas.乗員データ[Temp[I]].ステータス){
      delete Datas.可能性[ED][Darega[I]];
      delete Datas.乗員データ[Temp[I]].役割[ED];
    };
  };
  for(var I = 0; I < Darega.length; I++){
    delete Datas.可能性.エンジニア[Darega[I]];
    delete Datas.可能性.ドクター[Darega[I]];
    delete Datas.乗員データ[Darega[I]].役割.エンジニア;
    delete Datas.乗員データ[Darega[I]].役割.ドクター;
    delete Datas.乗員データ[Darega[I]].役割.乗員;
    Datas.名乗り[ED].push(Darega[I]);
    Datas.調査[Darega[I]] = {};
    Datas.乗員データ[Darega[I]].名乗り = ED;
    Datas.可能性[ED][Darega[I]] = true;
    Datas.乗員データ[Darega[I]].役割[ED] = true;
    if(ED=="エンジニア") Datas.生存エンジニア[Darega[I]] = true;
    Datas.報告.push([Darega[I],Darega[I],"人間"]);
    for(var K = 0; K < Darega.length; K++) if(I!=K) Datas.報告.push([Darega[I],Darega[K],"敵"]);
  };
  return;
};
