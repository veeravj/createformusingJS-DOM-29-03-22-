let fNameLab=getLabel("label","for","fname","FirstName");
let fName=getInput("input","type","text","id","fname");
document.body.append(fNameLab,newLine(),fName,newLine());
let lNameLab=getLabel("label","for","lname","LastName");
let lName=getInput("input","type","text","id","lname");
document.body.append(lNameLab,newLine(),lName,newLine());
let email=getLabel("label","for","mailId","Email");
let mailId=getInput("input","type","mail;","id","mailId");
document.body.append(email,newLine(),mailId,newLine());
let security=getLabel("label","for","password","Password");
let code=getInput("input","type","password","id","password");
document.body.append(security,newLine(),code,newLine(),newLine());
let butEle=document.createElement("button");
butEle.setAttribute("onclick","getDetail()");
butEle.innerText="Click Here";
document.body.append(butEle);
function getLabel(elementName,attr,attrValue,value) {
    let result=document.createElement(elementName);
    result.setAttribute(attr,attrValue);
    result.innerHTML=value;
    return result;
}
function getInput(elementName,attr1,attrValue,attr2,attr2Value){
let result1=document.createElement(elementName);
result1.setAttribute(attr1,attrValue);
result1.setAttribute(attr2,attr2Value);
return result1;
}
function newLine(){
    return document.createElement("br");
}
function getDetail(){
    console.log("FirstName:"+document.getElementById("fname").value);
    console.log(`"LastName:${document.getElementById("lname").value}"`);
    console.log(`"Email:${document.getElementById("mailId").value}"`);
    console.log("password:"+document.getElementById("password").value);
}