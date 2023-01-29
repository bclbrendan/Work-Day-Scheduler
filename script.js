alert("test")
console.log(moment());
var today = moment();
const currentDay = $("#currentDay")
currentDay.text(today.format("D MMM YYYY"));

$('.saveBtn').on('click', function(event){
   // const input = event
    const input = $(this).siblings('.description').val();
    console.log(input)
    //$(this).siblings('.description').text(input);
    localStorage.setItem("9am", input);
}

 )



 var test = localStorage.getItem("9am");
 console.log(test)
