var Datas = {矛盾内容:"",確定内容:"",自分:false,日誌:""};
Datas.乗員データ = {};
Datas.乗員数データ = {乗員:15,グノーシア:5,AC主義者:true,バグ:true,除外:false};

var Test_Datas = {乗員:15,グノーシア:3,AC主義者:true,バグ:true};
var Test_Text = "ジナとステラが留守番";
Test_Text += "\nオトメとセツとレムナンがドクター";
Test_Text += "\nコメットと(自分)がエンジニア";
Test_Text += "\nレムナンが冷凍";
Test_Text += "\n(自分)「コメットはグノーシア」";
Test_Text += "\nコメット「シピは人間」";
Test_Text += "\nオトメ「レムナンは人間」";
Test_Text += "\nセツ「レムナンはグノーシア」";
Test_Text += "\nしげみちが冷凍";
Test_Text += "\nシピが消滅";
Test_Text += "\n(自分)「セツは人間」";
Test_Text += "\nコメット「ラキオは人間」";
Test_Text += "\nセツ「しげみちはグノーシア」";
Test_Text += "\nオトメ「しげみちは人間」";
Test_Text += "\nオトメが冷凍";
Test_Text += "\nラキオが消滅";
Test_Text += "\n(自分)「夕里子は人間」";
Test_Text += "\nコメット「セツはグノーシア」";
Test_Text += "\nセツ「オトメは人間」";
Test_Text += "\nコメットが冷凍";
Test_Text += "\n夕里子が消滅";
Test_Text += "\n(自分)「SQはグノーシア」";
Test_Text += "\nセツ「コメットは人間」";
//セツは絶対に敵だ
Test_Text += "\n沙明が冷凍";
Test_Text += "\nジョナスとステラが消滅";
//(自分)は絶対にエンジニアだ
//SQは絶対にグノーシアだ

/*//
Test_Text  = "コメットが留守番";
Test_Text += "\nオトメとラキオがドクター";
Test_Text += "\nレムナンとジナと沙明がエンジニア";
Test_Text += "\nオトメが冷凍";
Test_Text += "\nジナ「ステラはグノーシア」";
Test_Text += "\n沙明「ジョナスは人間」";
Test_Text += "\nレムナン「(自分)はグノーシア」";
Test_Text += "\nラキオ「オトメはグノーシア」";
Test_Text += "\n(自分)が留守番";
Test_Datas = {乗員:12,グノーシア:3,AC主義者:true};
////

Test_Text = "(自分)としげみちとジョナスがエンジニア";
Test_Text += "\nシピとステラがドクター";
Test_Text += "\nしげみちが冷凍";
Test_Text += "\nセツが消滅";
Test_Text += "\n(自分)「シピは人間」";
Test_Text += "\nジョナス「ククルシカはグノーシア」";
Test_Text += "\nステラ「しげみちはグノーシア」";
Test_Text += "\nシピ「しげみちはグノーシア」";
Test_Text += "\nジョナスが冷凍";
Test_Text += "\nジナとステラが消滅";
Test_Text += "\n(自分)「ステラは人間」";
Test_Text += "\nシピ「ジョナスは人間」";
Test_Text += "\n沙明が冷凍";
Test_Text += "\nシピが消滅";
Test_Text += "\n(自分)「夕里子はグノーシア」";
Test_Text += "\n夕里子が冷凍";
Test_Text += "\nSQが消滅";
Test_Text += "\n(自分)「コメットはグノーシア」";
Test_Datas = {乗員:15,グノーシア:3,AC主義者:true,バグ:true};

Test_Text = "ククルシカとジナがエンジニア";
Test_Text += "\nSQと夕里子がドクター";
Test_Text += "\nセツとラキオが留守番";
Test_Text += "\n沙明が冷凍";
Test_Text += "\nコメットが消滅";
Test_Text += "\nククルシカ「(自分)は人間」";
Test_Text += "\nジナ「レムナンは人間」";
Test_Text += "\n夕里子「沙明はグノーシア」";
Test_Text += "\nSQ「沙明は人間」";
Test_Text += "\nジナ「(自分)は人間」";
Test_Text += "\nククルシカ「しげみちは人間」";
Test_Text += "\nジョナスが冷凍";
Test_Text += "\nSQ「ジョナスは人間」";
Test_Text += "\n夕里子「ジョナスは人間」";
Test_Text += "\nシピが消滅";
Test_Text += "\nSQ「しげみちはグノーシア」";
Test_Text += "\n夕里子「しげみちは人間」";
Test_Text += "\nジナ「ステラは人間」";
Test_Text += "\nククルシカ「ステラは人間」";
Test_Text += "\nSQが冷凍";
Test_Text += "\n夕里子「SQはグノーシア」";
Test_Text += "\nオトメが消滅";
Test_Text += "\nククルシカ「夕里子は人間」";
Test_Text += "\nジナ「夕里子はグノーシア」";
Test_Text += "\nジナが冷凍";
Test_Datas = {乗員:15,グノーシア:3,AC主義者:false,バグ:false};

ククルシカとジョナスがエンジニア
セツとステラが留守番
コメットが冷凍
ステラが消滅
ジョナス「シピは人間」
ククルシカ「沙明はグノーシア」
レムナンと沙明がドクター
沙明「コメットは人間」
レムナン「コメットは人間」
沙明が冷凍
セツが消滅
ジョナス「SQは人間」
ククルシカ「シピはグノーシア」
レムナン「沙明はグノーシア」
シピが冷凍
ククルシカが消滅
ジョナス「よっちーは人間」
レムナン「シピはグノーシア」
ジョナスは敵
Test_Datas = {乗員:10,グノーシア:3,AC主義者:true,バグ:false};

*/


