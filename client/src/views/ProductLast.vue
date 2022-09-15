<template>
    <div>
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
                            <div class="carousel-item active">
                                <img src="https://www.hsd.co.kr/images/aa6b95f43f1b45c181ca6723ce212fe920220831040330.jpg"
                                    class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.hsd.co.kr/images/f58e48c6d52147ca9f0d208b853ece8220220831040328.jpg"
                                    class="d-block w-100" alt="...">
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
                            <h5 class="card-title">아보카도 게맛살 명란비빔밥</h5>
                            <h5 class="card-title pt-3 pb-3 border-top">6500원</h5>
                            <p class="card-text pt-3 pb-3 border-top">
                                <span class="badge bg-warning">신제품</span>

                            </p>
                            <p class="card-text pb-3">
                                숲속의 버터라 불리는 슈퍼푸드 '아보카도'와 고소한 '명란마요' 소스를 곁들인 비빔밥으로 담백한 게맛살 토핑과 지단채, 치커리 등 다양한 건강 재료를 듬뿍 담은 건강한그릇!
                            </p>
                            <div class="border-top">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                <label class="form-check-label" for="defaultCheck1">
                                    한솥밥 곱빼기 (+400)
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                <label class="form-check-label" for="defaultCheck1">
                                    현미밥 교체 (+1000)
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                <label class="form-check-label" for="defaultCheck1">
                                    계란 후라이 (+1000)
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                <label class="form-check-label" for="defaultCheck1">
                                    청양고추 (+300)
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                <label class="form-check-label" for="defaultCheck1">
                                    3종믹스치즈 (+1500)
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
                                        <span class="input-group-text">-</span>
                                        <input type="text" class="form-control" style="width:40px;" value="1">
                                        <span class="input-group-text">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div class="row pt-3 pb-3 border-top">
                                <div class="col-6">
                                    <h3>총 상품 금액</h3>
                                </div>
                                <div class="col-6" style="text-align: right;">
                                    <h3>21400원</h3>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="col-6 d-grid p-1">
                                    <button type="button" class="btn btn-lg btn-secondary btn-dark ">장바구니</button>
                                </div>
                                <div class="col-6 d-grid p-1">
                                    <button type="button" class="btn btn-lg btn-secondary btn-warning">주문하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </div>
</template>