import React from 'react';

export default function TextureBackground() {
    return (
        <div className="fixed inset-0 w-full h-full -z-10">
            <div 
                className="absolute inset-0" 
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='texture' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='3' cy='3' r='1.5' fill='%23f0f0f0'/%3E%3Ccircle cx='13' cy='13' r='1' fill='%23e8e8e8'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23texture)'/%3E%3C/svg%3E")`,
                    opacity: 0.5
                }}
            />
            <div 
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)'
                }}
            />
        </div>
    );
}