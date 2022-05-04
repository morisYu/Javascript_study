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

    var result = arr_1.join('-');
    console.log(result);

    result = arr_1.concat(arr_2);
    console.log(result);

    result = arr_1.slice(1,3);
    console.log(result);

    arr_1.sort();
    console.log(arr_1);

    arr_2.reverse();
    console.log(arr_2);
}