if(!Test_Play) Test_Text = "";

function Test(Text){
  Datas.乗員データ = {};
  Datas.現在 = {}
  Datas.現在.AC主義者 = Datas.乗員数データ.AC主義者;
  Datas.現在.バグ = Datas.乗員数データ.バグ;
  Datas.現在.グノーシア = Datas.乗員数データ.グノーシア;
  Datas.現在.敵 = Datas.現在.グノーシア;
  Datas.名乗り = {エンジニア:[],ドクター:[]};
  Datas.可能性 = {エンジニア:{},ドクター:{},グノーシア:{},乗員:{}};
  Datas.乗員名 = {};
  Datas.乗員番号 = {};
  Datas.矛盾内容 = "";
  Datas.消滅 = false;
  Datas.冷凍 = false;
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
  Set_Crew(Datas.乗員数データ.乗員);
  var Temp = null;
  var Values = Text.split("\n");
  Values.push("終了");
  Values.push("終了");
  for(var I = 0; I < Values.length; I++){
    Temp = Hatugen_Syori(Values[I]);
    if(!Temp) continue;
    ADD_Crew(Temp.誰が);
    switch(Temp.タイプ){
      case "設定":
        Datas.プレイヤー名 = Temp.結果;
        break;
      case "自白":
        console.log(Datas.自分);
        if(!Datas.自分) break;
        Datas.乗員データ[Temp.誰が[0]].役割 = {};
        Datas.乗員データ[Temp.誰が[0]].役割[Temp.結果] = true;
        break;
      case "終了":
        break;
      case "判定":
        ADD_Crew([Temp.誰を]);
        ED_Tyousa(Temp.誰が[0],Datas.乗員番号[Temp.誰を],Temp.結果);
        break;
      case "参加":
        for(var J = 0; J < Temp.誰が.length; J++) delete Datas.乗員データ[Temp.誰が[J]].ステータス;
        break;
      case "不在":
        for(var J = 0; J < Temp.誰が.length; J++){
          Datas.乗員データ[Temp.誰が[J]].ステータス = "不在";
          delete Datas.生存エンジニア[Temp.誰が[J]];
        };
        break;
      case "嘘":
        if(!Datas.自分) break;
        for(var J = 0; J < Temp.誰が.length; J++){
          Datas.乗員データ[Temp.誰が[J]].嘘 = true;
          Datas.乗員データ[Temp.誰が[J]].敵 = "敵(嘘)";
          Datas.乗員データ[Temp.誰が[J]].矛盾 = "嘘";
        };
        break;
      case "CS":
      case "凍結":
      case "冷凍":
      case "コールドスリープ":
        for(var J = 0; J < Temp.誰が.length; J++){
          Datas.乗員データ[Temp.誰が[J]].ステータス = "コールドスリープ";
          delete Datas.生存エンジニア[Temp.誰が[J]];
        };
        Datas.冷凍 = {誰が:Temp.誰が};
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
            if(Temp.誰が.length < 3){
              for(var J = 0; J < Temp.誰が.length; J++) Datas.乗員データ[Temp.誰が[J]].役割 = {留守番:true};
            };
            break;
        };
        break;
    };
    Datas.log = Temp;
    Loop_Check();
    ED = ["エンジニア","ドクター"];
    for(var J = 0; J < ED.length; J++){
      for(var K  = 0; K < Datas.名乗り[ED[J]].length; K++){
        if(Datas.乗員データ[Datas.名乗り[ED[J]][K]].敵) continue;
        if(Datas.矛盾){
          console.log("矛盾が変！");
          delete Datas.矛盾;
        };
        Datas.保存 = JSON.stringify(Datas);
        Datas.現在.真.テスト = Datas.名乗り[ED[J]][K];
        Datas.現在.真[ED[J]] = Datas.現在.真.テスト;
        Datas.乗員データ[Datas.現在.真.テスト].役割 = {};
        Datas.乗員データ[Datas.現在.真.テスト].役割[ED[J]] = true;
        for(var L = 0; L < Datas.名乗り[ED[J]].length; L++){
          if(Datas.名乗り[ED[J]][L]==Datas.現在.真.テスト) continue;
          delete Datas.乗員データ[Datas.名乗り[ED[J]][L]].役割[ED[J]];
        };
        Loop_Check();
        if(Datas.矛盾){
          Datas.保存 = JSON.parse(Datas.保存);
          Datas.保存.乗員データ[Datas.現在.真.テスト].敵 = "敵(" + Datas.矛盾 + "が矛盾)";
          Datas.保存.乗員データ[Datas.現在.真.テスト].矛盾 = Datas.矛盾;
          Datas.保存 = JSON.stringify(Datas.保存);
        };
        Datas = JSON.parse(Datas.保存);
      };
    };
    ED = ["AC主義者","バグ"];
    for(var J = 0; J < ED.length; J++){
      if(!Datas.可能性[ED[J]]) continue;
      Temp = Object.keys(Datas.可能性[ED[J]]);
      for(var K  = 0; K < Temp.length; K++){
        if(Datas.矛盾){
          console.log("矛盾が変！");
          delete Datas.矛盾;
        };
        Datas.保存 = JSON.stringify(Datas);
        Datas.テスト = {乗員:Temp[K],役割:ED[J]};
        Datas.乗員データ[Datas.テスト.乗員].役割 = {};
        Datas.乗員データ[Datas.テスト.乗員].役割[ED[J]] = true;
        for(var L = 0; L < Temp.length; L++){
          if(Temp[L]==Datas.テスト.乗員) continue;
          delete Datas.乗員データ[Temp[L]].役割[ED[J]];
        };
        Loop_Check();
        if(Datas.矛盾){
          Datas.保存 = JSON.parse(Datas.保存);
          Datas.乗員データ[Datas.テスト.乗員].役割[ED[J]];
          Datas.保存 = JSON.stringify(Datas.保存);
        };
        Datas = JSON.parse(Datas.保存);
      };
    };
  };
  Text = "";
  Text2 = "";
  Temp = Object.keys(Datas.乗員データ);
  for(var I = 0; I < Temp.length; I++){
    if(Datas.乗員データ[Temp[I]].確定||Datas.乗員データ[Temp[I]].敵||Datas.乗員データ[Temp[I]].人間){
      if(Datas.乗員データ[Temp[I]].矛盾){
        if(Text2) Text2 += "\n";
        Text2 += Datas.乗員データ[Temp[I]].名前;
        Text2 += ":";
        Text2 += Datas.乗員データ[Temp[I]].矛盾;
      };
      if(Datas.乗員データ[Temp[I]].ステータス&&Datas.乗員数データ.除外) continue;
      if(Datas.乗員データ[Temp[I]].確定!="留守番"||true){
        if(Text) Text += "\n";
        if(Datas.乗員データ[Temp[I]].確定){
          if(!Datas.乗員データ[Temp[I]].名前) Text += Temp[I] + "は" + Datas.乗員データ[Temp[I]].確定;
          else Text += Datas.乗員データ[Temp[I]].名前 + "は" + Datas.乗員データ[Temp[I]].確定;
          continue;
        };
        if(Datas.乗員データ[Temp[I]].人間){
          if(!Datas.乗員データ[Temp[I]].名前) Text += Temp[I] + "は人間";
          else Text += Datas.乗員データ[Temp[I]].名前 + "は人間";
          continue;
        };
        if(Datas.乗員データ[Temp[I]].敵){
          if(!Datas.乗員データ[Temp[I]].名前) Text += Temp[I] + "は敵";
          else Text += Datas.乗員データ[Temp[I]].名前 + "は敵";
        };
      };
    };
  };
  Datas.確定内容 = Text;
  Datas.矛盾内容 = Text2;
  console.log(Datas);
  return;
};

