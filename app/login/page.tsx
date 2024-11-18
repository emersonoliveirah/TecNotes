"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './LoginPage.module.css'; // Importando CSS module

const LoginPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image src="/logo.png" alt="Logo" width={150} height={150} className={styles.roundedImage} />
            </div>
            <div className={styles.card}>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="login">Login</label>
                    <input id="login" className={styles.input} type="text" placeholder="emerson.oliveira" />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="password">Senha</label>
                    <div className={styles.passwordContainer}>
                        <input
                            id="password"
                            className={styles.input}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="********"
                            aria-label="Password"
                        />
                        <span
                            className={styles.eyeIcon}
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label="Toggle password visibility"
                        >
                            👁️
                        </span>
                    </div>
                </div>
                <Link href="/notes-page">
                <button className={styles.button}>Entrar</button>
                </Link>
                <Link href="/register">
                    <button className={styles.button}>Cadastrar</button>
                </Link>
                <div className={styles.socialContainer}>
                    <p className={styles.social}>Entrar com</p>
                    <div className={styles.socialIcons}>
                        <Image src="/google.png" alt="Google" width={35} height={35} />
                        <Image src="/github.png" alt="GitHub" width={40} height={40} />
                        <Image src="/apple.png" alt="Apple" width={35} height={35} />
                    </div>
                </div>
                <div className={styles.helpContainer}>
                    <Link href="/forgot-password">
                        <span className={styles.helpLink}>Esqueceu a senha?</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
