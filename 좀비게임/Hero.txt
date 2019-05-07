// 주인공 만들기
class Hero extends GameObject{
	constructor(type,container,width,height,x,y,velX,velY,src){
		super(type,container,width,height,x,y,velX,velY,src);
	}
	tick(){
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;	

		if(this.x <=0){
			this.x=0;
		}
		if(this.x >=1800){
			this.x=1800;
		}
		if(this.y <=380){
			this.y=390;
		}
		if(this.y >=560){
			this.y=550;
		}

		// 주인공이 먹은 물약과 폭탄 세기
		for(var i=0;i<manager.objectArray.length;i++){
			var obj=manager.objectArray[i];
			
			if(obj.type=="VACCINE"){
				if(collisionCheck(this, obj)){
					countVaccine++; // 포션 개수 세기
					manager.removeObject(obj);
					showInfo();
				}
			}
			if(obj.type=="BOMB"){
				if(collisionCheck(this, obj)){
					countBomb++; // 폭탄 개수 세기
					manager.removeObject(obj);
					showInfo();
				}
			}
		}


		// 좀비와 부딪힌다면 죽고 게임오버 화면 띄우기
		for(var i=0;i<manager.objectArray.length;i++){
			var obj=manager.objectArray[i];
			if(obj.type=="ZOMBIE"){
			// 좀비와 충돌했는지 충돌체크 검사하기	
				if(collisionCheck(this, obj)){
						// 좀비와 충돌했다면 둘 다 지워주기
						manager.removeObject(obj); 
						manager.removeObject(this);
						gameOver();
				}
			}
		}
		
	}

}