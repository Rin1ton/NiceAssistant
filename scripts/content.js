//create new element
/*var newTestElement = document.createElement("h2");

var newTextNode = document.createTextNode("😎 COOL beginning of row BEANS 😎");
//add text to new element
newTestElement.appendChild(newTextNode);*/

/*var div=document.createElement("div");
document.body.appendChild(div);
div.innerText="😎 COOL end of body BEANS 😎";*/

var listOfSpan = document.querySelectorAll("span");

listOfSpan.forEach(element => {
  var coolestBeans = document.createElement("p");
  coolestBeans.appendChild(document.createTextNode("😎"));
  element.insertAdjacentElement("beforebegin", coolestBeans);
});

// ↓↓↓ CLICKABLE DROPDOWN ↓↓↓
/*<div _ngcontent-gap-c146 ngldropdown class="agent-state-dropdown slds-dropdown-trigger slds-dropdown-trigger_click" aria-expanded="false">*/

setTimeout(function() {
  const buttonElem = [...document.querySelectorAll('a')].find(x => x.innerText.includes('Experience and Education'));
  console.log("Going to click:")
  console.log(buttonElem);
  buttonElem.click();
}, 3000);

const buttonElem = [...document.querySelectorAll('div')].find(x => x.className.includes('slds-dropdown-trigger slds-dropdown-trigger_click'));
console.log("Trying to click 'Available' dropdown...");
buttonElem.click();

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