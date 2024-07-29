//Проверяем длину строки и, если онакороче 20 символов, возвращаем true
//Если строка длиннее 20 символов, возвращаем текст "Фраза слишком длинная"

const lineLength = function (phrase, number) {
  let deleteSymbols = phrase.length - number;
  let ending;
  let result;
  if (phrase.length <= 4) {
    ending = 'Символа'
  } else {
    ending = 'Символов'
  }
  if (phrase.length <= number) {
    result = true;
    console.log(result + '. Длинна фразы ' + phrase.length + ' ' + ending);
  } else {
      console.log('фраза слишком длинная. Длинна фразы ' + phrase.length + " " + ending + '. Необходимо удалить ' + deleteSymbols + ' ' + ending);
  }
};

lineLength('Привет', 5);
