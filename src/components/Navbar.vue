<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-yellow fixed-top">
    <div class="logo-container navbar-brand mx-3">
      <router-link to="/" tag="a">
        <img src="https://vuejs.org/images/vueschool.png" alt="iFreight" class="img-fluid">
      </router-link>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item cl-effect-4">
          <router-link to="#services" tag="a" data-hover="Services">Services</router-link>
        </li>
        <li class="nav-item cl-effect-4">
          <router-link to="/" tag="a">How it works</router-link>
        </li>
        <li class="nav-item cl-effect-4">
          <router-link to="#ourServices" tag="a">Partners</router-link>
        </li>
        <li class="nav-item cl-effect-4">
          <router-link to="#ourServices" tag="a">About</router-link>
        </li>
      </ul>
      <div class="register my-2 my-lg-0">
        <router-link to="#ourServices" tag="a" class="register-btn">Register</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

