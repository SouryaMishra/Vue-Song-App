<template>
    <div>
        <form>
            <input type = "email" name = "email" placeholder = "Enter email" autocomplete = "off" v-model = "email" required />
            <input type = "password" name = "password" placeholder = "Enter password" v-model = "password" required />
            <button @click = "register">Register</button>
        </form>
        <p v-if = "message">{{message}}</p>
        <p v-if = "error" class = "error">{{error}}</p>
    </div>
</template>

<script>
import auth from "../services/auth";
export default {
    data: () => ({
        email: "",
        password: "",
        message : "",
        error : ""
    }),
    methods:{
         async register(e) {
            e.preventDefault();
            try{
            const { data : {message}} = await auth({email : this.email, password : this.password});
            this.message = message;
            }
            catch(err) {
                this.error = err.response.data.error;
            }
        }
    }
}
</script>

<style scoped>
div{
    background: #F2F2F2;
    height: 100vh;
    margin: 1rem auto;
    padding: 1rem;
}
form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.error{
    color: red;
    background: rgba(241, 71, 71, 0.2);
    border: 1px solid red;
    padding: 0.5rem;
}
</style>