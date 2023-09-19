const { Container } = require('postcss');

const questionsArray = [
    {
        title: 'Про сложность маршрутов',
        answer: 'Задача организации, в особенности же рамки и место обучения кадров представляет собой интересный эксперимент проверки направлений прогрессивного развития. Разнообразный и богатый опыт консультация с широким активом позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий.'
    },
    {
        title: 'Можно ли будет искупаться в океане?',
        answer: 'Задача организации, в особенности же рамки и место обучения кадров представляет собой интересный эксперимент проверки направлений прогрессивного развития. Разнообразный и богатый опыт консультация с широким активом позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий.'
    },
    {
        title: 'Нужно ли делать страховку?',
        answer: 'Задача организации, в особенности же рамки и место обучения кадров представляет собой интересный эксперимент проверки направлений прогрессивного развития. Разнообразный и богатый опыт консультация с широким активом позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий.'
    },
    {
        title: 'Будет ли на маршрутах связь?',
        answer: 'Связь на Камчатке есть только в городах и поселках. На вулканах и активной части похода связи практически не будет. Исключение - стоянка около Мутновской ГеоТЭС и приют "Авачинский" под одноименным вулканом. В остальном - вне зоны доступа. Но не переживайте, группа будет оснащена спутниковым телефонам, чтобы раз в 3 дня выходить на связь "с материком".'
    },
    {
        title: 'Остались вопросы?',
        answer: 'Задача организации, в особенности же рамки и место обучения кадров представляет собой интересный эксперимент проверки направлений прогрессивного развития. Разнообразный и богатый опыт консультация с широким активом позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же начало повседневной работы по формированию позиции требуют определения и уточнения существенных финансовых и административных условий.'
    }
];

//  ОТВЕТЫ НА ВОПРОСЫ
function renderFAQ() {
    const containerFAQ = document.getElementById('questions');
    containerFAQ.innerHTML = '';

    questionsArray.forEach((question) => {
        containerFAQ.innerHTML += `
        <div class="question-answer quess-item py-5 px-6 rounded-2xl">
            <div class="flex justify-between">
                <p class="question font-normal text-default">
                    ${question.title}
                </p>

                <button class="button-faq text-default text-main-grey-sand">
                    +
                </button>
            </div>

            <p class="none font-normal text-quess pt-5">
                ${question.answer}
            </p>
        </div>
        `;
    });

    containerFAQ.addEventListener('click', (event) => {
        const clickElementFAQ = event.target;

        if (clickElementFAQ.classList.contains('button-faq')) {
            const answer = clickElementFAQ.parentElement.nextElementSibling;
            answer.classList.toggle('none');
        }
    });
}

// const questions = document.querySelectorAll('.question-answer');

// questions.forEach(question => {
//     question.addEventListener('click', () => {
//         const btnOpen = question.querySelector('.btnOpen');
//         console.log(btnOpen);
//         btnOpen.addEventListener('click', () => {
//             question.classList.replace('none', 'block');
//             // console.log(question);
//         })
//         // console.log(show-quess);

//     })
// })

renderFAQ();

