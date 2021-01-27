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
    sorting:string ="name[a-z]";

    constructor( )
    {
      
    this.employees  = [
      {
        name: "Badrinath",
        age: 40,
        email: "Badrin@gmail.com",
        departments: ["Computer", "Physics"],
      },
      {
        name: "Swagat Swain",
        age: 10,
        email: "Swagat897@gmail.com",
        departments: ["Computer"],
      },
    
      {
        name: "Manjunath Kumar",
        age: 10,
        email: "Manjunathk789@gmail.com",
        departments: ["Physics", "Chemistry"],
      },
      {
        name: "Aravind",
        age: 60,
        email: "Aravind@gmail.com",
        departments: ["Chemistry", "Physics"],
      },
      {
        name: "Praveen Patekar",
        age: 70,
        email: "Praveenpatekar@gmail.com",
        departments: ["Computer", "Physics", "Chemistry"],
      },
      {
        name: "Naina Singh",
        age: 70,
        email: "Nainasingh@gmail.com",
        departments: ["Computer", "Physics"],
      },
    ];
    
  }


    EmployeeDetails: object = [];  
    persons()
    {
      this.EmployeeDetails=this.employees
      if(!(this.filterDepartments.includes("All")))
          {
            this.filterDepartments.push("All")
          }
      for(var i of this.employees)
      {
        for(var j of i.departments)
        {
          if(!(this.filterDepartments.includes(j)))
          {
            this.filterDepartments.push(j)
          }
        }
      }

      }
   

    Search(){
     
   
      if(!(this.NameorEmail
        ))
      {
        if(this.DeptBy=="All")
        return this.EmployeeDetails
      else
      {
        let obj=[];
      for(var i of this.employees)
      {
        for(var j of i.departments)
        {
          if(this.DeptBy==j)
          {
            obj.push(i)   
          }
        }
        }
      this.EmployeeDetails=obj;
      return this.EmployeeDetails}
      }
      

      else
      {
        let obj=[]
        if(this.DeptBy=="All")
      {
      this.employees.forEach(i => {
        if( this.NameorEmail==i.name)
        {
          obj.push(i)   
        }
      });
          
        this.EmployeeDetails=obj
        return this.EmployeeDetails
        }
      
      
      else
      {
        let obj=[];
      for(var i of this.employees)
      {
        for(var j of i.departments)
        {
          if(this.DeptBy==j && this.NameorEmail==i.name)
        {
          obj.push(i)   
        }
        }
      }
    this.EmployeeDetails=obj;
    return this.EmployeeDetails}
      }
      }



  sort()
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

