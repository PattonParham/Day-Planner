
var TenAM = $("#Ten");
var ElevenAM = $("Eleven");
var TwelveAM = $("#Twelve");
var OnePM = $("#One");
var TwoPM = $("#Two");
var ThreePM = $("#Three");
var FourPM = $("#Four");
var FivePM = $("#Five");


console.log(moment().hours())
console.log(moment().date())
//Current Date displayed. Use Date.getTime() to figure this out - scratch that
//getFullYear(), getMonth(), getDate() are what I want to use
//This should #%&*ing work, idk why it doesn't:
$("#date").text((moment().month()) + 1 + "/" + (moment().date()) + "/" + (moment().year()))
//$("#date").text = (Day.getMonth()) + "/" + (Day.getDate()) + "/" + (Day.getFullYear());
//document.getElementById("date").innerHTML = (Day.getMonth() + 1) + "/" + (Day.getDate()) + "/" + (Day.getFullYear());

//console.log(Day)
function styleTextBox() {

var currentHours = moment().hours();

$(".text").each(function(){

var time =  $(this).attr("data-time")


if (time < currentHours){
    $(this).css("background-color", "grey");
}
if (time = currentHours){
    $(this).css("background-color", "red");
}
  
if (time = currentHours){
    $(this).css("background-color", "green");
}


})
}

//Function inputSubmit so that when the user types a string into the input 
//field for each time block it is displayed exactly as typed in the 
//correlatory display field
//will use keydown for "enter" as an event to start the function
//function inputSubmit(){
//var Nine = $("#Nine")
 //Nine.innerHTML = NineAM.onclick.Enter;
 //Nine.text(NineAM);

//}
$(".btn-primary").on("click", function(){
console.log($(this))
var key = $(this).attr("id");
console.log(key)
var value = $(this).parent().siblings(".text").val()
console.log(value)
localStorage.setItem(key, value);

})
 

$("#Ten").val(localStorage.getItem("10am"))
$("#Nine").val(localStorage.getItem("9am"))
$("#Eleven").val(localStorage.getItem("11am"))
$("#Twelve").val(localStorage.getItem("12pm"))
$("#One").val(localStorage.getItem("1pm"))
$("#Two").val(localStorage.getItem("2pm"))
$("#Three").val(localStorage.getItem("3pm"))
$("#Four").val(localStorage.getItem("4pm"))
$("#Five").val(localStorage.getItem("5pm"))














//Function Save to "save" the display data in the local storage, so that 
//when the page is refreshed, the display data (text from input data diplayed)
//will remain in each block



//var btnNueve = $("#nueve");
//btnNueve.click(function(){
   // var NineAM = $("#Nine");
//jQuery.data(NineAM.html);
//var valueNine;
//Nine = NineAM.text;
//switch ((btnNueve).index(this)){
//case 0:
//valueNine = $.data(Nine);
//});
//NineAM.text(valueNine);


//localStorage.setitem("9am","...")


