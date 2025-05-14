interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Anterior
      </button>

      <p className="text-lg font-semibold">
        Página {currentPage} de {totalPages}
      </p>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>
  );
};
