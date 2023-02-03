import { EnterPlayerNameEvent } from "./EnterPlayerName";

export class EnterFirstPlayerNameEvent extends EnterPlayerNameEvent{
  constructor() {
    super();

    this.configure();
  }

  configure() {
    this.enterFirstInput.addEventListener(
      "input",
      this.inputHundler.bind(this)
    );
  }

  inputHundler() {
    if (this.enterFirstInput.value.length > 1) {
      this.button.classList.remove("--lock");
    } else {
      this.button.classList.add("--lock");
    }
  }
}
