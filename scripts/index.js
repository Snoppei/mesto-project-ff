const cardTemplate = document.querySelector('#card-template').content;

const placesList = document.querySelector('.places__list');

function createCard(cardProperties, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.src = cardProperties.link;
    cardImage.alt = cardProperties.name;
    cardTitle.textContent = cardProperties.name;

    cardDeleteButton.addEventListener('click', () => deleteCard(cardElement));

    return cardElement;
}

function addCard(card, targetNode) {
    targetNode.append(card);
};

function deleteCard(card) {
    card.remove();
}

initialCards.forEach(element => {
    addCard(createCard(element, deleteCard), placesList);
});