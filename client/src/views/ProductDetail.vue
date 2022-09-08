<template>
<main class="mt-3">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div :class="`carousel-item ${i==0?'active':''}`" :key="i" v-for="(pimg, i) in productImage">
                                <img :src="pimg.path" class="d-block w-100" alt="...">
                            </div>

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{productDetail.product_name}}</h5>
                            <h5 class="card-title pt-3 pb-3 border-top">{{productDetail.product_price}}</h5>
                            <p class="card-text pt-3 pb-3 border-top">
                                <span class="badge bg-dark me-1">{{productDetail.category1}}</span>
                            </p>
                            <p class="card-text pb-3">
                                {{productDetail.explanation}}
                            </p>
                            <div class="border-top">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                <label class="form-check-label" style="float:left;" for="defaultCheck1">
                                    한솥밥 곱빼기 {{productDetail.add_rice}}원
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                <label class="form-check-label" style="float:left;" for="defaultCheck1">
                                    현미밥 교체 {{productDetail.add_brownrice}}원
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                <label class="form-check-label" style="float:left;" for="defaultCheck1">
                                    계란후라이 {{ProductDetail.add_egg}}원
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                <label class="form-check-label" style="float:left;" for="defaultCheck1">
                                    청양고추 {{productDetail.add_chili}}원
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                <label class="form-check-label" style="float:left;" for="defaultCheck1">
                                    3종믹스치즈 {{productDetail.add_threemix}}원
                                </label>
                            </div>
                            </div>
                            <div class="card-text pt-3 pb-3 border-top">
                            <div class="row">
                                <div class="col-auto">
                                    <label class="col-from-label">구매수량</label>
                                </div>
                                <div class="col-auto">
                                    <div class="input-group">
                                        <span class="input-group-text" @click="calculatePrice(-1);">-</span>
                                        <input type="text" class="form-control" style="width:40px;" v-model="total">
                                        <span class="input-group-text" @click="calculatePrice(1);">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div class="row pt-3 pb-3 border-top">
                                <div class="col-6">
                                    <h3>{{totalPrice}}</h3>
                                </div>
                                <div class="col-6" style="text-align: right;">
                                    <h3>5900원</h3>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="col-6 d-grid p-1">
                                    <button type="button" class="btn btn-lg btn-secondary btn-dark ">장바구니</button>
                                </div>
                                <div class="col-6 d-grid p-1">
                                    <button type="button" class="btn btn-lg btn-secondary btn-danger">주문하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
      data() {
        return {
          productId: 0,
          productDetail: {},
          productImage: [],
          total: 1,
          totalPrice: 0
        };
      },
      created() {
        this.productId = this.$route.query.product_id;
        this.getProductDetail();
        this.getProductImage();
      },
      methods: {
        calculatePrice(cnt) {
          let total = this.total + cnt;
          if(total < 1) total = 1;
          this.total = total;
          this.totalPrice = this.productDetail.product_price * this.total;
        },
        getCurrencyFormat(value) {
          return this.$currencyFormat(value);
        },
        async getProductDetail() {
          let productDetail = await this.$api("/api/productDetail",{param:[this.productId]});
          if(productDetail.length > 0) {
            this.productDetail = productDetail[0];
            this.totalPrice = this.totalPrice = this.productDetail.product_price * this.total;
          }
          console.log(this.productDetail);
        },
        async getProductImage() {
          this.productImage = await this.$api("/api/productMainImages",{param:[this.productId]});
          console.log('this.productImage',this.productImage)
        }
      }
    }
    </script>