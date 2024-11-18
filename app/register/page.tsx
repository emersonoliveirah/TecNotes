"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './RegisterPage.module.css'; // Importando CSS module

const RegisterPage: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameAvailability, setUsernameAvailability] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        // Simulate checking username availability
        setTimeout(() => {
            setUsernameAvailability(e.target.value !== 'emerson.oliveira');
        }, 500); // Simulate a delay for API call
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setPasswordMatch(e.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(e.target.value === password);
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image src="/logo.png" alt="Logo" width={150} height={150} className={styles.roundedImage} />
            </div>
            <div className={styles.card}>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="fullName">Nome completo</label>
                    <input
                        id="fullName"
                        className={styles.input}
                        type="text"
                        value={fullName}
                        onChange={handleFullNameChange}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        className={styles.input}
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="example@email.com"
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="username">Nome de usuário</label>
                    <input
                        id="username"
                        className={styles.input}
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    {username && (usernameAvailability ? (
                        <span className={styles.available}>Disponível</span>
                    ) : (
                        <span className={styles.unavailable}>Indisponível</span>
                    ))}
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="password">Criar senha</label>
                    <input
                        id="password"
                        className={styles.input}
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="confirmPassword">Confirmar senha</label>
                    <input
                        id="confirmPassword"
                        className={styles.input}
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    {!passwordMatch && <span className={styles.error}>As senhas não coincidem</span>}
                </div>
                <Link href="/notes-page">
                    <button className={styles.button} disabled={!usernameAvailability || !passwordMatch}>
                        Cadastrar
                    </button>
                </Link>

                <Link href="/login">
                    <span className={styles.helpLink}>Já possui cadastro</span>
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
