var Datas = {矛盾内容:"",確定内容:"",自分:false,日誌:""};
Datas.乗員データ = {};
Datas.乗員数データ = {乗員:15,グノーシア:5,AC主義者:true,バグ:true,除外:false,守護天使:false,エンジニア:true,ドクター:true};

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

Test_Play = false;

if(!Test_Play) Test_Text = "";

function Test(Text){
  Datas.乗員データ = {};
  Datas.乗員名 = {};
  Datas.乗員番号 = {};
  Datas.矛盾内容 = "";
  Datas.消滅 = [];
  Datas.冷凍 = [];
  Datas.報告 = {};
  Datas.判定 = {};
  Datas.乗員データ = {};
  Datas.自分 = false;
  Test2(Datas.乗員数データ.乗員);
  var Temp = null;
  var Values = Text.split("\n");
  Values.push("終了");
  for(var I = 0; I < Values.length; I++){
    Temp = Hatugen_Syori(Values[I]);
    if(!Temp) continue;
    Test3(Temp.誰が);
    Datas.日誌 += "\n";
    switch(Temp.タイプ){
      default:
        Datas.日誌 = Datas.日誌.replace(/\n$/,"(？)\n");
        if(Datas.矛盾内容) Datas.矛盾内容 += "\n";
        Datas.矛盾内容 += Temp + "(" + (I+1) + "行目)";
        break;
      case "自白":
        if(!Datas.自分) break;
        Test6(Temp.誰が[0],"確定",Temp.結果);
        break;
      case "設定":
        Datas.プレイヤー名 = Temp.結果;
        break;
      case "終了":
        Datas.日誌 = Datas.日誌.replace(/\n?終了\n$/,"");
        break;
      case "参加":
        for(var J = 0; J < Temp.誰が.length; J++) Test6(Temp.誰が[J],"ステータス",false);
        break;
      case "不在":
        for(var J = 0; J < Temp.誰が.length; J++){
          Test6(Temp.誰が[J],"ステータス","不在");
        };
        break;
      case "判定":
        Test3([Temp.誰を]);
        Test7(Temp.誰が[0],Datas.乗員番号[Temp.誰を],Temp.結果);
        break;
      case "嘘":
        if(!Datas.自分) break;
        for(var J = 0; J < Temp.誰が.length; J++){
          Test6(Temp.誰が[J],"敵","嘘");
        };
        break;
      case "CS":
      case "凍結":
      case "冷凍":
      case "コールドスリープ":
        for(var J = 0; J < Temp.誰が.length; J++){
          Test6(Temp.誰が[J],"ステータス","コールドスリープ");
        };
        Datas.冷凍.push({誰が:Temp.誰が});
        break;
      case "消滅":
      case "消失":
        Test8(Temp.誰が);
        break;
      case "名乗":
        switch(Temp.結果){
          case "エンジニア":
          case "ドクター":
            Test4(Temp.誰が,Temp.結果);
            break;
          case "留守番":
            if(Temp.誰が.length < 3){
              for(var J = 0; J < Temp.誰が.length; J++) Test6(Temp.誰が[J],"確定","留守番");
            };
            break;
        };
        break;
    };
    Loop_Check();
  };
  Text = "";
  Text2 = Datas.矛盾内容;
  Temp = Object.keys(Datas.乗員データ);
  for(var I = 0; I < Temp.length; I++){
    if(Datas.乗員データ[Temp[I]].確定||Datas.乗員データ[Temp[I]].敵||Datas.乗員データ[Temp[I]].人間){
      if(Datas.乗員データ[Temp[I]].敵){
        if(Text2) Text2 += "\n";
        Text2 += Datas.乗員データ[Temp[I]].名前;
        Text2 += ":";
        Text2 += Datas.乗員データ[Temp[I]].敵;
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
  return;
};

function Hatugen_Syori(Text){
  Datas.日誌 += Text;
  switch(Text){
    case "終了":
      return({タイプ:"終了"});
    case "消滅無":
    case "消滅無し":
    case "消滅なし":
    case "消滅ゼロ":
    case "消滅0":
    case "消失無":
    case "消失無し":
    case "消失なし":
    case "消失ゼロ":
    case "消失0":
      return({タイプ:"消滅"});
  };
  Temp = Text.match(/^(.+)は(エンジニア|ドクター|乗員|グノーシア|AC主義者|バグ)$/);
  if(Temp) return({タイプ:"自白",誰が:[Temp[1]],"結果":Temp[2]});
  Temp = Text.match(/^(俺|プレイヤー)の名前?は(.+)$/);
  if(Temp) return({タイプ:"設定","結果":Temp[2]});
  Temp = Text.match(/^(.+)「(.+)は(人間|グノーシア)」$/);
  if(Temp) return({タイプ:"判定",誰が:[Temp[1]],誰を:Temp[2],"結果":Temp[3]});
  Temp = Text.match(/^(.+)が(ドクター|エンジニア|消滅|冷凍|CS|凍結|消失|留守番|参加|不在|嘘)$/);
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

function Loop_Check(){
  var Loops1 = 0;
  Temp = Object.keys(Datas.乗員データ);
  Loop1 = true;
  var Check = ["エンジニア","ドクター","バグ","AC主義者","乗員","グノーシア"];
  while(Loop1){
    Loops1++;
    Loop1 = false;
    if(Loops1==100) aaa
    if(Datas.テスト) aaa
    Test9();
    for(var I = 0; I < Check.length; I++){
      for(var J = 0; J < Temp.length; J++){
        Datas.テスト = Test10(Datas.乗員名[Temp[J]].データ);
        if(Datas.テスト) Test6(Temp[J],"敵",Datas.テスト);
        if(Datas.乗員データ[Temp[J]].確定) continue;
        if(!Datas.乗員データ[Temp[J]].役割[Check[I]]) continue;
        Datas.テスト = {乗員:Temp[J],役割:Check[I]};
        Datas.テスト.データ = JSON.stringify(Datas.乗員データ);
        Datas.テスト.データ = JSON.parse(Datas.テスト.データ);
        Test5(Datas.テスト.データ,Datas.テスト.乗員,"確定",Datas.テスト.役割);
        Test9(Datas.テスト.データ);
        Datas.テスト.結果 = Test10(Datas.テスト.データ);
        delete Datas.テスト.データ;
        if(Datas.テスト.結果) Test6(Datas.テスト.乗員,"削除",Datas.テスト.役割);
        delete Datas.テスト;
      };
    };
  };
  return;
};

function Test10(Json){
  if(Json=="敵") return;
  var Check = false;
  var Check2 = false;
  var N = {処理グノーシア:0,敵:0,グノーシア:0,敵疑惑:0,グノーシア疑惑:0,生存者:0,生存グノーシア1:0};
  N.生存グノーシア2 = Datas.乗員数データ.グノーシア;
  for(var I = 0; I < Temp.length; I++){
    if(Json[Temp[I]].敵) N.敵++;
    if(!Json[Temp[I]].ステータス) N.生存者++;
    if(Json[Temp[I]].確定=="グノーシア"){
      N.グノーシア++;
      if(Json[Temp[I]].ステータス) N.処理グノーシア++;
      else N.生存グノーシア++;
    };
    if(Json[Temp[I]].役割.グノーシア){
      N.グノーシア疑惑++;
      if(Json[Temp[I]].ステータス) N.生存グノーシア2--;
    };
    Check2 = false;
    if(Json[Temp[I]].役割.バグ) Check2 = true;
    if(Json[Temp[I]].役割.AC主義者) Check2 = true;
    if(Json[Temp[I]].役割.グノーシア) Check2 = true;
    if(Check2) N.敵疑惑++;
  };
  if(N.敵 > Datas.乗員数データ.敵) Check = "敵数";
  if(N.敵疑惑 < Datas.乗員数データ.敵) Check = "敵数";
  if(N.グノーシア > Datas.乗員数データ.グノーシア) Check = "グノーシア数";
  if(N.処理グノーシア==Datas.乗員数データ.グノーシア) Check = "グノーシア数";
  if(N.グノーシア疑惑 < Datas.乗員数データ.グノーシア) Check = "グノーシア数";
  if(N.生存グノーシア1*2 >= N.生存者) Check = "終了判定";
  if(N.生存グノーシア2*2 >= N.生存者) Check = "終了判定";
  for(var I = 0; I < Temp.length; I++){
    if(!Object.keys(Json[Temp[I]].役割).length) Check = Temp[I];
  };
  return(Check);
};

function Test9(A){
  var Json = Datas.乗員データ;
  if(A) Json = A;
  var Temp = Object.keys(Datas.乗員名);
  var E_N = [];
  var D_N = [];
  var A_N = [];
  var B_N = [];
  var Kakutei = {人間:[],敵:[],グノーシア:[]};
  for(var I = 0; I < Temp.length; I++){
    if(Json[Temp[I]].役割.AC主義者) A_N.push(Temp[I]);
    if(Json[Temp[I]].役割.バグ) B_N.push(Temp[I]);
    if(Datas.乗員名[Temp[I]].データ=="敵") continue;
    if(Json[Temp[I]].役割.エンジニア) E_N.push(Temp[I]);
    if(Json[Temp[I]].役割.ドクター) D_N.push(Temp[I]);
  };
  if(E_N.length==1){
    if(!A) Test6(E_N[0],"確定","エンジニア");
    else Test5(Json,E_N[0],"確定","エンジニア");
  };
  if(D_N.length==1){
    if(!A) Test6(D_N[0],"確定","ドクター");
    else Test5(Json,D_N[0],"確定","ドクター");
  };
  if(A_N.length==1){
    if(!A) Test6(A_N[0],"確定","AC主義者");
    else Test5(Json,A_N[0],"確定","AC主義者");
  };
  if(B_N.length==1){
    if(!A) Test6(B_N[0],"確定","バグ");
    else Test5(Json,B_N[0],"確定","バグ");
  };
  var N = null;
  for(var I = 0; I < Temp.length; I++){
    N = [{人間:0,敵:0,グノーシア:0},{人間:0,敵:0,グノーシア:0}];
    for(var J = 0; J < E_N.length; J++){
      if(Datas.乗員名[E_N[J]].データ[Temp[I]].人間) N[0].人間++;
      if(Datas.乗員名[E_N[J]].データ[Temp[I]].敵) N[0].敵++;
      if(Datas.乗員名[E_N[J]].データ[Temp[I]].確定 == "グノーシア") N[0].グノーシア++;
    };
    for(var J = 0; J < D_N.length; J++){
      if(Datas.乗員名[D_N[J]].データ[Temp[I]].人間) N[1].人間++;
      if(Datas.乗員名[D_N[J]].データ[Temp[I]].敵) N[1].敵++;
      if(Datas.乗員名[D_N[J]].データ[Temp[I]].確定 == "グノーシア") N[1].グノーシア++;
    };
    if(E_N[0]&&E_N.length==N[0].人間) Kakutei.人間.push(Temp[I]);
    if(E_N[0]&&E_N.length==N[0].敵) Kakutei.敵.push(Temp[I]);
    if(E_N[0]&&E_N.length==N[0].グノーシア) Kakutei.グノーシア.push(Temp[I]);
    if(D_N[0]&&D_N.length==N[1].人間) Kakutei.人間.push(Temp[I]);
    if(D_N[0]&&D_N.length==N[1].敵) Kakutei.敵.push(Temp[I]);
    if(D_N[0]&&D_N.length==N[1].グノーシア) Kakutei.グノーシア.push(Temp[I]);
  };
  Temp = [Kakutei.人間,Kakutei.敵,Kakutei.グノーシア];
  for(var I = 0; I < Temp.length; I++){
    for(var J = 0; J < Temp[I].length; J++){
      switch(I){
        case 0:
          if(!A){
            Test6(Temp[I][J],"削除","バグ");
            Test6(Temp[I][J],"削除","グノーシア");
          }
          else{
            Test5(Json,Temp[I][J],"削除","バグ");
            Test5(Json,Temp[I][J],"削除","グノーシア");
          };
          break;
        case 1:
          if(!A) Test6(Temp[I][J],"敵","エンジニア又はドクターが全員敵");
          else Test5(Json,Temp[I][J],"敵","エンジニア又はドクターが全員敵");
          break;
        case 2:
          if(!A) Test6(Temp[I][J],"確定","グノーシア");
          else Test5(Json,Temp[I][J],"確定","グノーシア");
          break;
      };
    };
  };
  return;
};

function Test8(Darega){
  if(Darega){
    for(var I = 0; I < Darega.length; I++){
      Test6(Darega[I],"削除","グノーシア");
      Test6(Darega[I],"ステータス","消滅");
      if(I){
        if(!Datas.乗員データ[Darega[0]].役割.バグ) Test6(Darega[1],"確定","バグ");
        if(!Datas.乗員データ[Darega[1]].役割.バグ) Test6(Darega[0],"確定","バグ");
        if(Datas.乗員データ[Darega[0]].役割.バグ&&Datas.乗員データ[Darega[1]].役割.バグ){
          Temp = Object.keys(Datas.乗員データ);
          for(var I = 0; I < Temp.length; I++){
            if(Temp[I]==Darega[0]||Temp[I]==Darega[1]) continue;
            Test6(Temp[I],"削除","バグ");
          };
        };
        Datas.Temp = [];
        Temp = Object.keys(Datas.乗員データ);
        for(var I = 0; I < Temp.length; I++){
          if(Datas.乗員名[Temp[I]].データ=="敵") continue;
          if(Datas.乗員名[Temp[I]].データ[Temp[I]].確定 == "エンジニア"){
            if(!Datas.乗員データ[Temp[I]].ステータス) Datas.Temp.push(Temp[I]);
          };
        };
        if(Datas.Temp.length==1) Test6(Datas.Temp[0],"確定","エンジニア");
        delete Datas.Temp;
      };
    };
    if(Darega) Datas.消滅.push({誰が:Darega});
  }
  else{
    Datas.消滅.push(false);
    if(!Datas.乗員数データ.守護天使){
      Temp = Object.keys(Datas.乗員データ);
      for(var I = 0; I < Temp.length; I++){
        if(Datas.乗員データ[Temp[I]].ステータス!="コールドスリープ") continue;
        Test6(Temp[I],"削除","バグ");
      };
    };
  };
  return;
};

function Test7(Darega,Darewo,KEKKA){
  var HANTAI = "グノーシア";
  if(KEKKA==HANTAI) HANTAI = "人間";
  if(!Datas.報告[Darewo]) Datas.報告[Darewo] = {};
  if(!Datas.報告[Darewo][KEKKA]) Datas.報告[Darewo][KEKKA] = [];
  Datas.報告[Darewo][KEKKA].push(Darega);
  if(Datas.乗員データ[Darewo].確定=="グノーシア"&&KEKKA=="人間") Test6(Darega,"敵","判定矛盾");
  if(!Datas.乗員データ[Darewo].役割.グノーシア&&KEKKA=="グノーシア") Test6(Darega,"敵","判定矛盾");
  if(Datas.報告[Darewo][HANTAI]){
    for(var I = 0; I < Datas.報告[Darewo][HANTAI].length; I++){
      Test5(Datas.乗員名[Darega].データ,Datas.報告[Darewo][HANTAI][I],"敵","判定矛盾");
      Test5(Datas.乗員名[Datas.報告[Darewo][HANTAI][I]].データ,Darega,"敵","判定矛盾");
    };
  };
  if(KEKKA=="グノーシア") Test5(Datas.乗員名[Darega].データ,Darewo,"確定","グノーシア");
  else{
    Test5(Datas.乗員名[Darega].データ,Darewo,"削除","グノーシア");
    if(!Datas.乗員データ[Darewo].ステータス) Test5(Datas.乗員名[Darega].データ,Darewo,"削除","バグ");
    if(Datas.消滅[Datas.消滅.length-1]){
      if(Datas.消滅[Datas.消滅.length-1].誰が.length==2){
        Test5(Datas.乗員名[Darega].データ,Darewo,"確定","バグ");
        if(Datas.消滅[Datas.消滅.length-1].誰が[0]!=Darewo&&Datas.消滅[Datas.消滅.length-1].誰が[1]!=Darewo){
          Test6(Darega,"敵","バグ未調査");
        };
      };
    };
  };
  return;
};

function Test6(Name,Type,Value){
  Test5(Datas.乗員データ,Name,Type,Value);
  var Temp = Object.keys(Datas.乗員名);
  var Teki = false;
  for(var I = 0; I < Temp.length; I++){
    if(Datas.乗員データ[Temp[I]].敵) Datas.乗員名[Temp[I]].データ = "敵";
    Teki = Test5(Datas.乗員名[Temp[I]].データ,Name,Type,Value);
    if(Teki) Test5(Datas.乗員名[Temp[I]].データ,Name,"敵",Teki);
  };
  return;
};

function Test5(Json,Name,Type,Value){
  if(Json=="敵") return(false);
  var MUZYUN = false;
  if(!Value) Value = "未入力";
  switch(Type){
    case "敵":
      delete Json[Name].役割.エンジニア;
      delete Json[Name].役割.ドクター;
      delete Json[Name].役割.乗員;
    case "ステータス":
      Json[Name][Type] = Value;
      break;
    case "確定":
      Json[Name].役割 = {};
      Json[Name].役割[Value] = true;
      break;
    case "削除":
      delete Json[Name].役割[Value];
      break;
    default:
      Logger.log(Type);
      break;
  };
  var Temp = Object.keys(Json[Name].役割);
  if(!Json[Name].役割.グノーシア&&!Json[Name].役割.バグ) Json[Name].人間 = true;
  if(!Json[Name].役割.エンジニア&&!Json[Name].役割.ドクター){
    if(!Json[Name].役割.留守番&&!Json[Name].役割.乗員){
      if(!Json[Name].敵){
        Json[Name].敵 = true;
        if(Json[Name].人間) Json[Name].役割 = {AC主義者:true};
      };
    };
  };
  switch(Temp.length){
    case 0:
      MUZYUN = Name;
      break;
    case 1:
      if(Json[Name].確定) break;
      if(!Datas.テスト) Loop1 = true;
      Value = Temp[0];
      Json[Name].確定 = Value;
      switch(Value){
        case "AC主義者":
          Json[Name].人間 = true;
          if(!Json[Name].敵) Json[Name].敵 = true;
          break;
        case "エンジニア":
        case "ドクター":
        case "乗員":
        case "留守番":
          Json[Name].人間 = true;
          break;
        case "バグ":
        case "グノーシア":
          if(!Json[Name].敵) Json[Name].敵 = true;
          break;
      };
      switch(Value){
        case "エンジニア":
        case "ドクター":
        case "AC主義者":
        case "バグ":
          Temp = Object.keys(Json);
          for(var I = 0; I < Temp.length; I++){
            if(Temp[I]==Name) continue;
            Test5(Json,Temp[I],"削除",Value);
          };
          break;
      };
      break;
  };
  return(MUZYUN);
};

function Test4(Darega,ED){
  var Temp = Object.keys(Datas.乗員データ);
  var HANTAI = "ドクター";
  var Json = {};
  if(ED=="ドクター") HANTAI = "エンジニア";
  for(var I = 0; I < Darega.length; I++){
    Json[Darega[I]] = true;
    Test6(Darega[I],"削除","乗員");
    Test6(Darega[I],"削除",HANTAI);
    Test5(Datas.乗員名[Darega[I]].データ,Darega[I],"確定",ED);
  };
  for(var I = 0; I < Temp.length; I++){
    if(!Datas.乗員データ[Temp[I]].ステータス&&!Json[Temp[I]]) Test6(Temp[I],"削除",ED);
  };
  return;
};

function Test3(A){
  if(!A) return;
  var N = 1;
  for(var I = 0; I < A.length; I++){
    if(Datas.乗員番号[A[I]]){
      A[I] = Datas.乗員番号[A[I]];
      continue;
    };
    while(Datas.乗員データ["乗員"+N].名前) N++;
    Datas.乗員名["乗員"+N].名前 = A[I];
    Datas.乗員番号[A[I]] = "乗員" + N;
    Datas.乗員データ["乗員"+N].名前 = A[I];
    A[I] = "乗員" + N;
  };
  return;
};

function Test2(N){
  var Temp = ["エンジニア","ドクター","AC主義者","バグ"];
  for(var I = 1; I <= N; I++){
    Datas.乗員データ["乗員"+I] = {役割:{グノーシア:true,乗員:true}};
    for(var J = 0; J < Temp.length; J++){
      if(!Datas.乗員数データ[Temp[J]]) continue;
      Datas.乗員データ["乗員"+I].役割[Temp[J]] = true;
    };
  };
  var N = 1;
  while(Datas.乗員データ["乗員"+N]){
    Datas.乗員名["乗員"+N] = JSON.stringify({データ:Datas.乗員データ});
    Datas.乗員名["乗員"+N] = JSON.parse(Datas.乗員名["乗員"+N]);
    Datas.乗員名["乗員"+N].データ["乗員"+N].人間 = "自認";
    N++;
  };
  return;
};
