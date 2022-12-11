/* eslint-disable max-lines-per-function */
const TeamMatching = require('../src/Model/TeamMatching');

describe('팀 매칭 테스트', () => {
  test('팀 매칭 테스트', () => {
    const crews = ['준', '포코', '공원', '로이드', '포비', '워니', '서준'];
    const course = 'frontend';
    const missionNumber = 1;
    const headcount = 3;
    const expectedResult = {
      course: 'frontend',
      mission: '숫자야구게임',
      teams: [
        ['준', '공원', '포비', '서준'],
        ['포코', '로이드', '워니'],
      ],
    };

    const teamMatching = new TeamMatching();
    teamMatching.match(crews, { course, missionNumber, headcount });

    expect(teamMatching.getResult()).toStrictEqual(expectedResult);
  });
});
