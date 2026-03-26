import { useState } from "react";
import { useSnacks } from "../hooks/useSnacks";
import SnackCard from "../components/snacks/SnackCard";
import OrderForm from "../components/orders/OrderForm";
import { useStudents } from "../hooks/useStudents";


const SnacksPage = () => {
  const { data: snacks, isLoading, isError } = useSnacks();
  const { data: students } = useStudents();

  const [selectedSnack, setSelectedSnack] = useState(null);

  // Loading State
  if (isLoading) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading snacks...
      </p>
    );
  }

  // Error State
  if (isError) {
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load snacks ❌
      </p>
    );
  }

  return (
    <div className="p-6">
      
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6 text-center">
        🍔 Snacks Menu
      </h1>

      {/* Empty State */}
      {snacks?.length === 0 ? (
        <p className="text-center text-gray-500">
          No snacks available
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {snacks.map((snack) => (
            <SnackCard
              key={snack.id}
              snack={snack}
              onOrder={setSelectedSnack}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedSnack && (
        <OrderForm
          snack={selectedSnack}
          students={students || []}
          onClose={() => setSelectedSnack(null)}
        />
      )}
    </div>
  );
};

export default SnacksPage;