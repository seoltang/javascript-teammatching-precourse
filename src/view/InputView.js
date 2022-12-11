const { Console } = require('@woowacourse/mission-utils');
const { COMMAND, MISSIONS } = require('../settings');

const {
  crewManagement,
  teamMatchingManagement,
  quit,
  home,
  frontend,
  backend,
  addCrew,
  deleteCrew,
  rematching,
} = COMMAND;

const InputView = {
  MESSAGE: {
    home: `\n크루를 관리하려면 ${crewManagement}, 팀 매칭을 관리하려면 ${teamMatchingManagement}, 종료하려면 ${quit}를 입력하세요.\n`,

    crew: {
      viewCrewList: `\n프론트엔드 크루 목록을 조회하려면 ${frontend}, 백엔드 크루 목록을 조회하려면 ${backend}를 입력하세요.\n`,
      addOrDeleteCrew: `\n크루를 추가하려면 ${addCrew}, 삭제하려면 ${deleteCrew}, 처음 메뉴로 돌아가려면 ${home}을 입력하세요.\n`,
      addCrewName: '\n추가할 크루 이름을 입력해 주세요.\n',
      deleteCrewNumber: '\n삭제할 크루 번호를 입력해 주세요.\n',
    },

    teamMatching: {
      course: `\n팀 매칭할 코스가 프론트엔드면 ${frontend}, 백엔드면 ${backend}를 입력하세요.\n`,
      mission: `\n팀 매칭할 미션 번호를 입력하세요.\n${MISSIONS.map(
        (mission, index) => `${index + 1} ${mission}\n`,
      ).join('')}`,
      headcount: '\n1팀당 인원 수를 입력해 주세요.\n',
      rematch: `\n팀을 재매칭하려면 ${rematching}, 처음 메뉴로 돌아가려면 ${home}을 입력하세요.\n`,
    },
  },

  readInput(message, callback) {
    Console.readLine(message, (input) => {
      callback(input);
    });
  },

  readManagement(callback) {
    InputView.readInput(InputView.MESSAGE.home, callback);
  },

  crew: {
    readCourse(callback) {
      InputView.readInput(InputView.MESSAGE.crew.viewCrewList, callback);
    },

    readToAddOrDelete(callback) {
      InputView.readInput(InputView.MESSAGE.crew.addOrDeleteCrew, callback);
    },

    readAdding(callback) {
      InputView.readInput(InputView.MESSAGE.crew.addCrewName, callback);
    },

    readDeleting(callback) {
      InputView.readInput(InputView.MESSAGE.crew.deleteCrewNumber, callback);
    },
  },

  teamMatching: {
    readCourse(callback) {
      InputView.readInput(InputView.MESSAGE.teamMatching.course, callback);
    },

    readMission(callback) {
      InputView.readInput(InputView.MESSAGE.teamMatching.mission, callback);
    },

    readHeadcount(callback) {
      InputView.readInput(InputView.MESSAGE.teamMatching.headcount, callback);
    },

    readToRematch(callback) {
      InputView.readInput(InputView.MESSAGE.teamMatching.rematch, callback);
    },
  },
};

module.exports = InputView;