function Loop_Check(){
  Temp = Object.keys(Datas.乗員データ);
  Loop = true;
  Loops = 0;
  while(Loop){
    Loops++;
    Loop = false;
    if(Loops==100){
      console.log("loopが変！");
      break;
    };
    for(var I = 0; I < Temp.length; I++) Kakutei(Temp[I]);
    Check_KAKUTEI();
    for(var I = 0; I < Temp.length; I++) Kakutei(Temp[I]);
    Check_KAKUTEI();
  };
  return;
};

function Hatugen_Syori(Text){
  Datas.日誌 += Text;
  if(Text=="終了") return({タイプ:"終了"});
  Temp = Text.match(/^(.+)は(エンジニア|ドクター|乗員|グノーシア|AC主義者|バグ)$/);
  if(Temp) return({タイプ:"自白",誰が:[Temp[1]],"結果":Temp[2]});
  Temp = Text.match(/^(俺|プレイヤー)の名前?は(.+)$/);
  if(Temp) return({タイプ:"設定","結果":Temp[2]});
  Temp = Text.match(/^(.+)「(.+)は(人間|グノーシア)」$/);
  if(Temp) return({タイプ:"判定",誰が:[Temp[1]],誰を:Temp[2],"結果":Temp[3]});
  Temp = Text.match(/^(.+)が(ドクター|エンジニア|消滅|冷凍|CS|凍結|消失|留守番|嘘)$/);
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
        Loop = true;
        Datas.乗員データ[Temp2[0]].役割 = {};
        Datas.乗員データ[Temp2[0]].役割[Temp1[I]] = true;
        Datas.乗員データ[Temp2[0]].確定 = Temp1[I];
      };
    };
  };
  var Temp = Object.keys(Datas.乗員データ);
  var Temp1 = Object.keys(Datas.乗員データ);
  var Temp2 = Object.keys(Datas.可能性.グノーシア);
  var Numbers = [[],[],[],Datas.乗員数データ.乗員*1,Datas.乗員数データ.グノーシア*1,[],[]];
  Datas.疑惑 = {エンジニア:[],ドクター:[],敵:{},グノーシア:{}};
  for(var I = 0; I < Temp.length; I++){
    if(Datas.乗員データ[Temp[I]].役割.グノーシア) Datas.疑惑.グノーシア[Temp[I]] = true;
    if(Datas.乗員データ[Temp[I]].役割.AC主義者) Datas.疑惑.敵[Temp[I]] = true;
    if(Datas.乗員データ[Temp[I]].役割.バグ) Datas.疑惑.敵[Temp[I]] = true;
    if(Datas.乗員データ[Temp[I]].役割.AC主義者&&Object.keys(Datas.乗員データ[Temp[I]].役割).length==2){
      if(Datas.乗員データ[Temp[I]].役割.エンジニア) Numbers[5].push(Temp[I]);
      if(Datas.乗員データ[Temp[I]].役割.ドクター) Numbers[6].push(Temp[I]);
    };
    if(!Datas.乗員データ[Temp[I]].役割.グノーシア&&Datas.乗員データ[Temp[I]].報告){
      if(Datas.乗員データ[Temp[I]].報告.グノーシア){
        Temp1 = Object.keys(Datas.乗員データ[Temp[I]].報告.グノーシア);
        for(var J = 0; J < Temp1.length; J++){
          if(!Datas.乗員データ[Temp1[J]].敵){
            Loop = true;
            Datas.乗員データ[Temp1[J]].敵 = "敵(グノーシア判定矛盾)";
            Datas.乗員データ[Temp1[J]].矛盾 = "人をグノーシアと言った";
          };
        };
      };
    };
    if(Datas.乗員データ[Temp[I]].敵) Numbers[0].push(Temp[I]);
    if(Datas.乗員データ[Temp[I]].確定=="グノーシア"){
      Numbers[1].push(Temp[I]);
      if(Datas.乗員データ[Temp[I]].ステータス) Numbers[2].push(Temp[I]);
    };
    if(Datas.乗員データ[Temp[I]].ステータス){
      Numbers[3]--;
      if(Datas.乗員データ[Temp[I]].役割.グノーシア) Numbers[4]--;
    };
    if(!Datas.乗員データ[Temp[I]].確定&&!Datas.乗員データ[Temp[I]].敵&&Datas.乗員データ[Temp[I]].名乗り){
      Datas.疑惑[Datas.乗員データ[Temp[I]].名乗り].push(Temp[I]);
    };
  };
  if(Object.keys(Datas.疑惑.グノーシア).length < Datas.現在.グノーシア){
    if(Datas.テスト||Datas.現在.テスト){
      Datas.矛盾 = "グノーシア数";
      return;
    };
  };
  if(Object.keys(Datas.疑惑.敵).length < Datas.現在.敵){
    if(Datas.テスト||Datas.現在.テスト){
      Datas.矛盾 = "敵数";
      return;
    };
  };
  if(Numbers[5].length==2){
    for(var I = 0; I < Temp.length; I++){
      if(Numbers[5][0]==Temp[I]) continue;
      if(Numbers[5][1]==Temp[I]) continue;
      if(Datas.乗員データ[Temp[I]].役割.AC主義者){
        Loop = true;
        delete Datas.乗員データ[Temp[I]].役割.AC主義者;
      };
    };
  };
  if(Numbers[6].length==2){
    for(var I = 0; I < Temp.length; I++){
      if(Numbers[6][0]==Temp[I]) continue;
      if(Numbers[6][1]==Temp[I]) continue;
      if(Datas.乗員データ[Temp[I]].役割.AC主義者){
        Loop = true;
        delete Datas.乗員データ[Temp[I]].役割.AC主義者;
      };
    };
  };
  if(Numbers[1].length==Datas.現在.グノーシア){
    for(var I = 0; I < Temp.length; I++){
      if(Datas.乗員データ[Temp[I]].確定!="グノーシア"){
        if(Datas.乗員データ[Temp[I]].役割.グノーシア){
          if(Datas.現在.真.テスト){
            Datas.保存 = JSON.parse(Datas.保存);
            if(!Datas.保存.乗員データ[Temp[I]].報告) Datas.保存.乗員データ[Temp[I]].報告 = {};
            if(!Datas.保存.乗員データ[Temp[I]].報告.人間) Datas.保存.乗員データ[Temp[I]].報告.人間 = {};
            Datas.保存.乗員データ[Temp[I]].報告.人間[Datas.現在.真.テスト] = Datas.乗員データ[Datas.現在.真.テスト].名乗り;
            if(Datas.保存.乗員データ[Temp[I]].報告.グノーシア){
              if(Datas.保存.乗員データ[Temp[I]].報告.グノーシア[Datas.現在.真.テスト]) Datas.矛盾 = "調査";
            };
            Datas.保存 = JSON.stringify(Datas.保存);
          };
          delete Datas.乗員データ[Temp[I]].役割.グノーシア;
          Loop = true;
        };
      };
    };
  };
  Temp2 = [Temp2,true];
  for(var I = 0; I < Temp2[0].length; I++){
    if(!Datas.乗員データ[Temp2[0][I]].ステータス){
      Temp2[1] = false;
      break;
    };
  };
  if(Temp2[1]){
    Datas.矛盾 = "終了判定";
    return;
  };
  if(Numbers[1].length > Datas.現在.グノーシア){
    Datas.矛盾 = "グノーシア数";
    return;
  };
  if(Numbers[4]*2 >= Numbers[3]){
    Datas.矛盾 = "終了判定";
    return;
  };
  if(Numbers[2].length==Datas.現在.グノーシア){
    Datas.矛盾 = "終了判定";
    return;
  };
  if(Datas.現在.真.テスト&&Datas.現在.真.テスト==Datas.現在.真.エンジニア){
    Datas.疑惑.数 = Datas.疑惑.ドクター.length;
    if(Datas.疑惑.数) Datas.疑惑.数--;
    Datas.疑惑.数 += Numbers[0].length;
    if(Datas.疑惑.数==Datas.現在.敵){
      Datas.疑惑.確認 = {};
      for(var I = 0; I < Numbers[0].length; I++) Datas.疑惑.確認[Numbers[0][I]] = true;
      for(var I = 0; I < Datas.疑惑.ドクター.length; I++) Datas.疑惑.確認[Datas.疑惑.ドクター[I]] = true;
      Datas.保存 = JSON.parse(Datas.保存);
      for(var I = 0; I < Temp.length; I++){
        if(!Datas.疑惑.確認[Temp[I]]){
          if(!Datas.保存.乗員データ[Temp[I]].報告) Datas.保存.乗員データ[Temp[I]].報告 = {};
          if(!Datas.保存.乗員データ[Temp[I]].報告.人間) Datas.保存.乗員データ[Temp[I]].報告.人間 = {};
          Datas.保存.乗員データ[Temp[I]].報告.人間[Datas.現在.真.テスト] = "エンジニア";
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
      Datas.疑惑.確認 = {};
      for(var I = 0; I < Numbers[0].length; I++) Datas.疑惑.確認[Numbers[0][I]] = true;
      for(var I = 0; I < Datas.疑惑.エンジニア.length; I++) Datas.疑惑.確認[Datas.疑惑.エンジニア[I]] = true;
      Datas.保存 = JSON.parse(Datas.保存);
      for(var I = 0; I < Temp.length; I++){
        if(!Datas.疑惑.確認[Temp[I]]){
          if(!Datas.保存.乗員データ[Temp[I]].報告) Datas.保存.乗員データ[Temp[I]].報告 = {};
          if(!Datas.保存.乗員データ[Temp[I]].報告.人間) Datas.保存.乗員データ[Temp[I]].報告.人間 = {};
          Datas.保存.乗員データ[Temp[I]].報告.人間[Datas.現在.真.テスト] = "ドクター";
        };
      };
      Datas.保存 = JSON.stringify(Datas.保存);
    };
  };
  Datas.疑惑.数 = 0;
  if(Datas.疑惑.エンジニア.length > 1) Datas.疑惑.数 += Datas.疑惑.エンジニア.length - 1;
  if(Datas.疑惑.ドクター.length > 1) Datas.疑惑.数 += Datas.疑惑.ドクター.length - 1;
  if(Datas.疑惑.数){
    Datas.疑惑.数 = Datas.現在.敵 - Datas.疑惑.数;
    Datas.疑惑.確認 = [];
    for(var I = 0; I < Temp.length; I++){
      if(Datas.可能性.エンジニア[Temp[I]]) continue;
      if(Datas.可能性.ドクター[Temp[I]]) continue;
      if(Datas.可能性.グノーシア[Temp[I]]){
        Datas.疑惑.確認.push(Temp[I]);
        continue;
      };
      if(Datas.可能性.AC主義者){
        if(Datas.可能性.AC主義者[Temp[I]]){
          Datas.疑惑.確認.push(Temp[I]);
          continue;
        };
      };
      if(Datas.可能性.バグ){
        if(Datas.可能性.バグ[Temp[I]]){
          Datas.疑惑.確認.push(Temp[I]);
          continue;
        };
      };
    };
    if(Datas.疑惑.確認.length == Datas.疑惑.数){
      for(var I = 0; I < Datas.疑惑.確認.length; I++) Datas.乗員データ[Datas.疑惑.確認[I]].敵 = true;
    };
  };
  delete Datas.疑惑;
  return;
};

function Set_Crew(N){
  for(var I = 1; I <= N; I++){
    Datas.乗員データ["乗員"+I] = {役割:{グノーシア:true,乗員:true}};
    Datas.可能性.乗員["乗員"+I] = true;
    Datas.可能性.グノーシア["乗員"+I] = true;
    Datas.可能性.エンジニア["乗員"+I] = true;
    Datas.乗員データ["乗員"+I].役割.エンジニア = true;
    Datas.可能性.ドクター["乗員"+I] = true;
    Datas.乗員データ["乗員"+I].役割.ドクター = true;
    if(Datas.乗員数データ.AC主義者){
      Datas.可能性.AC主義者["乗員"+I] = true;
      Datas.乗員データ["乗員"+I].役割.AC主義者 = true;
    };
    if(Datas.乗員数データ.バグ){
      Datas.可能性.バグ["乗員"+I] = true;
      Datas.乗員データ["乗員"+I].役割.バグ = true;
    };
  };
  return;
};

function ZEN_TYOUSA(Darega){
  var Temp = null;
  var E_N = Object.keys(Datas.可能性.エンジニア);
  var D_N = Object.keys(Datas.可能性.ドクター);
  var N = Object.keys(Datas.乗員データ[Darega].役割).length;
  var H = {エンジニア:{グノーシア:0,人間:0,敵:0},ドクター:{グノーシア:0,人間:0,敵:0}};
  var P = ["人間","グノーシア","敵"];
  var HANTEI = {人間:[],グノーシア:[],敵:[]};
  if(Datas.乗員データ[Darega].報告){
    for(J = 0; J < P.length; J++){
      if(Datas.乗員データ[Darega].報告[P[J]]){
        Temp = Datas.乗員データ[Darega].報告[P[J]];
        for(var I = 0; I < E_N.length; I++){
          if(Temp[E_N[I]]){
            H.エンジニア[P[J]]++;
            HANTEI[P[J]].push(E_N[I]);
          };
        };
        for(var I = 0; I < D_N.length; I++){
          if(Temp[D_N[I]]){
            H.ドクター[P[J]]++;
            HANTEI[P[J]].push(D_N[I]);
          };
        };
      };
    };
  };
  if(HANTEI.人間.length&&HANTEI.グノーシア.length){
    for(var I = 0; I < HANTEI.人間.length; I++){
      if(!Datas.乗員データ[HANTEI.人間[I]].報告.敵) Datas.乗員データ[HANTEI.人間[I]].報告.敵 = {};
      for(var J = 0; J < HANTEI.グノーシア.length; J++){
        if(!Datas.乗員データ[HANTEI.人間[I]].報告.敵[HANTEI.グノーシア[J]]){
          Loop = true;
          Datas.乗員データ[HANTEI.人間[I]].報告.敵[HANTEI.グノーシア[J]] = Datas.乗員データ[HANTEI.グノーシア[J]].名乗り;
        };
      };
    };
    for(var I = 0; I < HANTEI.グノーシア.length; I++){
      if(!Datas.乗員データ[HANTEI.グノーシア[I]].報告.敵) Datas.乗員データ[HANTEI.グノーシア[I]].報告.敵 = {};
      for(var J = 0; J < HANTEI.人間.length; J++){
        if(!Datas.乗員データ[HANTEI.グノーシア[I]].報告.敵[HANTEI.人間[J]]){
          Loop = true;
          Datas.乗員データ[HANTEI.グノーシア[I]].報告.敵[HANTEI.人間[J]] = Datas.乗員データ[HANTEI.人間[J]].名乗り;
        };
      };
    };
  };
  if(E_N.length){
    if(H.エンジニア.敵==E_N.length&&!Datas.乗員データ[Darega].敵){
      Datas.乗員データ[Darega].敵 = "エンジニア全員が敵";
      Datas.乗員データ[Darega].矛盾 = "エンジニア全員が敵";
    };
    if(H.エンジニア.人間==E_N.length){
      delete Datas.乗員データ[Darega].役割.グノーシア;
      if(!Datas.乗員データ[Darega].ステータス) delete Datas.乗員データ[Darega].役割.バグ;
    };
    if(H.エンジニア.グノーシア==E_N.length) Datas.乗員データ[Darega].役割 = {グノーシア:true};
  };
  if(D_N.length){
    if(H.ドクター.敵==D_N.length&&!Datas.乗員データ[Darega].敵){
      Datas.乗員データ[Darega].敵 = "ドクター全員が敵";
      Datas.乗員データ[Darega].矛盾 = "ドクター全員が敵";
    };
    if(H.ドクター.人間==D_N.length) delete Datas.乗員データ[Darega].役割.グノーシア;
    if(H.ドクター.グノーシア==D_N.length) Datas.乗員データ[Darega].役割 = {グノーシア:true};
    if(N!=Object.keys(Datas.乗員データ[Darega].役割).length) Loop = true;
  };
  return;
};

function Kakutei(Darega){
  ZEN_TYOUSA(Darega);

  var Temp = Object.keys(Datas.乗員データ[Darega].役割);

  if(!Datas.乗員データ[Darega].役割.グノーシア&&!Datas.乗員データ[Darega].役割.バグ) Datas.乗員データ[Darega].人間 = true;
  if(Datas.乗員データ[Darega].人間){
    if(Datas.乗員データ[Darega].敵){
      Datas.乗員データ[Darega].敵 = "AC主義者";
      Datas.乗員データ[Darega].役割 = {AC主義者:true};
    };
    delete Datas.乗員データ[Darega].役割.バグ;
    delete Datas.乗員データ[Darega].役割.グノーシア;
    if(Datas.現在.バグ) delete Datas.可能性.バグ[Darega];
    delete Datas.可能性.グノーシア[Darega];
  };
  if(Datas.乗員データ[Darega].敵){
    delete Datas.乗員データ[Darega].役割.エンジニア;
    delete Datas.乗員データ[Darega].役割.ドクター;
    delete Datas.乗員データ[Darega].役割.乗員
    delete Datas.生存エンジニア[Darega];
    delete Datas.可能性.エンジニア[Darega];
    delete Datas.可能性.ドクター[Darega];
    delete Datas.可能性.乗員[Darega];
  };

  if(!Temp.length){
    Datas.矛盾 = Datas.乗員名[Darega];
    return;
  };

  if(Temp.length!=Object.keys(Datas.乗員データ[Darega].役割).length) Loop = true;
  if(Temp.length!=1||Datas.乗員データ[Darega].確定) return;
  Loop = true;
  Datas.乗員データ[Darega].確定 = Temp[0];
  var Delete = Datas.乗員データ[Darega].確定;
  Temp = Object.keys(Datas.可能性);
  for(var I = 0; I < Temp.length; I++) if(Temp[I]!=Delete) delete Datas.可能性[Temp[I]][Darega];
  Temp = Object.keys(Datas.乗員データ);
  switch(Delete){
    case "エンジニア":
    case "ドクター":
      Datas.現在.真[Delete] = Darega;
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
      Loop = true;
      Datas.乗員データ[Temp[I]].人間 = true;
    };
    if(Datas.乗員データ[Temp[I]].役割[Delete]){
      Loop = true;
      delete Datas.可能性[Delete][Temp[I]];
      delete Datas.乗員データ[Temp[I]].役割[Delete];
    };
  };
  return;
};

