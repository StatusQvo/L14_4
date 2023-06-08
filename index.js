class Dictionary {
  constructor(name) {
    this.name = name
    this.words = {}
  }

  Add(word, description) {
    if (!this.words[word]) this.words[word] = { word, description }
  }

  get(word) {
    if (this.words[word]) {
      return word + ' - ' + this.words[word]
    } else {
      console.log(`${word} нет в словаре`)
    }
  }

  remove(word) {
    if (this.words[word]) {
      delete this.words[word]
    } else {
      console.log(`${word} нет в словаре`)
    }
  }

  showAllWords() {
    let resultArr = ''
    Object.values(this.words).forEach((elt) => {
      resultArr += `${elt.word} - ${elt.description} \n`
    })

    console.log(resultArr)
  }
}

class HardWordsDictionary extends Dictionary {
  add(word, description) {
    super.Add(word, description)
    this.words[word].isDifficult = true
  }
}

const dictionary = new Dictionary('Толковый словарь')
dictionary.Add('JavaScript', 'популярный язык программирования')
dictionary.Add(
  'Веб-разработчик',
  'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие'
)
dictionary.Add('Junior', 'Новичок на начальном этапе в программировании')

dictionary.remove('JavaScript')
dictionary.showAllWords()

//Сложный словарь

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
hardWordsDictionary.add(
  'дилетант',
  'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.'
)
hardWordsDictionary.add(
  'неологизм',
  'Новое слово или выражение, а также новое значение старого слова.'
)

hardWordsDictionary.add(
  'квант',
  'Неделимая часть какой-либо величины в физике.'
)

hardWordsDictionary.remove('неологизм')
hardWordsDictionary.showAllWords()
