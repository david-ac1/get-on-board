import React from 'react';
import { Bird } from 'lucide-react';

const NotificationSystem = ({ message }) => {
    return (
        <div style={{
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#323232', // Material Dark Surface
            color: 'white',
            padding: '14px 24px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: 'var(--md-sys-elevation-2)',
            zIndex: 2000,
            animation: 'slideUp 0.3s ease-out'
        }}>
            <div style={{
                backgroundColor: 'var(--md-sys-color-tertiary)',
                width: '32px',
                height: '32px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Bird size={20} color="white" />
            </div>
            <span style={{ fontSize: '14px', fontWeight: 500 }}>{message}</span>

            <style>{`
        @keyframes slideUp {
          from { transform: translate(-50%, 100%); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default NotificationSystem;
