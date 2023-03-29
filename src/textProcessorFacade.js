const TextProcessorFluentAPI = require("./txtProcessorFluentAPI.js");

class TextProcessorFacade {
  #textProcessorFluentAPI;
  constructor(text) {
    this.#textProcessorFluentAPI = new TextProcessorFluentAPI(text);
  }

  getPeopleFromPDF() {
    return this.#textProcessorFluentAPI
      .extractPeopleData()
      .divideTextInColumns()
      .removeEmptyCharacters()
      .mapPerson()
      .build();
  }
}

module.exports = TextProcessorFacade;
