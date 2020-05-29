<template>
    <div class="row justify-content-around">
        <!-- left column -->
        <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">Create Category</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <form @submit.prevent="addCategory()">
                    <div class="card-body">
                        <div class="form-group">
                            <label >Add New Category</label>
                            <input v-model="form.name" type="text" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" name="name"  placeholder="Category Name">
                            <has-error :form="form" field="name"></has-error>
                        </div>


                    </div>
                    <!-- /.card-body -->

                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <!-- /.card -->



        </div>


    </div>
</template>

<script>
    export default {
        data () {
            return {
                // Create a new form instance
                form: new Form({
                    name: ''
                })
            }
        },
        methods:{
            addCategory(){
                this.form.post('/add_category')
                    .then(( ) => {
                        this.$router.push('categories')
                        Toast.fire({
                            icon: 'success',
                            title: 'Category Added successfully'
                        });
                    })
                .catch(()=>{

                })


            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
