const { evaluateRegex } = require("./utils");
const Person = require("./person");

class TextProcessorFluentAPI {
  #content;
  constructor(content) {
    this.#content = content;
  }

  extractPeopleData() {
    const matchPeople = evaluateRegex(
      /(?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*?)$/gim
    );
    const singlePerson = this.#content.match(matchPeople);
    this.#content = singlePerson;
    return this;
  }

  divideTextInColumns() {
    const splitRegex = evaluateRegex(/,/);
    this.#content = this.#content.map((line) => line.split(splitRegex));
    return this;
  }

  removeEmptyCharacters() {
    const trimSpaces = evaluateRegex(/^\s+|\s+$|\n/g);
    this.#content = this.#content.map((line) =>
      line.map((item) => item.replace(trimSpaces, ""))
    );

    return this;
  }
  mapPerson() {
    // passa o array de itens no construtor de pessoa
    this.#content = this.#content.map((line) => new Person(line));
    return this;
  }
  build() {
    return this.#content;
  }
}

module.exports = TextProcessorFluentAPI;
