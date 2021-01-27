  import { Component, NgZone, ɵangular_packages_core_core_bj } from '@angular/core';  
  import { element } from '@angular/core/src/render3';
  import { Employees } from './employees.interface';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {


    employees  :Employees[];

    NameorEmail: string = "";
    DeptBy:string ="";
    title = 'MyAssignment';
    filterDepartments= [];  
    sorting:string ="";
    EmployeeDetails: object = []; 

    constructor( )
    {
      
    this.employees  = [
      {
        name: "Badrinath",
        age: 42,
        email: "Badrin@gmail.com",
        departments: ["Computer", "Physics"],
      },
      {
        name: "Swagat Swain",
        age: 23,
        email: "Swagat897@gmail.com",
        departments: ["Computer"],
      },
    
      {
        name: "Manjunath Kumar",
        age: 18,
        email: "Manjunathk789@gmail.com",
        departments: ["Physics", "Chemistry"],
      },
      {
        name: "Aravind",
        age: 52,
        email: "Aravind@gmail.com",
        departments: ["Chemistry", "Physics"],
      },
      {
        name: "Praveen Patekar",
        age: 34,
        email: "Praveenpatekar@gmail.com",
        departments: ["Computer", "Physics", "Chemistry"],
      },
      {
        name: "Naina Singh",
        age: 76,
        email: "Nainasingh@gmail.com",
        departments: ["Computer", "Physics"],
      },
    ];
    
  }



//For Unique Departments and Reloading the data
  UniqueAndReload()
    {
     
      this.EmployeeDetails= this.employees.sort((a,b) => a.name.localeCompare(b.name));
       for (const i of this.employees ) 
        this.filterDepartments.push(...i.departments)
      this.filterDepartments = this.filterDepartments.filter((item, i, ar) => ar.indexOf(item) === i);
      if(!(this.filterDepartments.includes("All")))
        this.filterDepartments.push("All")
      
    }


 //Searching with Department Name and NameOrEmail   
    Search(){
     
      if(!(this.NameorEmail))
       {
       if(this.DeptBy!="All")
      {
        let obj=[]; 
        this.employees.filter((item)=>
        {
          for (const i of item.departments) {
            if(this.DeptBy===i)
                obj.push(item) 
          }
        })
        obj=obj.sort((a,b) => a.name.localeCompare(b.name));
      this.EmployeeDetails=obj;
     }
     return this.EmployeeDetails
      }
      

      else
      {
        let obj=[]
        if(this.DeptBy=="All")
      {
      this.employees.forEach(i => {
        if( this.NameorEmail.toLowerCase()===i.name.toLowerCase())
        {
          obj.push(i)   
        }
      });
      obj=obj.sort((a,b) => a.name.localeCompare(b.name));

        this.EmployeeDetails=obj
        }
    
      else
      {
        let obj=[];
        this.employees.filter((item)=>
        {
          for (const i of item.departments) {
            if(this.DeptBy===i && this.NameorEmail.toLowerCase()===item.name.toLowerCase())
                obj.push(item)
             
          }
        })
        obj=obj.sort((a,b) => a.name.localeCompare(b.name));

    this.EmployeeDetails=obj;
    }
      }
      return this.EmployeeDetails
      }
      
//Sorting Method
   OnSort()
      {
        switch(this.sorting)
        {
          case "name[a-z]":
          {
            let obj=this.employees.sort((a,b) => a.name.localeCompare(b.name));
 
            console.log(obj);
            this.EmployeeDetails =obj
            return this.EmployeeDetails
          }
          case  "name[z-a]":
            {
              let obj=this.employees.sort((a,b) => b.name.localeCompare(a.name));
 
            console.log(obj);
            this.EmployeeDetails =obj
            return this.EmployeeDetails 
            }
            case  "Age":
            {
              let obj=this.employees.sort((a,b) => a.age-b.age);
 
            console.log(obj);
            this.EmployeeDetails =obj
            return this.EmployeeDetails 
            }
            case  "Email":
            {
              let obj=this.employees.sort((a,b) => a.email.localeCompare(b.email));
 
            console.log(obj);
            this.EmployeeDetails =obj
            return this.EmployeeDetails 
            }
        }
      }
 
}