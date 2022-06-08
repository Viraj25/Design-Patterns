function Process(state){
    this.state = state
}
const singleton = (function(){
    function ProcessManager(){
        this.numProcess = 0
    }

    let pManager
    function createProcessManager()
    {
        pManager =new ProcessManager()
        return pManager
    }
    return{
        getProcessManager:()=>{
            if(!pManager)
            pManager=createProcessManager()
            return pManager
        }
    }
})()

const ProcessManager = singleton.getProcessManager();
const ProcessManagerTwo = singleton.getProcessManager();
console.log(ProcessManager,ProcessManagerTwo)
console.log(ProcessManager===ProcessManagerTwo)