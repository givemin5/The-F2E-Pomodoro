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
            value : 0
        },
        records : []
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
        StartTimer(t){ 
            this.ClearTimer();
            this.timer.value = t; 
            this.timer.fun = setInterval(this.EachTime, 1000);
        },
        ShortTimer(){
            var t = 60 * 10; 
            this.StartTimer(t);
        },
        LongTimer(){
            var t = 60 * 25; 
            this.StartTimer(t);
        },
        CanelTimer(){
            this.ClearTimer();
        },
        StopTimer(){
            this.ClearTimer();
        },
        ClearTimer(){
            if(this.timer.fun != null)
            {
                clearInterval(this.timer.fun);
                this.timer.fun = null;
            }
        },
        ContinueTimer(){
            this.timer.fun = setInterval(this.EachTime, 1000);
        },
        EachTime(){
            this.timer.value --;
            if(this.timer.value<=0){
                this.ClearTimer();
                alert('Done');
            }
        },
        Finished(){
            var item = {
                Name : this.workItem.Name,
                
            }
            this.records.Add(item);
        }


    }
})