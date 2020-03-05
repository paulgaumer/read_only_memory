import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"

const MyAccordion = ({ edges }) => {
  return (
    <Accordion allowZeroExpanded={true}>
      {edges.map(({ node }) => {
        return (
          <AccordionItem
            key={node.data.id}
            uuid={node.data.id}
            className="border-b border-myGrey-secondary"
          >
            <AccordionItemHeading>
              <AccordionItemButton className="outline-none">
                <AccordionItemState>
                  {state => {
                    return (
                      <div className="flex justify-between md:justify-start px-4">
                        {state.expanded ? (
                          <>
                            <span
                              style={{ flex: "0 0 30%" }}
                              className="hidden md:inline text-primary"
                            >
                              {node.data.name}
                            </span>
                            <span className="md:hidden text-primary">
                              {node.data.name}
                            </span>
                          </>
                        ) : (
                          <>
                            <span
                              style={{ flex: "0 0 30%" }}
                              className="hidden md:inline"
                            >
                              {node.data.name}
                            </span>
                            <span className="md:hidden">{node.data.name}</span>
                          </>
                        )}
                        {state.expanded ? (
                          <span className="text-primary">&#9660;&#xFE0E;</span>
                        ) : (
                          <span>&#9654;&#xFE0E;</span>
                        )}
                      </div>
                    )
                  }}
                </AccordionItemState>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="flex text-primary px-4">
                <span
                  style={{ flex: "0 0 30%" }}
                  className="hidden md:inline"
                ></span>
                <p>{node.data.content}</p>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default MyAccordion
