const hcard = {
  placeHovercard: aboveStrategy => {
    return (hovercard_id, button_id, what) => {
      let hovercard = document.getElementById(hovercard_id);
      let permanent = hovercard.getAttribute("data-permanent");
      let show = false;
      if (permanent === "false" && what === "mouseover") show = true;
      else if (permanent === "false" && what === "mouseout") show = false;
      else if (permanent === "false" && what === "click") {
        hovercard.setAttribute("data-permanent", true);
        show = true;
      } else if (permanent === "true" && what === "click") {
        hovercard.setAttribute("data-permanent", false);
        show = false;
      }
      if (show) {
        let rect = document.getElementById(button_id).getBoundingClientRect();
        let windowWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        let windowHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        hovercard.style.display = "block"; // need to display it to access its dimensions
        let hcardRect = hovercard.getBoundingClientRect();
        let above = aboveStrategy(windowHeight, hcardRect.height, rect.top);
        if (!above) {
          hovercard.classList.remove("hovercard-above");
          hovercard.classList.add("hovercard-below");
        } else {
          hovercard.classList.remove("hovercard-below");
          hovercard.classList.add("hovercard-above");
        }
        hovercard.style.maxWidth = null;
        // check if hovercard does not fit on screen and act if so:
        if (hcardRect.right > windowWidth) {
          hovercard.style.maxWidth =
            windowWidth -
            hcardRect.left -
            20 - // 20px is the padding of the hovercard
            20 + // add 20px extra space for scroll bar etc.
            "px";
        }
      } else {
        hovercard.style.display = "none";
      }
    };
  }
};

export default hcard;
