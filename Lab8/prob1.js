class Meditation{
    constructor(count){
        this.count = count;
    }
    start(){
        if(this.count === 0){
            console.log("Jay Guru Dev")
        }
        else{
            setTimeout(console.log, 0, this.count--);
            setTimeout(this.start.bind(this), 1000);
        }
    }
}
const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);