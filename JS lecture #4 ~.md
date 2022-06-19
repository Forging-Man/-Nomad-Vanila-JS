색깔 표기 정리 </br>
<span style="color:red">[HTML]</span>
<span style="color:skyblue">[CSS]</span>
<span style="color:yellow">[JS]</span>

# #4 Login

## #4.0 Input Value </br>

### <span style="color:yellow">[JS]</span> input element 의 입력값을 가져오는 법

```js
const inputValue = document.querySelector("input");
console.log(inputValue.value); //input의 value를 가져옴
```

</br>

---

## #4.1 Form Submission </br>

### <span style="color:yellow">[JS]</span> string 길이를 판별하는 .length 함수

```js
const value = "some-string";
console.log(value.length); // 값 11
```

</br>

### <span style="color:red">[HTML]</span> JS를 쓰지 않고 form의 유효성을 판단하는 element

```html
<form>
  <!-- <form> 태그만으로 html에서 유효성을 자동 검사 -->
  <input required maxlength="15" type="text" />
</form>
```

</br>

---

## #4.2 ~ 3 Events</br>

### <span style="color:yellow">[JS]</span> EvenetListner에서 함수를 호출할 때 생성되는 event 객체(object)

```js
function onLogingSubmit(event) {
  // (event객체를 활용할 때 사용)
  event.preventDefault(); // 이벤트 객체안에 있는 함수 : submit시의 새로고침 막음
  // event 인자를 받지 않을 경우, 이 함수를 불러올 수 없음
  console.log(event); // 이벤트 객체 내부의 속성들을 확인가능
}

loginForm.addEventListener("submit", onLogingSubmit);
```

### .preventDefault() 로 막을 수 있는 행동

- HTML submit의 새로고침
- HTML link의 페이지이동

</br>

---

## #4.4 Gerring Username </br>

### <span style="color:yellow">[JS]</span> 관습 : sting만을 포함한 변수명은 대문자로

```js
const HIDDEN_CLASSNAME = "hidden";
```

### <span style="color:yellow">[JS]</span> 추천 : sting끼리의 결합은 이렇게

```js
greeting.innerText = "Hello " + username; // 기존 방식. 간격 외워서 줘야함
greeting.innerText = `Hello ${username}`; // 추천 방식.
```

### <span style="color:skyblue">[CSS]</span> 차이 : visibility와 display

```css
visibility: hidden; /* 감추되, 공간은 남긴다. */
display: none; /* 감추고, 공간도 없앤다. */
```

</br>

---

## #4.5 Saving Username </br>

### <span style="color:yellow">[JS]</span> 처리 값을 도메인(클라)에 저장하는 법

> localStorage </br>
>
> - sessionStorage와 합쳐 5MB까지 저장가능
> - 브라우저 종료 후 재시작해도 데이터가 남아있음

> sessionStorage </br>
>
> - 브라우저 종료 시, 데이터 초기화

> **_<center style="color:cornflowerblue"> Storage 내역은 F12 → Application 탭에서 확인 가능 </center>_**

```js
localStorage.setItem("cat_name", "navi"); // 정보 저장
localStorage.getItem("cat_name"); // "navi" 리턴
localStorage.removeItem("cat_name"); // 정보 삭제
localStorage.clear(); // 모든 정보 삭제
```

</br>

---

## #4.6 Loading Username </br>

### <span style="color:yellow">[JS]</span> 변수명 TIP

> **_<center style="color:yellow"> "자주 쓰는 string은 그대로 쓰기보단, string을 변수로 지정해서 써라. </br>
> 그러면 변수명을 잘못 입력했을 때, error로 알려줄거다." -nico- </center>_**

```js
console.log("test"); // test가 자주 반복되는 string이라면 이 방식은 추천하지 않음

const STRING_NAME = "test";
console.log(STRING_NAME); // 이렇게 쓰면 STRING_NAME이 오타나도 error로 알려줌
```

> **_<center style="color:yellow"> "자주 쓰는 복수의 메소드들은 함수화해라" -nico- </center>_**

```js
function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
} // 같은 메소드가 여러곳에서 쓰인다면 함수화해서 묶어놔라

paintGreetings(sabedUsername);
paintGreetings(techDevUsername);
...
```

</br>

---

</br>

# #5. Clock

## #5.0 Intervals </br>

### <span style="color:yellow">[JS]</span> interval : 일정 간격으로 매번 일어나는 무언가

```js
function sayHello() {
  console.log("hello!");
}

setInterval(sayHello, 2000); // sayHello 함수를, 2000ms(2초)마다 실행
```

</br>

---

## #5.1 Timeouts and Dates </br>

