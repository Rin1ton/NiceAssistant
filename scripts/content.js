//ADD 😎 TO ALL SPAN ELEMENTS
//ADD 😎 TO ALL SPAN ELEMENTS
//ADD 😎 TO ALL SPAN ELEMENTS
/*
var listOfSpan = document.querySelectorAll("span");
for (let i = 0; i < 1; i++) {
  setTimeout(function() {
    listOfSpan.forEach(element => {
      var coolestBeans = document.createElement("p");
      coolestBeans.appendChild(document.createTextNode("😎"));
      element.insertAdjacentElement("beforebegin", coolestBeans);
    });
  }, 500);
}
*/

// ↓↓↓ CLICKABLE DROPDOWN ↓↓↓
/*<div _ngcontent-gap-c146 ngldropdown class="agent-state-dropdown slds-dropdown-trigger slds-dropdown-trigger_click" aria-expanded="false">*/

for (let i = 0; i < 1; i++) {
  setTimeout(function() {
    listOfSpan.forEach(element => {
      var coolestBeans = document.createElement("p");
      coolestBeans.appendChild(document.createTextNode("😎"));
      element.insertAdjacentElement("beforebegin", coolestBeans);
    });
  }, 500);
}

//click available menu
setTimeout(function() {
  const buttonElem = [...document.querySelectorAll('button')].find(x => 
    x.className.includes('bare slds-button slds-utility-bar__action slds-truncate uiButton') && 
    x.firstElementChild.className.includes('slds-icon-utility-call slds-icon_container'));
  console.log("Trying to click 'Available' menu...:");
  console.log(buttonElem);
  buttonElem.click();
}, 1000);

//ACCEPT BUTTON when case comes in:
//<button _ngcontent-vmr-c124="" class="slds-button slds-button_success accept-button">Accept</button>

//click resume
setTimeout(function() {
  const resumeButton = [...document.querySelectorAll('a')].find(x => x.innerText.includes('Experience and Education'));
  console.log("Going to click:")
  console.log(resumeButton);
  resumeButton.click();
}, 3000);

//click available
setTimeout(function() {
  const realButton = [...document.querySelectorAll('div')].find(x => x.classList.includes('agent-state-dropdown slds-dropdown-trigger slds-dropdown-trigger_click'));
  console.log("Going to click:")
  console.log(realButton);
  realButton.click();
}, 3000);

/*
for (let i = 0; i < 30; i++) {
  setTimeout(function() {
    var niceFace = document.createElement("p");
    niceFace.appendChild(document.createTextNode("😎"))
    buttonElem.insertAdjacentElement("beforebegin", buttonElem);
  }, 500);
}
*/

/*<h1><a href="resume.html">Experience and Education</a></h1>*/

/*const buttonElem = [...document.querySelectorAll('button')].find(x => x.innerText.includes('Voir plus'));
buttonElem.click();*/



const testButton = [...document.querySelectorAll('h1')].find(x => x.innerText.includes('Experience and Education'));
testButton.click();

/*const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}*/