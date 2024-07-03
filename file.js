// Declare variables to store g(x, y) function, o1, o2, and radius
let gFunction = '';
let o1Value = '';
let o2Value = '';
let radiusValue = '';

// Function to set values for o1, o2, radius, κ, ν1(x, y), ν2(x, y), γ(x, y), f(x, y), and g(x, y)
function setValues() {
    var o1Input = document.getElementById('o1');
    var o2Input = document.getElementById('o2');
    var radiusInput = document.getElementById('radius');
    var kappaInput = document.getElementById('kappa');
    var nu1Input = document.getElementById('nu1');
    var nu2Input = document.getElementById('nu2');
    var gammaInput = document.getElementById('gamma');
    var fInput = document.getElementById('functionF');
    var gInput = document.getElementById('functionG');
    var NInput = document.getElementById('degreeN');

    // Store values in variables
    o1Value = o1Input.value;
    o2Value = o2Input.value;
    radiusValue = radiusInput.value;
    kappaFunction = kappaInput.value;
    nu1Function = nu1Input.value;
    nu2Function = nu2Input.value;
    gammaFunction = gammaInput.value;
    fFunction = fInput.value;
    gFunction = gInput.value;
    N = NInput.value;
}

// Attach input event to setValues function for each input field
document.getElementById('o1').addEventListener('input', setValues);
document.getElementById('o2').addEventListener('input', setValues);
document.getElementById('radius').addEventListener('input', setValues);
document.getElementById('kappa').addEventListener('input', setValues);
document.getElementById('nu1').addEventListener('input', setValues);
document.getElementById('nu2').addEventListener('input', setValues);
document.getElementById('gamma').addEventListener('input', setValues);
document.getElementById('functionF').addEventListener('input', setValues);
document.getElementById('functionG').addEventListener('input', setValues);
document.getElementById('degreeN').addEventListener('input', setValues);

// Function to handle solving the equation
function solveEquation() {
    // Add your equation solving logic here
    console.log('Equation solving logic goes here!');
}


// Get both radio buttons and the input field for g
const drichleGRadio = document.getElementById('drichleG');
const numeralGRadio = document.getElementById('numeralG');
const functionGInput = document.getElementById('functionG');

// Add event listener to radio buttons for g
drichleGRadio.addEventListener('change', function() {
    if (this.checked) {
        functionGInput.value = '';
    }
});

numeralGRadio.addEventListener('change', function() {
    if (this.checked) {
        functionGInput.value = '';
    }
});

// Function to get the value of g and its type
function getGValue() {
    const gValue = functionGInput.value;
    const gType = drichleGRadio.checked ? 'drichle' : 'numeral';
    
    return { value: gValue, type: gType };
}
