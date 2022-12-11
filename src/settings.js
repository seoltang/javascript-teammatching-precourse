const COMMAND = {
  crewManagement: 'C',
  teamMatchingManagement: 'T',
  quit: 'Q',
  home: 'H',
  frontend: 'F',
  backend: 'B',
  addCrew: 'A',
  deleteCrew: 'D',
  rematching: 'R',
};

const settings = {
  COMMAND,

  COURSE: { [COMMAND.frontend]: 'frontend', [COMMAND.backend]: 'backend' },

  MISSIONS: [
    '숫자야구게임',
    '자동차경주',
    '로또',
    '장바구니',
    '결제',
    '지하철노선도',
    '성능개선',
    '배포',
  ],
};

module.exports = settings;
