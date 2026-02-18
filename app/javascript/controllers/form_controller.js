import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  connect() {
  }

  clear(){
    this.element.reset();
    // Scroll chatbox to bottom after clearing form
    const chatbox = document.querySelector('.chatbox');
    if (chatbox) {
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  }
}
