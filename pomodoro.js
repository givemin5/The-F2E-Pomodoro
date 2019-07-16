var app = new Vue({
    el: '#app',
    data: {
        newItem: '123',
        items : [
            {
                Name : 'test',
                
            }
        ],
        workItem : {
            Name : '',
            LongTimes : 0,
            BreakTimes : 0
        },
        timer : {
            fun : {},
            value : 0,
            max : 60
        },
        records : [],
        audio : {}
    },
    created: function(){
        this.audio = new Audio('audio/Wecker-sound.mp3');
    },
    methods: {
        AddItem() {
            var item = { Name : this.newItem, Date :  Date.now()};
            this.items.push(item);
        },
        RemoveItem(index) {
            this.items.splice(index,1);
        },
        SetWork(index){
            this.workItem.Name = this.items[index].Name;
            this.items.splice(index,1);
        },
        StartTimer(){ 
            this.ClearTimer();
            this.timer.value = this.timer.max;
            this.timer.fun = setInterval(this.EachTime, 1000);
        },
        ShortBreak(){
            var t = 60 * 5; 
            this.timer.max = t ;
            this.StartTimer();
        },
        LongBreak(){
            var t = 60 * 10; 
            this.timer.max = t ;
            this.StartTimer();
        },
        LongTimer(){
            var t = 60 * 25; 
            this.timer.max = t ;
            this.StartTimer();
        },
        CanelTimer(){
            this.ClearTimer();
        },
        StopTimer(){
            this.ClearTimer();
        },
        ClearTimer(){
            this.audio.pause();
            this.audio.currentTime = 0;
            if(this.timer.fun != null)
            {
                clearInterval(this.timer.fun);
                this.timer.fun = null;
            }
            this.timer.value = 0;
        },
        ContinueTimer(){
            this.timer.fun = setInterval(this.EachTime, 1000);
        },
        EachTime(){
            this.timer.value --;
            if(this.timer.value<=0){
                this.ClearTimer();
                this.audio.play();
            }
        },
        Finished(){
            var item = {
                Name : this.workItem.Name,
                
            }
            this.records.push(item);
            this.ClearTimer();
        }


    },
    computed: {
        Minute() {
          return ("00" + Math.floor(this.timer.value / 60)).slice(-2); 
        },
        Second(){
            return ("00" +Math.floor(this.timer.value % 60)).slice(-2); 
        }
      }
})