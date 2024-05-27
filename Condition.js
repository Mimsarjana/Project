var age=19;
var name;
if(age>=0 && age<=2)
{
 name="baby";
}
else if(age>=3 && age<=5)
{
    name="Toddler";
}
else if(age>=6 && age<=12)
{
    name="Child";
}
else if(age>=13 && age<=17)
{
    name="teen";
}
else if(age>=18 && age<=21)
{
    name="young";
}
else
{
    name="old";
}
console.log(name);





function display()
{
    var number=document.getElementById("mark").value;
    var grade;
    if (number>=80 && number<=100)
    {
        grade="you have got A+";
    }
    else if (number>=60 && number<=79)
    {
        grade="you have fot B";
    }
    else{
        grade="you have failed";
    }
    alert(grade);
}
