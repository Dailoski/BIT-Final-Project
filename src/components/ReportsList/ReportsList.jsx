import React, { useContext } from "react";
import { applicationContext } from "../../context";
import Button from "../Button/Button";
import ListDetail from "../ListDetail/ListDetail";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./ReportsList.scss";

const ReportsList = ({ token, search }) => {
  const { reports, setValidData } = useContext(applicationContext);
  const formatDate = (interviewDate) => {
    const interviewDateUnformatted = new Date(interviewDate);
    const dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
    const interviewDateFormatted = interviewDateUnformatted.toLocaleDateString(
      "sr-RS",
      dateOptions
    );
    return interviewDateFormatted;
  };

  const filterAll = reports.filter((e) =>
    e.candidateName
      .toLowerCase()
      .concat(" ", e.companyName.toLowerCase())
      .includes(search)
  );

  const deleteReport = (id) => {
    fetch(`http://localhost:3333/api/reports/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        setValidData(false);
      });
  };

  return (
    <>
      <ul id="reports-list">
        {filterAll.map((e) => (
          <li key={e.id} id={e.id} className="glass-effect">
            <ListDetail title="Company" value={e.companyName} />
            <ListDetail title="Candidate" value={e.candidateName} />
            <ListDetail title="Date" value={formatDate(e.interviewDate)} />
            <ListDetail title="Status" value={e.status} />
            <span className="reports-list_button-group">
              {/* <Button name="open modal" />
              <Button
                name=""
                method={deleteReport}
                methodArgument={e.id}
              ></Button> */}
              <span>
                <VisibilityIcon />
              </span>
              <span
                onClick={() => {
                  deleteReport(e.id);
                }}
              >
                <DeleteForeverIcon />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReportsList;
