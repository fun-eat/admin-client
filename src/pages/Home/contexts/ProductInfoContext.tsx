import {
  ChangeEventHandler,
  PropsWithChildren,
  createContext,
  useState,
} from 'react';

interface ProductInfoValue {
  name: string;
  price: string;
  content: string;
  categoryId: number;
}

interface ProductInfoAction {
  handleValueChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
  setCurrentProductInfo: (productInfo: ProductInfoValue) => void;
  resetProductInfo: () => void;
}

export const ProductInfoValueContext = createContext<ProductInfoValue | null>(
  null
);
export const ProductInfoActionContext = createContext<ProductInfoAction | null>(
  null
);

const INIT_PRODUCT_INFO = {
  name: '',
  price: '',
  content: '',
  categoryId: 0,
};

const ProductInfoProvider = ({ children }: PropsWithChildren) => {
  const [productInfo, setProductInfo] = useState(INIT_PRODUCT_INFO);

  const handleValueChange: ProductInfoAction['handleValueChange'] = (e) => {
    const {
      dataset: { label },
      value,
    } = e.target;

    if (!label) return;

    setProductInfo((prev) => ({
      ...prev,
      [label]: value,
    }));
  };

  const setCurrentProductInfo = (productInfo: ProductInfoValue) => {
    setProductInfo(productInfo);
  };

  const resetProductInfo = () => {
    setProductInfo(INIT_PRODUCT_INFO);
  };

  const action = {
    handleValueChange,
    setCurrentProductInfo,
    resetProductInfo,
  };

  return (
    <ProductInfoActionContext.Provider value={action}>
      <ProductInfoValueContext.Provider value={productInfo}>
        {children}
      </ProductInfoValueContext.Provider>
    </ProductInfoActionContext.Provider>
  );
};

export default ProductInfoProvider;
