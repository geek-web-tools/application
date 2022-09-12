import React, { useState, useRef } from 'react';

import { SlotMachine } from '@lucky-canvas/react';

function getRandom(n: number, m: number) {
  const num = Math.floor(Math.random() * (m - n + 1) + n);
  return num;
}

const Lucky = () => {
  const [slots] = useState([{ speed: 20 }, { speed: 52, direction: -1 }, { speed: 30 }]);

  const [prizes] = useState([
    {
      fonts: [{ text: '凉拌荆芥', fontColor: '#fff', top: 140 }],
    },
    {
      fonts: [{ text: '豆角炒肉', fontColor: '#fff', top: 140 }],
    },
    {
      fonts: [{ text: '羊肉饺子', fontColor: '#fff', top: 140 }],
    },
    {
      fonts: [{ text: '西红柿鸡蛋面', fontColor: '#fff', top: 140 }],
    },
    {
      fonts: [{ text: '土豆鸡块', fontColor: '#fff', top: 140 }],
    },
    {
      fonts: [{ text: '牛腩面', fontColor: '#fff', top: 140 }],
    },
    {
      fonts: [{ text: '小蛋糕', fontColor: '#fff', top: 140 }],
    },
    {
      fonts: [{ text: '烤鱼', fontColor: '#fff', top: 140 }],
    },
    {
      fonts: [{ text: '披萨', fontColor: '#fff', top: 140 }],
    },
    {
      fonts: [{ text: '麻辣香锅', fontColor: '#fff', top: 140 }],
    },
    {
      fonts: [{ text: '小龙虾', fontColor: '#fff', top: 140 }],
    },
  ]);

  const myLucky = useRef();

  return (
    <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full flex flex-col items-center justify-center ">
      <p className="font-bold text-md text-black dark:text-white">今天吃什么？</p>
      <div className="bg-primary-500 rounded-2xl my-4 ">
        <SlotMachine ref={myLucky} width="300px" height="300px" slots={slots} prizes={prizes} />
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          className="bg-gradient-to-r from-primary-400 to-primary-500 rounded-md w-36 h-12 text-white"
          onClick={() => {
            // @ts-ignore hack
            myLucky.current.play();
          }}
        >
          开始
        </button>
        <button
          type="button"
          className="bg-gradient-to-r from-primary-400 to-primary-500 rounded-md w-36 h-12 text-white"
          onClick={() => {
            // @ts-ignore hack
            myLucky.current.stop(getRandom(0, prizes.length - 1));
          }}
        >
          停止
        </button>
      </div>
    </div>
  );
};
export default Lucky;
