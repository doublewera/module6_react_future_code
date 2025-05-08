function whoAmI() {
  return prompt('Как тебя зовут?')
}

export default function App() {

  return (
    <p>Получилось! Привет, {whoAmI()}</p>
  )
}

