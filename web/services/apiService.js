// src/services/apiService.js
import axios from 'axios';

async function login({ email, password }) {
    try {
        const response = await fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        return response;
    } catch (error) {
        throw new Error('ネットワークエラーが発生しました');
    }
}

export default {
    // マイページ情報取得
    getMyPage(userId) {
        return apiClient.get(`/api/users/${userId}/mypage`);
    },

    // 個人情報取得
    getPersonalInfo(sessionId, userId) {
        return apiClient.get('/api/users/personal', {
            headers: {
                'SessionIdInHeader': sessionId,
                'UserIdInHeader': userId,
            },
        });
    },

    // 個人情報更新
    updatePersonalInfo(sessionId, userId, personalInfo) {
        return apiClient.patch('/api/users/personal', personalInfo, {
            headers: {
                'SessionIdInHeader': sessionId,
                'UserIdInHeader': userId,
            },
        });
    },

    // プロフィール情報取得
    getProfileInfo(sessionId, userId) {
        return apiClient.get('/api/users/profile', {
            headers: {
                'SessionIdInHeader': sessionId,
                'UserIdInHeader': userId,
            },
        });
    },

    // プロフィール情報更新
    updateProfileInfo(sessionId, userId, profileInfo) {
        return apiClient.patch('/api/users/profile', profileInfo, {
            headers: {
                'SessionIdInHeader': sessionId,
                'UserIdInHeader': userId,
            },
        });
    },

    // ログイン
    login,

    // ログアウト
    logout(sessionId) {
        return apiClient.post('/api/auth/logout', {}, {
            headers: {
                'SessionIdInHeader': sessionId,
            },
        });
    },

    // サインアップ
    signup(signupInfo) {
        return apiClient.post('/api/auth/signup', signupInfo);
    },

    // ユーザー情報更新（メールアドレスとパスワード）
    updateCredentials(sessionId, userId, credentialInfo) {
        return apiClient.patch('/api/auth/update-credentials', credentialInfo, {
            headers: {
                'SessionIdInHeader': sessionId,
                'UserIdInHeader': userId,
            },
        });
    },

    // 他のAPI呼び出しをここに追加可能

    // ...
};
