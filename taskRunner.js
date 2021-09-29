class Runner{
    //todo
    constructor(){
        this.tasks = [];
        this.timer = false;
     }

     push(callback){
       
      this.tasks.push({task:callback,status:'pending'});
      if(!this.timer){
        this.execute();
      }  
     }

     findNextTask(){
         for(let i=0;i<this.tasks.length;i++){
            let task = this.tasks[i];
            if(task.status==='execution'){
                 return -1;
             }
             if(task.status==='pending'){
                 return this.tasks[i];
             }
         }

         return 1;
     }

     updateStatusDone(){
         this.status='done';
     }

     executor(){
        let nextTask = this.findNextTask();
        if(nextTask!==1 && nextTask!==-1){
           console.log(this.tasks); 
           nextTask.status='execution'; 
           nextTask.task(this.updateStatusDone.bind(nextTask));
        }

        if(nextTask===1){
            clearInterval(this.timer);
            this.timer = false;
        }
     }

     execute(){
        this.timer = setInterval(this.executor.bind(this),100);
     }

   }
   
   const r = new Runner();
   
   const getExampleTask = key => done => {
    setTimeout(function () {
      console.log('completing task: ', key);
      done();
    }, 2000);
  };
  
  r.push(getExampleTask(1));
  r.push(getExampleTask(2));
  r.push(getExampleTask(3));
  r.push(getExampleTask(4));
  
   

//execute(){
// 	this.taskList[0]( () => {
// 		this.taskList.unshift();
// 		if(this.taskList[0]){
// 			this.execute()
// }
// } )
// }

// push(task){
// 	this.taskList.push(task);
// 	if(this.taskList.length === 1){
// 		execute();
// }
// }

// // no polling - no wasted time
// // no extra checks and cycles
// // no extra objects
// // no memory leaks