function ADD_Crew(A){
  if(!A) return;
  N = 1;
  for(var I = 0; I < A.length; I++){
    if(Datas.乗員番号[A[I]]){
      A[I] = Datas.乗員番号[A[I]];
      continue;
    };
    while(Datas.乗員データ["乗員"+N].名前) N++;
    Datas.乗員名["乗員"+N] = A[I];
    Datas.乗員番号[A[I]] = "乗員" + N;
    Datas.乗員データ["乗員"+N].名前 = A[I];
    A[I] = "乗員" + N;
  };
  return;
};

function ED_Tyousa(Darega,Darewo,KEKKA){
  var HANTAI = "グノーシア";
  if(KEKKA==HANTAI) HANTAI = "人間";
  if(Datas.消滅){
    if(Datas.消滅.エンジニア[Darega]){
      if(Datas.消滅.誰が[0]==Darewo||Datas.消滅.誰が[1]==Darewo) Datas.乗員データ[Darewo].バグ疑惑 = true;
      delete Datas.消滅.エンジニア[Darega];
    };
    if(!Object.keys(Datas.消滅.エンジニア).length){
      if(Datas.乗員データ[Datas.消滅.誰が[0]].バグ疑惑=="確認"){
        delete Datas.乗員データ[Datas.消滅.誰が[0]].バグ疑惑;
        delete Datas.乗員データ[Datas.消滅.誰が[0]].役割.バグ;
      };
      if(Datas.消滅.誰が[1]){
        if(Datas.乗員データ[Datas.消滅.誰が[1]].バグ疑惑=="確認"){
          delete Datas.乗員データ[Datas.消滅.誰が[1]].バグ疑惑;
          delete Datas.乗員データ[Datas.消滅.誰が[1]].役割.バグ;
        };
      };
    };
    if(Datas.消滅.誰が.length==2){
      if(Darega==Datas.現在.真.エンジニア) Datas.乗員データ[Darewo].役割 = {バグ:true};
      if(Darewo!=Datas.消滅.誰が[0]&&Darewo!=Datas.消滅.誰が[1]&&Datas.乗員データ[Darega].名乗り=="エンジニア"){
        Datas.乗員データ[Darega].敵 = "敵(バグ未調査)";
        Datas.乗員データ[Darega].矛盾 = "バグ未調査";
      };
      if(!Datas.乗員データ[Datas.消滅.誰が[0]].役割.バグ) Datas.乗員データ[Datas.消滅.誰が[1]].役割 = {バグ:true};
      if(!Datas.乗員データ[Datas.消滅.誰が[1]].役割.バグ) Datas.乗員データ[Datas.消滅.誰が[0]].役割 = {バグ:true};
    };
  };
  if(!Datas.乗員データ[Darewo].報告) Datas.乗員データ[Darewo].報告 = {};
  if(!Datas.乗員データ[Darewo].報告[KEKKA]) Datas.乗員データ[Darewo].報告[KEKKA] = {};
  Datas.乗員データ[Darewo].報告[KEKKA][Darega] = Datas.乗員データ[Darega].名乗り;
  if(KEKKA=="グノーシア"){
    if(!Datas.乗員データ[Darewo].報告.敵) Datas.乗員データ[Darewo].報告.敵 = {};
    Datas.乗員データ[Darewo].報告.敵[Darega] = Datas.乗員データ[Darega].名乗り;
  };
  return;
};

