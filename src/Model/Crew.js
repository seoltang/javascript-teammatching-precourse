class Crew {
  #crews = {
    frontend: ['준', '포코', '공원', '로이드', '포비', '워니', '서준'],
    backend: [],
  };

  getCrews(course) {
    return this.#crews[course];
  }

  add(course, crewName) {
    this.#crews[course].push(crewName);
  }

  delete(course, crewNumber) {
    const index = crewNumber - 1;

    this.#crews[course].splice(index, 1);
  }
}

module.exports = Crew;
