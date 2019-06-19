// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());

    //Close button
    this.closeButton = this.domElement.querySelector('.closeButton');
    this.closeButton.textContent = 'Close';
    this.closeButton.addEventListener('click', () => this.closeArticle());

    this.isOpen = false;
    this.slideAnim = TweenMax.to(this.domElement, 1, {
      height: '400px',
    }).reverse();
  }

  closeArticle() {
    // Deletes the article from the page
    this.domElement.classList.toggle('article-closed');
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // With the animation, we don't need to toggle this anymore
    // this.domElement.classList.toggle('article-open');
    this.isOpen = !this.isOpen;
    this.expandButton.textContent = this.isOpen
      ? 'Click to Close'
      : 'Click to Expand';
    this.slideAnim.reversed(!this.slideAnim.reversed());
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));

// Function to build new articles and add them to the site
function buildArticle(headlineIn, dateIn, ...text) {
  const div = document.createElement('div');
  div.classList.add('article');
  const headline = document.createElement('h2');
  headline.textContent = headlineIn;
  div.appendChild(headline);
  const close = document.createElement('span');
  close.classList.add('closeButton');
  div.appendChild(close);
  const date = document.createElement('p');
  date.textContent = dateIn;
  date.classList.add('date');
  div.appendChild(date);
  text.forEach(element => {
    const paragraph = document.createElement('p');
    paragraph.textContent = element;
    div.appendChild(paragraph);
  });
  const expand = document.createElement('span');
  expand.classList.add('expandButton');
  div.appendChild(expand);
  document.querySelector('.articles').appendChild(div);
  new Article(div);
}

// Link form submission to build article logic
const form = document.querySelector('form');
form.addEventListener('submit', event => {
  // Prevent submission from reloading page
  event.preventDefault();
  const elements = form.elements;
  const headline = elements[0].value;
  const date = elements[1].value;

  // Pass text as an array to account for paragraph formation
  const text = elements[2].value.split('\n');
  buildArticle(headline, date, ...text);
  form.reset();
});
