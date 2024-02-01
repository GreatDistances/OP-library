const myLibrary = [
  { author: "Author1", title: "Title1", numPages: 111, isAvail: false },
  { author: "Author2", title: "Title2", numPages: 222, isAvail: true },
];

const newBookBtn = document.getElementById("newBookBtn");
newBookBtn.addEventListener("click", addNewBook);

displayTable(myLibrary);

function displayTable(myLibrary) {
  const tableContainer = document.getElementById("tableContainer");
  tableContainer.innerText = "";
  const bookTable = document.createElement("table");

  const headerRow = document.createElement("tr");
  const headerRowText = ["Author", "Title", "Pages", "Available"];

  for (let i = 0; i < headerRowText.length; i++) {
    let cell = document.createElement("td");
    cell.innerText = headerRowText[i];
    headerRow.append(cell);
  }
  bookTable.append(headerRow);

  tableContainer.append(bookTable);

  if (myLibrary.length > 0) {
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

function Book(author, title, numPages) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.isAvail = true;
}

function addNewBook() {
  newBookDialog.showModal();
}

const submitNewBookBtn = document.getElementById("submitNewBookBtn");
submitNewBookBtn.addEventListener("click", submitNewBook);

function submitNewBook(event) {
  const author =
    document.getElementById("newBookForm").elements["author"].value;
  const title = document.getElementById("newBookForm").elements["title"].value;
  const numPages =
    document.getElementById("newBookForm").elements["numPages"].value;
    if (author == "" || title == "" || numPages == "") {
        alert("invalid data");
    } else {
  let book = new Book(author, title, numPages);
  myLibrary.push(book);
  displayTable(myLibrary); // refresh the table display to clear old table view
  event.preventDefault;
  document.getElementById("newBookForm").elements["author"].value = ""; // clear field on submit
  document.getElementById("newBookForm").elements["title"].value = ""; // clear field on submit
  document.getElementById("newBookForm").elements["numPages"].value = ""; // clear field on submit
  newBookDialog.close(); // close newBookDialog window
    }
}

newBookDialogCancelBtn.addEventListener("click", function () {
  newBookDialog.close();
});
