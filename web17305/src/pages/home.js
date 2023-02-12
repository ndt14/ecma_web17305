import header from "../components/header";
import footer from "../components/footer";
import data from '../../db.json' assert {type: 'json'};
import categoryy from "../components/category";

var homePage = function(){
  return `
  <!-- phần header -->
  ${header()}
  <!-- end header  -->
  <section class="myMain">
    <div class="container d-flex py-3">
      <a href="" class="text-light-emphasis text-decoration-none">Trang chủ</a>><h6 class="py-1">Nhà sách Tiki</h6>
    </div>
  </section>
  <!-- phần danh mục  -->
  <section class="myCategory my-3">
    <div class="container">
      <div class="row">
        ${categoryy()}
        <div class="col-md-9">
          <h4>Nhà sách Tiki</h4>
          <img src="/banner.png" class="img-fluid py-2" alt="banner">
          <nav class="nav">
            <a class="nav-link " href="#">Phổ biến</a>
            <a class="nav-link " href="#">Bán chạy</a>
            <a class="nav-link " href="#">Hàng mới</a>
            <a class="nav-link " href="#">Giá thấp</a>
            <a class="nav-link" href="#">Giá cao</a>

          </nav>
          <hr>
          <img src="/textTiki.png" class="img-thumbnail mx-3" alt="...">
          <img src="/freeShip.png" class="img-thumbnail" alt="...">
          <!-- phaafn sarn pham -->
          <div class="row">
          ${data.map(function(book,index){
            // console.log(book);
            if(`${book.id}` <= 18){
         return`
          <div class="col-md-3 box d-flex flex-column py-3">
            <img src="${book.images[0].base_url}" alt="" class="img" style="width: 200px;height: 200px;">
            <img src="/textTiki.png" alt="" class="tiki" style="width: 56px;height: 16px;">
            <span class="text-success">GIAO SIÊU TỐC 2H</span>

            <a href="/productDeatil/${book.id}"><p class="title">${book.name}</p></a>
            <div class="item"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> | <span>Đã bán 1000+</span></div>
            <div class="price">
                <p class="productPrice text-danger py-3">${book.current_seller.price} ₫  <span class="sale">25%</span></p>
               
            </div>
        </div>`
            }
        }).join('')}
</div>
        <!-- end product -->
        </div>
      </div>
    </div>
  </section>
  <!-- end danh mục  -->
 
     ${footer()}

   `
    
};
export default homePage;