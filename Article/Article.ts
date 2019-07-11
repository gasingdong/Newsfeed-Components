/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
export {}

interface ArticleData {
  title: string;
  date: string;
  firstParagraph: string;
  secondParagraph: string;
  thirdParagraph: string;
}

const data: ArticleData[] = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`,
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`,
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`,
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`,
  },
  {
    title: 'Ninety-Nine Blocks of Code On the Wall',
    date: 'Jun 19th, 2019',
    firstParagraph: `Lorem ipsum non duis adipiscing justo eget fermentum consequat, eget cursus leo elit primis leo suspendisse vivamus, lectus 
          fermentum facilisis justo ornare netus massa iaculis ad arcu lorem suspendisse pulvinar bibendum sem aliquet etiam, diam
          placerat dui nunc lacinia vehicula gravida molestie aliquam duis, lacinia risus gravida etiam praesent metus ultricies etiam
          congue fermentum pharetra hac non fringilla interdum mauris odio phasellus torquent.`,
    secondParagraph: `Lorem ipsum non duis adipiscing justo eget fermentum consequat, eget cursus leo elit primis leo suspendisse vivamus, lectus
          fermentum facilisis justo ornare netus massa iaculis ad arcu lorem suspendisse pulvinar bibendum sem aliquet etiam, diam
          placerat dui nunc lacinia vehicula gravida molestie aliquam duis, lacinia risus gravida etiam praesent metus ultricies etiam
          congue fermentum pharetra hac non fringilla interdum mauris odio phasellus torquent.`,
    thirdParagraph: `Lorem ipsum non duis adipiscing justo eget fermentum consequat, eget cursus leo elit primis leo suspendisse vivamus, lectus
          fermentum facilisis justo ornare netus massa iaculis ad arcu lorem suspendisse pulvinar bibendum sem aliquet etiam, diam
          placerat dui nunc lacinia vehicula gravida molestie aliquam duis, lacinia risus gravida etiam praesent metus ultricies etiam
          congue fermentum pharetra hac non fringilla interdum mauris odio phasellus torquent.`,
  },
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each peice of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible

*/

function createArticle(data: ArticleData) {
  const article: HTMLElement = document.createElement('div');
  const articleTitle: HTMLElement = document.createElement('h2');
  const articleDate: HTMLElement = document.createElement('p');
  const articleContent: HTMLElement[] = [
    data.firstParagraph,
    data.secondParagraph,
    data.thirdParagraph,
  ].map(p => {
    const newPara = document.createElement('p');
    newPara.textContent = p;
    return newPara;
  });
  const articleButton: HTMLElement = document.createElement('span');
  const closeButton: HTMLElement = document.createElement('span');

  /*Add text content*/
  articleTitle.textContent = data.title;
  articleDate.textContent = data.date;
  articleButton.textContent = 'Click to Expand';
  closeButton.textContent = 'Close';

  /*Add classes*/
  article.classList.add('article');
  articleDate.classList.add('date');
  articleButton.classList.add('expand-button');
  closeButton.classList.add('close-button');

  /*Structuring nodes*/
  article.appendChild(articleTitle);
  article.appendChild(closeButton);
  article.appendChild(articleDate);
  articleContent.forEach(c => article.appendChild(c));
  article.appendChild(articleButton);

  /*Event listener*/
  let isOpen: boolean = false;
  let slideAnim: any = TweenMax.to(article, 1, {
    height: '400px',
  }).reverse();

  /*Expand/Contract button*/
  articleButton.addEventListener('click', () => {
    isOpen = !isOpen;
    articleButton.textContent = isOpen ? 'Click to Close' : 'Click to Expand';
    slideAnim.reversed(!slideAnim.reversed());
  });

  /*Close button*/
  closeButton.addEventListener('click', () => {
    article.classList.toggle('article-closed');
  })
  return article;
}

const articles: HTMLElement | null = document.querySelector('.articles');

if (articles) {
  data.forEach(dataItem => {
    articles.appendChild(createArticle(dataItem));
  });
}

/*Adding new articles via form submission*/
interface FormData {
  titles: string[];
  content: string;
  submit: string;
}

const formData: FormData = {
  titles: ['Headline:', 'Date:'],
  content: 'Content',
  submit: 'Add Article',
};

function createForm(data: FormData) {
  const form: HTMLElement = document.createElement('div');
  const formInner: HTMLElement = document.createElement('form');

  /*Form headers minus content box*/
  data.titles.forEach(title => {
    const newTitle = document.createElement('p');
    newTitle.textContent = `${title}`;
    const input = document.createElement('input');
    input.type = 'text';
    formInner.appendChild(newTitle);
    formInner.appendChild(input);
  });

  /*Content box*/
  const formContent: HTMLElement = document.createElement('p');
  formContent.textContent = formData.content;
  const formContentBox: HTMLTextAreaElement = document.createElement('textarea');
  formContentBox.rows = 5;
  formInner.appendChild(formContent);
  formInner.appendChild(formContentBox);

  /*Submission*/
  const input: HTMLInputElement = document.createElement('input');
  input.type = 'submit';
  input.id = 'add-article';
  input.value = data.submit;
  formInner.appendChild(input);

  form.classList.add('form');
  form.appendChild(formInner);
  return form;
}

const formContainer: HTMLElement | null = document.querySelector('.form-container');
if (formContainer) {
  formContainer.appendChild(createForm(formData));
}

/*Link form submission to createArticle*/
const formElement: HTMLFormElement | null = document.querySelector('form');
if (formElement) {
  formElement.addEventListener('submit', event => {
    event.preventDefault();
    const elements: HTMLFormControlsCollection = formElement.elements;
    const text: string[] = (<HTMLInputElement>elements[2]).value.split('\n');
    const article: ArticleData = {
      title: (<HTMLInputElement>elements[0]).value,
      date: (<HTMLInputElement>elements[1]).value,
      /*Workaround for text content that is not exactly three paragraphs*/
      firstParagraph: text[0] ? text[0] : '',
      secondParagraph: text[1] ? text[1] : '',
      thirdParagraph: text[2] ? text[2] : '',
    };
    if(articles) {
      articles.appendChild(createArticle(article));
      formElement.reset();
    }
  })
}
