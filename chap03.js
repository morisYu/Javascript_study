// if문 실습
function if_1() {
  var walkAmount = prompt("당신의 하루 걷는 양은 몇 보인가요?");
  var print_text = "";
  if (walkAmount >= 10000) {
    print_text += "매우 좋은 습관을 지니고 계시는군요<br>";
  }
  print_text += "=============END================";

  print.innerHTML = print_text;
}

// if문 실습(조건식에 논리형 데이터가 아닌 다른 타입의 데이터 입력)
// 0, null, 빈 문자(''), undefined 는 false 반환, 나머지는 전부 true 반환
function if_3() {
  var userName = prompt("방문자의 이름은?", "");

  if (userName) {
    print.innerHTML = userName + " 님 반갑습니다.";
  }
}

// else문 실습
function else_1() {
  var num = prompt("당신이 좋아하는 숫자는?", "0");

  if (num % 2 == 0) {
    print.innerHTML = "당신이 좋아하는 숫자는 짝수입니다.";
  } else {
    print.innerHTML = "당신이 좋아하는 숫자는 홀수입니다.";
  }
}

// confirm() 메소드를 이용한 if/else 문 사용
function else_2() {
  var result = confirm("정말로 회원을 탈퇴하시겠습니까?");

  if (result) {
    print.innerHTML = "탈퇴 처리되었습니다.";
  } else {
    print.innerHTML = "탈퇴 취소되었습니다.";
  }
}

// else if문 사용
function elseif_1() {
  var mon = prompt("현재는 몇 월입니까?");

  if (mon >= 9 && mon <= 11) {
    print.innerHTML = "독서의 계절 가을이네요";
  } else if (mon >= 6 && mon <= 8) {
    print.innerHTML = "여행가기 좋은 여름이네요";
  } else if (mon >= 3 && mon <= 5) {
    print.innerHTML = "햇살 가득한 봄이네요";
  } else {
    print.innerHTML = "스키의 계절 겨울이네요";
  }
}

// 중첩 if문
function in_if_1() {
  var id = "easy1004";
  var pw = "112233";

  var user_id = prompt("아이디는?");
  var user_pw = prompt("비밀번호는?");

  if (id == user_id) {
    if (pw == user_pw) {
      print.innerHTML = id + " 님 반갑습니다.";
    } else {
      print.innerHTML = "비밀번호가 일치하지 않습니다";
    }
  } else {
    alert("아이디가 일치하지 않습니다.");
    // 현재 페이지 새로고침
    location.reload();
  }
}

// switch문
function switch_1() {
  var site = prompt("네이버, 다음, 네이트, 구글 중 즐겨찾는 검색 사이트는?");
  var url;

  switch (site) {
    case "구글":
      url = "www.google.com";
      break;
    case "다음":
      url = "www.daum.net";
      break;
    case "네이버":
      url = "www.naver.com";
      break;
    case "네이트":
      url = "www.nate.com";
      break;
    default:
      alert("보기 중에 없는 사이트입니다.");
  }

  // url에 저장된 주소로 이동
  if (url) {
    window.open("http://" + url, "_blank");
  }
}

// while문(1~30 까지의 숫자 중 2의 배수이면서 6의 배수인 값을 출력)
function while_2() {
  var i = 1;
  var print_text =
    "1~30 까지의 숫자 중 2의 배수이면서 6의 배수인 값을 출력<br>";

  while (i <= 30) {
    if (i % 2 == 0 && i % 6 == 0) {
      print_text += i + "<br>";
    }
    i++;
  }
  print.innerHTML = print_text;
}

// while문(20 부터 10 까지의 숫자 중 짝수일 경우 파란색, 홀수일 경우 빨간색 출력)
function while_3() {
  var i = 20;
  var print_text =
    "20 부터 10 까지의 숫자 중 짝수일 경우 파란색, 홀수일 경우 빨간색 출력<br>";

  while (i >= 10) {
    if (i % 2 == 0) {
      print_text += '<p class="blue">' + i + "</p>";
    } else {
      print_text += '<p class="red">' + i + "</p>";
    }
    i--;
  }
  print.innerHTML = print_text;
}

// do while문
function do_while_1() {
  var i = 10;
  var print_text = "do while문은 최소 1 번은 반복문 실행<br>";
  do {
    print_text += "hello";
  } while (i < 3);
  print.innerHTML = print_text;
}

// for문
function for_2() {
  var print_text =
    "1~100 숫자 중 5의 배수는 빨간색, 7의 배수는 녹색, 5의배수&7의배수는 파란색<br>";
  for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 7 != 0) {
      print_text += '<p class="red">' + i + "</p>";
    } else if (i % 5 != 0 && i % 7 == 0) {
      print_text += '<p class="green">' + i + "</p>";
    } else if (i % 5 == 0 && i % 7 == 0) {
      print_text += '<p class="blue">' + i + "</p>";
    }
  }

  print.innerHTML = print_text;
}

// break문
function break_1() {
  var print_text =
    "반복문 중간에 break를 만나면 반복문을 빠져나옴<br>1~10 까지 반복문 실행<br>";
  for (var i = 1; i <= 10; i++) {
    if (i == 6) {
      break;
    }
    print_text += i + "<br>";
  }
  print.innerHTML = print_text;
}

// continue문
function continue_1() {
  var print_text =
    "반복문 중간에 continue를 만나면 뒤의 코드는 실행하지 않고 반복문 증감식으로 이동<br>";

  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      continue;
    }
    print_text += i + "<br>";
  }
  print.innerHTML = print_text;
}

// 중첩 for문
function double_for_1() {
  var print_text = "구구단 출력 시 중첩 for문 사용<br>";

  for (var i = 2; i <= 3; i++) {
    for (var j = 1; j <= 9; j++) {
      print_text += i + "x" + j + " = " + i * j + "<br>";
    }
  }

  print.innerHTML = print_text;
}

// 미션1. while문을 이용하여 구구단 중 5단을 출력
function while_test_1(){
    var i=1;
    var print_text = 'while문을 이용하여 구구단 중 5단을 출력<br>';
    while(i<=9){
        print_text += '5X'+i+'='+(5*i)+'<br>';
        i++;
    }
    print.innerHTML = print_text;
}

// 미션2. 5행 5열 표를 만들고, 데이터가 1부터 25까지 출력되도록 작성
function double_for_test_2(){
    var num = 1;
    var print_text = '5행 5열 표를 만들고, 데이터가 1부터 25까지 출력되도록 작성<br><br><table border=1>';

    for(var i=1;i<=5;i++){
        print_text += '<tr>';
        for(var k=1;k<=5;k++){
            print_text += '<td>' + num;
            num++;
        }
        print_text += '</tr>';
    }
    print_text += '</table>';
    print.innerHTML = print_text;
}
