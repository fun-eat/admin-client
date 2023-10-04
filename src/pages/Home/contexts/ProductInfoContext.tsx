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
  categoryId: string;
}

type ProductInfoAction = ChangeEventHandler<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export const ProductInfoValueContext = createContext<ProductInfoValue | null>(
  null
);
export const ProductInfoActionContext = createContext<ProductInfoAction | null>(
  null
);

const ProductInfoProvider = ({ children }: PropsWithChildren) => {
  const [productInfo, setProductInfo] = useState({
    name: '',
    price: '',
    content: '',
    categoryId: '',
  });

  const handleValueChange: ProductInfoAction = (e) => {
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

  return (
    <ProductInfoActionContext.Provider value={handleValueChange}>
      <ProductInfoValueContext.Provider value={productInfo}>
        {children}
      </ProductInfoValueContext.Provider>
    </ProductInfoActionContext.Provider>
  );
};

export default ProductInfoProvider;
