<template>
    <div>
        <form>
            <input type = "email" name = "email" placeholder = "Enter email" autocomplete = "off" v-model = "email" required />
            <input type = "password" name = "password" placeholder = "Enter password" v-model = "password" required />
            <button @click = "register">Register</button>
        </form>
        <h1 v-if = "message">{{message}}</h1>
        <h1 v-else>Enter required fields</h1>
    </div>
</template>

<script>
import auth from "../services/auth";
export default {
    data: () => ({
        email: "",
        password: "",
        message : ""
    }),
    methods:{
         async register(e) {
            e.preventDefault();
            try{
            const { data : {message}} = await auth({email : this.email, password : this.password});
            this.message = message;
            }
            catch(err) {
                console.log(err);
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
</style>