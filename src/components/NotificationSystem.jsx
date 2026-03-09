import React from 'react';

const NotificationSystem = ({ message }) => {
    return (
        <div style={{
            position: 'fixed',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#1e293b', // slate-800
            color: 'white',
            padding: '16px 24px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
            zIndex: 2000,
            animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <div style={{
                backgroundColor: 'var(--accent)',
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 6px -1px rgba(255, 127, 80, 0.3)'
            }}>
                <span className="material-symbols-outlined" style={{ color: 'white', fontSize: '24px' }}>eco</span>
            </div>
            <div>
                <h5 style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>The Dove</h5>
                <p style={{ fontSize: '14px', color: '#cbd5e1', fontWeight: 500 }}>{message}</p>
            </div>

            <style>{`
        @keyframes slideUp {
          from { transform: translate(-50%, 100px); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default NotificationSystem;
