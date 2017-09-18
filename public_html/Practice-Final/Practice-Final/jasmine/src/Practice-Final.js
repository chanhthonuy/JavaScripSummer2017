/**
 * The function returns a JSON object with name and id.
 * name should be "John Doe"
 * id should be "0123456789"
 * 
 * @return {object} JSON
 */

function returnJSON() {

 var people ={id:"0123456789", name:"John Doe"}
 
return people;
}

/**
 * Given the input <input type="text" name="fullname" /> put a value of your choosing.
 * 
 * @return {String} The value
 */

function insertValueIntoInput(){
      let inputField = document.querySelector('input[name=fullname]')
      inputField.value = "field"
      return "field"
}

/**
     * Given the input <input type="text" name="fullname" /> put a class name of your choosing.
 * 
 * @return {String} The value
 */
function insertClassNameIntoInput(){
    let inputField = document.querySelector('input[name=fullname]')
    inputField.className = "field"
    return "field"

}

/**
 * Given the HTML <button>Click ME</button> 
 * When the click the button it should add a paragraph tag to the page
 * 
 * @return {void}
 */
function buttonEvent(){
if ( inputField.value.length ) {
        
        people.classList.remove('error');
        let result = '<p>' + inputField.value + '</p>';
        divToAdd.innerHTML += result;
        
        inputField.value='';
        
     } else {
        people.classList.add('error'); 
     }

}



/**
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
     
    
}


