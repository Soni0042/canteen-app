const SnackCard = ({ snack, onOrder }) => {
  return (
    <div className="p-5 bg-white rounded-2xl shadow hover:shadow-xl transition duration-300">
      
      {/* Snack Name */}
      <h2 className="text-lg font-semibold">{snack.name}</h2>

      {/* Price */}
      <p className="text-gray-600 mt-1">₹{snack.price}</p>

      {/* Orders Count */}
      <p className="text-sm text-gray-500 mt-1">
        Orders: {snack.ordersCount}
      </p>

      {/* Button */}
      <button
        onClick={() => onOrder(snack)}
        className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
      >
        Order Now
      </button>
    </div>
  );
};

export default SnackCard;