function SYOUMETU(Darega){
  for(var I = 0; I < Darega.length; I++){
    Datas.乗員データ[Darega[I]].ステータス = "消滅";
    delete Datas.乗員データ[Darega[I]].役割.グノーシア;
    delete Datas.生存エンジニア[Darega[I]];
    Datas.乗員データ[Darega[I]].バグ疑惑 = "確認";
    if(I){
      delete Datas.現在.バグ;
      Temp = Object.keys(Datas.生存エンジニア);
      if(Temp.length==1){
        if(Datas.名乗り.エンジニア[Darega[0]]) Temp[1] = true;
        if(Datas.名乗り.エンジニア[Darega[1]]) Temp[1] = true;
        if(!Temp[1]){
          Datas.現在.真.エンジニア = [Temp[0]];
          Datas.乗員データ[Temp[0]].役割 = {エンジニア:true};
        };
      };
      if(!Datas.乗員データ[Darega[0]].役割.バグ) Datas.乗員データ[Darega[1]].役割 = {バグ:true};
      if(!Datas.乗員データ[Darega[1]].役割.バグ) Datas.乗員データ[Darega[0]].役割 = {バグ:true};
      if(Datas.乗員データ[Darega[0]].役割.バグ&&Datas.乗員データ[Darega[1]].役割.バグ){
        Temp = Object.keys(Datas.乗員データ);
        for(var I = 0; I < Temp.length; I++){
          if(Temp[I]==Darega[0]||Temp[I]==Darega[1]) continue;
          delete Datas.乗員データ[Temp[I]].役割.バグ;
        };
      };
    };
  };
  Datas.消滅 = {誰が:Darega,エンジニア:Datas.生存エンジニア};
  return;
};

