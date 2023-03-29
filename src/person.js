const { evaluateRegex } = require("./utils");

class Person {
  constructor([
    name,
    nationality,
    maritalStatus,
    idDocument,
    addr,
    number,
    neighbourhood,
    state,
  ]) {
    const firstLetterExp = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/g);
    const formatFirstLetter = (prop) => {
      return prop.replace(
        firstLetterExp,
        (fullMatch, group1, group2, index) => {
          return `${group1.toUpperCase()}${group2.toLowerCase()}`;
        }
      );
    };
    this.name = name;
    this.nationality = formatFirstLetter(nationality);
    this.maritalStatus = formatFirstLetter(maritalStatus);
    this.idDocument = idDocument.replace(evaluateRegex(/\D/g), "");
    this.addr = addr.match(evaluateRegex(/(?<=\sa\s).*$/)).join();
    this.number = number;
    this.neighbourhood = neighbourhood
      .match(evaluateRegex(/(?<=\s).*$/))
      .join();
    this.state = state.replace(evaluateRegex(/\.$/), "");
  }
}

module.exports = Person;
