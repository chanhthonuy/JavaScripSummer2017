let input = window.document.querySelector('#num')
let button = window.document.querySelector('#btnGenerate')
let div = window.document.querySelector('#wrapper')

button.addEventListener('click', randomGrid);

function randomNumber(min, max) {

    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;

}



function randomGrid() {
    let num = parseInt(input.value, 10)


    let total=0;
    let items = [];
    let str = '';
    str += '<table border="1">';
    for (let row = 0; row < num; row++) {
        items[row] = [];
        str += '<tr>'

        for (let col = 0; col < num; col++) {
            let ranNum = randomNumber(1, 100);
            items[row][col] = ranNum ;
           total+=ranNum;



            let color = "";
            if (ranNum % 3 == 0) {
                color = 'red';
            } else if (ranNum % 2 == 0) {
                color = 'blue';
            }
            str += '<td class="'+color+'">' + items[row][col] + '</td>';


        }
        
        


        str += '</tr>'
    }
    str += '</table>';

total=total/(num*num);

 str += "<p>The average is " 
 str += total
 str += "</p>"; 


    div.innerHTML = str
}

