const { Random } = require('@woowacourse/mission-utils');
const { MISSIONS } = require('../settings');

class TeamMatching {
  #result = {
    course: '',
    mission: '',
    teams: [],
  };

  randomMatch(crews, { course, missionNumber, headcount }) {
    const randomCrews = TeamMatching.randomShuffle(crews);

    this.match(randomCrews, { course, missionNumber, headcount });
  }

  match(crews, { course, missionNumber, headcount }) {
    this.#result.course = course;
    this.#result.mission = MISSIONS[Number(missionNumber) - 1];

    const teamCount = Math.floor(crews.length / Number(headcount));
    this.#result.teams = Array.from({ length: teamCount }, () => []);
    this.makeTeams(crews);
  }

  makeTeams(crews) {
    crews.forEach((crew, index) => {
      this.#result.teams[index % this.#result.teams.length].push(crew);
    });
  }

  static randomShuffle(crews) {
    const shuffledCrewIndexes = Random.shuffle(crews.map((_, index) => index));
    return shuffledCrewIndexes.map((index) => crews[index]);
  }

  reset() {
    this.#result = {
      course: '',
      mission: '',
      teams: [],
    };
  }

  getResult() {
    return this.#result;
  }
}

module.exports = TeamMatching;
