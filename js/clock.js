const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date(); // 이게 밖에 있으면 한 번만 시간을 읽으므로 시간 갱신이 안된다.
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 처음 1초 기다리지 않고, 일단 한 번 바로 실행
setInterval(getClock, 1000); // 그 다음 1초씩 실행
