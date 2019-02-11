export default {
    name: "Login",
    path: "/login",
    meta: {
        private: false
    },
    component: () => import("@/views/public/UserLogin/UserLogin")
}