import React from "react";

import InterviewerListItem from "./InterviewerListItem";

import "components/InterviewerList.scss";

const InterviewerList = props => {
  const { interviewers, setInterviewer } = props;

  const interviewerComponent = interviewers.map(interviewer => (
    <InterviewerListItem
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === props.interviewer}
      setInterviewer={() => {
        setInterviewer(interviewer.id);
        props.setError("");
      }}
    />
  ));

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerComponent}</ul>
    </section>
  );
};

export default InterviewerList;
