import { addMonths, format, fromUnixTime, getUnixTime } from 'date-fns';

const datePickerButton = document.querySelector('.date-picker-button');
const datePicker = document.querySelector('.date-picker');
const datePickerHeaderText = document.querySelector('.current-month');
const prevMonthButton = document.querySelector('.prev-month-button');
const nextMonthButton = document.querySelector('.next-month-button');

datePickerButton.addEventListener('click', () => {
  datePicker.classList.toggle('show');
  const selectedDate = fromUnixTime(datePickerButton.dataset.selectedDate);
  setupDatePicker(selectedDate);
});

function setDate(date) {
  datePickerButton.innerText = format(date, 'MMMM do, yyyy');
  datePickerButton.dataset.selectedDate = getUnixTime(date);
}

function setupDatePicker(selectedDate) {
  datePickerHeaderText.innerText = format(selectedDate, 'MMMM - yyyy');
  setupMonthButtons(selectedDate);
}

function setupMonthButtons(selectedDate) {
  nextMonthButton.addEventListener(
    'click',
    () => {
      console.log('clicked');

      setupDatePicker(addMonths(selectedDate, 1));
    },
    { once: true }
  );
}

setDate(new Date());
