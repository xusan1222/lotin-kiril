import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextArea from "./TextArea";
import "./convert.css";

export default function LotinKiril() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [btn, setBtn] = useState(true);

  const Lotin = [
    "A",
    "B",
    "V",
    "G",
    "D",
    "E",
    "YO",
    "J",
    "Z",
    "I",
    "Y",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "SH",
    "F",
    "X",
    "H",
    "CH",
    "U",
    "Z",
    "YU",
    "YA",
    "O`",
    "Q",
    "G`",
    "a",
    "b",
    "v",
    "g",
    "d",
    "e",
    "yo",
    "j",
    "z",
    "i",
    "y",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "t",
    "u",
    "f",
    "x",
    "h",
    " ch",
    "sh",
    "e",
    "yu",
    "ya",
    "o`",
    "q",
    "g`",
    " ",
  ];

  const Kiril = [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ҳ",
    "Ч",
    "Ш",
    "Э",
    "Ю",
    "Я",
    "Ў",
    "Қ",
    "Ғ",
    "а",
    "б",
    "в",
    "г",
    "д",
    "е",
    "ё",
    "ж",
    "з",
    "и",
    "й",
    "к",
    "л",
    "м",
    "н",
    "о",
    "п",
    "р",
    "с",
    "т",
    "у",
    "ф",
    "х",
    "ҳ",
    "ч",
    "ш",
    "э",
    "ю",
    "я",
    "ў",
    "қ",
    "ғ",
    " ",
  ];

//   function HandleClick() {
//     setBtn(!btn);
//     console.log(btn);
//   }
  useEffect(
    () => {
          
        /////////////////////////// sh uchun
        for (let i = 0; i < Lotin.length; i++) {
          if (
            Lotin[i] == [...text1].pop() &&
            text1[text1.length - 2] != "S" &&
            [...text1].pop() != "H"
          ) {
            setText2(text2 + Kiril[i]);
          } else if (
            text1[text1.length - 2] == "S" &&
            [...text1].pop() == "h"
          ) {
            setText2(text2 + Kiril[25]);
          } else if (
            text1[text1.length - 2] == "s" &&
            [...text1].pop() == "h"
          ) {
            setText2(text2 + Kiril[57]);
          } else if (
            text1[text1.length - 2] != "S" &&
            [...text1].pop() == "H"
          ) {
            setText2(text2 + Kiril[23]);
          }
          ////////   ch uchun
          if (
            Lotin[i] == [...text1].pop() &&
            text1[text1.length - 2] != "C" &&
            [...text1].pop() != "H"
          ) {
            setText2(text2 + Kiril[i]);
          } else if (
            text1[text1.length - 2] == "C" &&
            [...text1].pop() == "h"
          ) {
            setText2(text2 + Kiril[24]);
            setText2(text2.length - 1);
          } else if (
            text1[text1.length - 2] == "c" &&
            [...text1].pop() == "h"
          ) {
            setText2(text2 + Kiril[56]);
          } else if (
            text1[text1.length - 2] != "S" &&
            [...text1].pop() == "H"
          ) {
            setText2(text2 + Kiril[23]);
          }
        }
      
    },
    [text1]
  );

  // useEffect(() => {

  // }, [text2]);

  return (
    <>
      <TextArea
        ValueChange={(e) => setText1(e.target.value)}
        value={text1}
        id="area1"
      />
      <TextArea
        id="area2"
        ValueChange={(e) => setText2(e.target.value)}
        value={text2}
      />

      {/* <Button className="btn" variant="contained" onClick={HandleClick}>
        ⇔
      </Button> */}

      <div className="tbody">
        <tbody className="table">
          <tr>
            <td>
              <b>Кирилл</b>
            </td>
            <td>
              <b>Latin</b>
            </td>
          </tr>
          <tr>
            <td>а</td>
            <td>a</td>
          </tr>
          <tr>
            <td>б</td>
            <td>b</td>
          </tr>
          <tr>
            <td>в</td>
            <td>v</td>
          </tr>
          <tr>
            <td>г</td>
            <td>g</td>
          </tr>
          <tr>
            <td>д</td>
            <td>d</td>
          </tr>
          <tr>
            <td>е</td>
            <td>e</td>
          </tr>
          <tr>
            <td>ё</td>
            <td>yo</td>
          </tr>
          <tr>
            <td>ж</td>
            <td>j</td>
          </tr>
          <tr>
            <td>з</td>
            <td>z</td>
          </tr>
          <tr>
            <td>и</td>
            <td>i</td>
          </tr>
          <tr>
            <td>й</td>
            <td>y</td>
          </tr>
          <tr>
            <td>к</td>
            <td>k</td>
          </tr>
          <tr>
            <td>л</td>
            <td>l</td>
          </tr>
          <tr>
            <td>м</td>
            <td>m</td>
          </tr>
          <tr>
            <td>н</td>
            <td>n</td>
          </tr>
          <tr>
            <td>о</td>
            <td>o</td>
          </tr>
          <tr>
            <td>п</td>
            <td>p</td>
          </tr>
          <tr>
            <td>р</td>
            <td>r</td>
          </tr>
          <tr>
            <td>с</td>
            <td>s</td>
          </tr>
          <tr>
            <td>т</td>
            <td>t</td>
          </tr>
          <tr>
            <td>у</td>
            <td>u</td>
          </tr>
          <tr>
            <td>ф</td>
            <td>f</td>
          </tr>
          <tr>
            <td>х</td>
            <td>x</td>
          </tr>
          <tr>
            <td>ц</td>
            <td>s</td>
          </tr>
          <tr>
            <td>ч</td>
            <td>ch</td>
          </tr>
          <tr>
            <td>ш</td>
            <td>sh</td>
          </tr>
          <tr>
            <td>ы</td>
            <td>i</td>
          </tr>
          <tr>
            <td>э</td>
            <td>e</td>
          </tr>
          <tr>
            <td>ю</td>
            <td>yu</td>
          </tr>
          <tr>
            <td>я</td>
            <td>ya</td>
          </tr>
          <tr>
            <td>ў</td>
            <td>o‘</td>
          </tr>
          <tr>
            <td>ғ</td>
            <td>g‘</td>
          </tr>
          <tr>
            <td>қ</td>
            <td>q</td>
          </tr>
          <tr>
            <td>ҳ</td>
            <td>h</td>
          </tr>
          <tr>
            <td>е</td>
            <td>ye</td>
          </tr>
        </tbody>
      </div>
    </>
  );
}
