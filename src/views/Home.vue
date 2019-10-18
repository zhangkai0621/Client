<template>
    <div :style="{height: maxHeight + 'px'}" class="home">
        <el-row type="flex" align="middle" class="title-container">
            <el-col class="headSculpture"><img src="../../public/images/background.jpg" alt=""></el-col>
            <el-col class="title">Richard</el-col>
        </el-row>
        <el-row class="footer" type="flex" justify="space-around" align="middle">
            <el-col>聊天室</el-col>
            <el-col>聊天室</el-col>
            <el-col>聊天室</el-col>
        </el-row>
        <codeRain class="codeRain"></codeRain>
    </div>
</template>

<script>
import codeRain from '../components/codeRain'
export default {
    name: 'home',
    components: {
        codeRain
    },
    data() {
        return {
            maxHeight: 0,
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.maxHeight  = window.innerHeight;
        })
        window.onresize = () => {
            this.maxHeight  = window.innerHeight;
        }
    }
  
}
</script>
<style lang="scss" scope> 
    $KT : 'KT';
    $white_color: #fff;
    .home {
        background: #111;
        overflow: hidden;
        color: $white_color;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 99;
        .title-container {
            position: relative;
            z-index: 99;
            .headSculpture {
                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    box-shadow: #234b5d 5px 5px 10px;
                    margin-right: 10px;
                }
            }
            .title {
                font-size: 10rem;
                text-shadow: #999 5px 5px 10px;
            }
        }
        
        .footer {
            width: 80%;
            position: absolute;
            z-index: 99;
            bottom: 20px;
            text-align: center;
            font-family: $KT;
            font-size: 2rem;

        }
        .codeRain {
            position: absolute;
            z-index: 0;
        }
    }

    
</style>
