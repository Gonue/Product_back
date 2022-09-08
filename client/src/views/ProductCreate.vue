<template>
  <main class="mt-3">
    <div class="container">
      <h2 class="text-center">제품 등록</h2>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품명</label>
        <div class="col-md-9">
          <input type="text" class="form-control">
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품가격</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="number" class="form-control">
            <span class="input-group-text">원</span>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="exampleFormControlTextarea1" class="form-label">제품설명</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">한솥밥 곱빼기 가격</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="number" class="form-control">
            <span class="input-group-text">원</span>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">현미밥 교체 가격</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="number" class="form-control">
            <span class="input-group-text">원</span>
          </div>

        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">계란 후라이 가격</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="number" class="form-control">
            <span class="input-group-text">원</span>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">청양고추</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="number" class="form-control">
            <span class="input-group-text">원</span>
          </div>

        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">3종믹스믹스</label>
        <div class="col-md-9">
          <div class="input-group mb-3">
            <input type="number" class="form-control">
            <span class="input-group-text">원</span>
          </div>

        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품카테고리</label>
        <div class="col-md-9">
          <div class="row">
            <div class="col-auto">
              <select class="form-select">
                <option>1</option>
              </select>
            </div>
            <div class="col-auto">
              <select class="form-select">
                <option>2</option>
              </select>
            </div>
            <div class="col-auto">
              <select class="form-select">
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">태그</label>
        <div class="col-md-9">
          <input type="text" class="form-control">
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">썸네일 이미지</label>
        <div class="col-md-9">
          <input class="form-control" type="file" accept="image/png,image/jpg">
          <div class="alert alert-secondary" role="alert">
            <ul>
              <li>이미지 사이즈 : 350*350</li>
              <li>파일 사이즈 : 1m 이하</li>
              <li>파일 확장자 : png, jpg만 가능</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품 이미지</label>
        <div class="col-md-9">
          <input class="form-control" type="file" accept="image/png,image/jpg" multiple>
          <div class="alert alert-secondary" role="alert">
            <ul>
              <li>이미지 사이즈 : 최대 2개 가능</li>
              <li>이미지 사이즈 : 700 * 700</li>
              <li>파일 사이즈 : 1m 이하</li>
              <li>파일 확장자 : png, jpg만 가능</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-secondary btn-dark ">취소</button>
        </div>
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-lg btn-secondary btn-dark">저장</button>
        </div>
      </div>
    </div>
  </main>
</template>
  