'use strict';

var wizardsInfo = {
  wizardNum: 4,
  names: ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '],
  surnames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
};

var wizards = [];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
function createWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

function getRandomElement(array) {
  for (var i = 0; i < array.length; i++) {
    var index = Math.floor(Math.random() * array.length);
    var randomElement = array[index];
  }
  return randomElement;
}

function createteAllWizards() {
  for (var i = 0; i < wizardsInfo.wizardNum; i++) {
    wizards[i] = {
      name: getRandomElement(wizardsInfo.names) + getRandomElement(wizardsInfo.surnames),
      coatColor: getRandomElement(wizardsInfo.coatColor),
      eyesColor: getRandomElement(wizardsInfo.eyesColor)
    };
  }
  return wizards;
}

var setupSimilarList = userDialog.querySelector('.setup-similar-list');
var similarWizards = createteAllWizards();
var fragment = document.createDocumentFragment();
for (var i = 0; i < similarWizards.length; i++) {
  fragment.appendChild(createWizard(similarWizards[i]));
}
setupSimilarList.appendChild(fragment);

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
