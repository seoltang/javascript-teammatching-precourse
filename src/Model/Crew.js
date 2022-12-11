class Crew {
  #crews = {
    frontend: [],
    backend: [],
  };

  getCrews(course) {
    return this.#crews[course];
  }

  add(course) {}

  delete(course) {}
}

module.exports = Crew;
