// 내장 객체 생성하기
function ob1(){
    var print_text = '';

    var tv = new Object();
    tv.color = 'white';
    tv.price = 300000;
    tv.info = function(){
        var tv_text = '';
        tv_text += 'TV 색상: '+this.color +'<br>';
        tv_text += 'TV 가격: ' + this.price + '<br>';
        return tv_text;
    }

    var car = {
        color: 'black',
        price: 5000000,
        info: function(){
            var car_text = '';
            car_text += 'car 색상: '+this.color +'<br>';
            car_text += 'car 가격: ' + this.price + '<br>';
            return car_text;
        }
    }

    print_text += '<h1>tv 객체 메소드 호출</h1>';
    print_text += tv.info();
    print_text += '<h1>car 객체 메소드 호출</h1>';
    print_text += car.info();
    
    print.innerHTML = print_text;
}

// 날짜 정보 객체
function date_ob1(){
    var print_text = '';
    
    // 현재 날짜 객체를 생성
    var today = new Date();
    // 월 정보는 현재 월에서 -1 되기 때문에 결과에 +1 해주어야 함
    var nowMonth = today.getMonth()+1,
    nowDate = today.getDate(),
    // 요일은 일: 0 ~ 토: 6 까지 반환됨
    nowDay = today.getDay();

    print_text += '<h1>오늘 날짜 정보</h1>';
    print_text += '현재 월: ' + nowMonth + '<br>';
    print_text += '현재 일: ' + nowDate + '<br>';
    print_text += '현재 요일: ' + nowDay + '<br>';

    // 월드컵 날짜 정보를 가지는 객체를 생성
    var worldcup = new Date("2002/5/31");
    // 월 정보는 현재 월에서 -1 되기 때문에 결과에 +1 해주어야 함
    var theMonth = worldcup.getMonth()+1,
    theDate = worldcup.getDate(),
    theDay = worldcup.getDay();

    print_text += '<h1>월드컵 날짜 정보</h1>';
    print_text += '2002월드컵 몇 월: ' + theMonth + '<br>';
    print_text += '2002월드컵 몇 일: ' + theDate + '<br>';
    print_text += '2002월드컵 무슨 요일: ' + theDay + '<br>';

    print.innerHTML = print_text;
}

// 현재 남짜부터 연말까지 며칠이 남았는지 확인
function date_ob2(){
    var print_text = '';
    var today = new Date();
    var nowYear = today.getFullYear();

    var theDate = new Date(nowYear, 11, 31);
    var diffDate = theDate.getTime()-today.getTime();

    var result = Math.ceil(diffDate/(60*1000*60*24));

    print_text += '<h1>오늘부터 올해 연말까지 남은 날짜</h1>';
    print_text += 'D-day: ' + result;
    print.innerHTML = print_text;
}

// 수학 객체
function math_ob1(){
    var print_text = '';

    var num = 2.1234;

    var maxNum = Math.max(10, 5, 8, 30),
    minNum = Math.min(10, 5, 8, 30),
    roundNum = Math.round(num),
    floorNum = Math.floor(num),
    ceilNum = Math.ceil(num),
    rndNum = Math.random(),
    piNum = Math.PI;

    print_text = 
    'var num = 2.1234<br>' + 
    'Math.max(10, 5, 8, 30): ' + maxNum + '<br>' +
    'Math.min(10, 5, 8, 30): ' + minNum + '<br>' +
    'Math.round(num): ' + roundNum + '<br>' +
    'Math.floor(num): ' + floorNum + '<br>' +
    'Math.ceil(num): ' + ceilNum + '<br>' +
    'Math.random(): ' + rndNum + '<br>' +
    'Math.PI: ' + piNum + '<br>';

    print.innerHTML = print_text;
}

// 가위, 바위, 보 맞추기 게임
function math_ob2(){
    var print_text = '';
    var game = prompt('가위, 바위, 보 중 선택하세요','가위');
    
    var gameNum;
    switch(game){
        case '가위':
            gameNum = 1;
        break;
        case '바위':
            gameNum = 2;
        break;
        case '보':
            gameNum = 3;
        break;
        default:
            alert('잘못 작성했습니다.');
            location.reload();
    }

    var com = Math.ceil(Math.random()*3);

    if(com == 1){
        print_text += '<img src="https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png" height="100px"/>';
    }else if(com == 2){
        print_text += '<img src="https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png" height="100px"/>';
    }else{
        print_text += '<img src="https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png" height="100px"/>';
    }

    if(gameNum == com){
        print_text += '<h3>잘 맞췄습니다.</h3>';
    }else{
        print_text += '<h3>틀렸습니다.</h3>';
    }
    print.innerHTML = print_text;
}

