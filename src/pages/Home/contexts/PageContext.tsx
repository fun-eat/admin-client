import { PropsWithChildren, createContext, useState } from 'react';
import { useProductSearchQueryActionContext } from '../hooks';
import { getLastProductId } from '../../../utils';

import { Product } from '../../../apis/product';

interface PageAction {
  resetPage: () => void;
  onPageChange: (
    products: Product[],
    totalElements: number
  ) => (page: number) => void;
}

export const PageValueContext = createContext<number | null>(null);
export const PageActionContext = createContext<PageAction | null>(null);

const INIT_PAGE_LAST_IDS = [null];

const PageProvider = ({ children }: PropsWithChildren) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLastIds, setPageLastIds] =
    useState<(number | null)[]>(INIT_PAGE_LAST_IDS);

  const handleValueChange = useProductSearchQueryActionContext();

  const resetPage = () => {
    setCurrentPage(1);
    setPageLastIds(INIT_PAGE_LAST_IDS);
  };

  const onPageChange =
    (products: Product[], totalElements: number) => (page: number) => {
      setCurrentPage(page);

      if (page < currentPage) {
        handleValueChange({ productId: pageLastIds[page - 1], totalElements });
        return;
      }

      const currentLastProductId = getLastProductId(products);

      setPageLastIds((prev) => [...prev, currentLastProductId]);
      handleValueChange({ productId: currentLastProductId, totalElements });
    };

  const action = {
    resetPage,
    onPageChange,
  };

  return (
    <PageActionContext.Provider value={action}>
      <PageValueContext.Provider value={currentPage}>
        {children}
      </PageValueContext.Provider>
    </PageActionContext.Provider>
  );
};

export default PageProvider;
