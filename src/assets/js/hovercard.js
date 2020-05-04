const hcard = {
  placeHovercard: aboveStrategy => {
    return (hovercard_id, button_id, what) => {
      let hovercard = document.getElementById(hovercard_id);
      let permanent = hovercard.getAttribute("data-permanent");
      let show = false;
      let hide = false;
      if (permanent === "false" && what === "mouseover") show = true;
      else if (permanent === "false" && what === "mouseout") hide = true;
      else if (permanent === "false" && what === "click") {
        hovercard.setAttribute("data-permanent", true);
        show = true;
      } else if (permanent === "true" && what === "click") {
        hovercard.setAttribute("data-permanent", false);
        show = false;
      }
      if (show) {
        let blob = document.getElementById(button_id);
        let rect = blob.getBoundingClientRect();
        let windowWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        let windowHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight;
        // let leftOffset = blob.clientWidth;
        let above = aboveStrategy(windowHeight, rect.top);
        if (!above) {
          hovercard.classList.remove("hovercard-above");
          hovercard.classList.add("hovercard-below");
          // hovercard.style.top = rect.bottom + 10 + "px";
          // hovercard.style.bottom = null;
        } else {
          hovercard.classList.remove("hovercard-below");
          hovercard.classList.add("hovercard-above");
          // hovercard.style.top = null;
          // hovercard.style.bottom = windowHeight - rect.top + 10 + "px";
        }
        // hovercard.style.left = rect.left - leftOffset + "px";
        hovercard.style.display = "block";
        hovercard.style.maxWidth = null;
        // check if hovercard does not fit on screen and act if so:
        if (hovercard.getBoundingClientRect().right > windowWidth) {
          hovercard.style.maxWidth =
            windowWidth -
            hovercard.getBoundingClientRect().left -
            20 - // 20px is the padding of the hovercard
            20 + // add 20px extra space for scroll bar etc.
            "px";
        }
      } else if (hide) {
        hovercard.style.display = "none";
      }
    };
  }
};

export default hcard;