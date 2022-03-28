import { get } from "mongoose";

class User{

    constructor(Fullname, age, grade){
        this.name = Fullname
        this.age = age
        this.grade = grade
    }

    get getName(){
       return this.Fullname
    }

    set changeName(newName) {
        this.name = newName;
    }

    get getAge(){
        return this.age
     }
 
    set changeAge(newAge) {
        this.age = newAge;

    }

    get getGrade(){
        return this.grade
     }
 
    set changeGrade(newGrade) {
        this.grade = newGrade;
        
    }
    
    createMeeting(){
        
    }

    joinMeeting(){

    }



    
}