
/*
사용법: getRandom() 호출시 당신이 원하는 숫자를 넣으세요.
	예) getRandom(5)를 넣으면 0~4를 반환
*/
function getRandom(num){ 
		var r= Math.random();
		var n = parseInt(r*num);
		return n;
	}

		
		/* 원하는 범위만큼의 숫자를 랜덤하게 추출하는 함수
			최소값, 최대값을 넣으면 된다.
			예)  2,7 --> 2~6까지 나온다.
			*/
		function getRandomByRange(min, max){
			return parseInt(Math.random()*(max-min))+min;
	}
	
	/* 시간 문자열 처리 함수 
		인수로 넘긴 n이 10보다 작으면 앞에 "0"이라는 문자를 조합해서 결과를 반환해 주자!! 	
	*/
	function getTimeString(n){
		if(n<10){
			n="0"+n;
		}
		return n;
	}


/*
원하는 달이 며칠까지 있는지 구하는 함수!!
ex) 유저가 알고 싶은 달이 2018년 5월일 경우, getLastDateOfMonth(2018,4);
*/
function getLastDateOfMonth(year,month){
	var d = new Date();
	// 원하는 날짜로 변경하기
	d.setFullYear(year);
	d.setMonth(month+1);  // 자바스크립트에서는 마지막 날을 구할 수 없기 때문에, 다음달의 0일이 곧 이전달의 마지막 날이 된다.
	d.setDate(0);
	// 함수 호출자에게 원하는 데이터를 반환시켜준다!
	return d.getDate();
}


/*
해당 월의 시작 요일 구하기
ex) Date() 객체를 5월로 세팅하고, 날짜는 1일로 세팅한다
		그리고 요일을 물어본다.
		주의!! 호출시 8월이 궁금하다면 숫자는 7을 넘길 것!
*/
function getStartDayOfMonth(year,month){
	var d = new Date();   // 기본값은 현재 날짜

	// 원하는 날짜로 변경하기
	d.setFullYear(year);
	d.setMonth(month);
	d.setDate(1);  // 해당 월의 시작일

	return(d.getDay());
}



/*
	인수1 : 나라는 객체
	인수2 : 상대방 객체
	*/
	function collisionCheck(me, target) {

		//나의 너비가 상대의 범위에 있는지 체크
		 var horizon1=me.x+me.width >= target.x;  //좌측에서 우측으로 접근시
		 var horizon2=me.x <= target.x+target.width; //우측에서 좌측으로 접근시

		 //나의 높이가 상대의 범위에 있는지 체크
		 var vertical1=(me.y+me.height >= target.y);  //위에서 아래로 접근시
		 var vertical2=(me.y <= target.y+target.height); //아래에서 위로 접근시

		 return (horizon1 && horizon2) && (vertical1 && vertical2);
	}



/*-----------------------------------------------------------------
	collisionCheck가 타겟과 닿은후에 사후 충돌여부 판단이라면, hitTest는 타켓과 충돌 하기 전에 앞서서 미리 계산을 하고, 닿을것 같으면 안 움직인다.
*/
function hitTest(me, target , nextX , nextY) {
	//두물체간 충돌 여부 판단 
	me_x= parseInt(me.div.style.left);
	me_y= parseInt(me.div.style.top);
	me_width=parseInt(me.div.style.width);
	me_height=parseInt(me.div.style.height);
	
	target_x= parseInt(target.div.style.left);
	target_y= parseInt(target.div.style.top);
	target_width=parseInt(target.div.style.width);
	target_height=parseInt(target.div.style.height);
	
	nextX=parseInt(nextX);
	nextY=parseInt(nextY);
	
	
	var result1=(me_x+nextX >= target_x) && (me_x+nextX <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단 
	var result2=((me_x+me_width+nextX) >= target_x) && ((me_x+me_width+nextX) <= (target_x+target_width)); 	//나의 가로폭이 타겟의 가로폭 내에 있는지 판단
	
	var result3=((me_y+nextY) >= target_y) && ((me_y+nextY) <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
	var result4=((me_y+me_height+nextY) >= target_y) && ((me_y+me_height+nextY) <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단
	

	return (result1 || result2) && (result3 || result4);
}