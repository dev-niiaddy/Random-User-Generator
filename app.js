const app = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Baker",
            email: "john.baker@gamgam.com",
            gender: "male",
            picture: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods: {
        async  getUser() {
            const response = await fetch("https://randomuser.me/api")
            const { results } = await  response.json()

            if(results.length >= 1) {
                const user = results[0]

                this.firstName = user.name.first
                this.lastName = user.name.last
                this.email = user.email
                this.gender = user.gender ,
                this.picture = user.picture.large
            }

        }
    }
})

app.mount("#app")