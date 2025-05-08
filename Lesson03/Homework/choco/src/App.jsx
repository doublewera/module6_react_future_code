import './App.css'

//          сколько, {'one': год, 'few': года, 'many': лет}
function WordForm(n, forms) {
  let n100 = n % 100;
  let n10 = n % 10;
    if ((n100 < 5) || (n100 > 20)) {
      if (n10 == 1) {
        return forms.one;
      } else if (n10 < 5) {
        return forms.few;
      }
    }
    return forms.many;
}

function WorkTime(props) {
  let dtnow = new Date();
  let y_now = dtnow.getUTCFullYear();
  let work_time = y_now - props.since.getUTCFullYear();
  if ((dtnow.getUTCMonth() < props.since.getUTCMonth()) || (
    (dtnow.getUTCMonth() == props.since.getUTCMonth()) && (
      dtnow.getUTCDate() < props.since.getUTCDate()))) {
    work_time -= 1;
  }
  return <li>Стаж {work_time} {WordForm(work_time, {
    'one': 'год', 'few': 'года', 'many': 'лет'})}</li>;
}

function App() {

  return (
    <table>
      <tr>
        <td>
          <img src={'face.jpg'} />
        </td>
        <td>
          <ul>
            <li className={'fio'}>Баринова Вера Олеговна</li>
            <li>Закончила ВМиК МГУ</li>
            <li>Преподаватель, программист</li>
            <WorkTime since={new Date(2005, 11, 20)} />
          </ul>
        </td>
      </tr>
    </table>
  )
}

export default App
