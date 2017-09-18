/*
 * Please put your name here
 * Name:Chan Uy
*/


/** Points: 10
 * Write JavaScript code that creates a JavaScript object 
 * with properties for first and last name as well as student id. 
 * For the values, use your own name and student id.
 * first and last must be a type of string
 * id must be a type of number
 * 
 * @return {object} JSON
 */
function studentInfo() {
    var info ={id:001379661, Fname:"Chan", Lname:"Uy"}
     //var info FName = "Chan";
     //var LName = "Uy"
     //var id = 001379661;
            
return info;

}


/** Points: 10
 * Given the html <div id="main"><p class="yourname"></p></div> 
 * put your name in the paragragh and return your name.
 * 
 * @return {String} Your Name
 */
function insertNameIntoDom(){
     let name = document.querySelector('input[name=fullname]')
      inputField.class = "Chan"
      return "Chan"
    
}


/** Points: 20
 * Create a loop that will populate an array with random numbers.
 * The array size should be a random number between 10 and 20.
 * 
 * @return {array}
 */
function randomArray(min, max){
    let num = parseInt(input.value, 10)


    let total=0;
    let items = [];
    let str = '';
    str += '<table border="1">';
    for (let row = 0; row < num; row++) {
        items[row] = [];
        str += '<tr>'

        for (let col = 0; col < num; col++) {
            let ranNum = randomNumber(10, 20);
            items[row][col] = ranNum ;
           total+=ranNum;

        }
        
        str += '</tr>'
    }
    str += '</table>';
return Math.floor(Math.random() * (20 - 10 + 1)) + 1;
}


/** Points: 20
 * The function returns the string repeated the number of times specified.
 * @param {String} str 
 * @param {Number} times 
 * 
 * @return {String} strRepeated
 */
function stringRepeat(str, times) {
  
}


/** Points: 20
 * Given the html <input type="text" name="email" />
 * The function will check the value of a field.  
 * If it is empty add the class "error" to the field
 * if it is not empty remove the class error from the field.
 * 
 * @return {VOID}
 */
function validateInputField() {
     let  validation = true
    if (email.value.length < 5 || email.value.indexOf(' ') === -1) {
        spanErrEmail.innerHTML = 'email is not valid'
        validation = false;
    } else {
        spanErrEmail.innerHTML = 'email is Valid'
        
    }

    if(validation === true) { 
        rawData.push({
            "fullname": fullname.value
            
        })

        document.querySelector('textarea').value = JSON.stringify(rawData)

        let str = '';

        str += '<table border="1">';
        str += '<thead><tr><th>email</th><th>ZIP Code</th></tr></thead>';
        for (let i = 0; i < rawData.length; i++) {
            str += `<tr><td>${rawData[i].email}</td>`      
        }
        str += '</table>';

        document.querySelector('.table').innerHTML = str
    }
}


/** Points: 20
 * Given the html <div id="main"><p class="yourname"></p></div>
 * When the div is clicked on 
 * the style property color is changed to red 
 * 
 * @return {VOID}
 */
function colorClickRed() {
    
    $(this).css("background-color", "red");
}


/** Points: 10
 * Check an array matrix of 4x4 to return the largest number found.
 * example of the array
 * [[1, 2, 3, 4], [4, 5, 6, 7], [8, 9, 0, 1], [10, 9, 8, 7]]
 * and 
 * [[10, 20, 30, 40], [100, 50, 60, 70], [80, 90, 0, 10], [4, 90, 80, 70]]
 * 
 * @param {Array} arr 
 * 
 * @return {Number} largest
 */
function largestNumberOfFourArrays(arr){
         
    let largestNumber = [[1, 2, 3, 4], [4, 5, 6, 7], [8, 9, 0, 1], [10, 9, 8, 7], 
                        [10, 20, 30, 40], [100, 50, 60, 70], [80, 90, 0, 10], [4, 90, 80, 70]];
                    
    let str = '';
    str += '<table border="1">';
    for (let row = 0; row < 4; row++) {
        largestNumber[row] = []
        str += '<tr>'

        for (let col = 0; col < 4; col++) {           
            largestNumber[row][col] = [] ;
         
        }
         if(arr[row][col] > largestNumber[col]) {         
          largestNumber[col] = arr[col][row];
        }
         return largestNumber;
    }

    
}
