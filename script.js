alert("test")
console.log(moment());
var today = moment();
const currentDay = $("#currentDay")
currentDay.text(today.format("D MMM YYYY"));

$('.saveBtn').on('click', function(event){
   // const input = event
    var input = $(this).siblings('.description').val();
    console.log(input)
}
 )

 var value = $(this).siblings('.description').val();