// ОТЗЫВЫ
const reviews = [
    {
        // id: 1, [0]
        name: 'Янковская Ольга',
        image: '/src/images/review-author.png',
        date: '20.05.2023',
        title: 'Толбачинское кольцо',
        text: 'Разнообразный и богатый опыт реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. С другой стороны рамки и место обучения кадров требуют от нас анализа систем массового участия. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании форм развития. Таким образом укрепление и развитие структуры играет важную роль в формировании направлений прогрессивного развития.'
    },
    {
        // id: 2, [1]
        name: 'Роо Ирина',
        image: '/src/images/review-author.png',
        date: '21.06.2023',
        title: 'Тихоокеанское кольцо',
        text: 'Разнообразный и богатый опыт реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. С другой стороны рамки и место обучения кадров требуют от нас анализа систем массового участия. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании форм развития. Таким образом укрепление и развитие структуры играет важную роль в формировании направлений прогрессивного развития.'
    },
    {
        // id: 3, [2]
        name: 'Шипина Елена',
        image: '/src/images/review-author.png',
        date: '22.06.2023',
        title: 'Вулканы Камчатки',
        text: 'Разнообразный и богатый опыт реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. С другой стороны рамки и место обучения кадров требуют от нас анализа систем массового участия. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании форм развития. Таким образом укрепление и развитие структуры играет важную роль в формировании направлений прогрессивного развития.'
    },
    {
        // id: 4, [3]
        name: 'Петров Михаил',
        image: '/src/images/review-author.png',
        date: '10.07.2023',
        title: 'Знакомство с Камчаткой',
        text: 'Разнообразный и богатый опыт реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. С другой стороны рамки и место обучения кадров требуют от нас анализа систем массового участия. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании форм развития. Таким образом укрепление и развитие структуры играет важную роль в формировании направлений прогрессивного развития.'
    },
    {
        // id: 5, [4]
        name: 'Токарев Иван',
        image: '/src/images/review-author.png',
        date: '20.07.2023',
        title: 'Вулканы Камчатки',
        text: 'Разнообразный и богатый опыт реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. С другой стороны рамки и место обучения кадров требуют от нас анализа систем массового участия. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании форм развития. Таким образом укрепление и развитие структуры играет важную роль в формировании направлений прогрессивного развития.'
    },
    {
        // id: 6, [5]
        name: 'Кузьмина Алена',
        image: '/src/images/review-author.png',
        date: '23.08.2023',
        title: 'Знакомство с Камчаткой',
        text: 'Разнообразный и богатый опыт реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. С другой стороны рамки и место обучения кадров требуют от нас анализа систем массового участия. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании форм развития. Таким образом укрепление и развитие структуры играет важную роль в формировании направлений прогрессивного развития.'
    }
];

// индекс текущего отзыва
let currentReviewIndex = 0;

// // Для кнопки назад
const btnPrev = document.getElementById('btn-prev');
btnPrev.addEventListener('click', goPrev);

// // Для кнопки вперед
const btnNext = document.getElementById('btn-next');
btnNext.addEventListener('click', goNext);

// // Для кнопки рандомный отзыв
// const btnRandom = document.getElementById('review-random');
// btnRandom.addEventListener('click', getRandom);

function renderReview() {
    const reviewVisible = document.getElementById('containerReviews');
    let review = reviews[currentReviewIndex];

    reviewVisible.innerHTML = `
            <div class="review-item rounded-2xl p-8 mt-40">
                <p class="font-semibold pb-4 sm:pb-5">
                    Отзыв о туре “${review.title}”
                </p>
                <p class="text-base pb-3 md:text-sm">
                    ${review.text}
                </p>
                <div class="flex items-center">
                    <div class="author-foto rounded-full w-11 h-11 mr-2 sm:w-12 sm:h-12 sm:mr-3 md:w-14 md:h-14 md:mr-4"></div>
                    <div class="flex-col">
                        <p>
                            ${review.name}
                        </p>
                        <p class="date-review text-sm">
                            ${review.date}
                        </p>
                    </div>
                </div>
            </div>
        `;
}

function goPrev() {
    if (currentReviewIndex <= 0) {
        currentReviewIndex = reviews.length - 1;
    } else {
        currentReviewIndex = currentReviewIndex - 1;
    }

    renderReview();
}

function goNext() {
    if (currentReviewIndex >= reviews.length - 1) {
        currentReviewIndex = reviews.length - reviews.length;
    } else {
        currentReviewIndex = currentReviewIndex + 1;
    }

    renderReview();
}

// Кнопка для рандомного выбора
// function getRandom() {
//     let currentRandomIndex = Math.floor(Math.random() * reviews.length);
//     currentReviewIndex = currentRandomIndex;

//     console.log(currentRandomIndex);
//     renderReview();
// }

renderReview();
