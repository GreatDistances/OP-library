const myLibrary = [
  { author: "Author1", title: "Title1", numPages: 111, isAvail: false },
  { author: "Author2", title: "Title2", numPages: 222, isAvail: true },
];

const newBookBtn = document.getElementById("newBookBtn");
newBookBtn.addEventListener("click", addBookToLibrary);

displayTable(myLibrary);


function displayTable(myLibrary) {
    const bookTable = document.createElement("table");
  if (myLibrary.length > 0) {
    const tableContainer = document.getElementById("tableContainer");

    const headerRow = document.createElement("tr");
    const headerRowText = ["Author", "Title", "Pages", "Available"];

    for (let i = 0; i < headerRowText.length; i++) {
      let cell = document.createElement("td");
      cell.innerText = headerRowText[i];
      headerRow.append(cell);
    }
    bookTable.append(headerRow);

    tableContainer.append(bookTable);

    for (i = 0; i < myLibrary.length; i++) {
      const thisBook = document.createElement("tr");
      let cell = document.createElement("td");
      cell.innerText = myLibrary[i].author;
      thisBook.append(cell);
      cell = document.createElement("td");
      cell.innerText = myLibrary[i].title;
      thisBook.append(cell);
      cell = document.createElement("td");
      cell.innerText = myLibrary[i].numPages;
      thisBook.append(cell);
      cell = document.createElement("td");
      cell.innerText = myLibrary[i].isAvail;
      thisBook.append(cell);
      tableContainer.append(thisBook);
    }
  }
}

const newBookDialog = document.getElementById("newBookDialog");
const newBookDialogCancelBtn = document.getElementById(
  "newBookDialogCancelBtn"
);
const submitNewBookBtn = document.getElementById("submitNewBookBtn");

function Book(author, title, numPages) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.isAvail = true;
}

function addBookToLibrary() {
  console.log(myLibrary);
  newBookDialog.showModal();
}

newBookDialogCancelBtn.addEventListener("click", function () {
  newBookDialog.close();
});
