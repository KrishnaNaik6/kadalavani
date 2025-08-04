import Employee from "../models/Employee.js";
async function run() {
  let dt = new Date();
  console
    .log
    // await Employee.create({
    //   employee_id: "emp0001",
    //   user_id: 1,
    //   join_date: dt.toISOString(),
    // })
    ();
  console.log(await Employee.find());
  console.log("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");
}

run();
