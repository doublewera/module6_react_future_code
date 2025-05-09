import './App.css'

function randint(min, max) {
  return parseInt(min + (Math.random() * (max - min)).toFixed());
}

function Question(props) {
  let first = randint(props.min, props.max);
  let second = randint(props.min, props.max);
  return (
    <li>
      {first} + {second} = <span style={{color: 'white'}}>{first + second}</span>
    </li>
  );
}

export default function App() {
  let questions = [];
  let max_questions = prompt('Сколько вопросов создать?');
  for (let i = 0; i < max_questions; i++) {
    questions.push(<Question min={1} max={10} />);
  }

  return (
    <>   
    <h3>Чтобы проверить ответы, выделите текст мышью</h3>
    <ol>
      {questions}
    </ol>
    </>
  )
}
