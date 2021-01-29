import React from 'react';
import SkeletonElement from './SkeletonElement';

const BlogSkeleton = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-blog">
        <SkeletonElement type="title" />
        <SkeletonElement type="text-lg" />
        <SkeletonElement type="text-md" />
        <SkeletonElement type="text-sm" />
        <SkeletonElement type="button" />
      </div>
    </div>
  );
};

export default BlogSkeleton;
