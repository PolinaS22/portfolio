const btnEng = document.querySelector(".btnEng");
const btnRu = document.querySelector(".btnRu");

const aboutNav = document.querySelector("#aboutNav");
const projectNav = document.querySelector("#projectNav");
const certificateNav = document.querySelector("#certificateNav");
const contactNav = document.querySelector("#contactNav");

const aboutHead = document.querySelector("#aboutHead");
const projectHead = document.querySelector("#projectHead");
const certificateHead = document.querySelector("#certificateHead");
const contactHead = document.querySelector("#contactHead");


const quoteOne = document.querySelector("#quoteOne");
const quoteTwo = document.querySelector("#quoteTwo");
const quoteThree = document.querySelector("#quoteThree");
const quoteFour = document.querySelector("#quoteFour");

const subtext = document.querySelector(".subtext");
const highlight = document.querySelector(".highlight");
const aboutOne = document.querySelector("#aboutOne");
const aboutTwo = document.querySelector("#aboutTwo");
const aboutThree = document.querySelector("#aboutThree");

// const btnSkills = document.querySelector("#btnSkills");
// const btnTools = document.querySelector("#btnTools");
const skillsHeader = document.querySelector("#skillsHeader");
const website = document.querySelector("#website");

const btnMore = document.querySelectorAll(".btnMore");

const motivation = document.querySelector("#motivation");
const game = document.querySelector("#game");
const budget = document.querySelector("#budget");
const toDo = document.querySelector("#toDo");
const weather = document.querySelector("#weather");
const meditation = document.querySelector("#meditation");
const timer = document.querySelector("#timer");
const zodiac = document.querySelector("#zodiac");
const quiz = document.querySelector("#quiz");
const tax = document.querySelector("#tax");
const countdown = document.querySelector("#countdown");
const mermaid = document.querySelector("#mermaid");
const food = document.querySelector("#food");
const recipes = document.querySelector("#recipes");
const aus = document.querySelector("#aus");
const stars = document.querySelector("#stars");
const japan = document.querySelector("#japan");
const jewelry = document.querySelector("#jewelry");

const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const urEmail = document.querySelector("#urEmail");
const urMessage = document.querySelector("#urMessage");
const  send = document.querySelector("#send");

const imgOne = document.querySelector("#imgOne");
const imgTwo = document.querySelector("#imgTwo");
const imgThree = document.querySelector("#imgThree");
const imgFour = document.querySelector("#imgFour");

btnRu.addEventListener("click", (img)=> {
    aboutNav.textContent = "Обо мне";
    projectNav.textContent = "Приложения";
    website.textContent = "Сайты";
    certificateNav.textContent = "Сертификаты";
    contactNav.textContent = "Контакты";

    aboutHead.textContent = "Обо мне";
    projectHead.textContent = "Приложения";
    certificateHead.textContent = "Сертификаты";
    contactHead.textContent = "Контакты";

    quoteOne.textContent = " Портфолио";
    quoteTwo.textContent = " ";
    quoteThree.textContent = " ";
    quoteFour.textContent = "Полины Ш.";

    subtext.textContent = "Приветствую на моем сайте портфолио! Надеюсь, Ваш день проходит отлично!";
    highlight.textContent = "Меня зовут Полина, я веб-разработчик из Москвы.";
    aboutOne.textContent = "Я увлекаюсь созданием чего-то красивого и функционального. Хотя я еще только начинаю свою карьеру, и это меня вдохновляет учиться и развивать свои навыки.";
    aboutTwo.textContent = "У меня есть основа в HTML, CSS, JavaScript, и других технологий веб-разработки.";
    aboutThree.textContent = "Если что-то в моем портфолио вызвало ваш интерес, пожалуйста, не стесняйтесь оставить обратную связь!";
   
    // btnSkills.textContent = "Навыки";
    // btnTools.textContent = "Инструменты";
    skillsHeader.textContent = "Навыки";
    btnMore.forEach(item => {
        item.textContent = "Показать";
    });
    
    motivation.textContent = "Генератор мотивации";
    game.textContent = "Игра против компьютера";
    budget.textContent = "Проработай свои расходы";
    toDo.textContent = "Список дел";
    weather.textContent = "Погода";
    meditation.textContent = "Медитация";
    timer.textContent = "Таймер";
    zodiac.textContent = "Что тебя ждет в 2024?";
    quiz.textContent = "Квиз";
    tax.textContent = "Калькулятор налогов";
    countdown.textContent = "Отсчет до Нового года!";
    mermaid.textContent = "Новая история о Русалочке";
    food.textContent = "Опции блюд";
    // recipes.textContent = "Рецепты";   
    aus.textContent = "Об Австралии";
    stars.textContent = "Звезды Южного полушария";
    japan.textContent = "Японский ресторан";
    jewelry.textContent = "Магазин украшений";
    
    phone.textContent = "Телефон:";
    email.textContent = "Почта:";
    urEmail.textContent = "Ваша почта:";
    urMessage.textContent = "Ваше сообщение:";
    send.textContent = "Отправить";

    btnEng.textContent = "анг";
    btnRu.textContent = "рус";

    imgOne.src = "https://cdn.glitch.global/c010ad65-d894-40bd-a1c2-b5f2315e5bad/htmlCssRU.png?v=1706433071300";
    imgTwo.src = "https://cdn.glitch.global/c010ad65-d894-40bd-a1c2-b5f2315e5bad/jsRu.jpeg?v=1706433073075";
    imgThree.src = "https://cdn.glitch.global/c010ad65-d894-40bd-a1c2-b5f2315e5bad/bootstrapRU.png?v=1706433066507";
    imgFour.src = "https://cdn.glitch.global/c010ad65-d894-40bd-a1c2-b5f2315e5bad/gsapFigmaRU.png?v=1706433068760";

})

