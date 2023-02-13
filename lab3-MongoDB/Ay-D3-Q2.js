db.employee
  .aggregate([
    {
      $lookup: {
        from: "department",
        localField: "department_id",
        foreignField: "department_id",
        as: "desc",
      }, // lookup
    }, // stage 1
    {
      $project: {
        fullName: "$full_name",
        department: "$desc.department_description",
      },
    }, // stage2
  ])
  .forEach(function (eachEmp) {
    print(
      `Full Name : ${eachEmp.fullName} |  Department : ${eachEmp.department}`
    );
  });
// ===========================================
// ====================A======================
// ===========================================
// ===========================================
db.employee.find(
    { position_title: "VP Country Manager" },
    { full_name: 1, salary: 1,position_title:1 , _id: 0 }
  ).forEach(function(eachOne){
      print(`Name ${eachOne.full_name} | Salary  ${eachOne.salary}`)
      })
//   ONLY THIS ????????????????????????
// ===========================================
// ====================B======================
// ===========================================
// ===========================================
db.customer
  .aggregate([
    {
      $lookup: {
        from: "region",
        localField: "address.customer_region_id",
        foreignField: "region_id",
        as: "regionN",
      }, // lookup
    }, // stage 1
    {
      $project: {
        FullName: { $concat: ["$fname", " ", "$lname"] },
        r: "$regionN.sales_region",
      }, // End Of Project
    }, // Stage 2
  ])
  .forEach(function (eachCustomer) {
    print(`FullName : ${eachCustomer.FullName}  , Region :  ${eachCustomer.r}`);
  });
// ===========================================
// ====================C======================
// ===========================================
// ===========================================
db.product.find({ brand_name: "Washington" } , {product_name :1 ,brand_name:1 , _id:0});
// ===========================================
// ====================D======================
// ===========================================
// ===========================================
