
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
    
    $("#yes").click(daysGreen);
    $("#no").click(daysRed);
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth() + 1, 0).getDate();
}


function showCalendar(mth, yr) {

    let firstDayOfMonth = `${mth}/1/${yr}`;
    let d = new Date(firstDayOfMonth);
    let numberOfDaysInMonth = daysInMonth(d);
    let firstDayOfWeek = d.getDay();
    let space = 0; //acount for day space before first day of the month

    /* this is where you'll generate the grid, for now I will just show first day of week */
    let str = '<ul>';
    str += `<li>Number of days in the month: ${numberOfDaysInMonth++} </li>`;
    str += `<li>First day of the week: ${firstDayOfWeek} (${daysOfTheWeek[firstDayOfWeek]})</li>`;
    str += '</ul>';

    str += '<div class="row">';

    for (let day = 1; day < numberOfDaysInMonth + space; day++) {
        if (day > firstDayOfWeek) {
            str += '<div class="day">'
            str += (day - firstDayOfWeek)
            str += '</div>'

        } else {
            str += '<div class="day"></div>';
            space++;
        }

        if (day == 7 || day == 14 || day == 21 || day == 28) {
            str += '</div>'
            str += '<div class="row">'
        }

    }
    str += '</div>'

    $('#results').html(str);

    $(".day").click(checkDiv);
}
function checkDiv() {
    let color = $(this).css('background-color')
    if ( color == "rgba(0, 0, 0, 0)")   //if the color is plain (white)
    {
        $(this).css('background-color', 'green');
    } 
    else if (color == "rgb(0, 128, 0)")
    {
       $(this).css('background-color', 'red');
    }
    else if (color == "rgb(255, 0, 0)"){
        $(this).css('background-color', 'transparent');
    }
    
    console.log(color);

}

function daysGreen(){
    $(".day").css('background-color', 'green');
}

function daysRed(){
    $(".day").css('background-color', 'red');
}


//function checkDiv(obj) {
//  
//  if ($(this).css('background-color') == "rgb(0, 0, 0, 0)")   //if the color is plain (white)
//{
//$(this).css('background-color', '*****');
//}
//  else if ($(this).css('background-color') == "************* ")
//  {
//*******************************************
//  }
//else
//{
//            ******************************************
//}
// 
//        }

// function checkDiv() {
//            //if(background-color == "")               
//          $( this ).css( "background-color", 'green');
//        let color = $( this ).css( "background-color" );
//           //$( "#result" ).html;
//          console.log(color);
//        }

