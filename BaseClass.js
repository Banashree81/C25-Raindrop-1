class BaseClass{
    constructor(){
        this.charString=":"
        this. x= Math.round(random(0,width-10));
        this.y = random(0,height -10);    
        
             
    }

    display(){
       stroke (random(200,255),random(100,200),random(20,100));
       textSize(random(12,25))
       var num= Math.round(random(0,this.charString.length-1));
       this.displaychar= this.charString.charAt(num);   

       text(this.displaychar,this.x,this.y)
      
    }

    fall(){
        this.y = this.y + random(1,20);
        if(this.y > height){
            this.y = 0;
        }
    }
}