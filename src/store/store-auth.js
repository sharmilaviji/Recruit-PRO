import {firebaseAuth} from 'boot/firebase'
const state = {
    loggedIn: false

}
const mutations = {
    setLoggedIn(state, value) {
        state.loggedIn = value
    }
    
}
const actions = {
    registerUser({},payload) {
    firebaseAuth.createUserWithEmailAndPassword(
        payload.email,payload.password
        ).then(response => {
        console.log('response: ',response)
    })
        .catch(error => {
            console.log('error.message:',error.message)
        })

    },
    loginUser({},payload) {
        firebaseAuth.signInWithEmailAndPassword(
            payload.email,payload.password)
            .then(response => {
            console.log('response: ', response)
        })
            .catch(error => {
                console.log('error.message:',error.message
                )
            })
    
        },
        logoutUser() {
            console.log('logoutUser')
            firebaseAuth.signOut()
        },
        handleAuthStateChange({ commit}) {
            firebaseAuth.onAuthStateChanged(user =>
            {
                    if (user) {
                      commit('setLoggedIn' , true)
                     this.$router.replace('/auth')
                    }
                    else {
                        commit('setLoggedIn' , false)
                        this.$router.push('/')
                    }
                })
         }
    }
const getters = {
   
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}