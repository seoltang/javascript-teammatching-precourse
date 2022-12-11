class Crew {
  #crews = {
    frontend: [],
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
