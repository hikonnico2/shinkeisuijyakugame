let cards=[];

function init() {
  let cardSet = [];
  let cardNum = 1;
  for (let c = 0; c < 16; c+=2) {
    cardSet[c] = ['🍣', cardNum];
    cardSet[c + 1] = ['🍕', cardNum];
    cardNum++;
  }
  for (let s = 0; s < 50; s++){
    let r1 = Math.floor(Math.random() * cardSet.length);
    let r2 = Math.floor(Math.random() * cardSet.length);
    let tmp = cardSet[r1];
    cardSet[r1] = cardSet[r2];
    cardSet[r2] = tmp;
  }
  for (let y = 0; y < 4; y++){
    cards[y] = [];
    for (let x = 0; x < 4; x++) {
      cards[y][x] = cardSet[y * 4 + x];
    }
  }
}

let px = null;
let py = null;
let ccnt = 0;

function turn(ay, ax) {
  let current = cards[ay][ax];
  let card = document.getElementById(ay + '_' + ax);
  card.innerHTML = current[0] + current[1];
  card.disabled = true;
  ccnt++;
  if (px == null) {
    px = ax;
    py = ay;
  } else {
    let previous = cards[py][px];
    setTimeout(
      function(){
        if (previous[1] == current[1]){
          alert('あたり！');
        } else {
          alert('はずれ！');

          let pcard = document.getElementById(py + '_' + px);
          pcard.innerHTML = '?';
          pcard.disabled = false;
          card.innerHTML = '?';
          card.disabled = false;
          ccnt -= 2;
        }
        px = null;
        py - null;

        if (ccnt >= 16) {
          complete();
        }
      }
      ,50
    );
  }
}

function complete() {
  alert('ゲームクリア！');
}