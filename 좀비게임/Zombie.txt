// 좀비 만들기
class Zombie extends GameObject{
	constructor(type,container,width,height,x,y,velX,velY,src){
		super(type,container,width,height,x,y,velX,velY,src);
		this.dieInterval=0; //좀비가 태어나면 횟수를 세다가 몇번째에 죽일지 타이밍을 결정하는 변수
		this.dieFlag=false;  // 처음에는 죽으면 안되니까 false값을 주기
	}
	tick(){
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
		// 좀비가 정해진 y축 값 내에서만 왔다갔다 움직이게 하기
		if(this.y<400 || this.y>550){
			this.velY=-this.velY;
		}
		// 무사히 피해서 화면 밖을 벗어난 좀비 제거하기
		if(this.x<0){
			manager.removeObject(this);
		}
		this.dieInterval++;
		// 좀비와 bomb이 마주치면 dieFlag 값이 true로 변하면서 조건을 수행한다.
		if(this.dieFlag){
			this.img.src="./effect.png";  // 좀비 이미지를 폭발 이미지로 바꿔주기
			// 20을 세고 난 뒤에 해당 좀비를 죽이기.	
			if(this.dieInterval%20==0){
				if(manager.objectArray.indexOf(this)){
					manager.removeObject(this);
				}
			}
		}
	}
}