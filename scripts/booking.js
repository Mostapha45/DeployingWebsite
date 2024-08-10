/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// we first create variables for the daily rate, and the day counter as well as total cost 
let dailyRate = 35; 
let dayCounter = 0; 
let totalCost = 0;

// these are the elements that will be on the screen such as the days, buttons and half day and full day.
const dayButtons = document.querySelectorAll('.day-selector li'); 
const clearButton = document.querySelector('#clear-button');
const halfDayButton = document.querySelector('#half');
const fullDayButton = document.querySelector('#full');
const calculatedCostElement = document.querySelector('#calculated-cost');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

//here we used the clicked class which we defined in our css style sheet in order to update the colour once the day is clicked using a loop we go over each button in the daybuttons container, we then listen for a click event from any button,
// which we then execute a function that checks if the button already has the class clicked which means it has been selected otherwise it checks if it doesnt, if it doesn't have the class it will add it which will higlight it yellow and then increment the daycounter variable which will in return update the total cost. Although if it does have the clicked class assigned already the code will remove the clicked class and remove the highlight of the day.
dayButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            dayCounter++;
        } else {
            button.classList.remove('clicked');
            dayCounter--;
        }
        recalculateTotalCost();
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// here we clear all the days by removing the clicked class from each button in the list and we reset day counter to 0 therefore the total cost will show the value of no days.
clearButton.addEventListener('click', function() {
    dayButtons.forEach(function(button) {
        button.classList.remove('clicked');
    });
    dayCounter = 0;
    recalculateTotalCost();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// here we are changing the rate of a day in order to ensure it is only charging for half, we set the cost to 20 to reflect a half day and then the "half" button will be selected
// in order to visually display to the user their choice, we then remove the clicked class from the full day button and recalculate the cost with the updated daily rate.
halfDayButton.addEventListener('click', function() {
    dailyRate = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    recalculateTotalCost();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

// here we set the full day button to wait for a click and then once it is clicked, we reset the daily rate variable to 35 dollars and then add the full day button to the clicked class which will then highlight it, 
// and we then remove the half day button which no longer highlits it and recalculate the total cost
fullDayButton.addEventListener('click', function() {
    dailyRate = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    recalculateTotalCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


// here we define the recalculate total cost function which we call in multiple sections, 
// this creates the total cost variable which is the days x the rate of the day it then sets the innerHTML if calculatedCostElement to the total cost and reflects the changes back to the user.
function recalculateTotalCost() {
    totalCost = dayCounter * dailyRate;
    calculatedCostElement.innerHTML = totalCost;
}