function ED_Nanori(Darega,ED){
  var Temp = Object.keys(Datas.乗員データ);
  for(var I = 0; I < Temp.length; I++){
    if(!Datas.乗員データ[Temp[I]].ステータス){
      delete Datas.可能性[ED][Temp[I]];
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
    Datas.乗員データ[Darega[I]].名乗り = ED;
    Datas.可能性[ED][Darega[I]] = true;
    Datas.乗員データ[Darega[I]].役割[ED] = true;
    if(ED=="エンジニア") Datas.生存エンジニア[Darega[I]] = true;
    for(var J = 0; J < Darega.length; J++){
      if(I==J) continue;
      if(!Datas.乗員データ[Darega[J]].報告) Datas.乗員データ[Darega[J]].報告 = {};
      if(!Datas.乗員データ[Darega[J]].報告.敵) Datas.乗員データ[Darega[J]].報告.敵 = {};
      Datas.乗員データ[Darega[J]].報告.敵[Darega[I]] = ED;
    };
  };
  for(var I = 0; I < Temp.length; I++){
    if(!Datas.乗員データ[Temp[I]].役割[ED]) continue;
    Datas.乗員データ[Temp[I]].報告 = {};
    Datas.乗員データ[Temp[I]].報告.人間 = {};
    Datas.乗員データ[Temp[I]].報告.人間[Temp[I]] = ED;
  };
  return;
};