### <span style="color:yellow">[JS]</span> timeout : 일정 시간 후 한 번만 일어나는 무언가

```js
function sayHello() {
  console.log("hello!");
}

setTimeout(sayHello, 2000); // sayHello 함수를, 2000ms(2초)후에 한 번 실행
```

### <span style="color:yellow">[JS]</span> Date : 시간 관련 함수

```js
const date = new Date(); // Date 객체 생성 (각종 정보 들어있음)

date.getDate(); // 오늘 날짜 리턴
date.getDay(); // 오늘 요일을 숫자로 리턴 (일:0, 토:6)
date.getFullYear(); // 올해 연도를 리턴
date.getHours(); // 현재 "시간(Hour)"을 리턴
date.getMinutes(); // 현재 "분"을 리턴
date.getSeconds(); // 현재 "초"를 리턴
```

### <span style="color:yellow">[JS]</span> [차이 알아보기] new Date / Date()

```js
new Date(); // 날짜 정보 값을 object로 반환 (주로 이거 사용)
Date(); // 날짜 정보 값을 string으로 반환
```

</br>

---

## #5.2 padStart() </br>

### <span style="color:yellow">[JS]</span> 숫자 앞/뒷자리를 0으로 채우는 방법

```js
"1".padStart(2, "0"); // 부족한 자리 수의 앞을 0으로 채움 : 01
"1".padEnd(2, "0"); // 부족한 자리 수의 뒤를 0으로 채움 : 10

// string에만 적용 가능한 함수. (number에는 적용 불가능)
// string을 채우는 것이므로, 굳이 숫자를 안채워도 됨 ("hhhhhhhhhhx" 등)
```

### <span style="color:yellow">[JS]</span> number → string

```js
String(1234);
1234.toString();

// 둘 다 가능
```

### <span style="color:yellow">[JS]</span> string → number

```js
Number("1234.5"); // string 그대로 숫자화 : 1234.5
parseInt("1234.5"); // string을 정수화 : 1234
parseFloat("1234.5"); // string을 실수화 : 1234.5

// 숫자로 변환할 수 없는 string을 대입시, NaN 오류가 발생
```

</br>

---

# #6. Quotes and Background

## #6.0 Quotes

### <span style="color:yellow">[JS]</span> random 숫자 가져오기

```js
Math.random(); // 0 ~ 1 사이의 소수숫자 랜덤

Math.ceil(1.1); // 올림 : 2
Math.round(1.5); // 반올림 : 2
Math.floor(1.9); // 내림 : 1

Math.floor(Math.random() * 9); // 0 ~ 9 사이 랜덤 정수
Math.floor(Math.random() * 10); // 0 ~ 10 사이 랜덤 정수
Math.floor(Math.random() * 100); // 0 ~ 100 사이 랜덤 정수
```

</br>

---

## #6.1 Background

### <span style="color:yellow">[JS]</span> JS → HTML element 삽입방법

```js
// document.createElement("img") 로 element 생성
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// JS에서 만든 element를 body 마지막에 삽입
document.body.appendChild(bgImage);

// JS에서 만든 element를 body 맨위에 삽입
document.body.prepend(bgImage);

// body 특정 위치에 삽입
const clock2 = document.querySelector("#clock");
document.body.insertBefore(bgImage, clock2); // id = clock 앞에 삽입
```

</br>

---

# #7. To Do List

## #7.1 Adding ToDos

### <span style="color:yellow">[JS]</span> 특정 element 안에 element 삽입

```js
// 삽입하고자 하는 element 지정 후 appendChild()

body.appendChild(var_name); // body 안에 삽입
ul.appendChild(var_name); // ul 안에 삽입
```

</br>

---

## #7.2 Deleting ToDos

### <span style="color:yellow">[JS]</span> eventlistner에서 같은 변수명, 같은 함수를 사용 할 때, 각각이 어떤 element인지를 알아보기

```js
function deleteToDo(event) {
  // 각각 실행된 event들의 내용물 표시 (즉, 이 event를 실행하며 클릭된 element)
  console.log(event.target);
  console.log(this); // 위와 같은 의미

  // 각각의 실행된 event들이 어떤 부모 element하에서 발생하는지 표시
  console.log(event.target.parentElement);
}
```

</br>

---

## #7.3 Saving ToDos

### <span style="color:yellow">[JS]</span> 객체/배열 그 자체를 전부 String으로 만드는 법

