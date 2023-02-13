// Still the Cursor Exhauseted Problem ?????

1- $ use ITI 

2- $ db.instructors.insertOne(
        {_id:1,firstName:"Ayman",lastName:"Salah",
                age:28,salary:99999,
                address:{city:"Mansoura",street:10,building:8},
                courses:["js","mvc","Node","Mongo"]}
                ) ; 

3- $ db.instructors.insertOne({_id:2 , age:28,salary:99999,
                address:{city:"Mansoura",street:10,building:8},
                courses:["js","php","Node","Mongo"]}) ; 

THERE IS NO ERROR AT ALL < mongo has no problem for anything !!!


4- $ let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
                ];
    
    4 - SECOND Step : 
        ITI>$  db.instructors.insertMany(instructorsArray) ; 

5 - I tried them ALL
[ 
    db.instructors.find()
    db.instructors.find({})
    db.instructors.findOne()
    db.instructors.find().constructor.name
        Q / WHY It GiVES ME "cursor" word ? Not some kind of Type ????
]


6- db.instructors.find({}, {firstName: 1 ,address: 1 }) ; 
    [Another Solution 
    
    db.instructors.find({}, {firstName: 1 ,address: 1 , _id:0}) ; 
    // To remove the _id 
    ]

    db.instructors.find({},{firstName:1,address:1,_id: 0}).forEach(function(doc) {
    print(`First name: ${doc.firstName} , Address : ${doc.address.city},${doc.address.street} , ${doc.address.building}`)  }) ; 
    
    



=====================
let allSals = [];

db.instructors.find({}, {salary: 1, _id: 0}).forEach(function(user) {
        allSals.push(user.salary)
})
// What about NULLs ???? 
// 


Math.min(...allSals)
// ??????? Why not Working with the other way ?
Math.max(...allSals)


let sum = 0;
for (let number of allSals) {
    sum += number;
}
let average = sum / allSals.length;
// I Found Reduce But i need js refresher to grasp it //TODO

=========================
// I know this is Error Prone (TODO)
// But simpler i guess 

let mx = 0 ; 
let mn = 0 ; 
db.instructors.find({}, { salary: 1, _id: 0 }).forEach(function (user)
 { if (user.salary > mx) { mx= user.salary; } })
 //TODO
 db.instructors.find({}, { salary: 1, _id: 0 }).forEach(function (user)
 { if (user.salary > mn) { mn = user.salary; } })

print(mx , mn) ; 
=========================