// 배열 객체에 저장된 데이터 불러오기
function array_ob1(){
    var print_text = '';

    var arr = [30, "따르릉", true];

    print_text += '<h3>배열값 가져오기-1(인덱스를 하나씩 선택)</h3>';
    print_text += arr[0] + '<br>' + arr[1] + '<br>' + arr[2] + '<br>';

    print_text += '<h3>배열값 가져오기-2(for문으로 인덱스 선택)</h3>';
    for(var i=0;i<arr.length;i++){
        print_text += arr[i] + '<br>';
    }

    print_text += '<h3>배열값 가져오기-3(for in 문으로 객체데이터 전부 선택)</h3>';
    for(var j in arr){
        print_text += arr[j] + '<br>';
    }

    print_text += '<h3>배열값 가져오기-4(for of 문으로 객체데이터 전부 선택)</h3>';
    for(var e of arr){
        print_text += e + '<br>';
    }

    print.innerHTML = print_text;
}

// 배열 객체 메소드 사용(join, concat, slice, sort, reverse)
function array_ob2(){
    print.innerHTML = 'F12 눌러서 console log 확인';

    var arr_1 = ['사당', '교대', '방배', '강남'];
    var arr_2 = ['신사', '압구정', '옥수'];

    // 배열에 저장된 값을 지정한 문자로 연결해서 하나의 문자열을 반환
    var result = arr_1.join('-');
    console.log(result);

    // 2 개의 배열을 하나의 배열로 만들어 반환
    result = arr_1.concat(arr_2);
    console.log(result);

    // 배열의 1번 이전의 인덱스 요소를 잘라내고 남은 값을 반환
    result = arr_1.slice(1,3);
    console.log(result);

    // 배열의 값을 오름차순으로 정렬
    arr_1.sort();
    console.log(arr_1);

    // 배열의 순서를 거꾸로 뒤집음
    arr_2.reverse();
    console.log(arr_2);
}

// 배열 객체 메소드 사용(splice, pop, push, shift, unshift)
function array_ob3(){
    print.innerHTML = 'F12 눌러서 console log 확인';

    var greenArr = ['교대', '방배', '강남'];
    var yellowArr = ['미금', '정자', '수서'];

    // 2번 인덱스부터 1개의 데이터를 삭제하고, '서초', '역삼'을 삽입
    greenArr.splice(2,1,'서초', '역삼');
    console.log(greenArr);

    // yellowArr 배열 마지막 인덱스의 데이터를 data1 에 저장
    var data1 = yellowArr.pop();

    // yellowArr 배열 가장 앞쪽 인덱스의 데이터를 data2 에 저장
    var data2 = yellowArr.shift();

    // data2 에 저장된 데이터를 yellowArr 배열의 마지막 인덱스에 추가
    yellowArr.push(data2);
    console.log(yellowArr);

    // data1 에 저장된 데이터를 yellowArr 배열의 가장 앞쪽 인덱스에 추가
    yellowArr.unshift(data1);
    console.log(yellowArr);
}

// 문자열 객체 생성하기
function string_ob1(){
    var print_text = '';

    var t = 'Hello Thank you good luck to you';
    print_text += "var t = 'Hello Thank you good luck to you'<br>";
    // 인덱스 16 에 저장된 문자를 반환
    print_text += 't.charAt(16) : ' + t.charAt(16) + '<br>';

    // 문자열 왼쪽에서부터 오른쪽 방향으로 제일 먼저 발견된 "you" 의 인덱스 값을 반환
    print_text += 't.indexOf("you") : ' + t.indexOf("you") + '<br>';

    // 문자열 인덱스 16 위치부터 제일 먼저 발견된 "you" 의 인덱스 값을 반환
    print_text += 't.indexOf("you", 16) : ' + t.indexOf("you", 16) + '<br>';

    // 문자열 오른쪽에서부터 왼쪽 방향으로 제일 먼저 발견된 "you" 의 인덱스 값을 반환
    print_text += 't.lastIndexOf("you") : ' + t.lastIndexOf("you") + '<br>';

    // 문자열 인덱스 25 위치부터 왼쪽 방향으로 제일 먼저 발견된 "you" 의 인덱스 값을 반환
    print_text += 't.lastIndexOf("you", 25) : ' + t.lastIndexOf("you", 25) + '<br>';

    // 문자열 왼쪽에서부터 제일 먼저 발견된 "luck" 과 일치되는 문자열을 반환
    print_text += 't.match("luck") : ' + t.match("luck") + '<br>';

    // 문자열 왼쪽에서부터 오른쪽 방향으로 제일 먼저 발견된 "you" 의 인덱스 값을 반환
    print_text += 't.search("you") : ' + t.search("you") + '<br>';

    // 문자열 인덱스 21 부터 4 개의 문자를 반환
    print_text += 't.substr(21, 4) : ' + t.substr(21, 4) + '<br>';

    // 문자열 인덱스 6 부터 12 이전가지 문자를 반환
    print_text += 't.substring(6, 12) : ' + t.substring(6, 12) + '<br>';

    // 문자열 왼쪽에서부터 제일 먼저 발견된 "you" 를 "me" 로 치환
    print_text += 't.replace("you", "me") : ' + t.replace("you", "me") + '<br>';

    // 문자열의 모든 영문자가 소문자로 변환
    print_text += 't.toLowerCase() : ' + t.toLowerCase() + '<br>';
    
    // 문자열의 모든 영문자가 대문자로 변환
    print_text += 't.toUpperCase() : ' + t.toUpperCase() + '<br>';

    // 문자열의 길이(문자의 총 개수)를 반환
    print_text += 't.length : ' + t.length + '<br>';

    // 지정한 문자(" ")를 기준으로 문자를 분리해서 배열에 저장
    var s = t.split(" ");
    print_text += 'var s = t.split(" ")<br>';
    print_text += 's[0] : ' + s[0] + '<br>';
    print_text += 's[4] : ' + s[4] + '<br>';

    var str = "A";

    // 문자열의 0 번 인덱스 위치에 있는 문자의 아스키 코드값을 반환
    var a = str.charCodeAt(0);

    print_text += 'var str = "A"<br>';
    print_text += 'str.charCodeAt(0) : ' + a + '<br>';

    // 아스키코드 65 를 문자로 반환
    print_text += 'String.fromCharCode(65) : ' + String.fromCharCode(65);

    print.innerHTML = print_text;

}

