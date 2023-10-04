import { PropsWithChildren, createContext, useState } from 'react';
import { RequestQuery, ResponseData } from '../apis/type';

interface PageAction {
  resetPage: () => void;
  onPageChange: (
    data: ResponseData[],
    totalElements: number,
    handleValueChange: (query: RequestQuery) => void
  ) => (page: number) => void;
}

export const PageValueContext = createContext<number | null>(null);
export const PageActionContext = createContext<PageAction | null>(null);

const INIT_PAGE_LAST_IDS = [null];
const getLastId = (data: ResponseData[]) => data[data.length - 1].id as number;

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
      handleValueChange: (query: RequestQuery) => void
    ) =>
    (page: number) => {
      setCurrentPage(page);

      if (page < currentPage) {
        handleValueChange({
          id: pageLastIds[page - 1],
          totalElements,
          prePage: page - 1,
        });
        return;
      }

      const currentLastProductId = getLastId(data);

      setPageLastIds((prev) => [...prev, currentLastProductId]);
      handleValueChange({
        id: currentLastProductId,
        totalElements,
        prePage: currentPage,
      });
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
