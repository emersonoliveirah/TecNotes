"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ForgotPasswordPage.module.css'; // Importando CSS module

const ForgotPasswordPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleConfirmPasswordChange = () => {
        // Simulação de confirmação de código
        setShowSuccessPopup(true); // Exibir popup de sucesso
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image src="/logo.png" alt="Logo" width={150} height={150} className={styles.roundedImage} />
            </div>
            <div className={styles.card}>
                <h2 className={styles.title}>Esqueceu a senha?</h2>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="recoveryEmail">E-mail de recuperação</label>
                    <input id="recoveryEmail" className={styles.input} type="email" placeholder="Digite seu email" />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="recoveryCode">Informar o código</label>
                    <input id="recoveryCode" className={styles.input} type="text" placeholder="Digite o código" />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="newPassword">Nova senha</label>
                    <div className={styles.passwordContainer}>
                        <input
                            id="newPassword"
                            className={styles.input}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Digite sua nova senha"
                        />
                        <span className={styles.eyeIcon} onClick={() => setShowPassword(!showPassword)}>👁️</span>
                    </div>
                </div>
                <Link href="/login">
                <button className={styles.button} onClick={handleConfirmPasswordChange}>Confirmar</button>
                </Link>
                <div className={styles.helpContainer}>
                    <Link href="/login">
                        <span className={styles.helpLink}>Voltar</span>
                    </Link>
                </div>
            </div>
            {showSuccessPopup && (
                <div className={`${styles.successPopup} ${styles.successMessage}`}>
                    <p>Senha alterada com sucesso!</p>
                </div>
            )}
        </div>
    );
};

export default ForgotPasswordPage;
