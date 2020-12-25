function idCard(){
  var FirstName = document.getElementById("firstName").value;
  var LastName = document.getElementById("lastName").value;
  var Age = parseInt(document.getElementById("age").value);
  var PhoneNumber = parseInt(document.getElementById("phoneNumber").value);
  var Address = document.getElementById("address").value;
  var PostFullName = FirstName + " " + LastName;

  document.getElementById("PostFullName").innerHTML = PostFullName;
  document.getElementById("PostAddress").innerHTML = Address;

  var NumberArray = [];
   NumberArray.push(Age, PhoneNumber);
    for(var i= 0; i < NumberArray.length; i++) {
        if(NumberArray[i] <= 100) {
            document.getElementById("PostAge").innerHTML = "Age: " + Age;
        }
        else if(NumberArray[i] > 100) {
            document.getElementById("PostPhoneNumber").innerHTML = "Phone Number: " + PhoneNumber;
        }
    }
}

