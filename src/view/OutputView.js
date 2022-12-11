const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  MESSAGE: {
    course: {
      frontend: '프론트엔드',
      backend: '백엔드',
    },
  },

  printStart() {
    Console.print('우아한테크코스 크루 관리 & 팀 매칭 앱을 실행합니다.');
  },

  getCrewListMessage(crews) {
    return crews.map((crew, index) => `${index + 1} ${crew}`).join('\n');
  },

  printCrewList(crews, course) {
    if (crews.length === 0) {
      Console.print('\n아직 크루가 없습니다. 크루를 추가해 주세요.');
      return;
    }

    Console.print(
      `\n${OutputView.MESSAGE.course[course]} 크루 목록\n${OutputView.getCrewListMessage(crews)}`,
    );
  },

  printTeamMatchingResult({ course, mission, teams }) {
    Console.print(
      `\n${OutputView.MESSAGE.course[course]} ${mission} 팀이 매칭되었습니다.\n${teams
        .map((team) => `- ${team.join()}\n`)
        .join('')}`,
    );
  },
};

module.exports = OutputView;
