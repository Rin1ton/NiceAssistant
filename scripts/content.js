//create new element
var newTestElement = document.createElement("h2");

var newTextNode = document.createTextNode("😎 COOL beginning of row BEANS 😎");
//add text to new element
newTestElement.appendChild(newTextNode);

var div=document.createElement("div");
document.body.appendChild(div);
div.innerText="😎 COOL end of body BEANS 😎";

var listOfSpan = document.querySelectorAll("span");

listOfSpan.forEach(element => {
  var coolestBeans = document.createElement("p");
  coolestBeans.appendChild(document.createTextNode("😎 COOL every span tag BEANS 😎"));
  element.insertAdjacentElement("beforebegin", coolestBeans);
});

var myVeryCoolStatus = document.getElementsByClassName("slds-truncate unavailable-code-state agent-state available-state-color");
myVeryCoolStatus.insertAdjacentElement("beforeend", newTestElement);

//append the element to another element
if (document.getElementsByClassName("row") != null) {
  document.getElementsByClassName("row")[0].insertAdjacentElement("afterbegin", newTestElement);
}

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