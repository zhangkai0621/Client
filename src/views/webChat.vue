<template>
    <div class="webChat">
        <h1>This is a webChat page</h1>
        <router-link to="/">home</router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                scoket: null
            }
        },
        methods: {
            init() {
            }
        },
        sockets: {
            connect() {
                alert('123')
            },
            'chat message'(val) {
                console.log('val', val)
            }
        },
        mounted() {
            this.$socket.emit('chat message',{a:1}); // 发送
        }
    }
    
</script>
<style>

</style>
