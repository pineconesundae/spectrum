import { useDrop } from 'react-dnd';
import { convertFromToken } from '../../helpers';

const DroppableSquare = ({ idx, token, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'DraggableSquare',
    drop: (droppedItem) => onDrop(droppedItem, idx),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    }),
  }));

  const color = convertFromToken(token);

  return (
    <div
      ref={drop}
      className="square-wrapper"
      style={{
        opacity: isOver ? 0.5 : 1
      }}
    >
      <div className={`square ba bw1 br3 bg-${color}`} />
    </div>
  );
};

export default DroppableSquare;
