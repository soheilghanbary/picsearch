import { Skeleton } from "./ui/skeleton";

const ProductSkeleton = () => {
  const skeletonCount = 12;
  const skeletonArray = Array.from({ length: skeletonCount }, (_, i) => (
    <Skeleton key={i} className="aspect-square bg-muted rounded-lg" />
  ));
  return <>{skeletonArray}</>;
};

export default ProductSkeleton;