btnEng.addEventListener("click", ()=> {
    aboutNav.textContent = "About";
    projectNav.textContent = "Projects";
    website.textContent = "Web sites";
    certificateNav.textContent = "Certificates";
    contactNav.textContent = "Contacts";

    aboutHead.textContent = "About";
    projectHead.textContent = "Projects";
    certificateHead.textContent = "Certificates";
    contactHead.textContent = "Contacts";

    quoteOne.textContent = "YOU ARE";
    quoteTwo.textContent = "VIEWING";
    quoteThree.textContent = "POLINA S";
    quoteFour.textContent = "PORTFOLIO";

    subtext.textContent = "Welcome to my portfolio website, I hope you had a great day and I look forward to sharing more of my work with you!";
    highlight.textContent = "Thank you for visiting my website! My name is Polina and I'm a new web developer based in Moscow.";
    aboutOne.textContent = "I'm passionate about creating something beautiful and functional. Although I'm just starting my career and it makes me excited to learn and grow my skillset.";
    aboutTwo.textContent = "I have a strong foundation in HTML, CSS, JavaScript, and other web development technologies.";
    aboutThree.textContent = "Please take a moment to check out my portfolio and leave your thoughts and feedback!";
   
    // btnSkills.textContent = "Skills";
    // btnTools.textContent = "Tools";
    skillsHeader.textContent = "Skills";

    btnMore.forEach(item => {
        item.textContent = "Show more";
    })
    
    motivation.textContent = "Motivational quotes";
    game.textContent = "Game";
    budget.textContent = "Monthly budget worksheet";
    toDo.textContent = "To Do List";
    weather.textContent = "Weather";
    meditation.textContent = "Meditation";
    timer.textContent = "Timer. Studying time";
    zodiac.textContent = "Zodiac predictions";
    quiz.textContent = "Quiz";
    tax.textContent = "Tax calculator";
    countdown.textContent = "New Year. Countdown";
    mermaid.textContent = "The Little Mermaid story";
    food.textContent = "Food options";
    // recipes.textContent = "Recipes";   
    aus.textContent = "About Australia";
    stars.textContent = "Stars";
    japan.textContent = "Japanese restaurant";
    jewelry.textContent = "Jewelry shop";
    
    phone.textContent = "Phone:";
    email.textContent = "Email:";
    urEmail.textContent = "Your email:";
    urMessage.textContent = "Your message:";
    send.textContent = "Send";

    btnEng.textContent = "en";
    btnRu.textContent = "ru";

    imgOne.src = "https://cdn.glitch.global/c010ad65-d894-40bd-a1c2-b5f2315e5bad/htmlCssEN.png?v=1702755761706";
    imgTwo.src = "https://cdn.glitch.global/c010ad65-d894-40bd-a1c2-b5f2315e5bad/jsEng.jpeg?v=1704789372909";
    imgThree.src = "https://cdn.glitch.global/c010ad65-d894-40bd-a1c2-b5f2315e5bad/bootstrapEN.png?v=1702755729701";
    imgFour.src = "https://cdn.glitch.global/c010ad65-d894-40bd-a1c2-b5f2315e5bad/gsapfigmaEN.png?v=1702755745668";

})