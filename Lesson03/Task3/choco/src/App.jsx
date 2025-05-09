import { 
  FcAlarmClock, 
  FcBinoculars,
  FcCellPhone,
  FcCloseUpMode,
  FcCamcorderPro,
  FcInTransit,
  FcLinux,
  FcHome,
} from "react-icons/fc";

const icons = [
  <FcAlarmClock   key='k1' />, 
  <FcBinoculars   key='k2' />,
  <FcCellPhone    key='k3' />,
  <FcCloseUpMode  key='k4' />,
  <FcCamcorderPro key='k5' />,
  <FcInTransit    key='k6' />,
  <FcLinux        key='k7' />,
  <FcHome         key='k8' />,
  <FcAlarmClock   key='k9' />, 
  <FcBinoculars   key='k10' />,
  <FcCellPhone    key='k11' />,
  <FcCloseUpMode  key='k12' />,
  <FcCamcorderPro key='k13' />,
  <FcInTransit    key='k14' />,
  <FcLinux        key='k15' />,
  <FcHome         key='k16' />,
];

import './App.css'

function randint(maxn) {
  return parseInt(Math.random() * (maxn - 1)).toFixed();
}

function shuffle(arr) {
  let arr_to_shuffle = new Set(arr);
  let result = [];
  while (arr_to_shuffle.size) {  // > 0
    let ico = Array.from(arr_to_shuffle)[randint(arr_to_shuffle.size)];
    result.push(ico);
    arr_to_shuffle.delete(ico);
  }
  return result;
}

function Tds(props) {
  let tds = [];
  for (let c of props.cells)
      tds.push(<td key={icons[c].key + 'td'}>{icons[c]}</td>);
  return tds;
}

function RandomField() {
  let order = [];
  order.push(...shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15]));
  // Строки таблицы
  let trs = [];
  for (let i = 0; i < 4; i++)
      trs.push(<tr key={'tr' + i}>
        <Tds cells={order.slice(i*4, (i+1)*4)} /></tr>);
  return trs;
}

export default function App() {
  return (
    <table><tbody>
      <RandomField />
      </tbody>
    </table>
  )
}

