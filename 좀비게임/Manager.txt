
// 게임에 등장하는 캐릭터들을 관리할 매니저
class Manager{
	constructor(){
		this.objectArray=[];
	}
	// 배열에 등장하는 캐릭터 넣어주기
	addObject(obj){
		this.objectArray.push(obj);
	}
	// 배열에서 삭제하기
	removeObject(obj){
		stage.removeChild(obj.img);  // 화면에서 삽입한 이미지 삭제
		this.objectArray.splice(this.objectArray.indexOf(obj),1);  // 배열 명단에서도 삭제하기
	}

	// 배열에 담긴 각각의 캐릭터마다 tick()과 render()값을 주기
	tick(){
		for(var i=0;i<this.objectArray.length;i++){
			this.objectArray[i].tick();
		}
	}
	render(){
		for(var i=0;i<this.objectArray.length;i++){
			this.objectArray[i].render();
		}
	}
}