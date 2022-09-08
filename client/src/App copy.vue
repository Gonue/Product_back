<template><!--네비게이션-->
<div>
        <nav class="navbar navbar-expand-lg navbar-gold bg-gold">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">한솥</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <router-link class="nav-link" to="#">홈</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="#">제품리스트</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/detail">제품상세페이지</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/create">admin</router-link>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Seardch</button>
                </form>
            </div>
        </div>
    </nav>
  <router-view/>
  <!--푸터-->
  <footer class="mt-5 text-muted py-5 bg-gold">
        <div class="container">
          <p class="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p class="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
          <p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.0/getting-started/introduction/">getting started guide</a>.</p>
        </div>
      </footer>
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b07f30;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #b07f30;
}

nav a.router-link-exact-active {
  color: #b07f30;
}
</style>
