
var namber = Math.floor(Math.random()*10);
var answer = parseInt(window.prompt('数あてゲーム。0～10の数字を入力してください！'));

var message;
if(answer === number){
  message =　'当たり';
}else if (answer < number){
  message = '残念！もっと大きい数字です';
}else if (number < answer){
  message = '残念！もっと小さい数字です';
}else{
  message = '0～10 の数字を入力してください';
}

document.getElementById('choice').textContent = message;
