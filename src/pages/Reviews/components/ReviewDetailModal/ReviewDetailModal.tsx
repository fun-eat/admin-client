import { Review } from '../../../../apis/review';
import ModalPortal from '../../../../components/ModalPortal';
import { convertToDateWithoutTime } from '../../../../utils';
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

interface ReviewDetailModalProps {
  review: Review;
  onClose: () => void;
}

const ReviewDetailModal = ({ review, onClose }: ReviewDetailModalProps) => {
  const { userName, image, content, productName, createdAt } = review;

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
        <button type='button' className={deleteButton}>
          리뷰 삭제
        </button>
      </section>
    </ModalPortal>
  );
};

export default ReviewDetailModal;
