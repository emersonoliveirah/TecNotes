"use client"
import { useRouter } from "next/navigation"
import React from 'react';

const BackButton: React.FC = () => {
    const router = useRouter();
    return (
        <button type="button" onClick={() => router.back()}>
            Voltar
        </button>
    );
}

export default BackButton;
