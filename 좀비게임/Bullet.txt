class Bullet extends GameObject{
	constructor(type,container,width,height,x,y,velX,velY,src){
		super(type,container,width,height,x,y,velX,velY,src);
	}
	tick(){
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
		
		// bullet과 좀비가 닿았는지 충돌체크 하고 닿았으면 둘 다 제거!
		for(var i=0;i<manager.objectArray.length;i++){
			var obj=manager.objectArray[i];
			if(obj.type=="ZOMBIE"){
				// 폭탄과 닿았다면 둘 다 제거!
				if(this.type=="item_BOMB"){
					if(collisionCheck(this,obj)){
						// 폭발 이미지 효과 주기!
						manager.removeObject(this); //bomb은 죽고
						//manager.removeObject(obj);
						obj.dieFlag=true; // 좀비에게 죽는 요청 보내기
						obj.dieInterval=0;  // 폭발 이미지 효과를 줄 변수값 0으로 초기화 하기
					}
					// 백신과 닿았다면 꽃으로 변신시켜주기!!
				}else if(this.type=="item_VACCINE"){
					if(collisionCheck(this,obj)){
						manager.removeObject(this);
						obj.img.src="./flower.png";
						obj.type="FLOWER";
						obj.velY=0; // 꽃으로	변하면 움직임 멈추기
					}
				}
			}
		}    
			// vaccine 좀비가 닿았는지 확인하고 
			
		// 좀비를 맞추지 못한 무기는 화면 밖으로 제거하기
		if((this.x+this.width)>screen.width){
			manager.removeObject(this);
		}
	}
	
}