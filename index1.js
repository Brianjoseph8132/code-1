let marks = -1
// if the student scores marks between 0 and 40 output is Grade  E
if(marks>=0 && marks<40){
    console.log("E")
}
// if the student scores marks 40 to 49 output is Grade D
if (marks>=40 && marks<=49){
    console.log("D")
}
// if the student scores marks  49 to 59 output is Grade C
if(marks>49 && marks<=59){
    console.log("C")
}
// if the student scores marks 60 to 79 output is Grade B
if(marks>=60 && marks<=79){
    console.log("B")
}
// if the student scores marks 80 to 100 output is Grade A
if(marks>79 && marks<=100){
    console.log("A")
}
// if the input is not between 0 to 100 output invalid input
else{
    console.log("Invalid Input")
}