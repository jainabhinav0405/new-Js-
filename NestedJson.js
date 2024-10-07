let Json = {
    "company": {
      "departments": [
        {
          "name": "Engineering",
          "employees": [
            { "id": 1, "name": "Alice", "role": "Engineer" },
            { "id": 2, "name": "Bob", "role": "Senior Engineer" }
          ]
        },
        {
          "name": "HR",
          "employees": [
            { "id": 3, "name": "Carol", "role": "HR Manager" }
          ]
        }
      ]
    }
  }

function add(json, department, employe){
    let dept = json.company.departments;
    dept.forEach(element => {
        if(element.name===department){
            element.employees.push(employe);
        }
    });

}

function remove(Json, department, employe){
    let dept = Json.company.departments;
    dept.forEach(element => {
        if(element.name===department){
            element.employees = element.employees.filter(emp=>emp.id!==employe.id);
        }
    });
}


function update(Json, department, employe){
    let dept = Json.company.departments;
    dept.forEach(element => {
        if(element.name===department){
            return element.employees.forEach((element)=>{
                if(element.id===employe.id){
                    element.name=employe.name;
                    element.role=employe.role;
                }
            })
        }
    });
}

function find(Json, deptartments){
    let dept = Json.company.departments;
    dept.forEach(element => {
        if(element.name===deptartments){
            console.log(element.employees);
        }
    });
}


function manageCompany(Json, type, dept , employe=null){
    if(employe === null){
        type(Json,dept);
    }
    else{
        type(Json,dept,employe);
    }
}

