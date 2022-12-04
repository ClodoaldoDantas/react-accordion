import { ReactNode } from 'react'
import { AccordionItem } from './AccordionItem'

import styles from './styles.module.scss'

interface AccordionProps {
  children: ReactNode
}

export function Accordion({ children }: AccordionProps) {
  return <ul className={styles.accordion}>{children}</ul>
}

Accordion.Item = AccordionItem
