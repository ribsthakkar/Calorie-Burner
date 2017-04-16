$(function(){
 $('#calorieAmount').click(function(){
   var calories = $('#amount').val();
   calories = parseInt(calories);
   var bikeTime = Math.round(calories/11);
   var runTime = Math.round(calories/17);
   var swimTime = Math.round(calories/14);

    $('#bike').text('Biking Minutes: ' + bikeTime.toString() );
    $('#run').text('Running Minutes: ' + runTime.toString() );
    $('#swim').text('Swimming Minutes: ' + swimTime.toString() );

});
});
