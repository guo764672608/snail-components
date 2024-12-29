import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import cn from "classnames";
import { SnailDraggableFadeProps, SnailDraggableProps, SnailDraggableSpiltProps, SnailPosition } from "./interface";
import { useEffect, useImperativeHandle, useState } from "react";
import { Slider } from "antd";

const DefaultPosition = { x: 0, y: 0 };

export const SnailDraggable = (props: SnailDraggableProps) => {

  const {
    nodeRef,
    className = "",
    img = "",
    defaultPosition = { ...DefaultPosition },
    currentPosition = { ...DefaultPosition },
    scale = 1,
    onDrag
  } = props;

  const [position, setPosition] = useState(currentPosition);

  useImperativeHandle(nodeRef, () => {
    return {
      reset: () => {
        setPosition({ ...DefaultPosition });
      }
    }
  });

  const onStartAction = () => {

  }

  const onDragAction = (_: DraggableEvent, data: DraggableData) => {
    const newPosition = { x: data.x + data.deltaX, y: data.y + data.deltaY };

    if (onDrag) {
      onDrag(newPosition);
    } else {
      setPosition(newPosition);
    }
  }

  const onStopAction = () => {

  }

  return (<div className={cn("w-full h-fit overflow-hidden bg-gray-50", className)}>
    <Draggable
      defaultPosition={defaultPosition}
      position={onDrag ? currentPosition : position}
      scale={scale}
      onStart={onStartAction}
      onDrag={onDragAction}
      onStop={onStopAction}
    >
      <div>
        <img
          className="w-full h-fit"
          draggable={false}
          src={img}
          alt=""
          style={{ transform: `scale(${scale})` }}
        />
      </div>
    </Draggable>
  </div>);
}

export const SnailDraggableSpilt = (props: SnailDraggableSpiltProps) => {
  const {
    nodeRef,
    className = "",
    uedImg,
    realImg,
    defaultPosition = { ...DefaultPosition },
    currentPosition = { ...DefaultPosition },
    scale = 1
  } = props;

  const [position, setPosition] = useState(currentPosition);
  const [currentScale, setCurrentScale] = useState(scale);

  useEffect(() => {
    setCurrentScale(scale);
  }, [scale]);

  useImperativeHandle(nodeRef, () => {
    return {
      reset: () => {
        setPosition({ ...DefaultPosition });
        setCurrentScale(1);
      }
    }
  });

  const onDragAction = (newPosition: SnailPosition) => {
    setPosition(newPosition);
  }

  return (<div className={cn("grid grid-flow-col gap-[4px] bg-gray-50", className)}>
    {
      uedImg && realImg ? (<>
        <SnailDraggable
          img={uedImg}
          defaultPosition={defaultPosition}
          currentPosition={position}
          scale={currentScale}
          onDrag={onDragAction}
        />
        <SnailDraggable
          img={realImg}
          defaultPosition={defaultPosition}
          currentPosition={position}
          scale={currentScale}
          onDrag={onDragAction}
        />
      </>) : null
    }
  </div>);
}

export const SnailDraggableFade = (props: SnailDraggableFadeProps) => {
  const {
    nodeRef,
    className = "",
    uedImg,
    realImg,
    defaultPosition = { ...DefaultPosition },
    currentPosition = { ...DefaultPosition },
    scale = 1,
    opacity = 50,
    showSlider = true
  } = props;

  const [position, setPosition] = useState(currentPosition);
  const [currentScale, setCurrentScale] = useState(scale);
  const [currentOpacity, setCurrentOpacity] = useState(opacity);

  useEffect(() => {
    setCurrentScale(scale);
  }, [scale]);
  useImperativeHandle(nodeRef, () => {
    return {
      reset: () => {
        setPosition({ ...DefaultPosition });
        setCurrentScale(1);
      }
    }
  });

  const onChangeAction = (val: number) => {
    setCurrentOpacity(val);
  }

  const onDragAction = (_: DraggableEvent, data: DraggableData) => {
    const newPosition = { x: data.x + data.deltaX, y: data.y + data.deltaY };
    setPosition(newPosition);
  }

  return (<div className={cn("w-full h-fit bg-gray-50", className)}>

    {
      showSlider && (<div className="w-full py-[12px]">
        <Slider className="w-1/2 mx-auto" defaultValue={currentOpacity} min={0} max={100} onChange={onChangeAction} />
      </div>)
    }

    <div className="overflow-hidden">
      <Draggable
        defaultPosition={defaultPosition}
        position={position}
        onDrag={onDragAction}
      >
        <div className="relative w-full">
          <img
            className="absolute top-0 left-0 w-full h-fit"
            draggable={false}
            src={uedImg}
            alt=""
            style={{ transform: `scale(${currentScale})` }}
          />
          <img
            className="w-full h-fit"
            draggable={false}
            src={realImg}
            alt=""
            style={{ transform: `scale(${currentScale})`, opacity: currentOpacity / 100 }}
          />
        </div>
      </Draggable>
    </div>
  </div>);
}
