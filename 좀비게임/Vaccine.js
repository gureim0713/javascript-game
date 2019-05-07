// 물약 효과 만들기
class Vaccine extends GameObject{
	constructor(type,container,width,height,x,y,velX,velY,src){
		super(type,container,width,height,x,y,velX,velY,src);
	}
	tick(){
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;

		// 먹지 못하고 화면 밖으로 나간 백신 제거
		if(this.x<0){
			manager.removeObject(this);
		}
	}

}
