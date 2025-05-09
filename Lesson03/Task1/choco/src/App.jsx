import './App.css'

function Tds(props) {
  let tds = [];
  for (let i = 1; i <= props.len; i++)
      tds.push(<td>{props.row * i}</td>);
  return tds;
}

function Trs(props) {
  let trs = [];
  for (let i = 1; i <= props.len; i++)
      trs.push(<tr><Tds len={props.len} row={i} /></tr>);
  return trs;
}

export default function App() {
  return (
    <table>
      <Trs len={10} />
    </table>
  )
}

