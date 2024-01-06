
const Update = ({ products }) => {
   
    return (
        <div >
        <input type="checkbox" id={`product-${products._id}`} className="modal-toggle" />
        <div className="modal" role="dialog">
            <div className="modal-box bg-white">
           <form >

           <div>
             <div className=" bg-white flex justify-between mb-2 text-white font-semibold">
                 <label className="text-sm text-white font-semibold">Email</label>

             </div>
             <input type="text" name="email" id="email" defaultValue={products.email} placeholder="email" className="w-full px-3 py-2 border rounded-md bg-gray-500 text-white border-none" />
         </div>

        <button
        type="submit"
        className="btn btn-ghost text-xl font-bold">Update</button>
           </form>
                   <label htmlFor={`product-${products._id}`} className="btn mt-2">Close!</label>
               </div>
            </div>
        </div>

    );
};

export default Update;