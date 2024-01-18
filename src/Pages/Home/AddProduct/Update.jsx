const Update = ({ products }) => {

  const handleUpdate = (event) => {
   event.preventDefault();
   const form = event.currentTarget;
   const categoryInput = form.querySelector('#Usercategory');
   const priceInput = form.querySelector('#price');
   const category = categoryInput.value;
   const price = priceInput.value;
   const updateOrder = { category, price };
   console.log(updateOrder);

   fetch(`http://localhost:5000/updates/${products._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ updateOrder })
  })
  
   .then(res => res.json())
   .then(data => {
     console.log(data);
   })
   .catch(error => {
     console.error('Error:', error);
   });
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
                  <input  name="category"
                id="Usercategory"
                className="w-full px-3 py-2 border rounded-md bg-white border-pink-600 hover:border-pink-300" />
                </label>
              </div>
            
            </div>
            <div>
              <div className="flex justify-between mb-2 text-white font-semibold">
                <label className="text-sm text-gray-800 pt-2 lg:text-xl font-semibold">
                  Price
                  <input type="text"
                name="price"
                id="price"
                placeholder="price"
                className="w-full px-3 py-2 border text-blaack rounded-md bg-white  border-pink-600 hover:boder-pink-300"  />
                </label>
              </div>
              
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
