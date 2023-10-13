import BannerRow from './components/BannerRow';

import { BANNER_COLUMNS, BANNER_COLUMNS_WIDTH } from '../../constants';
import {
  Colgroup,
  Table,
  TableBody,
  TableHeader,
} from '../../components/Table';
import { useDisclosure } from '../../hooks';
import { useBannerQuery } from '../../hooks/queries';

import {
  addButton,
  tableTitle,
  tableWrapper,
  title,
  titleWrapper,
} from './banners.css';

const Banners = () => {
  const { data: banners } = useBannerQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!banners) {
    return null;
  }

  return (
    <>
      <div className={titleWrapper}>
        <h1 className={title}>배너</h1>
        <button type='button' className={addButton} onClick={onOpen}>
          배너 추가
        </button>
      </div>
      <section className={tableWrapper}>
        <h2 className={tableTitle}>
          총 {banners.length.toLocaleString('ko-KR')}개의 상품이 검색되었습니다.
        </h2>
        <Table>
          <Colgroup widths={BANNER_COLUMNS_WIDTH} />
          <TableHeader columns={BANNER_COLUMNS} />
          <TableBody>
            {banners.map((banner) => (
              <BannerRow key={banner.id} banner={banner} />
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
};

export default Banners;
