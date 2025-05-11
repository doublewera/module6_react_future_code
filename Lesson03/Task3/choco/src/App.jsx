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

const icon_funcs = [
  FcAlarmClock, 
  FcBinoculars,
  FcCellPhone,
  FcCloseUpMode,
  FcCamcorderPro,
  FcInTransit,
  FcLinux,
  FcHome,
];


import './App.css'
import React from "react";

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
  let icons = [];
  for (let i=0;i<8;i++) {
    icons.push(React.createElement(
      icon_funcs[i], {key: 'k' + (i*2)}))
    icons.push(React.createElement(
      icon_funcs[i], {key: 'k' + (i*2 + 1)}))
  }
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

