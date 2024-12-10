import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [{
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    {
        path: "/:pathMatch(.*)*", // Route này sẽ khớp với tất cả các URL không hợp lệ
        name: "notfound",
        component: () =>
            import ("@/views/NotFound.vue"), // Tải trang NotFound khi gặp lỗi 404
    },
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;