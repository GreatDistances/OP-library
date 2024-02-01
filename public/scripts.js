const myLibrary = [
    {
        numCatalog: 0,
        author: "Author1",
        title: "Title1",
        numPages: 111,
        hasRead: false,
      },
      {
        numCatalog: 1,
        author: "Author2",
        title: "Title2",
        numPages: 222,
        hasRead: true,
      },
];

let nextCatalogNum = 1000;

const newBookBtn = document.getElementById("newBookBtn");
newBookBtn.addEventListener("click", addNewBook);

displayTable(myLibrary);

function displayTable(myLibrary) {
  const tableContainer = document.getElementById("tableContainer");
  tableContainer.innerText = "";
  const bookTable = document.createElement("table");
  bookTable.style.width = "100%";

  const headerRow = document.createElement("tr");
  const headerRowText = [
    "Catalog No",
    "Author",
    "Title",
    "Pages",
    "Read",
    "Remove",
  ];

  for (let i = 0; i < headerRowText.length; i++) {
    let cell = document.createElement("td");
    cell.innerText = headerRowText[i];
    headerRow.append(cell);
  }
  bookTable.append(headerRow);

  tableContainer.append(bookTable);

  if (myLibrary.length > 0) {
    for (i = 0; i < myLibrary.length; i++) {
    const thisNumCatalog = myLibrary[i].numCatalog;
      const thisRow = document.createElement("tr");
      thisRow.style.width = "100%";

      // catalog number column
      let cell = document.createElement("td");
      cell.innerText = myLibrary[i].numCatalog;
      thisRow.append(cell);

      // author column
      cell = document.createElement("td");
      cell.innerText = myLibrary[i].author;
      thisRow.append(cell);

      // title column
      cell = document.createElement("td");

      cell.innerText = myLibrary[i].title;
      thisRow.append(cell);

      // numPages column
      cell = document.createElement("td");
      cell.innerText = myLibrary[i].numPages;
      thisRow.append(cell);

      // hasReadButton column
      cell = document.createElement("td");
      thisRow.append(cell);
      const hasReadButton = document.createElement("button");
      cell.append(hasReadButton);
      hasReadButton.classList.add("text-sm", "bg-blue-500", "text-white", "font-bold", "px-2", "py-1", "rounded");
      hasReadButton.innerText = myLibrary[i].hasRead;
      hasReadButton.addEventListener("click", function () {
        hasRead = hasReadButton.innerText;
        if (hasRead === "true") {
          hasReadButton.innerText = "false";
        } else if (hasRead === "false") {
          hasReadButton.innerText = "true";
        }
      });

      // removeButton column
      cell = document.createElement("td");
      thisRow.append(cell);
      removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      removeButton.classList.add("text-sm", "bg-red-500", "text-white", "font-bold", "px-2", "py-1", "rounded");
      cell.append(removeButton);
      removeButton.addEventListener("click", function() {
        const indexToRemove = myLibrary.findIndex(book => book.numCatalog === thisNumCatalog);
        if (indexToRemove !== -1) { 
            myLibrary.splice(indexToRemove, 1); // Remove the book from myLibrary
            displayTable(myLibrary); // Refresh the table display
        }
    });
    tableContainer.append(thisRow);
    }
  }
  else {
    const noBooksInLibrary = document.createElement("p");
    noBooksInLibrary.innerText = "NO BOOKS IN LIBRARY";
    tableContainer.append(noBooksInLibrary);
  }
}

const newBookDialog = document.getElementById("newBookDialog");
const newBookDialogCancelBtn = document.getElementById(
  "newBookDialogCancelBtn"
);

function Book(author, title, numPages, hasRead) {
  this.numCatalog = nextCatalogNum;
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.hasRead = hasRead;
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
    const hasRead =
    document.getElementById("newBookForm").elements["hasRead"].checked;
  if (author == "" || title == "" || numPages == "") {
    alert("invalid data");
  } else {
    let book = new Book(author, title, numPages, hasRead);
    myLibrary.push(book);
    displayTable(myLibrary); // refresh the table display to clear old table view
    event.preventDefault;
    nextCatalogNum++;
    document.getElementById("newBookForm").elements["author"].value = ""; // clear field on submit
    document.getElementById("newBookForm").elements["title"].value = ""; // clear field on submit
    document.getElementById("newBookForm").elements["numPages"].value = ""; // clear field on submit
    document.getElementById("newBookForm").elements["hasRead"].checked = false; // clear checkbox on submit
    newBookDialog.close(); // close newBookDialog window
  }
}

newBookDialogCancelBtn.addEventListener("click", function () {
  newBookDialog.close();
});

