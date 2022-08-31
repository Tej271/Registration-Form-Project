function submitform() {

    // alert(" inside function");

    var firstname = document.getElementById("firstname").value;

    var lastname = document.getElementById("lastname").value;

    var email = document.getElementById("email").value;

    var phone = document.getElementById("phone").value;

    var batch = document.getElementById("batch").value;

    var current = document.getElementById("current").value;

    var flag=0;

    if ((firstname = "" || firstname.length <= 3)) {

      document.getElementById("first").innerHTML = "Please enter a valid first name";

    }else{
        document.getElementById("first").innerHTML="";
        flag+=1;
    }

    if ((lastname = "" || lastname.length <= 3)) {

      document.getElementById("last").innerHTML = "Please enter a valid last name";

    }else{

        document.getElementById("last").innerHTML="";

        flag+=1;
    }



    if (

      email.indexOf("@") == 0 ||

      email == "" ||

      (email.charAt(email.length - 3) != "." &&

        email.charAt(email.length - 4) != ".")

    ) {

      document.getElementById("em").innerHTML =

        "Please enter a valid email";

    }else{

        document.getElementById("em").innerHTML="";

        flag+=1;

    }



    if ((phone = "" || phone.length != 10)) {

      document.getElementById("ph").innerHTML = "Please enter a valid phone";

    }else{

        document.getElementById("ph").innerHTML="";

        flag+=1;

    }





    if (!batch) {

      document.getElementById("bat").innerHTML = "Please enter a valid Batch No.";

    }else{

        document.getElementById("bat").innerHTML="";

        flag+=1;

    }

    if (!current) {

      document.getElementById("cur").innerHTML ="Please enter a valid Current No.";

    }else{
        document.getElementById("cur").innerHTML="";
        flag+=1;
    }

    if(flag===6){
    alert("Your details have been saved successfully!");
    }else{
    return false;
    }

    

}
