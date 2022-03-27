class Student extends User{
    constructor(name, age, grade, preferreduSbjects){
        super(name)
        super(age)
        super(grade)
        this.subjects = preferreduSbjects
    }

    get getSubjects(){
        return this.subjects
    }

    set changeSubjects(newSubjects){
        this.subjects = newSubjects
    }




    
}