
function nameSandbox() {
    let el, p;

    beforeEach(function () {
        el = document.createElement('div');
        el.id = 'main'
        el.classList.add('divSandbox');
        p = document.createElement('p');
        p.id = 'nameSandbox'
        p.classList.add('yourname');
        el.appendChild(p);
        document.body.appendChild(el);
    });

    afterEach(function () {
        document.body.removeChild(el);
        el = p = null;
    });

}

function inputSandbox(val, className) {
    let el;

    beforeEach(function () {
        el = document.createElement('input');
        if ( className )
            el.classList.add(className);
        el.name = 'email';
        el.value = val;
        el.id = 'inputSandbox';
        document.body.appendChild(el);
    });


    afterEach(function () {
        document.body.removeChild(el);
        el = null;
    });

}

function sandboxElement(tag) {
    let el;

    beforeEach(function () {
        el = document.createElement(tag);
        el.id = 'sandboxElement';
        document.body.appendChild(el);
    });


    afterEach(function () {
        document.body.removeChild(el);
        el = null;
    });

}


describe("Function studentInfo", function () {

    it('should have a string value for frist name', function () {
        let result = studentInfo();
        expect(result.first).toBeDefined();
        expect(result.first.length).toBeTruthy();
        expect(typeof(result.first)).toEqual('string');
    });
    
    it('should have a string value for last name', function () {
        let result = studentInfo();
        expect(result.last).toBeDefined();
        expect(result.last.length).toBeTruthy();
        expect(typeof(result.last)).toEqual('string');
    });
    
    it('should have a number value for id', function () {
        let result = studentInfo();
        expect(result.id).toBeDefined();
        expect(result.id).toBeGreaterThan(0);
        expect(typeof(result.id)).toEqual('number');
    });

});

describe("Function insertNameIntoDom", function () {

    nameSandbox();

    it('should have a custom name in the paragragh tag', function () { 
        let result = insertNameIntoDom()
        let p = document.querySelector('#nameSandbox');
        expect(p.innerHTML).toEqual(result);
    });

});

describe("Function randomArray", function () {

    it('should have an array size between 10 and 20', function () {
        let i = 200;
        while (i--) {
            let result = randomArray();            
            expect(result.length).toBeGreaterThan(9);
            expect(result.length).toBeLessThan(21);
            if ( result.length < 10 || result.length > 20) {
                console.log('Bad length found for randomArray', result.length);
                i = 0;
            }
        }
    });
    
    it('should have an array with all numeric values', function () {        
        let result = randomArray();            
        expect(result.every(element => typeof(element) === 'number')).toEqual(true);
    });
    
});

describe("Function stringRepeat", function () {

    it('should repeat "hello" five times to become hellohellohellohellohello', function () {
        let result = stringRepeat('hello', 5);
        expect(result).toEqual('hellohellohellohellohello');
    });

    it('should repeat "world" three times to become worldworldworld', function () {
        let result = stringRepeat('world', 3);
        expect(result).toEqual('worldworldworld');
    });


});

describe("Function validateInputField = Valid", function () {

    inputSandbox('testing', 'error');

    it('should remove the "error" class with a valid input', function () {
        validateInputField();
        let input = document.querySelector('#inputSandbox');
        expect(input.classList.contains('error')).toEqual(false);
    });

});

describe("Function validateInputField = Invalid", function () {

    inputSandbox('');

    it('should add the "error" class with a valid input', function () {
        validateInputField();
        let input = document.querySelector('#inputSandbox');
        expect(input.classList.contains('error')).toEqual(true);
    });

});

describe("Function colorClickRed", function () {

    nameSandbox();

    it('should change the color red to the div only when clicked on', function () {
        colorClickRed();
        let div = document.querySelector('.divSandbox');
        expect(div.style.color).toEqual('');
        let event = new Event('click');
        div.dispatchEvent(event);
        expect(div.style.color).toEqual('red');
    });

});

describe("Function largestNumberOfFourArrays", function () {

    it('should find the number 10', function () {
        let test = [[1, 2, 3, 4], [4, 5, 6, 7], [8, 9, 0, 1], [10, 9, 8, 7]];
        let result = largestNumberOfFourArrays(test);
        expect(result).toEqual(10);
    });

    it('should find the number 100', function () {
        let test = [[10, 20, 30, 40], [100, 50, 60, 70], [80, 90, 0, 10], [4, 90, 80, 70]];
        let result = largestNumberOfFourArrays(test);
        expect(result).toEqual(100);
    });

});


