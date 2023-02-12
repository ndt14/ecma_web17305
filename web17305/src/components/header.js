const header = ()=>{
    return `
    
    <section class="myHeader px-4">
    <div class="container">
      <div class="row ">
        <div class="col-md-2 py-3">
          <img src="/logotiki.png/" class="img-fluid" alt="Logo">
        </div>
        <div class="col-md-6">
          <div class="input-group mb-3 py-4">
            <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon2">
            <button type="button" class="btn btn-primary btnn"> <i class="fa-solid fa-magnifying-glass"></i> Tìm
              kiếm</button>
          </div>
        </div>
        <div class="col-md-4 py-4 d-flex justify-content-around ">
          <div class="col-md-7">
            <div class="row">
              <div class="col-2">
                <i class="fa-solid fa-user py-2 fs-4"></i>
              </div>
              <div class="col-10">
                <a href="" class="text-white text-decoration-none fs-6">Đăng ký<a><a href=""
                      class="text-white text-decoration-none fs-6">/Đăng nhập</a><br>
                    <a href="" class="text-white text-decoration-none px-1">Tài khoản<a>
              </div>
            </div>
          </div>
          <div class="col-md-5 py-2">
            <button type="button" class="btn btn-primary btnn position-relative">
              <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
                <span class="visually-hidden"></span>
              </span>
            </button>
            <a href="" class="text-decoration-none text-white fs-6">Giỏ hàng</a>

          </div>
        </div>

      </div>

    </div>

    </div>
  </section>
    `
};
export default header;