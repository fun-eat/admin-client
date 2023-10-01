export interface CategoryResponse {
  id: number;
  name: string;
  image: string;
}

export const getProductCategories = async () => {
  const response = await fetch('/api/admin/categories');
  const data: CategoryResponse[] = await response.json();
  return data;
};
