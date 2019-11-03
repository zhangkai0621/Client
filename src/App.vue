<template>
  <div id="app">
    <div id="nav">
    </div>
    <transition :name="transitionName" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
    data() {
        return {
            transitionName: 'slide-left'
        }
    },
    watch: {
        $route(to, from) {

            const toIndex = to.meta.index;
            const fromIndex = from.meta.index;

            this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left';
        }
    }
}
</script>

<style>
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
    will-change: transform;
    transition: all 380ms;
    position: absolute;
    }

    .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    }

    .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    }

    .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    }

    .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    }
</style>
