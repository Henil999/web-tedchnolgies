fetch("work_with_JSON.json") 
    .then((response) => response.json()) 
    .then((data) => {
            console.log(data);
            data.employees.forEach((employee) => {  
                    const div = document.createElement("div");
                    div.classList.add("employee");         
                    div.innerHTML = `<p>${employee.firstName} ${employee.lastName}</p>`;         
                    document.body.appendChild(div); 
      }); 
}) 
.catch((error) => console.error(error));   
 
{ 
    "employees"; [ 
      { "firstName": "John", "lastName": "Doe" }, 
      { "firstName": "Anna", "lastName": "Smith" }, 
      { "firstName": "Peter", "lastName": "Jones" } 
    ] 
} 
