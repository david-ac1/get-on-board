import React from 'react';

const AppShell = ({ currentView, onNavigate }) => {
    return (
        <>
            {/* Navigation Rail (The Sextant) */}
            <aside style={{
                width: '256px',
                backgroundColor: 'var(--background-dark)',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid rgba(23, 115, 207, 0.2)',
                height: '100vh',
                zIndex: 50
            }}>
                <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ backgroundColor: 'var(--primary)', padding: '8px', borderRadius: '8px' }}>
                        <span className="material-symbols-outlined" style={{ color: 'white' }}>sailing</span>
                    </div>
                    <div>
                        <h1 style={{ color: 'white', fontWeight: 700, fontSize: '16px', letterSpacing: '-0.025em' }}>The Sextant</h1>
                        <p style={{ color: '#94a3b8', fontSize: '12px' }}>Voyage Control</p>
                    </div>
                </div>

                <nav style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <NavItem
                        icon="dashboard"
                        label="Bridge Control"
                        active={false}
                        onClick={() => { }}
                    />
                    <NavItem
                        icon="format_list_bulleted"
                        label="Manifest"
                        active={currentView === 'dashboard'}
                        onClick={() => onNavigate('dashboard')}
                        isCompass={true}
                    />
                    <NavItem
                        icon="explore"
                        label="Navigation"
                        active={currentView === 'workflow'}
                        onClick={() => onNavigate('workflow')}
                    />
                    <NavItem
                        icon="menu_book"
                        label="Logbook"
                        active={false}
                        onClick={() => { }}
                    />

                    <div style={{ marginTop: '32px', padding: '0 12px' }}>
                        <p style={{ fontSize: '10px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>System</p>
                    </div>
                    <NavItem
                        icon="settings"
                        label="Settings"
                        active={false}
                        onClick={() => { }}
                    />
                </nav>

                {/* Voyage Progress in Sidebar */}
                <div style={{ padding: '16px' }}>
                    <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.5)', padding: '16px', borderRadius: '16px', border: '1px solid #334155' }}>
                        <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '8px' }}>Voyage Progress</p>
                        <div style={{ height: '6px', backgroundColor: '#334155', borderRadius: '999px', overflow: 'hidden' }}>
                            <div className="progress-gradient" style={{ height: '100%', width: '66%' }}></div>
                        </div>
                        <p style={{ fontSize: '10px', color: '#64748b', marginTop: '8px', fontWeight: 500 }}>MT ARARAT • Day 42/150</p>
                    </div>
                </div>
            </aside>

            {/* Top App Bar (The Bridge) */}
            <header className="glass-panel" style={{
                position: 'fixed',
                top: 0,
                left: '256px',
                right: 0,
                height: '72px',
                padding: '0 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 40,
                borderBottom: '1px solid #e2e8f0'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(23, 115, 207, 0.2)' }}>
                        <span className="material-symbols-outlined" style={{ color: 'white' }}>architecture</span>
                    </div>
                </div>

                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>Get On Board!</h2>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <button style={{ width: '40px', height: '40px', borderRadius: '999px', backgroundColor: '#f1f5f9', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <span className="material-symbols-outlined" style={{ color: '#475569', fontSize: '20px' }}>notifications</span>
                    </button>

                    <div style={{ width: '1px', height: '40px', backgroundColor: '#e2e8f0' }}></div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>Captain Noah</p>
                            <p style={{ fontSize: '10px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Fleet Commander</p>
                        </div>
                        <div style={{ width: '40px', height: '40px', borderRadius: '999px', border: '2px solid var(--accent)', padding: '2px', backgroundColor: 'white', overflow: 'hidden' }}>
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfE7fLe70hugKRPoZsK_LiZYBwX90jXtv8QrhI7En4mNPxG2KOAsecnyO5KcunI-BxwJPzjyqYbJOMPOGMiZs1xzWcuOjxnySqn04jROyOWGft_U6FEpNNxUpxR2nB0RlxLwrf6TqpRgxpmzZ-FTy3XehlBAUuE9HZnhefGmVRTE3qE5UUy2LxwwRHnwIqS2l2U1xXNeObWpFFC1QhlW4JWrYuwzpIYp7fXjs8pvOvJmlqTU9uS_-uhkDOEOSCyLQBh1erCfEug1s"
                                alt="Captain Noah"
                                style={{ width: '100%', height: '100%', borderRadius: '999px', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

const NavItem = ({ icon, label, active, onClick, isCompass }) => (
    <button
        onClick={onClick}
        style={{
            background: active ? 'rgba(23, 115, 207, 0.1)' : 'transparent',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '12px 16px',
            borderRadius: '12px',
            color: active ? 'white' : '#cbd5e1',
            cursor: 'pointer',
            width: '100%',
            transition: 'all 0.2s',
            textAlign: 'left'
        }}
    >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {isCompass && active && (
                <div style={{
                    position: 'absolute',
                    inset: '-4px',
                    border: '2px dashed var(--accent)',
                    borderRadius: '50%',
                    opacity: 0.6
                }} />
            )}
            <span className="material-symbols-outlined" style={{
                color: active ? 'var(--accent)' : 'inherit',
                fontSize: '24px'
            }}>{icon}</span>
        </div>
        <span style={{ fontWeight: active ? 600 : 500 }}>{label}</span>
    </button>
);

export default AppShell;
