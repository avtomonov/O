<template>
    <div class="post">
        <div>
            <p><strong>Id:</strong> {{ post.id }}</p>
            <p><strong>Title:</strong> {{ post.title }}</p>
            <p><strong>Description:</strong> {{ post.body }}</p>
        </div>
        <my-button @click="$emit('remove', post);">Удалить</my-button>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .post {
        padding: 10px;
        border: 2px solid green;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .post button {
        margin-left: 20px;
    }
</style>