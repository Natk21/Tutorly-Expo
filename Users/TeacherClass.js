class Teacher extends User{
    constructor(name, age, grade, preferredTeachingSubjects){
        super(name)
        super(age)
        super(grade)
        this.subjects = preferredTeachingSubjects
    }

    get getSubjects(){
        return this.subjects
    }

    set changeSubjects(newSubjects){
        this.subjects = newSubjects
    }

}