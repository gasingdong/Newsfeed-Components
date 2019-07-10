const formData = {
  titles: ['Headline:', 'Date:'],
  content: 'Content',
  submit: 'Add Article',
};

function createForm(data) {
  const form = document.createElement('div');
  const formInner = document.createElement('form');

  /*Form headers minus content box*/
  const formTitles = data.titles.map(title => {
    const newTitle = document.createElement('p');
    newTitle.textContent = `${title}`;
    const input = document.createElement('input');
    input.type = 'text';
    formInner.appendChild(newTitle);
    formInner.appendChild(input);
    return newTitle;
  });

  /*Content box*/
  const formContent = document.createElement('p');
  formContent.textContent = formData.content;
  const formContentBox = document.createElement('textarea');
  formContentBox.rows = '5';
  formInner.appendChild(formContent);
  formInner.appendChild(formContentBox);

  /*Submission*/
  const input = document.createElement('input');
  input.type = 'submit';
  input.id = 'add-article';
  input.value = data.submit;
  formInner.appendChild(input);

  form.classList.add('form');
  form.appendChild(formInner);
  return form;
}

const formContainer = document.querySelector('.form-container');
formContainer.appendChild(createForm(formData));

/*Link form submission to createArticle*/
const formElement = document.querySelector('form');
formElement.addEventListener('submit', event => {
  event.preventDefault();
  const elements = formElement.elements;
  const text = elements[2].value.split('\n');
  const article = {
    title: elements[0].value,
    date: elements[1].value,
    /*Workaround for text content that is not exactly three paragraphs*/
    firstParagraph: text[0] ? text[0] : '',
    secondParagraph: text[1] ? text[1] : '',
    thirdParagraph: text[2] ? text[2] : '',
  };
  document.querySelector('.articles').appendChild(createArticle(article));
  formElement.reset();
})
