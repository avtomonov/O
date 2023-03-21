<template>
    <input 
        class="input" 
        :value="value"
        @input="updateInput"
    />
</template>    

<script>
    export default {
        name: 'my-input',
        props: {
            value: [String, Number] 
        },
        methods: {
            updateInput (event) {
                this.$emit('update:value', event.target.value);
            }
        }
    }
</script>

<style scoped>
    .input {
        box-sizing: border-box;
        max-width: 100%;
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
    }
</style>