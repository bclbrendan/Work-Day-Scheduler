alert("test")
console.log(moment());
var today = moment();
const currentDay = $("#currentDay")
currentDay.text(today.format("D MMM YYYY"));

$('.saveBtn').on('click', function(event){
   // const input = event
    const input = $(this).siblings('.description').val();
    console.log(input)
    //$(this).siblings('.description').text(input); to copy the 
    
    var timeslot =  $(this).siblings('.hour').children('.time-block').text();
    console.log(timeslot)
    localStorage.setItem(timeslot, input);
}

 )



 var test = localStorage.getItem("9am");
 console.log(test)
var test1 = $('#9am').children('.description')
console.log(test1)
$('#9am').children('textarea').text(test)
