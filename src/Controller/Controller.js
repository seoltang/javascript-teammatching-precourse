const { Console } = require('@woowacourse/mission-utils');
const { COMMAND } = require('../settings');
const Crew = require('../Model/Crew');
const TeamMatching = require('../Model/TeamMatching');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #crew;

  #teamMatching;

  start() {
    OutputView.printStart();
    this.readManagementOrQuit();
  }

  readManagementOrQuit() {
    InputView.readManagement(this.decideToStartManagementOrQuit.bind(this));
  }

  decideToStartManagementOrQuit(command) {
    if (command === COMMAND.quit) {
      Controller.quit();
      return;
    }

    this.selectManagement(command);
  }

  static quit() {
    Console.close();
  }

  selectManagement(command) {
    if (command === COMMAND.crewManagement) {
      InputView.crew.readCourse(this.startCrewManagement.bind(this));
      return;
    }

    if (command === COMMAND.teamMatchingManagement) {
      InputView.teamMatching.readCourse(this.startTeamMatchingManagement.bind(this));
    }
  }

  startCrewManagement() {
    this.#crew = new Crew();
  }

  startTeamMatchingManagement() {
    this.#teamMatching = new TeamMatching();
  }
}

module.exports = Controller;
