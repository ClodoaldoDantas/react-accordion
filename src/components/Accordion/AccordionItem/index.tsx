import { useState } from 'react'
import { FiPlusCircle, FiXCircle } from 'react-icons/fi'
import styles from './styles.module.scss'

interface AccordionItemProps {
  title: string
  content: string
}

export function AccordionItem({ title, content }: AccordionItemProps) {
  const [isActive, setIsActive] = useState(false)

  return (
    <li className={styles.accordionItem}>
      <button
        onClick={() => setIsActive(!isActive)}
        className={styles.accordionItemTrigger}
        data-testid="btn-toggle"
      >
        <h3>{title}</h3>

        {isActive ? (
          <FiXCircle size={24} data-testid="icon-x" />
        ) : (
          <FiPlusCircle size={24} data-testid="icon-plus" />
        )}
      </button>

      {isActive && (
        <div className={styles.accordionItemContent}>
          <p>{content}</p>
        </div>
      )}
    </li>
  )
}
