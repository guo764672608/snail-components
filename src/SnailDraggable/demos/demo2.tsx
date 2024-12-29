import { useRef, useState } from 'react';
import { SnailDraggableSpilt } from '..';
import { SnailDraggableRef } from '../interface';
import { Button } from 'antd';

const Demo2 = () => {

  const spiltRef = useRef<SnailDraggableRef>(null);

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
    spiltRef.current && spiltRef.current.reset();
    setScale(100);
  }


  return (
    <div className=''>
      <div className='p-4 flex flex-row items-center'>
        <Button className='rounded-sm bg-gray-50 mr-2' onClick={onLarge}>放大</Button>
        <Button className='rounded-sm bg-gray-50 mr-2' onClick={onLess}>缩小</Button>
        <Button className='rounded-sm bg-gray-50 mr-2' onClick={onReset}>重置</Button>
      </div>

      <SnailDraggableSpilt
        nodeRef={spiltRef}
        uedImg="http://www.wangxianqiao.cn/img/avatar/snail.png"
        realImg="http://www.wangxianqiao.cn/img/avatar/snail.png"
        scale={scale / 100}
      />
    </div>
  )
}

export default Demo2;