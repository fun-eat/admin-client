import ReviewDetailModal from '../ReviewDetailModal';

import { Review } from '../../../../apis/review';
import { td } from '../../../../components/Table/table.css';
import { useDisclosure } from '../../../../hooks';
import { convertToDate } from '../../../../utils';

interface ReviewRowProps {
  review: Review;
}

const ReviewRow = ({ review }: ReviewRowProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id, userName, content, productName, createdAt } = review;

  return (
    <>
      <tr onClick={onOpen}>
        <td className={td['right']}>{id}</td>
        <td className={td['left']}>{userName}</td>
        <td className={td['left']}>{content}</td>
        <td className={td['left']}>{productName}</td>
        <td className={td['left']}>{convertToDate(createdAt)}</td>
      </tr>
      {isOpen && <ReviewDetailModal review={review} onClose={onClose} />}
    </>
  );
};

export default ReviewRow;
