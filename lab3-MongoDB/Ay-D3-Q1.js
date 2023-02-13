// Q / When i get Persons as a Variable It gives me an Error ????
db.instructors.find({}, { firstName: 1, lastName: 1, address: 1, _id: 0 }).forEach(function (eachPerson)
{
    print(`Full Name is :  ${eachPerson.firstName} ${eachPerson.lastName}`)
    let fullAddress = ""
    for (key in eachPerson.address) {
      fullAddress += " " + eachPerson.address[key]
    }// End of For 
    print(`Address  is :  ${fullAddress}`)
} // End Of Inner Func 
    ) // End Of ForEach 

// TODO : the Aggregation Solution 
// ===========================================
// ====================A======================
// ===========================================
// ===========================================
db.students.find({}, { firstName: 1, lastName: 1, department: 1, _id: 0 }).forEach(function (eachPerson) {
    print(`Fullname: ${eachPerson.firstName} ${eachPerson.lastName}`)
    let dept = db.departments.findOne({_id: eachPerson.department}, { name: 1, _id: 0 }).name
    print(`Department : ${dept} `)
  });
// [ ] outer TODO  , Makiig it Out 
// ===========================================
// ====================B======================
// ===========================================
// ===========================================
db.students
  .find({}, { firstName: 1, lastName: 1, addresses: 1, _id: 0 })
  .forEach(function (document) {
    print(`Fullname: ${document.firstName} ${document.lastName}`);
    let cityAddress = "";
    print(` Cities : `);
    for (let eachEl of document.addresses) {
        cityAddress = eachEl.city;
        print(` ${cityAddress}`);
    }
    print("===========");
  });
  //refator 
  
// ===========================================
// ====================C======================
// ===========================================
// ===========================================
db.students.find({}, { firstName: 1, lastName: 1, subjects: 1, _id: 0 }).forEach(function (student) {
    let subjectArrayObj = db.subjects.find({}, { name: 1 }).toArray();
    // I didn't Exclude the ID  , [arr of obj] 
    let allSubjects = "";
    for (let subjectObj of subjectArrayObj) {
      for (let subId of student.subjects) {
        if (subId == subjectObj._id) {
          allSubjects += subjectObj.name + " ";
        }
      }
    }
    print(`Fullname: ${student.firstName} ${student.lastName}, All Subjects: ${allSubjects}`);
    print("===========")
  });
// ===========================================
// ====================D======================
// ===========================================
// ===========================================
db.students.find({ subjects: db.subjects.find({ name: "jquery" }, { _id: 1 }).toArray()[0]._id }, { firstName: 1, lastName: 1, _id: 0 })
    .forEach(function(eachJqStudent){
        print(` Jq Student : ${eachJqStudent.firstName} ${eachJqStudent.lastName}`)
        })
// ===========================================
// ====================E======================
// ===========================================
// ===========================================
