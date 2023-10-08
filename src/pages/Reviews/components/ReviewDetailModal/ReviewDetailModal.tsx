import { useNavigate } from 'react-router-dom';
import { Review } from '../../../../apis/review';
import ModalPortal from '../../../../components/ModalPortal';
import { usePageActionContext } from '../../../../hooks/contexts';
import { useReviewDeleteMutation } from '../../../../hooks/queries';
import { convertToDateWithoutTime } from '../../../../utils';
import { useReviewSearchQueryActionContext } from '../../hooks';
import {
  contentTitle,
  deleteButton,
  imageWrapper,
  reviewContent,
  reviewImage,
  reviewUserName,
  section,
  title,
} from './reviewDetailModal.css';
import { ROUTE } from '../../../../constants';

interface ReviewDetailModalProps {
  review: Review;
  onClose: () => void;
}

const ReviewDetailModal = ({ review, onClose }: ReviewDetailModalProps) => {
  const { id, userName, image, content, productName, createdAt } = review;
  const { mutate } = useReviewDeleteMutation();

  const { resetSearchQuery } = useReviewSearchQueryActionContext();
  const { resetPage } = usePageActionContext();

  const navigate = useNavigate();

  const handleReviewDelete = () => {
    if (!window.confirm('리뷰를 삭제하시겠습니까?')) {
      return;
    }

    mutate(id, {
      onSuccess: () => {
        resetSearchQuery();
        resetPage();
        onClose();
      },
      onError: (error) => {
        if (error instanceof Response) {
          if (error.status === 401) {
            alert('로그인이 필요합니다.');
            navigate(ROUTE.HOME, { replace: true });
            return;
          }
        }

        alert('상품 추가에 실패했습니다.');
      },
    });
  };

  return (
    <ModalPortal onClose={onClose}>
      <section className={section}>
        <h2 className={title}>{productName}</h2>
        <p>
          {convertToDateWithoutTime(createdAt)}
          <strong className={reviewUserName}>{userName}</strong>
        </p>
        <div className={imageWrapper}>
          {image && (
            <img
              src={image}
              className={reviewImage}
              height={180}
              alt={productName}
            />
          )}
        </div>
        <section>
          <h3 className={contentTitle}>리뷰 내용</h3>
          <p className={reviewContent}>{content}</p>
        </section>
        <button
          type='button'
          className={deleteButton}
          onClick={handleReviewDelete}
        >
          리뷰 삭제
        </button>
      </section>
    </ModalPortal>
  );
};

export default ReviewDetailModal;
