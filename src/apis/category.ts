export interface Category {
  id: number;
  name: string;
}

export const getProductCategories = async () => {
  const response = await fetch('/api/admin/categories');
  const data: Category[] = await response.json();
  return data;
};
