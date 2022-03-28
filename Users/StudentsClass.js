class Student extends User{
    constructor(name, age, grade, preferredSubjects){
        super(name)
        super(age)
        super(grade)
        this.subjects = preferredSubjects
    }

    get getSubjects(){
        return this.subjects
    }

    set changeSubjects(newSubjects){
        this.subjects = newSubjects
    }

    







    
}