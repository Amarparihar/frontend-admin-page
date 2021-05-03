import { Link } from "react-router-dom";
export default function ProductList(){
    return(
        <>
            <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the  
                            official DataTables documentation.</p>

            <Link to="/productcreate">
                <button className="btn btn-primary">Create Product</button>
            </Link>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>ID</th>
                                            <th>Brand</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        <tr>
                                            <td>boat543 Earphone</td>
                                            <td>12345</td>
                                            <td>Boat</td>
                                            <td>Black,wired</td>
                                            <td>1000</td>
                                           <td>
                                               <Link to="/productedit/1">
                                                   <button className="btn btn-info">Edit Product</button>
                                               </Link>
                                           </td>

                                        </tr>
                                        <tr>
                                            <td>JBL100 Earphone</td>
                                            <td>1345</td>
                                            <td>JBL</td>
                                            <td>Black, Wireless</td>
                                            <td>2000</td>
                                            <td>
                                                <Link to="/productedit/2">
                                                    <button className="btn btn-info">Edit Product</button>
                                                </Link>
                                            </td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        </>
    )
}