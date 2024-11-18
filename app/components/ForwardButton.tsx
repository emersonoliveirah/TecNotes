"use client"
import { useRouter } from "next/navigation"
import React from 'react';

const ForwardButton: React.FC = () => {
    const router = useRouter();
    return (
        <button type="button" onClick={() => router.forward()}>
            Avançar
        </button>
    );
}

export default ForwardButton;
