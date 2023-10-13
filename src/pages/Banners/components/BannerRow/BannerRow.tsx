import { Banner } from '../../../../apis/banner';
import { td } from '../../../../components/Table/table.css';

import { bannerImage, bannerLink, deleteButton } from './bannerRow.css';

interface BannerRowProps {
  banner: Banner;
}

const BannerRow = ({ banner }: BannerRowProps) => {
  const { id, image, link } = banner;

  // TODO 배너 삭제 클릭 이벤트

  return (
    <tr>
      <td className={td['right']}>{id}</td>
      <td className={td['center']}>
        <img src={image} className={bannerImage} alt={`배너 아이디 ${id}`} />
      </td>
      <td className={td['left']}>
        <a href={link} className={bannerLink} target='_blank' rel='noopener'>
          {link}
        </a>
      </td>
      <td className={td['center']}>
        <button type='button' className={deleteButton}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default BannerRow;
