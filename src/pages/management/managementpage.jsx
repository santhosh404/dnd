import React, { Fragment, useState } from "react";
import TicketCard from "../../components/ticketcard/ticketcard";
import styles from "./management.module.css";
import ticketStyles from "../../components/ticketcard/ticketcard.module.css";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const todoTickets = [
    {
        "id": "issue1",
        "ticketName": "ERC - Visibility to be improved in the blocks",
        "ticketId": "V6X-223",
        "ticketType": "newFeature",
        "ticketAssignee": "SA"
    },

    {
        "id": "issue2",
        "ticketName": "User Property enhancements",
        "ticketId": "V6X-123",
        "ticketType": "newFeature",
        "ticketAssignee": "SN"
    },

    {
        "id": "issue3",
        "ticketName": "iOS Background support",
        "ticketId": "V6X-400",
        "ticketType": "Change",
        "ticketAssignee": "PJ"
    },

    {
        "id": "issue4",
        "ticketName": "SSO - Open ID Issue",
        "ticketId": "V6X-345",
        "ticketType": "newFeature",
        "ticketAssignee": "SA"
    }
]

const reopenedTickets = [
  {
      "id": "issue1",
      "ticketName": "ERC - Visibility to be improved in the blocks",
      "ticketId": "V6X-223",
      "ticketType": "newFeature",
      "ticketAssignee": "SA"
  },

  {
      "id": "issue2",
      "ticketName": "User Property enhancements",
      "ticketId": "V6X-123",
      "ticketType": "newFeature",
      "ticketAssignee": "SN"
  },

  {
      "id": "issue3",
      "ticketName": "iOS Background support",
      "ticketId": "V6X-400",
      "ticketType": "Change",
      "ticketAssignee": "PJ"
  },

  {
      "id": "issue4",
      "ticketName": "SSO - Open ID Issue",
      "ticketId": "V6X-345",
      "ticketType": "newFeature",
      "ticketAssignee": "SA"
  }
]

export default function ManagementPage() {

  //Managing states
  const [todoTicketDetails, setTodoTicketDetails] = useState(todoTickets)
  const [reopenedTicketDetails, setReopenedTicketDetails] = useState(reopenedTickets)


  const handleTodoDragEnd = (result) => {
    if (!result.destination) return;

    const items = [...todoTickets];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodoTicketDetails(items);
  };

  const handleReopenedDragEnd = (result) => {
    if (!result.destination) return;

    console.log(result)
    const items = [...reopenedTickets];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setReopenedTicketDetails(items);
  };

  return (
    <Fragment>
      

      {/* Project detials*/}
      <div className={styles.projectHeading}>
        <h1 className={styles.projectHeadingText}>Project Name</h1>
      </div>
      <div className={styles.container}>
        {/* Todo canvas */}
        <div className={styles.todoCanvas}>
          <div className={styles.todoHeading}>
            <h4>TODO 4</h4>
          </div>
          <DragDropContext onDragEnd={handleTodoDragEnd}>
            <Droppable droppableId="todoArea">
                {(provided) => (
                    <div className={styles.todoArea} {...provided.droppableProps} ref={provided.innerRef}>
                        {
                            todoTicketDetails.map((ticket, index) => (
                              <Draggable key={ticket.id} draggableId={ticket.id} index={index}>
                                {(provided) => (
                                    <div
                                        className={ticketStyles.container}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                      <div className={ticketStyles.ticketNameContainer}>
                                        <p className={ticketStyles.ticketName}> {ticket.ticketName} </p>
                                      </div>
                                      <div className={ticketStyles.ticketcardfooter}>
                                        <div className={ticketStyles.ticketId}>
                                            <span className={ticketStyles.ticketIcon}>
                                            {ticket.ticketType === "newFeature" ? "+" : "->"}
                                            </span>
                                            <p className={ticketStyles.ticketIdValue}>{ticket.ticketId}</p>
                                        </div>
                                        <div className={ticketStyles.ticketAssignee}>
                                            <p className={ticketStyles.assignee}>{ticket.ticketAssignee}</p>
                                        </div>
                                      </div>
                                  </div>
                                )}
                              </Draggable>
                            )
                          )
                        }
                      {provided.placeholder}
                    </div>
                    
                )}
            </Droppable>
          </DragDropContext>
        </div>

        {/* Re-opened canvas */}
        
            <div className={styles.reopenedCanvas}>
              <div className={styles.reopenedHeading}>
                <h4>RE-OPENED 5</h4>
              </div>
            <DragDropContext onDragEnd={handleReopenedDragEnd}>
                <Droppable droppableId="reopenedArea">
                {(provided) => (
                  <div className={styles.reopenedArea} ref={provided.innerRef} {...provided.droppableProps} >
                    {
                            reopenedTicketDetails.map((ticket, index) => (
                              <Draggable key={ticket.id} draggableId={ticket.id} index={index}>
                                {(provided) => (
                                    <div
                                        className={ticketStyles.container}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                      <div className={ticketStyles.ticketNameContainer}>
                                        <p className={ticketStyles.ticketName}> {ticket.ticketName} </p>
                                      </div>
                                      <div className={ticketStyles.ticketcardfooter}>
                                        <div className={ticketStyles.ticketId}>
                                            <span className={ticketStyles.ticketIcon}>
                                            {ticket.ticketType === "newFeature" ? "+" : "->"}
                                            </span>
                                            <p className={ticketStyles.ticketIdValue}>{ticket.ticketId}</p>
                                        </div>
                                        <div className={ticketStyles.ticketAssignee}>
                                            <p className={ticketStyles.assignee}>{ticket.ticketAssignee}</p>
                                        </div>
                                      </div>
                                  </div>
                                )}
                              </Draggable>
                            )
                          )
                        }
                        {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            </div>
          

        {/* In-code canvas */}
        <div className={styles.incodeCanvas}>
          <div className={styles.incodeHeading}>
            <h4>IN-CODE</h4>
          </div>
          <div className={styles.incodeArea}>
            <TicketCard />
            <TicketCard />
            <TicketCard />
          </div>
        </div>

        {/* Code-Review canvas */}
        <div className={styles.codereviewCanvas}>
          <div className={styles.codereviewHeading}>
            <h4>CODE REVIEW 2</h4>
          </div>
          <div className={styles.codereviewArea}>
            <TicketCard />
          </div>
        </div>

        {/* Test-Ready canvas */}
        <div className={styles.testreadyCanvas}>
          <div className={styles.testreadyHeading}>
            <h4>TEST READY</h4>
          </div>
          <div className={styles.testreadyArea}></div>
        </div>

        {/* In-Test canvas */}
        <div className={styles.intestCanvas}>
          <div className={styles.intestHeading}>
            <h4>IN-TEST 2</h4>
          </div>
          <div className={styles.intestArea}>
            <TicketCard />
            <TicketCard />
          </div>
        </div>

        {/* Ready-For-The-Release canvas */}
        <div className={styles.readyforthereleaseCanvas}>
          <div className={styles.readyforthereleaseHeading}>
            <h4>READY FOR THE RELEASE</h4>
          </div>
          <div className={styles.readyforthereleaseArea}></div>
        </div>
      </div>
    </Fragment>
    
  );
}