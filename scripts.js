const myLibrary = [
    {
        numCatalog: 998,
        author: "Proust, Marcel",
        title: "Swann's Way",
        numPages: 468,
        hasRead: false,
      },
      {
        numCatalog: 999,
        author: "Blume, Judy",
        title: "Freckle Juice",
        numPages: 64,
        hasRead: true,
      },
];

let nextCatalogNum = 1000;

const newBookBtn = document.getElementById("newBookBtn");
newBookBtn.addEventListener("click", addNewBook);

const noBooksInLibrary = document.createElement("p");
const sectionTwo = document.getElementById("sectionTwo");

displayTable(myLibrary);

function displayTable(myLibrary) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerText = "";

  if (myLibrary.length > 0) {
    noBooksInLibrary.remove();
    for (i = 0; i < myLibrary.length; i++) {
    const thisNumCatalog = myLibrary[i].numCatalog;
      const thisRow = document.createElement("tr");
      thisRow.style.width = "100%";
      thisRow.classList.add("odd:bg-white", "odd:dark:bg-gray-900", "even:bg-gray-50", "even:dark:bg-gray-800", "border-b", "dark:border-gray-700");

      // catalog number column
      let cell = document.createElement("td");
      cell.innerText = myLibrary[i].numCatalog;
      cell.scope = "col";
      cell.classList.add("px-6", "py-3");
      thisRow.append(cell);

      // author column
      cell = document.createElement("td");
      cell.innerText = myLibrary[i].author;
      cell.scope = "col";
      cell.classList.add("px-6", "py-3");
      thisRow.append(cell);

      // title column
      cell = document.createElement("td");
      cell.scope = "col";
      cell.classList.add("px-6", "py-3");
      cell.innerText = myLibrary[i].title;
      thisRow.append(cell);

      // numPages column
      cell = document.createElement("td");
      cell.innerText = myLibrary[i].numPages;
      cell.scope = "col";
      cell.classList.add("px-6", "py-3");
      thisRow.append(cell);

      // hasReadButton column
      cell = document.createElement("td");
      cell.scope = "col";
      cell.classList.add("px-6", "py-3");
      thisRow.append(cell);
      const hasReadButton = document.createElement("button");
      cell.append(hasReadButton);
      myLibrary[i].hasRead ? hasReadButton.classList.add("text-green-600", "border-2", "border-green-600") : hasReadButton.classList.add("text-red-500", "border-2", "border-red-500");
      hasReadButton.classList.add("text-sm", "font-bold", "px-2", "py-1", "rounded");
      hasReadButton.innerText = myLibrary[i].hasRead;
      hasReadButton.addEventListener("click", function () {
        hasRead = hasReadButton.innerText;
        if (hasRead === "true") {
          hasReadButton.innerText = "false";
          hasReadButton.classList.remove("text-green-600", "border-green-600")
          hasReadButton.classList.add("text-red-500", "border-red-500");
        } else if (hasRead === "false") {
          hasReadButton.innerText = "true";
          hasReadButton.classList.remove("text-red-500", "border-red-500")
          hasReadButton.classList.add("text-green-600", "border-green-600");
        }
      });

      // removeButton column
      cell = document.createElement("td");
      cell.scope = "col";
      cell.classList.add("px-6", "py-3");
      thisRow.append(cell);
      removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      removeButton.classList.add("text-sm", "bg-red-600", "text-white", "font-normal", "px-2", "py-1", "rounded");
      cell.append(removeButton);
      removeButton.addEventListener("click", function() {
        const indexToRemove = myLibrary.findIndex(book => book.numCatalog === thisNumCatalog);
        if (indexToRemove !== -1) { 
            myLibrary.splice(indexToRemove, 1); // Remove the book from myLibrary
            displayTable(myLibrary); // Refresh the table display
        }
    });
    tableBody.append(thisRow);
    }
  }
  else {
    noBooksInLibrary.innerText = "NO BOOKS IN LIBRARY";
    noBooksInLibrary.classList.add("text-red-500", "text-2xl", "text-center", "font-bold", "my-10");
    sectionTwo.append(noBooksInLibrary);
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

