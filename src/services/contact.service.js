import createApiClient from "./api.service"; // Đảm bảo đường dẫn đúng

class ContactService {
    constructor(baseURL = "/api/contacts") {
        this.api = createApiClient(baseURL); // Sửa baseURL thành baseURL thay vì baseUrl
    }

    // Phương thức lấy tất cả các liên hệ
    async getAll() {
        return (await this.api.get("/")).data;
    }

    // Phương thức tạo mới liên hệ
    async create(data) {
        return (await this.api.post("/", data)).data; // Cần truyền data khi tạo mới
    }

    // Phương thức xóa tất cả các liên hệ
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }

    // Phương thức lấy một liên hệ theo ID
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }

    // Phương thức cập nhật một liên hệ
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data; // Sửa lại phương thức `put` thay vì `get`
    }

    // Phương thức xóa một liên hệ
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new ContactService();