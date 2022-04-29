// 결과 출력 위치
let print = document.querySelector("#result");

// 삭제 버튼
function clear_file(){
    print.innerHTML=" ";
}

// HTML 내부에서 출력 방법
function statement_c() {
  print.innerHTML =
    'HTML 파일 내부에서<br><br>'+
    '<xmp><script></xmp>'+
    '&nbsp;&nbsp;document.write("출력할 내용");'+
    '<xmp></script></xmp>'+
    '<br>코드로 화면에 출력이 가능합니다.'
}

// 변수 선언 방법
function var_ex1_c(){
    var box;
    box=100;
    print.innerHTML = '처음 선언한 변수값 box = '+box;
    box=30;
    setTimeout(()=>{print.innerHTML = '수정된 변수값 box = '+box}, 2000);
}

// boolean 타입의 변수 선언
function boolean_c(){
    var a=true;
    var b=false;
    var c=10>5;
    // Boolean() 메소드는 0, null, undefined, 빈 문자(" ") 를 제외한 모든 데이터에 대해 true를 반환
    var d=Boolean(null);
    print.innerHTML = 'a=true: '+a+'<br>'+'b=false: '+b+'<br>'+'c=10>5: '+c+'<br>'+'d=Boolean(null): '+d
}

// typeof를 이용하여 변수에 저장된 자료형을 확인
function typeof_c(){
    var num = 100;
    var str = "자바스크립트";

    print.innerHTML = 'num=100 의 자료형: '+typeof num+'<br>'+'str="자바스크립트" 의 자료형: '+typeof str;
}

// 산술연산자
function operator_c(){
    var num1 = 15;
    var num2 = 2;
    
    print.innerHTML = 
    'var num1 = 15;<br>var num2 = 2;<br><br>'+
    'num1+num2 = '+(num1+num2)+
    '<br>num1-num2 = '+(num1-num2)+
    '<br>num1*num2 = '+(num1*num2)+
    '<br>num1/num2 = '+(num1/num2)+
    '<br>num1%num2 = '+(num1%num2);
}

// 문자 결합 연산자
function string_plus_c(){
    var t1 = "학교종이 ";
    var t2 = "땡땡땡 ";
    var t3 = 8282;
    var t4 = " 어서 모이자";

    print.innerHTML=
    't1 = "학교종이 ";<br>t2 = "땡땡땡 ";<br>t3 = 8282;<br>t4 = " 어서 모이자";'+
    '<br><br>문자 결합 결과: '+ (t1+t2+t3+t4);
}

// 대입 연산자
function dboperator_c(){
    var num1 = 10;
    var num2 = 3;

    print.innerHTML = 
    'var num1 = 10;<br>var num2 = 3;<br>'+
    '<br>num1 += num2 : '+(num1+=num2)+
    '<br>num1 -= num2 : '+(num1-=num2)+
    '<br>num1 *= num2 : '+(num1*=num2)+
    '<br>num1 %= num2 : '+(num1%=num2);
}

// HTML 태그를 대입연산자로 결합
function texttable_c(){
    var str = "<table border='1' height='50px'>";
    str += "<tr>";
    str += "<td>contents1</td><td>contents2</td><td>contents3</td>";
    str += "</tr>";
    str += "</table>";

    print.innerHTML =
    '<xmp>var str = "<table border=\'1\' height=\'50px\'>";</xmp>'+
    '<xmp>str += "<tr>";</xmp>'+
    '<xmp>str += "<td>contents1</td><td>contents2</td><td>contents3</td>";</xmp>'+
    '<xmp>str += "</tr>";</xmp>'+
    '<xmp>str += "</table>";</xmp><br><br>'+
    '결과<br>'+str;
}

// 증감연산자
function growth_c(){
    var num1 = 10;
    var num2 = 20;

    print.innerHTML = 
    'var num1 = 10;'+
    '<br>var num2 = 20;<br>'+
    '<br>num1-- : '+(num1--)+
    '<br>num1++ : '+(num1++)+
    '<br>num2++ 실행 시 : '+(num2++)+
    '<br>nm2++ 실행 후 : '+(num2)+
    '<br>++num2 실행 시 : '+(++num2)+
    '<br>++num2 실행 후 : '+(num2);
}

// 비교연산자
function compare_operator_c(){
    var a = 10;
    var b = 20;
    var c = 10;
    var f = "10";

    print.innerHTML = 
    'var a = 10;'+
    '<br>var b = 20;'+
    '<br>var c = 10;'+
    '<br>var f = "10";<br>'+
    '<br>a>b : '+(a>b)+
    '<br>a<b : '+(a<b)+
    '<br>a<=b : '+(a<=b)+
    '<br>b==f : '+(b==f)+
    '<br>a!=b : '+(a!=b)+
    '<br>b===f : '+(b===f);
}

// 논리연산자, 연산자 우선순위
function prior_c(){
    var a = 10;
    var b = 20;
    var m = 30;
    var n = 40;

    print.innerHTML = 
    'var a = 10;'+
    '<br>var b = 20;'+
    '<br>var m = 30;'+
    '<br>var n = 40;<br>'+
    '<br>a>b || b>=m || m>n 결과: '+(a>b || b>=m || m>n)+
    '<br>a>b || b>=m || m<=n 결과: '+(a>b || b>=m || m<=n)+
    '<br>a<=b && b>=m && m<=n 결과: '+(a<=b && b>=m && m<=n)+
    '<br>a<=b && b<=m && m<=n 결과: '+(a<=b && b<=m && m<=n)+
    '<br>!(a>b) 결과: '+(!(a>b));
}

// 삼항 조건 연산자
function three_condi_c(){
    var a = 10;
    var b = 3;

    print.innerHTML = 
    'var a = 10;'+
    '<br>var b = 3;'+
    '<br>var result = a>b ? "true일 때 실행" : "false일 때 실행"'+
    '<br><br>result 결과: '+
    (a>b ? "true일 때 실행" : "false일 때 실행");
}

/* 실습. 적정 체중을 구하는 테스트기 */
function weight_input_test_c(){
    var name = prompt("당신의 이름은?","");
    var height = prompt("당신의 신장은?","0");
    var weight = prompt("당신의 몸무게는?", "0");

    // 평균 체중 계산
    var normal_w = (height-100)*0.9;
    var result = weight>=(normal_w-5)&&weight<=(normal_w+5);
    var str = result ? "적정 체중입니다." : "적정 체중이 아닙니다.";
    print.innerHTML = 
    name + '님은' + str;
}

/* 미션1. 하루 지출비용의 합계를 구한 후 적정 지출비용의 초과여부 */
function ex01(){
    let price1 = 3000;
    let price2 = 6000;
    let price3 = 3000;
    const MAX_PRICE = 10000;

    var sum = price1+price2+price3;
    var result = sum>MAX_PRICE?(sum-MAX_PRICE)+'원 초과':'돈 관리 잘했어요.';
    print.innerHTML = result;
}

/* 미션2. 4분기 판매량을 입력하여 평균 판매량의 이상/미달 여부 출력 */
function ex02(){
    var quater1 = 1200;
    var quater2 = 1300;
    var quater3 = 1000;

    let quater4 = prompt("4분기 판매량");
    let avg = (quater1+quater2+quater3+Number(quater4))/4;

    print.innerHTML = Number(quater4)>=avg ? "판매량이 평균 이상입니다." : "판매량이 평균 미만입니다."
}
