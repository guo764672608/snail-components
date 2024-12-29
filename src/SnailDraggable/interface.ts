import { MutableRefObject } from "react";

export interface SnailPosition {
  x: number;
  y: number;
}

type PositionHandle = (p: SnailPosition) => void;

export interface SnailDraggableRef {
  reset: () => void;
}

export interface SnailDraggableProps {
  nodeRef?: MutableRefObject<SnailDraggableRef | null> | null | undefined;
  className?: string;
  img: string;
  defaultPosition?: SnailPosition;
  currentPosition?: SnailPosition;
  scale?: number;
  onDrag?: PositionHandle;
}


export interface SnailDraggableSpiltProps {
  nodeRef?: MutableRefObject<SnailDraggableRef | null> | null | undefined;
  className?: string;
  uedImg: string;
  realImg: string;
  defaultPosition?: SnailPosition;
  currentPosition?: SnailPosition;
  scale?: number;
}

export interface SnailDraggableFadeProps extends SnailDraggableSpiltProps {
  opacity?: number;
  showSlider?: boolean;
}

