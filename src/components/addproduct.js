import { useState } from "react";

export default function AddProduct(){


    const[name, setName] = useState('name');
    const[price, setPrice] = useState('price');
    const[desc, setDesc] = useState('desc');

    function nameHandler(e){
        e.target.preventDefault();
        setName(e.target.value);
    }
    function priceHandler(e){
        e.target.preventDefault();
        setPrice(e.target.value);
    }
    function descHandler(e){
        e.target.preventDefault();
        setDesc(e.target.value);
    }
    function handleSubmit(e){
        e.target.preventDefault();
        console.log(name)
    }


    return(
        <div className="w-50 m-auto pt-5">
            <form class="row">
            <div class="col-md-6">
              <label class="form-label">Product Name</label>
              <input onChange={(e)=>nameHandler(e)} type="text" class="form-control" />
            </div>
            <div class="col-md-6">
              <label class="form-label">Price</label>
              <input onChange={(e)=>priceHandler(e)} type="text" class="form-control" />
            </div>
            <div class="col-md-12">
              <label class="form-label">Description</label>
              <input onChange={(e)=>descHandler(e)} type="text" class="form-control" />
            </div>
            
            <div class="col-md-12">
              <br />
              <button class="btn btn-primary form-control">Submit</button>
            </div>
        </form>
        </div>
    );
}