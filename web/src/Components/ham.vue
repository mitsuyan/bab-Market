<template>
<div id="app">
    <button type="button" class="menu-btn" v-on:click="toggleMenu()">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </button>
    <ul class="menu" v-bind:class="{'is-active' : open }">
      <li class="menu__item">TOP</li>
      <li class="menu__item">ABOUT</li>
      <li class="menu__item">BLOG</li>
      <li class="menu__item">CONTACT</li>
    </ul>
</div>
  </template>
  
  <script>
export default {
    data() {
    return {
      open: false,
    };
  },
    methods: {
        toggleMenu() {
        // 親コンポーネントに変更を通知
        this.open = !this.open;
        },
    },
};
  </script>
  
  <style scoped>
  /*----------------------------
* メニュー開閉ボタン
*----------------------------*/
.menu-btn{
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  color: #fff;
}

/*----------------------------
* メニュー本体
*----------------------------*/
.menu{
  position: fixed;
  top: 0;
  right:0px;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #555;
}
.menu__item{
  width: 100%;
  height: auto;
  padding: .5em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}

/*----------------------------
* アニメーション部分
*----------------------------*/

/* アニメーション前のメニューの状態 */
.menu{
  transform: translateX(100vw);
  transition: all .3s ease-out;
}
/* アニメーション後のメニューの状態 */
.menu.is-active{
  transform: translateX(0);
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
  </style>
  