```js
// JSON 메소드를 사용
// JSON : JS에서 객체를 생성할 때 쓰는 표현식.
//        주로 이기종간(다른 언어 or 서버간)에 데이터 배열 그대로 넘기기 위해 사용
//        3D CAD에 있어서 step 파일 같은 개념

const array = [1, 2, 3, "a"]; // type : object, 출력 : [1,2,3,'a']
JSON.stringify(array); // type : string, 출력 : '[1, 2, 3, 'a']'
```

### <span style="color:yellow">[JS]</span> localStorage에 array string형태로 저장하는 법

```js
// localStorage에 [] 글꼴은 기본적으로 저장이 불가능

const val = [1, 2, 3, "a"];
localStorage.setItem("vals", val); // 1, 2, 3, a 로 저장
localStorage.setItem("vals", JSON.stringify(val)); // "[1, 2, 3, a]" 로 저장 : array string
```

</br>

---

## #7.4 Loading ToDos P1

### <span style="color:yellow">[JS]</span> JSON.stringify( ) 를 통한 String → 객체(배열)로 변화

```js
// JSON.parse( ) 로 JSON.stringify( ) 결과물을 원래 객체로 변환 가능

const stringed = JSON.stringify([1, 2, 3, "a"]); // "[1, 2, 3, a]" : string
const parsed = JSON.parse(stringed); // [1, 2, 3, 'a'] : array
```

### <span style="color:yellow">[JS]</span> 배열 갯수 만큼 반복해서 함수를 실행하는 메소드

```js
// array_val.forEach(cb function) : 배열안에 들어있는 아이템 수 만큼 func 반복
function printLog(item) {
  console.log(item);
}
arr = [1, 2, 3, 4];
arr.forEach(printLog); // forEach가 자동으로 배열값을 함수에 할당
// 1, 2, 3, 4
```

### <span style="color:yellow">[JS]</span> arrow function

```js
// 주로 .forEach() 와 같은 곳에 짤막한 함수 기능을 구현할 때 사용

arr = [1, 2, 3, 4];
arr.forEach((item) => console.log(item)); // arrow func
```

</br>

---

## #7.5 Loading ToDos P2

### <span style="color:yellow">[JS]</span> 새로 고침해도 이전 localStorage 값을 담고 있는 변수 만드는 법

```js
let val = []; // 값을 담을거라 let으로 변수 선언

function setValFunc() {
  // val을 추가할 때 부르는 함수
  localStorage.setItem("vals", val);
}

val = localStorage.getItem("vals"); // localStorage에서 값을 가져와 val에 대입
// 이 예제에서는 Dev Tool에서 직접 값 추가해봄
console.log(val); // val은 localStorage 값을 담은 상태 (web을 새로고침해도)
```

</br>

---

## #7.6 Deleting ToDos P1

### <span style="color:yellow">[JS]</span> array에 object를 저장하는 법

```js
let arr = [];
const obj = {
  name: "kim",
  age: 13,
};

arr.push(obj); // [{name : 'kim', age : 13}] 그대로 저장

// localStorage에 id 값을 obj로 같이 저장하면 이를 통해 localStorage 내에서 삭제도 가능하다.
```

</br>

---

## #7.7 Deleting ToDos P2

### <span style="color:yellow">[JS]</span> array의 특정값만 제거(삭제)하는 방법

```js
// array.filter(func_name) : func에서 true 처리 된 값들로만 새 행렬 반환
// 엄밀히 따지면 이는 행렬 데이터를 삭제한다기보단, 새로 재정의하는 것임

const arr = [123, 546, 4573, 5896, 23, 772];
function sexyFilter(nums) {
  return nums <= 1000; // 1000 이하 숫자는 true 반환
}

arr.filter(sexyFilter); // true 반환된 숫자들로만 새행렬(arr) 반환
// [123, 546, 23, 772]
// 기존 array에 자동저장되지 않으므로, 담을 곳 필요!
```

</br>

---

# #8. Weather

## #8.0 Geolocation

### <span style="color:yellow">[JS]</span> 현재 위치 객체 불러오기

```js
// JS내부 메소드, 현재 위치를 허락받고, 그에 상응하는 객체 리턴
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 받는 변수 (성공했을때의 콜백 함수, 실패했을때의 콜백 함수)

function onGeoOk(position) {
  // 성공했을 때의 함수
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
}

function onGeoError() {
  // 실패했을 때의 함수
  alert("Can't find you. No weather for you.");
}
```

</br>

---

## #8.1 Weather API

### <span style="color:yellow">[JS]</span> fetch() 를 이용한 API 읽어오기

```js
// 자세한 설명은 "유튜브 만들어보기 강의"에서 하겠다.

fetch(API_URL) // 해당 API주소를 JS 내부에서 실행하고
  .then(func_name); // 그때의 행동 방침을 함수로 결정
```
