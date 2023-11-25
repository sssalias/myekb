<template>
  <header>
    <div class="container">
      <div class="wrapper">

        <div class="logo">
          <img src="@/assets/logo.svg">
        </div>

        <nav>
          <UserIcon/>

          <div class="menu">
            <router-link class="user__info" to="/">
              <h4>Alexn Efm.</h4>
              <h5>Администратор</h5>
            </router-link>
          </div>

        </nav>


      </div>
    </div>
  </header>
</template>

<script setup>

import UserIcon from "@/components/UserIcon.vue";
</script>

<style scoped lang="scss">
header {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  background: white;
  z-index: 100000;
  .container {
    width: 100%;
    height: 100%;

    border-bottom: 1px solid rgba(28, 102, 211, 0.52);

    .wrapper {
      //width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;

      nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        .user__logo {
          height: 40px;
          width: 40px;

          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 50%;
          }
        }

        .menu {
          .user__info {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            text-decoration: none;
            h4 {
              color: #0E336A;
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              letter-spacing: 1.4px;
            }
            h5 {
              color: rgba(28, 102, 211, 0.52);
              font-size: 10px;
              font-style: normal;
              font-weight: 300;
              line-height: normal;
              letter-spacing: 0.32px;
            }
          }
        }

      }
    }
  }
}
</style>