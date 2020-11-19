<template>
    <div class="container-fluid">

        <div class="card">
            <div class="card-header">{{ title }}</div>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" v-model="title">
                    </div>
                    <div class="form-group">
                        <label for="category">Category</label>
                        <select class="form-control" id="category">
                            <option>cat 1</option>
                            <option>cat 2</option>
                            <option>cat 3</option>
                            <option>cat 4</option>
                            <option>cat 5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="tags">Tags</label>
                        <input type="text" class="form-control" id="tags" v-model="tags">
                    </div>
                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea class="form-control" id="content" rows="10"></textarea>
                    </div>

                </form>
            </div>
        </div>

    </div>

</template>

<script>


    export default {
        name: 'NewBlog',
        components: {},
        data() {
            return {
                title: 'New Blog',
                tags: 'blog,health'
            }
        }
    }
</script>
