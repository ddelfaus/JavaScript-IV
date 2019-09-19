// CODE here for your Lambda Classes



class Person {
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,   
        this.location = attributes.location;    
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}. `
    }
}//Person close


class Instructor extends Person {
    constructor(attributes){
        super(attributes),
        this.specialty = attributes.specialty,
        this.favLanguage = attributes.favLanguage,   
        this.phrase = attributes.phrase;    
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }  
    grade(student, subject){
        return `${student} receives a perfect score on ${subject}.`
    }
}// Instructor close


class Student extends Person {
    constructor(attributes){
        super(attributes),
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className,   
        this.favSubjects = attributes.favSubjects;    
    }
    listsSubjects(){
        this.favSubjects.map(list => console.log(list));
                
    } 
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }

}// Student close


class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes),
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor;       
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject} `
    }

}// ProjectManager


/// Instructors

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  const jose = new Instructor({
    name: 'Jose',
    location: 'Alaska',
    age: 32,
    favLanguage: 'Ruby',
    specialty: 'Front-end',
    catchPhrase: `I pity the fool`
  });
  const kate = new Instructor({
    name: 'Kate',
    location: 'UK',
    age: 28,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Excellent!`
  });

//Students

const sarah = new Student({
    name: 'Sarah',
    location: 'Denmark',
    age: 22,
    previousBackground: 'college student',
    className: 'Web Dev',
    favSubjects: [
        'Html',
        'CSS'
    ],
  });

  const rob = new Student({
    name: 'Rob',
    location: 'USA',
    age: 24,
    previousBackground: 'NAVY',
    className: 'Web Dev',
    favSubjects: [
        'Java',
        'CSS'
    ],
  });

  const amanda = new Student({
    name: 'Amanda',
    location: 'USA',
    age: 20,
    previousBackground: 'unemployed',
    className: 'UX Design',
    favSubjects: [
        'Math',
        'UX Stuff'
    ],
  });



  //Project Managers

  const kyle = new ProjectManager({
    name: 'Kyle',
    location: 'New York',
    age: 26,
    favLanguage: 'JavaScript',
    specialty: 'UX Design',
    catchPhrase: `Greetings`,
    gradClassName: 'UX 2',
    favInstructor: 'fred'  
  });
  
  const jessica = new ProjectManager({
    name: 'Jessica',
    location: 'Texas',
    age: 26,
    favLanguage: 'react',
    specialty: 'WEB',
    catchPhrase: `Yolo`,
    gradClassName: 'Web 15',
    favInstructor: 'Kate'  
  });



// instructors
  console.log(fred.speak());
  console.log(kate.favLanguage);
  console.log(fred.demo('Math'));
  console.log(fred.grade('Frank', 'Math'));

//students
  rob.listsSubjects();
  console.log(sarah.PRAssignment('Java'));
  console.log(amanda.sprintChallenge('UI'));
  console.log(sarah.previousBackground);

  console.log(jessica.standUp('Cats'));
  console.log(kyle.debugsCode('David', 'Java'));
  console.log(kyle.favInstructor);