import React, { useContext } from "react";
import { applicationContext } from "../../context";
import "./WizardCandidates.scss";

const WizardCandidates = ({
  selectCandidate,
  selectedCandidate,
  highlighted,
}) => {
  const { candidates } = useContext(applicationContext);

  return (
    <>
      <div id="wizard-select-section">
        {candidates.map((e) => (
          // mozemo li promenljivo nazvati bolje od e?
          <div
            className={`wizard-candidate glass-effect ${
              selectedCandidate.id == e.id ? highlighted : ""
            }`}
            id={e.id}
            key={e.id}
            onClick={(event) => {
              event.stopPropagation();
              selectCandidate(event.currentTarget.id);
            }}
          >
            <div className="wizard-candidate-img-container">
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
              // dohvatiti slike sa apija, moze i ovaj link tamo u json da se doda
            </div>
            <section className="wizard-candidate-info-section">
              <h3>{e.name}</h3>
              <p>{e.email}</p>
            </section>
          </div>
        ))}
      </div>
    </>
  );
};

export default WizardCandidates;
