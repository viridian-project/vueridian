import Driver from "driver.js";
import "driver.js/dist/driver.min.css";

const TourGuide = {
  startTour: () => {
    const driver = new Driver({
      opacity: 0.5 // Background opacity (0 means only popovers and without overlay)
    });
    // Define the steps for the tour guide
    driver.defineSteps([
      {
        element: "#header-tab-product",
        popover: {
          // className: "first-step-popover-class",
          title: "Title on Popover",
          description: "Body of the popover",
          position: "bottom"
        }
      }
    ]);
    // Start the tour guide
    driver.start();
    // driver.refresh();
  }
};

export default TourGuide;
