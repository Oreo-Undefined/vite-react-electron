import { useParams } from 'react-router-dom';

export default function Dynamic(props) {
  const { id } = useParams();

  return (
    <div>
      Dynamic-{ id }
    </div>
  );
}