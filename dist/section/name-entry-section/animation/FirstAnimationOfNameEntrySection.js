import { message, button } from "../../../util/text-list.js";
import { AnimationOfNameEntrySection } from "./AnimationOfNameEntrySection.js";
import { EnterFirstPlayerNameEvent } from "../event/EnterFirstPlayerNameEvent.js";
import { EnterPlayerNameAndDecideEvent } from "../event/EnterPlayerNameAndDecideEvent.js";
export class FirstAnimationOfNameEntrySection extends AnimationOfNameEntrySection {
    constructor() {
        super();
        this.init();
        this.animation();
        new EnterFirstPlayerNameEvent();
        new EnterPlayerNameAndDecideEvent();
    }
    init() {
        this.setButton();
        this.setEnterInputStatus();
        this.setBubbleStatus();
        this.setBubbleText();
    }
    animation() {
        this.bubble.classList.add("--fadeIn");
        setTimeout(() => {
            this.bubble.classList.remove("--hide");
        }, 500);
    }
    setEnterInputStatus() {
        this.enterFirstInput.classList.add("--center");
        this.enterSecondInput.style.display = "none";
        this.enterSecondInput.classList.add("--hide");
        this.enterSecondInput.classList.add("--lock");
    }
    setBubbleStatus() {
        this.bubble.classList.add("--hide");
    }
    setBubbleText() {
        this.bubbleText.innerText = message.nameEntrySectionFirstMessage;
        this.bubbleText.style.top = "1em";
    }
    setButton() {
        this.button.classList.add("--lock");
        this.button.innerText = button.enterPlayerNameAndDecideButtonText;
    }
}
//# sourceMappingURL=FirstAnimationOfNameEntrySection.js.map