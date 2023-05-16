function check() {

    var value1 = document.getElementById("id1");
    var value2 = document.getElementById("id2");
    var value3 = document.getElementById("id3");
    var value4 = document.getElementById("id4");

     para1 = document.getElementById("p1");
     para2 = document.getElementById("p2");
     para3 = document.getElementById("p3");
     para4 = document.getElementById("p4");

    pattern_name = /^([A-Za-z])+$/;
    pattern_mobile = /^[0-9]+$/;
    pattern_email = /^([A-Za-z])+$/;
    pattern_pass = /^((?=.*[A-Za-z])(?=.*[@!$#&*]))+$/;

    if (value1.value == "") {
        para1.innerHTML=`<i class="glyphicon glyphicon-info-sign"></i>Please fill the name.....`;
        para1.className="p1";
        return false;
    }
    else if (!pattern_name.test(value1.value)) {
        para1.innerHTML=`Only allow alphabatic characters  <i class="glyphicon glyphicon-alert"></i>`;
        return false;
    }
    else{

    }

    if (value2.value == "") {
        para2.innerHTML=`<i class="glyphicon glyphicon-info-sign"></i>Please fill the mobile number.....`;
        para2.className="p2";
        return false;
    }
    else if (!pattern_mobile.test(value2.value)) {
        para2.innerHTML=`*Enter the only 10 digits  <i class="glyphicon glyphicon-alert"></i>`;
        return false;
    }

    if (value3.value == "") {
        para3.innerHTML=`<i class="glyphicon glyphicon-info-sign"></i>Please fill the Email.....`;
        para3.className="p3";
        return false;
    }
    else if (!pattern_email.test(value3.value)) {
        para3.innerHTML=`*Enter the valid email account  <i class="glyphicon glyphicon-alert"></i>`;
        return false;
    }

    if (value4.value == "") {
        para4.innerHTML=`<i class="glyphicon glyphicon-info-sign"></i>Please fill the password.....`;
        para4.className="p4";
        return false;
    }
    else if (!pattern_pass.test(value4.value)) {
        para4.innerHTML=`*Password will be contain number,special char,alphabatic  <i class="glyphicon glyphicon-alert"></i>`;
        return false;
    }
}
function checkpass(){
    value4 = document.getElementById("id4");
    length = value4.value.length;
    if(length < 3){
      document.getElementById("span").className="weak";
      document.getElementById("span").innerHTML="your password is weak";
    }
    else if(length > 3 && length < 5){
        document.getElementById("span").className="medium";
        document.getElementById("span").innerHTML="your password is medium";
      }
      else if(length > 5 && length < 8){
        document.getElementById("span").className="strong";
        document.getElementById("span").innerHTML="your password is strong";
      } 
      else if(length > 8){
        document.getElementById("span").className="verystrong";
        document.getElementById("span").innerHTML="your password is verystrong";
      }
}
function mouseout(){
    document.getElementById("span").classList.remove("weak","medium","strong","verystrong");
    document.getElementById("span").innerHTML="";
    
}