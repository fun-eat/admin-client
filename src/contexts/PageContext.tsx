import { PropsWithChildren, createContext, useState } from 'react';
import { RequestQuery, ResponseData } from '../apis/type';

interface PageAction {
  resetPage: () => void;
  onPageChange: (
    data: ResponseData[],
    totalElements: number,
    handleValueChange: (query: RequestQuery) => void,
    key?: string
  ) => (page: number) => void;
}

export const PageValueContext = createContext<number | null>(null);
export const PageActionContext = createContext<PageAction | null>(null);

const INIT_PAGE_LAST_IDS = [null];
const getLastId = (data: ResponseData[], key: string) =>
  data[data.length - 1][key] as number;

const PageProvider = ({ children }: PropsWithChildren) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLastIds, setPageLastIds] =
    useState<(number | null)[]>(INIT_PAGE_LAST_IDS);

  const resetPage = () => {
    setCurrentPage(1);
    setPageLastIds(INIT_PAGE_LAST_IDS);
  };

  const onPageChange =
    (
      data: ResponseData[],
      totalElements: number,
      handleValueChange: (query: RequestQuery) => void,
      key = 'id'
    ) =>
    (page: number) => {
      setCurrentPage(page);

      if (page < currentPage) {
        handleValueChange({ id: pageLastIds[page - 1], totalElements });
        return;
      }

      const currentLastProductId = getLastId(data, key);

      setPageLastIds((prev) => [...prev, currentLastProductId]);
      handleValueChange({ id: currentLastProductId, totalElements });
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
