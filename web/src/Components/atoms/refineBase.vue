<template>
    <link rel="stylesheet" href="https://use.typekit.net/oie4jfa.css">
    <div class="container"></div>
</template>

<script>
export default{
    props: {
        level: {
            type: String,
            default: "level1",
        },
        label:{
            type:String,
            default: "defaulttext デフォルトテキスト",
        }
    }
};
</script>


<style scoped>
.container{
    width:344px;
    height: 100%;
    box-shadow: -4px 0px 4px;

}

</style>


