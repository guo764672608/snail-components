import { useRef, useState } from 'react';
import { Button } from 'antd';
import { SnailDraggableRef } from '../interface';
import { SnailDraggable } from '..';

const Demo1 = () => {

  const dragRef = useRef<SnailDraggableRef>(null);

  const [scale, setScale] = useState<number>(100);

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
    setScale(100);
    dragRef.current?.reset();
  }

  return (
    <div className='w-64 h-fit overflow-hidden'>
      <div className='p-4 flex flex-row items-center'>
        <Button className='rounded-sm bg-gray-50 mr-2' onClick={onLarge}>放大</Button>
        <Button className='rounded-sm bg-gray-50 mr-2' onClick={onLess}>缩小</Button>
        <Button className='rounded-sm bg-gray-50 mr-2' onClick={onReset}>重置</Button>
      </div>

      <SnailDraggable
        nodeRef={dragRef}
        img={"http://www.wangxianqiao.cn/img/avatar/snail.png"}
        scale={scale / 100}
      />
    </div>
  )
}

export default Demo1;