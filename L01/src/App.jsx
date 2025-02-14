function whoAmI() {
  return prompt('Как тебя зовут?')
}

export default function App() {
  console.log('App');
  return (
    <div>
      <h1>Привет, {whoAmI()}</h1>
    </div>
  );
}
