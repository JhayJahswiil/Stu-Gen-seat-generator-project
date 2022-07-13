// FORM DOM ELEMENTS
const output = document.querySelector('.output')
const form = document.querySelector('.form')
const submit = document.querySelector('#enroll')
const fixError = document.querySelector('.fix-errors')
const nameInput = document.querySelector('#student-name')   
const nameError = document.querySelector('.name-error')   
const facultyInput = document.querySelector('#student-faculty')   
const facultyError = document.querySelector('.faculty-error')   
const deptInput = document.querySelector('#student-dept')   
const deptError = document.querySelector('.dept-error')   
const levelInput = document.querySelector('#student-level')
const levelError = document.querySelector('.level-error')
const examInput = document.querySelector('#student-exam-paper')
const examError = document.querySelector('.paper-error')
const show = document.querySelector('#show')
const clearAll = document.querySelector('#clear-data-btn')

// HAMBURGER DOM ELEMENTS
const bars = document.querySelector('.bars')
const times = document.querySelector('.times')
const ul = document.querySelector('.ul')

// HAMBURGER IMPLEMEMTATION
bars.addEventListener('click', function(){
    ul.style.display = 'block'
    bars.style.display = 'none'
    times.style.display = 'initial'
})

times.addEventListener('click', function(){
    ul.style.display = 'none'
    bars.style.display = 'initial'
    times.style.display = 'none'
})




// FORM IMPLEMENTATIONS
function validateName(){
    if (nameInput.value.length == 0){
        nameError.innerHTML = '! Enter Student\'s name !'
        return false
    }
    
    if (!nameInput.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write your first and last names';
        return false;
    }
    nameError.innerHTML = ''
    return true
}

nameInput.addEventListener('keyup', validateName)

function validateFaculty(){
    if (facultyInput.value.length == 0){
        facultyError.innerHTML = '! Enter Student\'s Faculty !'
        return false
    }
    if (facultyInput.value.indexOf(' ') >= 0 ){
        facultyError.innerHTML = 'Faculty should not have white spaces';
        return false;
    }
    facultyError.innerHTML = ''
    return true
}

facultyInput.addEventListener('keyup', validateFaculty)

function validateDept(){
    if (deptInput.value.length == 0){
        deptError.innerHTML = '! Enter Student\'s Dept !'
        return false
    }else{
        deptError.innerHTML = ''
        return true
    }
}

deptInput.addEventListener('keyup', validateDept)

function validateLevel(){
    if (levelInput.value == 0){
        levelError.innerHTML = '! Enter Student\'s Level !'
        return false
    }else{
        levelError.innerHTML = ''
        return true
    }
}

levelInput.addEventListener('keyup', validateLevel)

function validateExam(){
    if (examInput.value.length == 0){
        examError.innerHTML = '! Enter Student\'s Paper !'
        return false
    }
    if(!examInput.value.match(/^\w+([\.-]?\w+)*(\w{5,6})+$/)){
        examError.innerHTML = "Input Paper format";
        return false;
    }
    examError.innerHTML = ''
    return true
}

examInput.addEventListener('keyup', validateExam)


// RANDOM NUMBER GENERATOR FOR SEAT NUMBERS
function seatNumGenerator(){
     return Math.floor(Math.random() * Number(prompt('Hall Capacity?'))+ 1)
}

// EVENT ON THE FORM BUTTON
form.addEventListener('submit', function(e){
    e.preventDefault()
    if (!validateName() || !validateFaculty() || !validateLevel() || !validateDept() || !validateExam()){
        fixError.style.display = "block"
        setTimeout(() => {
            fixError.style.display = "none"
        }, 2000);
        form.reset()
        return
    }
    
    
// GETTING MY FORM VALUES FROM THE LOCAL STORAGE
    const studentData = JSON.parse(localStorage.getItem('student')) || []

    let students = {
        Name: nameInput.value,
        Faculty: facultyInput.value,
        Dept: deptInput.value,
        Level: levelInput.value,
        Paper: examInput.value,
        Seat: seatNumGenerator()
    }

    studentData.push(students)
// SAVING MY VALUES INTO THE LOCAL STORAGE
    localStorage.setItem('student', JSON.stringify(studentData))


    location.reload()
})

// GETTING MY VALUES FROM THE LOCAL STORAGE
    const studentData = JSON.parse(localStorage.getItem('student')) || [];

// A FOR LOOP THAT INCLUDES DETAILS OF MY STUDENT'S DATA
    for (let i = 0; i < studentData.length; i++){

        output.innerHTML += `
        <div class="student">
            <p>NAME: ${studentData[i].Name}</p>
            <p>FACULTY: ${studentData[i].Faculty}</p>
            <p>DEPT: ${studentData[i].Dept}</p>
            <p>LEVEL: ${studentData[i].Level}</p>
            <p>EXAM PAPER: ${studentData[i].Paper}</p>
            <p>SEAT-NO: ${studentData[i].Seat}</p>
            <button id="delete">DELETE</button>
        </div>
        <hr>
        `
    }

// STUDENT'S DATA DOM ELEMENTS
const student = document.querySelectorAll('.student')
const deleteData = document.querySelectorAll('#delete')

// FOR LOOP THAT LOOPS OVER EVERY DELETE BUTTON
for (let i = 0; i < deleteData.length; i++){
    deleteData[i].addEventListener('click', function(){
        const studentData = JSON.parse(localStorage.getItem('student')) || [];
        // DELETES A SINGLE VALUE FROM THE LOCAL STORAGE
        studentData.splice(student[i], 1)

        localStorage.setItem('student', JSON.stringify(studentData))

        location.reload()
    })
}

// EVENT TO CLEAR ALL DATA IN THE LOCAL STORAGE
clearAll.addEventListener('click', function(){
    localStorage.removeItem('student')
    location.reload()
})




















