import { useQuery } from '@tanstack/react-query';

import { getBanners } from '../../apis/banner';

export const useBannerQuery = () => {
  return useQuery({
    queryKey: ['banners'],
    queryFn: () => getBanners(),
  });
};
