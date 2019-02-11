export default {
    name: "Home",
    path: "/manager",
    meta: { private: true },
    component: () => import("@/views/private/main"),
    children: [
        {
            name: "Sessions",
            path: "session-manager",
            meta: { private: true },
            component: () => import("@/views/private/main/Sessions/SessionsManager")
        },
        {
            name: "Profile",
            path: "profile-manager",
            meta: { private: true },
            component: () => import('@/views/private/main/Profile/ProfileManager')
        },
        {
            name: "Security",
            path: "security-manager",
            component: () => import('@/views/private/main/Security/SecurityManager')
        }
    ]
}