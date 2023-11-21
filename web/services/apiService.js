// src/services/apiService.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: '', // APIのベースURL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    // ログインAPI呼び出し
    login(credentials) {
        return apiClient.post('/api/auth/login', credentials);
    },
    // 他のAPI呼び出しをここに追加可能
};
