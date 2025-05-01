/*/ menu-highlighter.js

// This function returns the current file name from the URL
function currentFile() {
    // Step 1: Get the current URL
    var currentURL = window.location.href;

    // Step 2: Find the index of the last slash "/"
    var fileNameIndex = currentURL.lastIndexOf("/") + 1;

    // Step 3: Extract the file name from the URL
    var currentFileName = currentURL.substr(fileNameIndex);

    return currentFileName;
}

// Store the current file name
var thisFile = currentFile();

// Step 4: If there's no filename (user is at a directory), assume index.html
if (thisFile === "") {
    thisFile = "index.html";
}

// Step 5: Highlight the appropriate menu item
$("nav a").each(function() {
    // Check if the href matches the current file
    if (this.href.indexOf(thisFile) > 0) {
        $(this).addClass("is-current");
    }
});


// menu-highlighter.js
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop(); // Get current filename
  const navLinks = document.querySelectorAll(".main-menu a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href.includes(currentPath)) {
      link.classList.add("is-current");
    } else {
      link.classList.remove("is-current");
    }
  });
});
*/