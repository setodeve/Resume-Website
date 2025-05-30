function SkeletonProjectCard() {
  return (
    <div className="h-full">
      <div className="group h-full flex flex-col relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
        <div className="animate-pulse">
          <div className="relative h-48 bg-gray-200 dark:bg-gray-700"></div>
          <div className="flex flex-col flex-grow p-6">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonProjectCard;