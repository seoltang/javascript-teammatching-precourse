const { Console } = require('@woowacourse/mission-utils');
const { COMMAND } = require('../settings');
const Crew = require('../Model/Crew');
const TeamMatching = require('../Model/TeamMatching');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #crew = new Crew();

  #teamMatching = new TeamMatching();

  start() {
    OutputView.printStart();
    this.readToManageOrQuit();
  }

  readToManageOrQuit() {
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
      InputView.crew.readCourse(this.selectCrewCourse.bind(this));
      return;
    }

    if (command === COMMAND.teamMatchingManagement) {
      InputView.teamMatching.readCourse(this.startTeamMatchingManagement.bind(this));
    }
  }

  selectCrewCourse(courseCommand) {
    const course = { [COMMAND.frontend]: 'frontend', [COMMAND.backend]: 'backend' }[courseCommand];
    this.printCurrentCrewList(course);

    InputView.crew.readToAddOrDelete(this.decideToManageCrewOrGoHome.bind(this, course));
  }

  printCurrentCrewList(course) {
    const crews = this.#crew.getCrews(course);
    OutputView.printCrewList(crews, course);
  }

  decideToManageCrewOrGoHome(course, command) {
    if (command === COMMAND.home) {
      this.readToManageOrQuit();
      return;
    }

    this.decideToAddOrDeleteCrew(command, course);
  }

  decideToAddOrDeleteCrew(command, course) {
    if (command === COMMAND.addCrew) {
      this.#crew.add(course);
      return;
    }

    if (command === COMMAND.deleteCrew) {
      this.#crew.delete(course);
    }
  }

  startTeamMatchingManagement() {
    this.#teamMatching;
  }
}

module.exports = Controller;
