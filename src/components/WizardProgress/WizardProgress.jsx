import React from "react";
import "./WizardProgress.scss";

const WizardProgress = ({ wizardStep }) => {
  return (
    <div id="wizard-progress" className="glass-effect">
      <div
        className={`wizard-progress-wrapper  ${
          wizardStep === 1 && `wizard-current-step`
        }`}
      >
        <span className="wizard-step">1</span>
        <p>Select Candidate</p>
      </div>
      <div
        className={`wizard-progress-wrapper  ${
          wizardStep === 2 && `wizard-current-step`
        }`}
      >
        <span className="wizard-step">2</span>
        <p>Select Company</p>
      </div>
      <div
        className={`wizard-progress-wrapper  ${
          wizardStep === 3 && `wizard-current-step`
        }`}
      >
        <span className="wizard-step">3</span>
        <p>Fill Report Details</p>
      </div>
    </div>
  );
};

export default WizardProgress;
