import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.initializeDropdowns()
  }

  initializeDropdowns() {
    // Wait for Semantic UI to be loaded, then initialize dropdowns
    if (window.$ && window.$.fn && window.$.fn.dropdown) {
      $('.ui.dropdown').dropdown()
    } else {
      // Fallback: Try again after a short delay
      setTimeout(() => this.initializeDropdowns(), 100)
    }
  }
}
