import React, { useState } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const MyAccordion = ({ edges }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Accordion allowZeroExpanded={true} onChange={uuid => setIsOpen(uuid)}>
      {edges.map(({ node }) => {
        return (
          <AccordionItem key={node.data.id} uuid={node.data.id}>
            <AccordionItemHeading>
              <AccordionItemButton className="outline-none">
                <span>&#9658; </span>
                <span>{node.data.name}</span>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="text-blue-500">{node.data.content}</p>
            </AccordionItemPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default MyAccordion
