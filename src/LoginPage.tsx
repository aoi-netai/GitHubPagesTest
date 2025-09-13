import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';



export default function LoginPage() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // ログイン状態をチェック
    // すでにログインしている場合は、ホームへリダイレクト
    function checkLoggedIn() {

        if (localStorage.getItem('isLoggedIn') === 'true') {

            navigate('/home');
        }
    }

    // 読み込み時にログイン状態をチェックする
    useEffect(checkLoggedIn, [navigate]);

    // ログインボタンが押された時の処理
    function handleLogin(e: FormEvent) {
        e.preventDefault();

        // ここにログイン判定を入れる
        if(username === 'user' || password === 'password') {

            // ログインに成功した時の処理
            localStorage.setItem('user_id', username);
            localStorage.setItem('password', password);
            localStorage.setItem('isLoggedIn', 'true');

            navigate('/home');
        }
        else{

            alert('ログインに失敗しました');
        }
    }

    return(
        <div>
            <h1>ログインページ</h1>

            <form onSubmit={handleLogin}>
                <div>
                    <label>
                        ユーザー名
                        <input
                            type="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            
                            style={{ color : 'black' }}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        パスワード
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                            style={{ color : 'black' }}
                        />
                    </label>
                </div>

                <button type="submit">ログイン</button>
            </form>
        </div>
    )
}