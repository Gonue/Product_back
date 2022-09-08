<template>
    <main class="mt-3">
        <div class="container">
            <!-- <div class="row mb-3">
                <div class="col-12">
                    <select class="form-select">
                        <option selected></option>
                        <option value="1">신제품</option>
                        <option value="2">사각도시락</option>
                        <option value="3">덮밥</option>
                      </select>
                </div>
            </div> -->
            <div class="btn-group mb-3" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-dark" for="btnradio1">전체보기</label>
          
            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-dark" for="btnradio2">덮밥</label>
          
            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
            <label class="btn btn-outline-dark" for="btnradio3">도시락</label>
          </div>

            <div class="row g-3">
                <div class="col-xl-3 col-lg-4 col-md-6" :key="i" v-for="(product,i) in productList">
                    <div class="card" style="width: 18rem;">
                        <a @click="goToDetail(product.id);" style="cursor:pointer;"><img :src="product.path" class="card-img-top" alt="..."></a>
                        <div class="card-body">
                            <h5 class="card-title">{{product.product_name}}</h5>
                            <p class="card-text">
                                <span class="badge bg-warning text-dark">{{product.category1}}</span>
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" role="group">
                                    <!-- <button type="button" class="btn btn-sm btn-outline-secondary">장바구니</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button> -->
                                </div>
                                <small class="text-dark">{{product.product_price}}원</small>
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
          productList: []
        };
      },
      created() {
        this.getProductList();
      },
      methods: {
        async getProductList() {
          this.productList = await this.$api("/api/productList",{});
          console.log(this.productList);
        },
        goToDetail(product_id) {
         this.$router.push({path:'/detail', query:{product_id:product_id}}); 
        }
      }
    }
    </script>