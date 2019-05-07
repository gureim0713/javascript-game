class GameObject{
	constructor(type,container,width,height,x,y,velX,velY,src){
		this.type=type;
		this.container=container;
		this.width=width;
		this.height=height;
		this.x=x;
		this.y=y;
		this.velX=velX;
		this.velY=velY;
		this.src=src;

		this.img=document.createElement("img");
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.src=this.src;

		this.container.appendChild(this.img);
	}
	tick(){
		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
	}
	render(){
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
	}
}