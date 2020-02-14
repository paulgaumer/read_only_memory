import React, { useState } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"

const MyAccordion = ({ edges }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Accordion
      allowZeroExpanded={true}
      onChange={uuid => setIsOpen(uuid)}
      className="border-b border-myGrey-secondary"
    >
      {edges.map(({ node }) => {
        return (
          <AccordionItem
            key={node.data.id}
            uuid={node.data.id}
            className="border-t border-myGrey-secondary"
          >
            <AccordionItemHeading>
              <AccordionItemButton className="outline-none">
                <AccordionItemState>
                  {state => {
                    return (
                      <div className="flex text-myGrey-primary px-4">
                        <span style={{ flex: "0 0 30%" }}>
                          {node.data.name}
                        </span>
                        {state.expanded ? (
                          <span className="text-myGrey-secondary">&#9660;</span>
                        ) : (
                          <span className="text-myGrey-secondary">&#9654;</span>
                        )}
                      </div>
                    )
                  }}
                </AccordionItemState>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="flex text-myGrey-secondary px-4">
                <span style={{ flex: "0 0 30%" }}></span>
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
