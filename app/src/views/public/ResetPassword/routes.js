export default {
    path: '/reset-password',
    name: 'ResetPassword',
    meta: {
        private: false
    },
    component: () => import('@/views/public/ResetPassword/ResetPassword')
}