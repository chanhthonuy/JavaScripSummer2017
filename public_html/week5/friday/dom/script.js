
//We need to validate the form to ensure the fields have the correct input.

//Name must have a min length of 5 characters and a space 
let fullname = document.querySelector('input[name="fullname"]');
let button = document.querySelector('button');
let zipcode = document.querySelector('input[name="zip"]');

let spanErrFullname = document.querySelector('.fullname')
let spanErrZip = document.querySelector('.zip')

button.addEventListener('click', checkInput)

let rawData = []

function checkInput() {
  let  validation = true
    if (fullname.value.length < 5 || fullname.value.indexOf(' ') === -1) {
        spanErrFullname.innerHTML = 'Full Name is not valid'
        validation = false;
    } else {
        spanErrFullname.innerHTML = 'Full Name is Valid'
        
    }

    if (zipcode.value.length !== 5) {
        spanErrZip.innerHTML = 'Zipcode is not valid'
        validation = false;
    } else {
        spanErrZip.innerHTML = 'Zipcode is valid'
    }    


    if(validation === true) { 
        rawData.push({
            "fullname": fullname.value,
            "zipcode": zipcode.value,
        })

        document.querySelector('textarea').value = JSON.stringify(rawData)

        let str = '';

        str += '<table border="1">';
        str += '<thead><tr><th>full Name</th><th>ZIP Code</th></tr></thead>';
        for (let i = 0; i < rawData.length; i++) {
            str += `<tr><td>${rawData[i].fullname}</td><td>${rawData[i].zipcode}</td></tr>`      
        }
        str += '</table>';

        document.querySelector('.table').innerHTML = str
    }
    
}


//Zip must be 5 characters in length


//If any fields have an error please display an error message.


//Error message should be removed if resubmitted and valid

// All entries should be displayed below the form.

//We would like the Raw data to be displayed in a JSON format. No formatting is needed 





/*
 * What you need to know to complete this:
 * 
 * Selecting DOM elements on the page.
 * Creating and using functions.
 * Adding an event listener
 * Getting value data from a input form
 * saving data as an array of JSON objects
 * Loop through an array of JSON objects
 * Adding and Removing HTML from a page
 * 
 */


