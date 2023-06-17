


 var trackDetails='';
 var returnDetails= "";
 var orderDetails= "";
 var profleDetails= '';

function  trackOrder(){

   trackDetails = ` <h1 class="t-order">My ORDER</h1>
   <div class="product-details row">
       <hr>
       <div class="col-3"> <img src="PNG FILES/Products listing page/product-1.png" height="200"
               width="200" alt="image not found">
       </div>
       <div class="discription col-4">
           <h3>Your Favorite Premium Quality Natural...</h3>
           <h4>Color:multicolor</h4>
           <h4> Seller:krishnapoojabhandar</h4>
       </div>
       <div class="col-2">
           <h2> Rs 1000</h2>
       </div>
       <div class="col-3">
           <h3>Deliver expected by july 28</h3>
           <h4> Your Order has been placed </h4>
           <h3><a href="">Track Your Order</a></h3>
       </div>

       <hr>
   </div>
`;
   
    // alert("hello")
   
  
    document.querySelector(".items").innerHTML=trackDetails;
  }
  function returnOrder(){
    returnDetails = `     <div class="return-order">
    <div class="row">
        <div class="col">
            <div class="main-top">
                <h2>RETURN ORDERS</h2>
            </div>
        </div>
        <div class="col">
            <div class="sort ">
                <p>SORT BY </p>
            </div>
            <div class="col">
                <select name="" id="">
                    <option value="">Prise(Low to How</option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </div>
        </div>

    </div>
    <hr>
    <div class="row">
        <div class="col-4 ">
            <h4> Order No:0D19SDFDDBJE789I9</h4>
            <img src="./PNG FILES/Products listing page/product-1.png" height="190px" width="200px"
                alt="no image">
        </div>
        <div class="col">
            <h5>Indus Valley Disposable <br>Face mask Pack of 50 pc... </h5>
            <div class="font">
                <img src="./PNG FILES/Product view page s/Group -3@2x.png" alt="" height="20px">
            </div>
            <div class="datail">
                <p>color:multicolor</p>
                <p>Seller: Krisnapoojabhandar</p>
                <p>RS 1099.0 </p>
                <p style="text-decoration: line-through;" >RS 2748.0</p>
                <p>(60% off)</p>
            </div>
        </div>
        <div class="col-2 offset-2">
            <h3>retunred</h3>

            <a href=""><em> ?</em> Need Help?</a>
        </div>
    </div>
    <div class="row">
        <img src="Return.png" alt="" id="rtrnitem">
        <img src="Pickup.png" alt="" id="pickupitem">
        <hr id="line">
        <img src="Polygon 5.png" alt="" id="pointer">
        <input type="range" style="background-color: red;">
        <p id="delivered">Delivered on Jan 09, 2020</p>


    </div>
    <div class="col-12">
        <h3> Replacement completed </h3> <span> Replacement Id: 67658964898658</span>
    </div>
    <div class="col-12">
        <p>We have completed your request </p>
    </div>`;
    document.querySelector(".items").innerHTML=returnDetails;
    
  }

  function myOrder(){
    orderDetails=`                   <div class="track">
    <h1 class="t-order">TRACK ORDER</h1>
    <div class="product-details row">
        <hr>
        <div class="col-3"> <img src="PNG FILES/Products listing page/product-1.png" height="200"
                width="200" alt="image not found">
        </div>
        <div class="discription col-4">
            <h3>Your Favorite Premium Quality Natural...</h3>
            <h4>Color:multicolor</h4>
            <h4> Seller:krishnapoojabhandar</h4>
        </div>
        <div class="col-2">
            <!-- <h2> Rs 1000</h2> -->
        </div>
        <div class="col-3">
            <h3>Deliver expected by july 28</h3>
            <h4> Your Order has been placed </h4>
            <h3><a href="">Track Your Order</a></h3>
        </div>
 
        <hr>
    </div>
    <input type="range" style="color: orange;">
    <p id="delivered">Shifting yet to be delivery</p>
    <table>
        <tr>
            <td>tue 21  feb</td>
            <td>8pm</td>
            <td>New Delhi</td>
            <td>your order has dispached from the dilvery</td>
        </tr>
        <tr>
            <td>tue 21  feb</td>
            <td>8pm</td>
            <td>New Delhi</td>
            <td>your order has dispached from the dilvery</td>
        </tr>
        <tr>
            <td>tue 21  feb</td>
            <td>8pm</td>
            <td>New Delhi</td>
            <td>your order has dispached from the dilvery</td>
        </tr><tr>
            <td>tue 21  feb</td>
            <td>8pm</td>
            <td>New Delhi</td>
            <td>your order has dispached from the dilvery</td>
        </tr>
    </table>
   </div>`;
   document.querySelector(".items").innerHTML=orderDetails;
}

   function myProfile(){
    profleDetails= `
    <div class=" my-profile col">
        <div class="row ">
            <h3 class='col'>MY PROFIL</h3>
            <hr>
        </div>
        <div class="row about">
            <div class="col ">
                <h6>Mobile</h6>
                <h6>Full name</h6>
                <h6>Email id</h6>
                <h6>gender</h6>
                <h6>date of birth</h6>
                <h6>location</h6>
                <h6>alternate mobile</h6>
                <h6>nice name</h6>
            </div>
            <div class="col">
                <h6>6556363546</h6>
                <h6>nemma nejmkeik</h6>
                <h6>name@gmail.com</h6>
                <h6>male</h6>
                <h6>not able</h6>
                <h6>not able</h6>
                <h6>alternate mobile</h6>
                <h6>abrham</h6>
            </div>
        </div>
        <!-- Edit button  -->
        <button class=" btn-2 ">Edit</button>
    </div>`;
    document.querySelector(".items").innerHTML=profleDetails;

   }

 
  
