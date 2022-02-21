import { useDrag } from 'react-dnd';
import { convertFromToken } from '../../helpers';

const DraggableSquare = ({ token }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'DraggableSquare',
    item: { token },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    }),
  }));

  const color = convertFromToken(token);

  return (
    <div
      ref={drag}
      className="square-wrapper"
      style={{
        opacity: isDragging ? 0.5 : 1
      }}
    >
      <div className={`square ba bw1 br3 bg-${color}`} />
    </div>
  );
};

export default DraggableSquare;
