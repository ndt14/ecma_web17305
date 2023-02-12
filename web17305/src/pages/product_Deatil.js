import footer from "../components/footer"
import header from "../components/header"
import data from '../../db.json' assert {type: 'json'};
// const prdId = new URLSearchParams(window.location.search).get('id')

var productDeatil = function(id){
    const book = data.find(function(item){
        return item.id == id;
    })
    return  ` 
   ${header()}
   <section class="myMain">
    <div class="container d-flex py-3">
      <a href="" class="text-light-emphasis text-decoration-none">Trang chủ</a>><h6 class="py-1">Nhà sách Tiki</h6>
    </div>
  </section>
    <div class="myProduct py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-5 d-block">
                    <div>
          <img src="${book.images[0].base_url}" class="img-fluid img-detail" alt="">
        </div>
        <div class="px-6 py-2">
          <img src="${book.images[0].small_url}" class="img-fluid img-detail-small" alt="">
          <img src="" class="img-fluid img-detail-small" alt="">
          <img src="" class="img-fluid img-detail-small" alt="">
          <img src="" class="img-fluid img-detail-small" alt="">
          <img src="" class="img-fluid img-detail-small" alt="">
                </div>
                </div>
                <div class="col-md-7">
                   <div class="d-flex">
                    <p>Tác giả: Ca Tây </p> &nbsp; <p>Đứng thứ 13 trong </p> &nbsp;  <p class="text-primary">Top 1000
                        Sách tư duy - Kỹ năng sống-bán chạy tháng này</p>
                   </div>
                   <h5 class="title">${book.name}</h5>
                   <div class="item"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><span class="text-secondary">(xem đánh giá)</span> | <span class="text-secondary">Đã bán 1000+</span></div>
                   <div class="price  py-3 my-2 d-flex">
                            <p class="text-danger fs-2 px-3">${book.current_seller.price} đ</p><p class="text-light-emphasis py-4"></p><p class="text-danger sale" >-25%</p>
                   </div>
                   <div class="my-5">
                        <h5>Số lượng</h3>
                            <input class="bg-white border border-dark-subtle" type="button" value="-" /><input id="this-item-quantity" aria-label="quantity" class="border border-dark-subtle" max="10" min="1"
                              name="quantity" type="number" value="1" required value="1" /><input class="bg-white border border-dark-subtle" type="button" value="+" /> <br>
                            <button type="button" class="btn btn-danger button my-4">Chọn mua</button>
                   </div>
                </div>
            </div>
        </div>
    </div>
    <div class="similarProduct">
        <div class="container">
        <div class="row">
        ${data.map(function(bok,index){
            if(`${bok.categories.id}`== `${book.categories.id}`){
                return`
                <div class="col-md-2 box d-flex flex-column">
                <img src="${bok.images[0].base_url}" alt="" class="img" style="width: 200px;height: 200px;">
                <img src="/textTiki.png" alt="" class="tiki" style="width: 56px;height: 16px;">
                <span>GIAO SIÊU TỐC 2H</span>
    
                <a href="/productDeatil/${bok.id}"> <p class="title">${bok.name}</p></a>
                <div class="item"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> | <span>Đã bán 1000+</span></div>
                <div class="price">
                    <p class="productPrice py-3 text-danger">${bok.current_seller.price} ₫ <span class="sale">25%</span></p>
                    
                </div>
            </div>
                `
            }
        }).join('')}
           
            
        </div>
        </div>
    </div>
    <div class="detailProduct py-4">
        <div class="container">
        <table class="table table-striped">
           
            <tbody>
                <tr>
                    <th scope="row">${book.specifications[0].attributes[0].name}</th>
                    <td>${book.specifications[0].attributes[0].value}</td>
                  </tr>
              <tr>
                <th scope="row">NGày xuất bản</th>
                <td>2020-09-01 00:00:00</td>
              </tr>
              <tr>
                <th scope="row">Kích thước</th>
                <td>14.5 x 20 cm</td>             
              </tr>
              <tr>
                <th scope="row">Dịch Giả</th>
                <td>Tuyết Mai</td>
               
              </tr>
              <tr>
                <th scope="row">Loại Bìa</th>
                <td>Bìa mềm</td>
              </tr>
              <tr>
                <th scope="row">Số trang</th>
                <td>288</td>             
              </tr>
              <tr>
                <th scope="row">Nhà xuất bản</th>
                <td>Nhà Xuất Bản Thế Giới</td>
               
              </tr>
            </tbody>
          </table>
        </div>
    </div>
    <div class="myDesc">
        <div class="container">
        <p class="fs-4">Mô tả sản phẩm</p>
        <span>${book.description}
           </span>
           <div class="d-flex justify-content-center">
           <button type="submit" class="btn btn-outline-primary button">Xem thêm</button>
        </div>
    </div>
    </div>
${footer()}
    `
}
export default productDeatil