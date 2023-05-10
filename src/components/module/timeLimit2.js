const COUNTOUT = document.querySelector('.count-down').textContent;

let count = 5;
let dom = document.querySelector('.count-down')
let div = document.querySelector('.del') //div 안에 있는 모든 text들 

const intervalId = setInterval(() => {
  count--;
  console.log(count + "초 남았습니다.");
  dom.textContent = count;
  if (count == -1) {
    clearInterval(intervalId); // setInterval 멈추기
    alert("종료되었습니다..");
    div.textContent = ''; //div 안에 있는 모든 text들 빈 값으로 설정
  }
 
}, 1000);
   


//1. 숫자를 줄여야하니 count 라는 변수가 있어야함. 우리가 바꿔야할 텍스트를 가져와야함. 
//setInterval((funcion 넣고 싶은 기능))
//count가 1초에 1씩 감소를 해야함 0이 되면 더 이상 감소를 하면 안되고 문자가 바껴야함. text contant or insert HTML로 바꾸시오
//1초 바꾸고 싶으면 1000을 넣어야함 


// setInterval(() => console.log(new Date()), 2000); 