export class Session {
  public sessionData: Object;

  constructor(public sessionName: string) {
    this.getSession();

    if (this.sessionData === null) {
      this.newSession();
    }
  }

  get(key: string) {
    return this.sessionData[key] || null;
  }

  store(key: string, data: string | Object) {
    this.sessionData[key] = data;
    localStorage.setItem(this.sessionName, JSON.stringify(this.sessionData));
  }

  newSession() {
    this.sessionData = {};
    localStorage.setItem(this.sessionName, JSON.stringify(this.sessionData));
  }

  getSession() {
    this.sessionData = JSON.parse(localStorage.getItem(this.sessionName));
  }

  destroy() {
    this.sessionData = null;
    localStorage.removeItem(this.sessionName);
  }
}