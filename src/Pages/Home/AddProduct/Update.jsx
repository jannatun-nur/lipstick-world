const Update = ({ products }) => {
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const category = form.target.value;
    const price = form.taget.value;
    const update = { category, price };
    console.log(update);
  };

  return (
    <div>
      <input
        type="checkbox"
        id={`product-${products._id}`}
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white">
          <form onSubmit={handleUpdate}>
            <div>
              <div className="flex justify-between mb-2 text-gray-800 font-semibold">
                <label className="text-sm text-gray-800 lg:text-xl font-semibold">
                  Category
                </label>
              </div>
              <select
                name="category"
                id="Usercategory"
                className="w-full px-3 py-2 border rounded-md bg-white border-pink-600 hover:border-pink-300"
              >
                <option value="Lipstick Wham A20">Lipstick Wham A20</option>
                <option value="Pink Nouveu A32">Pink Nouveu A32</option>
                <option value="Viva Glam Nicki A38">Viva Glam Nicki A38</option>
                <option value="Show Orchid A42">Show Orchid A42</option>
                <option value="Russian Red A1">Russian Red A12</option>
                <option value="Lady Denger A10">Lady Denger A10</option>
              </select>
            </div>
            <div>
              <div className="flex justify-between mb-2 text-white font-semibold">
                <label className="text-sm text-gray-800 pt-2 text-xl font-semibold">
                  Price
                </label>
              </div>
              <select
                type="text"
                name="price"
                id="price"
                placeholder="price"
                className="w-full px-3 py-2 border text-blaack rounded-md bg-white  border-pink-600 hover:boder-pink-300"
              >
                <option value="option1">$</option>
                <option value="$350">350</option>
                <option value="$270">270</option>
                <option value="$340">340</option>
                <option value="$290">290</option>
                <option value="$300">300</option>
                <option value="$210">210</option>
              </select>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-pink-600 mt-4 text-white rounded-xl text-xl font-semibold"
            >
              Update
            </button>
          </form>
          <label
            htmlFor={`product-${products._id}`}
            className="flex justify-center  py-2 rounded-lg bg-white border border-pink-500 text-pink-600 font-semibold mt-2"
          >
            Back
          </label>
        </div>
      </div>
    </div>
  );
};

export default Update;
