import { useRef, useState } from 'react';
import { SnailDraggableFade } from '..';
import { SnailDraggableRef } from '../interface';
import { Button } from 'antd';

const Demo3 = () => {

  const fadeRef = useRef<SnailDraggableRef>(null);

  const [scale, setScale] = useState<number>(100);
  const [showSlider, setShowSlider] = useState<boolean>(true);

  const onLarge = () => {
    const newScale = scale * 2
    if (newScale <= 3600) {
      setScale(newScale);
    }
  }

  const onLess = () => {
    const newScale = scale / 2
    if (newScale >= 25) {
      setScale(newScale);
    }
  }

  const onReset = () => {
    fadeRef.current && fadeRef.current.reset();
    setScale(100);
  }

  const onSetShowSlider = () => {
    setShowSlider(!showSlider);
  }

  return (
    <div className='w-full h-fit'>

      <div className='p-4 flex flex-row items-center'>
        <Button className='rounded-sm bg-gray-50 mr-2' onClick={onLarge}>放大</Button>
        <Button className='rounded-sm bg-gray-50 mr-2'  onClick={onLess}>缩小</Button>
        <Button className='rounded-sm bg-gray-50 mr-2'  onClick={onReset}>重置</Button>
        <Button className='rounded-sm bg-gray-50'  onClick={onSetShowSlider}>{showSlider ?  '隐藏' : '展示'} Slider</Button>
      </div>

      <SnailDraggableFade
        nodeRef={fadeRef}
        uedImg="http://www.wangxianqiao.cn/img/avatar/snail.png"
        realImg="http://www.wangxianqiao.cn/img/avatar/snail.png"
        scale={scale / 100}
        opacity={50}
        showSlider={showSlider}
      />
    </div>
  )
}

export default Demo3;