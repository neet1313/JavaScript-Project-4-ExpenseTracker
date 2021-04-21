//============================ Selectors =============================

var addExpenseButton = document.querySelector(".add-expense-button");
var tableBodyClass = document.querySelector(".table-body-class");
var inputClass = document.querySelector(".input-class");
var dateClass = document.querySelector(".date-class");
var amountClass = document.querySelector(".amount-class");
var tableDivContainer = document.querySelector(".table-div-container");
var button = document.querySelector("button");

//================= addEventListener =============================

addExpenseButton.addEventListener("click", createRow);
tableDivContainer.addEventListener("click", deleteRow);

//========================= Functions ===============================


function createRow(event) {

  for (var i = 0; i < 1; i++) {
    var row = document.createElement("TR");
    row.classList.add("tableRow");
    var cellHead = document.createElement("TH");

    for (var j = 0; j < 4; j++) {
      var column = document.createElement("TD");
      column.classList.add("tableData");

      switch (j) {
        case 0:
          cellHead.contentEditable = true;
          cellHead.appendChild(column); //Making first column as cell head
          cellHead.setAttribute("scope", "row"); //Adding bootstrap scope to row to cell header
          column.remove(); //Removing the table data column as it has been replaced by cell head
          cellHead.innerText = inputClass.value;
          cellHead.classList.add("tableData"); //Giving cellhead the class of tableData
          row.appendChild(cellHead); //Adding Cell Head to the row
          break;

        case 1:
          column.innerText = dateClass.value;
          column.contentEditable = true; //Makes the column editable
          row.appendChild(column); //Adding Column to row on each iteration
          break;

        case 2:
          column.innerText = amountClass.value;
          column.contentEditable = true; //Makes the column editable
          row.appendChild(column); //Adding Column to row on each iteration
          break;

        case 3:
          var trashButton = document.createElement("button");
          trashButton.classList.add("trashButtonClass");
          trashButton.innerHTML = '<i class="fas fa-trash"></i>';
          column.appendChild(trashButton); //Adding Button to table dateClass
          column.classList.add("removeColumnCSS");
          row.appendChild(column);
          break;

        default:
          console.log(event);
      }

    }
  }

  tableBodyClass.appendChild(row); //Adding Row to <tbody> in HTML

  //Clear out All the Inputs
  inputClass.value = "";
  dateClass.value = "";
  amountClass.value = "";

}



//Delete the whole row
function deleteRow(event) {
  let buttonClicked = event.target; //checking when the trash button is clicked

  if (buttonClicked.classList[0] == "trashButtonClass") {
    let row = buttonClicked.parentElement.parentElement; //Trash Button's parent -> Table Data's Parent -> Table Row
    row.classList.add("deleteRowAnimation");

    row.addEventListener("transitionend", () => {
      row.remove(); //Deleting the row class once the transition finishes
    });
  }

}