// 영문을 입력받아 대문자로 출력, 연락처를 입력받아 '*' 처리
function string_ob2(){
    var print_text = '';

    var userName = prompt('당신의 영문 이름은?', '');
    var upperName = userName.toUpperCase();
    print_text += upperName + '<br>';

    var userNum = prompt('당신의 연락처는?', '');
    var result = userNum.substring(0, userNum.length-4) + '****';
    print_text += result;
    print.innerHTML = print_text;
}

// 입력받은 이메일의 유효성 검사
function string_ob3(){

    var userEmail = prompt('당신의 이메일 주소는?', '');
    var arrUrl = ['.co.kr', '.com', '.net', '.or.kr', '.go.kr'];

    var check1 = false;
    var check2 = false;

    if(userEmail.indexOf('@') > 0){
        check1 = true;
    }
    
    for(var i = 0; i < arrUrl.length; i++){
        if(userEmail.indexOf(arrUrl[i])>0){
            check2 = true;
        }
    }

    if(check1 && check2){
        print.innerHTML = userEmail;
    }else{
        alert('이메일 형식이 잘못되었습니다');
    }
}

// 팝업 창 페이지 표시
function win_ob1(){
    window.open('./pages/winpopup.html', 'pop1', 'width=500, height=400, left=30, top=50');
}

// 일정 시간 간격으로 코드 실행하기
function win_ob2(){
    window.open('/pages/interval.html', 'pop1', 'width=500, height=400, left=30, top=50');
}

// 일정 시간 후 코드 한 번 실행
function win_ob3(){
    print.innerHTML = '<h1>Console Log 확인</h1>' + '<h2>3 초 뒤 코드 한 번 실행됨</h2>'
    var addNum = 0;
    var auto = setTimeout(() => {
        addNum++;
        console.log(addNum);
    }, 3000);
}

/* 실습. 브라우저 객체 모델을 사용해 운영체제와 스크린 정보 얻기 */
function os_info(){
    var print_text = '';
    var info = navigator.userAgent.toLowerCase();
    var osImg = null;

    if(info.indexOf('windows') >= 0){
        osImg = 'windows.png';
    }else if(info.indexOf('macintosh') >= 0){
        osImg = 'macintosh.png';
    }else if(info.indexOf('iphone') >= 0){
        osImg = 'iphone.png';
    }else if(info.indexOf('android') >= 0){
        osImg = 'android.png';
    }

    print_text += "<img src=\"images/" + osImg + "\"><br>"

    var scr = screen;
    var sc_w = scr.width;
    var sc_h = scr.height;

    print_text += '모니터 해상도 너비: ' + sc_w + 'px<br>';
    print_text += '모니터 해상도 높이: ' + sc_h + 'px<br>';

    print.innerHTML = print_text;
}

/* 미션1. 문자열 객체를 이용해서 일정 구간 문자열 반환, 문자열 치환 */
function ob_test1(){
    var print_text = '';

    var phoneNum = "010-2345-1234";
    var result1 = phoneNum.substring(0, phoneNum.length-4) + '****';
    print_text += '입력 변수: "010-2345-1234"<br>';
    print_text += '전화번호 끝 4 자리 숨기기: ' + result1 + '<br><br>';

    var imgSrc = "images/bnt_out.jpg";
    var result2 = imgSrc.replace('out', 'over');
    print_text += '입력 변수: "images/bnt_out.jpg"<br>';
    print_text += '"out" 을 "over"로 치환: ' + result2;
    print.innerHTML = print_text;
}

/* 미션2. 랜덤 메뉴 선택하기 */
function ob_test2(){
    var print_text = '';

    var menu = ['짜장면', '돈가스', '된장국', '김치찌개', '회덮밥'];
    var menuNum = Math.floor(Math.random()*5);
    var result = menu[menuNum];

    print_text += "메뉴 배열 객체: ['짜장면', '돈가스', '된장국', '김치찌개', '회덮밥']<br>";
    print_text += '결과: ' + result;
    print.innerHTML = print_text;
}