/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓  JavaScript ↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 


■命令したいHTMLタグを指定する
$('●●●')


■クリックイベントの設定
$('●●●').on('click', function(){


});

■代表的なjQueryの命令
show(), hide(), fadeOut(), append()

■変数
const ●●●　= ●●●;
let ●●●　= ●●●;

■if文
if(){

}else if(){


}else{


}

*/



$('#btn').on("click", function () {
  let num = Math.ceil(Math.random() * 100);

  if (num === 1) {
    $("#result4").html('<img src="images/apple.png" id="photo" />');
    $('#result5').html('SSRゲット!!');
  } else if (num === 2) {
    $('#result4').html('<img src="images/amazon.png" />');
    $('#result5').html('SSRゲット!!');
  } else if (num === 3) {
    $('#result4').html('<img src="images/Googlelogo.png" />');
    $('#result5').html('SSRゲット!!');
  } else if (num === 4) {
    $('#result4').html('<img src="images/Meta.png" />');
    $('#result5').html('SSRゲット!!');
  } else if (num < 20 == 0) {
    $('#result4').html('<img src="images/IBM.jpg" />');
    $('#result5').html('SRゲット!!');
  } else if (num % 7 == 0) {
    $('#result4').html('<img src="images/NTT.jpg" />');
    $('#result5').html('SRゲット!!');
  }
  else if (num % 6 == 0) {
    $('#result4').html('<img src="images/CISCO.jpg" />');
    $('#result5').html('SRゲット!!');
  }
  else {
    $('#result4').html('<img src="images/YAHOO.jpg" />');
    $('#result5').html('Rゲット!!');
  }
});