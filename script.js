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


var test3 = $('body').children('.container')
console.log(test3)

test3.each(function(index){
//var hour1 = $('body').children('.container')[index].children('.row').children('.hour').children('time-block').text
var hour1 = test3.children.children.text()
//.children('.row').children('.hour')
console.log(hour1);

})