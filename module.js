import { testNumber as Tn } from "./module2.js";

export var testString="I am a string!";

export const testFunc=()=>{
    return " I am a function and x:"+Tn;
}
export class testClass {
    constructor(x) {
        this.x=x
    }
    handlelog(){
        console.log("this is"+this.x+"in test class")
    }
}
export default  "I am a default";