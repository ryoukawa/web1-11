
var number = Math.floor(Math.random()*11);
while(1){
var answer = parseInt(window.prompt('数あてゲーム。0～10の数字を入力してください！'));

var message;
if(answer === number){
  message =　'当たり';
  brake;
}
  else if (answer < number){
  message = window.confirm('残念！もっと大きい数字です');
}else if (number < answer){
  message = window.confirm('残念！もっと小さい数字です');
}else{
  message = window.confirm('0～10 の数字を入力してください');
}
  if (result===true)
    result=0;
  else　brake;
  
}
document.getElementById('choice').textContent = message;
