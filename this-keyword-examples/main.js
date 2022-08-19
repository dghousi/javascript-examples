const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.fullName())

  const user = {

    name: "Jhon",
    ref : this // in here this is refering to the parent object which is global window object 
  }

  console.log("\n: "+user.ref.name) // noting return because window object does not have any attribute which is name
  

  const user1 = {

    name: "Jhon",
    ref () {
        return this // in here this is refering to the parent object which is the name and return the name
    }
        
  }

  console.log("\n: "+user1.ref().name) // returning Jhon
  
  const user2 = {
      name: "Dawlatzai Ghousi!",
      logMessage()
      {
        console.log("\n the log is :"+this.name)
      }
  }

  setTimeout(user2.logMessage, 1000); // in this situation the logMessage method is not called and this is refering to global object and it prints nothing;
  setTimeout(user2.logMessage(), 1000); // in this situation the logMessage method is called and this is refering to the parent object and it prints Dawlatzai Ghousi;

  