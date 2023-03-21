<template>
    <form @submit.prevent>
        <h2>Создание поста</h2>

        <my-input 
            v-model:value="post.title" 
            placeholder="Название"
            type="text"
            required
        />

        <my-input 
            v-model:value="post.body"
            type="text" 
            placeholder="Description"   
            required
        />

        <my-button 
            @click="createPost" 
            class="btn--full"
        >Создать</my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            if(this.post.title == '' || this.post.body == '') {
                return false;
            }

            this.post.id = Date.now();
            this.$emit('create', this.post); 
            this.post = {
                title: '',
                body: ''
            };
        },
    },
    watch: {
        post: {
            handler(newVal) {
                console.log(newVal);
            },
            deep: true
        }
    }
}
</script>
<style scoped>
    hr {
        margin: 20px 0px;
    }
</style>