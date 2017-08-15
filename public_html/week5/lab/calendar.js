
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var days = [];

$(document).ready(function () {

    let d = new Date();
    let mth = d.getMonth() + 1;
    let yr = d.getFullYear();

    $('#month').val(mth);
    $('#year').val(yr);
    showCalendar(mth, yr);

    $('#month,#year').change(function (e) {
        showCalendar($('#month').val(), $('#year').val());
    });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth() + 1, 0).getDate();
}


function showCalendar(mth, yr) {

    let firstDayOfMonth = `${mth}/1/${yr}`;
    let d = new Date(firstDayOfMonth);
    let numberOfDaysInMonth = daysInMonth(d);
    let firstDayOfWeek = d.getDay();

    /* this is where you'll generate the grid, for now I will just show first day of week */
    let str = '<ul>';
    str += `<li>Number of days in the month: ${numberOfDaysInMonth++} </li>`;
    str += `<li>First day of the week: ${firstDayOfWeek} (${daysOfTheWeek[firstDayOfWeek]})</li>`;
    str += '</ul>';

    str += '<div class="row">';    
    
    for (let day = 1; day < numberOfDaysInMonth; day++) {
        if (day > firstDayOfWeek) {
            
            
            str += '<div class="day">'
            str += (day-firstDayOfWeek)  
           
            str += '</div>'
        } else {
            str += '<div class="day"></div>'
                     
        }
        if (day == 7 || day == 14 || day == 21 || day == 28){
            str += '</div>'
            str +='<div class="row">'
        } 
             
        
        
    }
str += '</div>'

    $('#results').html(str);



}


