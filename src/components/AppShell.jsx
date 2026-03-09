import React from 'react';
import { Anchor, Ship, History, LayoutDashboard, Menu } from 'lucide-react';

const AppShell = ({ currentView, onNavigate }) => {
    return (
        <>
            {/* Top App Bar */}
            <header style={{
                backgroundColor: 'var(--md-sys-color-primary)',
                color: 'white',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 24px',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                boxShadow: 'var(--md-sys-elevation-1)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Noah's Ark Logo Placeholder (Geometric) */}
                    <div className="ark-logo" style={{
                        width: '32px',
                        height: '32px',
                        backgroundColor: 'var(--md-sys-color-secondary)',
                        borderRadius: '4px',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Ship size={20} color="white" />
                    </div>
                    <h1 className="ark-title" style={{ fontSize: '22px', fontWeight: 500 }}>Get On Board!</h1>
                </div>
            </header>

            {/* Navigation Rail */}
            <nav style={{
                width: '80px',
                backgroundColor: '#f4f4f7',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '80px', // Below Top App Bar
                gap: '24px',
                borderRight: '1px solid var(--md-sys-color-surface-variant)'
            }}>
                <NavItem
                    icon={<LayoutDashboard size={24} />}
                    label="Manifests"
                    active={currentView === 'dashboard'}
                    onClick={() => onNavigate('dashboard')}
                />
                <NavItem
                    icon={<Ship size={24} />}
                    label="The Fleet"
                    active={currentView === 'fleet'}
                    onClick={() => { }}
                />
                <NavItem
                    icon={<History size={24} />}
                    label="Archive"
                    active={currentView === 'archive'}
                    onClick={() => { }}
                />
            </nav>
        </>
    );
};

const NavItem = ({ icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
            width: '100%',
            padding: '12px 0',
            color: active ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-on-surface-variant)',
            position: 'relative',
            transition: 'all 0.2s'
        }}
    >
        {active && (
            <div style={{
                position: 'absolute',
                top: '8px',
                left: '12px',
                right: '12px',
                height: '32px',
                backgroundColor: 'var(--md-sys-color-primary-container)',
                borderRadius: '16px',
                zIndex: -1
            }} />
        )}
        {icon}
        <span style={{ fontSize: '11px', fontWeight: 500 }}>{label}</span>
    </button>
);

export default AppShell;
