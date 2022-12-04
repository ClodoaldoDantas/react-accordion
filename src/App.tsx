import { Accordion } from './components/Accordion'
import { questions } from './data/questions'

export function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>📫 Perguntas e Respostas</h1>
        <p>Tire suas dúvidas aqui.</p>
      </header>

      <main>
        <Accordion>
          {questions.map((question) => (
            <Accordion.Item
              key={question.id}
              title={question.title}
              content={question.content}
            />
          ))}
        </Accordion>
      </main>

      <footer className="footer">
        <p>Desenvolvido por Clodoaldo Dantas 🦄</p>
      </footer>
    </div>
  )
}
