<template>
    <transition name="fade">
        <div 
            class="dialog"
            @click="hideDialog"
            v-if="show"
        >
            <div @click.stop class="dialog__content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>    

<script>
    export default {
        name: 'my-dialog',
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hideDialog () {
                this.$emit('update:show', false); 
            }
        }
    }
</script>

<style>
    .dialog {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        padding: 20px;
    }
    
    .dialog h2 {
        margin-top: 0;
    }

    .dialog__content {
        background: #fff;
        padding: 30px 40px 40px;
        margin: auto;
        border-radius: 10px;
        max-width: 400px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>