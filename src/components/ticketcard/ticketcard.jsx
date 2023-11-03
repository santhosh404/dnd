import React from "react";
import ticketStyles from "./ticketcard.module.css";

export default function TicketCard(props) {
  const { ticketName, ticketId, ticketType, ticketAssignee } = props;
  return (

          <div className={ticketStyles.container}>
            <div className={ticketStyles.ticketNameContainer}>
              <p className={ticketStyles.ticketName}> {ticketName} </p>
            </div>
            <div className={ticketStyles.ticketcardfooter}>
              <div className={ticketStyles.ticketId}>
                  <span className={ticketStyles.ticketIcon}>
                  {ticketType === "newFeature" ? "+" : "->"}
                  </span>
                  <p className={ticketStyles.ticketIdValue}>{ticketId}</p>
              </div>
              <div className={ticketStyles.ticketAssignee}>
                  <p className={ticketStyles.assignee}>{ticketAssignee}</p>
              </div>
            </div>
        </div>

  );
}
