const cardTemplate = document.querySelector('#card-template').content;

const placesList = document.querySelector('.places__list');

function addCard(cardProperties, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.src = cardProperties.link;
    cardImage.alt = 'Фотография, ' + cardProperties.name;
    cardTitle.textContent = cardProperties.name;

    cardDeleteButton.addEventListener('click', function () {
        deleteCard(cardElement);
    })

    placesList.append(cardElement);
}

function deleteCard(card) {
    card.remove();
}

initialCards.forEach(function (element) {
    addCard(element, deleteCard);
});