<template>
    <button class="btn"><slot></slot></button>
</template>    

<script>
    export default {
        name: 'my-button'
    }
</script>

<style>
    .btn {
        background: transparent;
        color: green;
        padding: 10px 20px;
        border: 2px solid green;
        cursor: pointer;
    }

    .btn--full {
        width: 100%;
    }
</style>