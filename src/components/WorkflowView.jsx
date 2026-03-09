import React from 'react';

const WorkflowView = ({ onBack, onComplete }) => {
    const onApproveWeightAnchor = () => {
        console.log('HITL: Approve & Weigh Anchor triggered.');
        onComplete();
    };

    return (
        <div className="nautical-bg" style={{ padding: '32px', paddingTop: '104px', minHeight: '100vh' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

                {/* Breadcrumbs */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                    <button onClick={onBack} style={{ background: 'none', border: 'none', color: 'var(--steel-blue)', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>Workflows</button>
                    <span className="material-symbols-outlined" style={{ color: 'var(--steel-blue)', fontSize: '14px' }}>chevron_right</span>
                    <span style={{ color: 'var(--steel-blue)', fontSize: '14px', fontWeight: 500 }}>Engineering</span>
                    <span className="material-symbols-outlined" style={{ color: 'var(--steel-blue)', fontSize: '14px' }}>chevron_right</span>
                    <span style={{ color: '#0f172a', fontSize: '14px', fontWeight: 700 }}>Senior Engineer Onboarding</span>
                </div>

                {/* Page Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '36px' }}>architecture</span>
                        <div>
                            <h1 style={{ fontSize: '36px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.025em' }}>Senior Engineer Onboarding</h1>
                            <p style={{ color: 'var(--steel-blue)', fontSize: '18px' }}>
                                Workflow ID: <span style={{ fontFamily: 'monospace', color: 'var(--primary)', fontWeight: 700 }}>SE-2024-Nautical</span> | Assigned to: <span style={{ color: '#0f172a', fontWeight: 600, textDecoration: 'underline', textDecorationColor: 'rgba(23, 115, 207, 0.3)' }}>Alex Mariner</span>
                            </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button className="btn-secondary">
                            <span className="material-symbols-outlined" style={{ marginRight: '8px', verticalAlign: 'middle' }}>map</span>
                            View Chart
                        </button>
                        <button className="btn-primary">
                            <span className="material-symbols-outlined" style={{ marginRight: '8px', verticalAlign: 'middle' }}>edit</span>
                            Edit Path
                        </button>
                    </div>
                </div>

                {/* Nautical Progress Stepper */}
                <section className="glass-panel" style={{ padding: '32px', borderRadius: '24px', marginBottom: '32px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, padding: '16px', opacity: 0.05 }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '144px' }}>explore</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>straighten</span>
                            The Horizon: Voyage Progress
                        </h3>
                        <span style={{ backgroundColor: 'rgba(23, 115, 207, 0.1)', color: 'var(--primary)', fontWeight: 700, fontSize: '14px', padding: '4px 12px', borderRadius: '999px', border: '1px solid rgba(23, 115, 207, 0.2)' }}>65% Discovered</span>
                    </div>

                    <div style={{ position: 'relative', padding: '0 16px' }}>
                        {/* The Chart Path Line */}
                        <div className="chart-path" style={{ position: 'absolute', top: '24px', left: 0, right: 0, height: '4px', opacity: 0.3, transform: 'translateY(-50%)' }}></div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                            <Step icon="check_circle" label="Hiring Port" status="completed" />
                            <Step icon="waves" label="Base Camp" status="completed" />
                            <Step icon="eco" label="HITL Review Strait" status="active" />
                            <Step icon="security" label="Security Inlet" status="upcoming" />
                            <Step icon="emoji_events" label="Full Captaincy" status="upcoming" />
                        </div>
                    </div>
                </section>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>

                    {/* Main Content Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                        {/* Featured HITL Card */}
                        <section style={{ backgroundColor: 'white', borderRadius: '24px', padding: '4px', border: '2px solid var(--accent)', boxShadow: '0 0 30px -5px rgba(255,127,80,0.3)' }}>
                            <div style={{ padding: '32px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                                    <div>
                                        <h4 style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Active Focus</h4>
                                        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0f172a' }}>HITL Review: Engineering Standards</h2>
                                    </div>
                                    <div style={{ backgroundColor: 'rgba(255, 127, 80, 0.1)', padding: '12px', borderRadius: '12px', color: 'var(--accent)' }}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>visibility</span>
                                    </div>
                                </div>

                                <p style={{ color: '#4b5563', lineHeight: '1.6', marginBottom: '32px' }}>
                                    Please review the technical documentation and initial commit quality from Alex. Ensure adherence to the <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Nautical Code Standards</span>. Once verified, provide the final sign-off to proceed to the next stage of the voyage.
                                </p>

                                {/* Checklist */}
                                <div style={{ marginBottom: '40px' }}>
                                    <h5 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Review Checklist</h5>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                        <CheckItem label="Environment Setup" checked={true} />
                                        <CheckItem label="Security Credentials" checked={true} />
                                        <CheckItem label="Code Architecture Review" checked={false} />
                                        <CheckItem label="Team Introduction Log" checked={false} />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <button className="btn-accent" style={{ flex: 1, padding: '24px', fontSize: '20px' }} onClick={onApproveWeightAnchor}>
                                        <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>anchor</span>
                                        Approve & Weigh Anchor
                                    </button>
                                    <button className="btn-secondary" style={{ padding: '0 32px', color: '#64748b' }}>
                                        <span className="material-symbols-outlined">flag</span>
                                        Flag Concern
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Notes Section */}
                        <section className="glass-panel" style={{ padding: '32px', borderRadius: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>history_edu</span>
                                    Navigation Logs & Notes
                                </h3>
                                <button style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                                    Add Note
                                </button>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <LogEntry user="Chief Engineer Sarah" time="2 hours ago" text="Alex has shown great proficiency in the initial PR. The logic is sound, but we might need to double check the helm-charts configuration for the dev cluster." />
                                <LogEntry user="System Automator" time="5 hours ago" text="Automated security scan completed. No vulnerabilities found in the onboarded repository path." isSystem={true} />
                            </div>
                        </section>

                    </div>

                    {/* Sidebar Area */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                        {/* Crew Card */}
                        <section className="glass-panel" style={{ padding: '24px', borderRadius: '24px' }}>
                            <h4 style={{ fontSize: '12px', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>Onboarding Crew</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <CrewMember name="Marcus Finch" role="Mentor / Navigator" avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuD1G6Kiq-GYDHq3I0u_qXY4a9EItAJEb4jt9eqvHZnsNzpxNpqAjz1piS2fF8CkFtXYuGPZfrPtkl1zZauuQprQnATfhjK0gJZIoGbQqMNoGybrlv68WVHsSgUJAIkHux0hWw4VvMbVF5sT2W8AQEgTgXGp2HoqDIAOywosbo9HaHpDg6mh2ttIaiqq6qsOyOoVmvWm2REGpbfBMak1qpOrKC6JsQHSOME2zIIyqULHhLg3eYsBzfgYvbEkdF9okF2p8CsJLXcrFzw" />
                                <CrewMember name="Elena Vance" role="Logistics / HR" avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAS8lRRgmuVrlH7hbhISFYMXfulV4Sp-exR5XuL5d59oOTqFxC5XZbHY5n6b-oVAmKAPZuf5xH1QK8ERnd8_JbvlZuPhSfg2atiHKrb9VhuxLqiqQz65DGI0WOO4xuDECnHLxMrLzwxYSJzK8mzMGxs4IaNx4aPc7Pqp6GDHFZ13gSnRly6KpYHPH35SiXC6QPCN1Sne7AkN1DcXF1MHCiYObH7nnSgQkM34-U_BjnNEp-RQEwxPaw3Ibao0LAKKkOgELhmUtDIsy0" />
                            </div>
                            <button style={{ width: '100%', marginTop: '24px', padding: '12px', border: '1px dashed #cbd5e1', borderRadius: '8px', background: 'none', color: '#64748b', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }}>
                                + Add Crew Member
                            </button>
                        </section>

                        {/* Cargo Inventory */}
                        <section style={{ backgroundColor: 'rgba(23, 115, 207, 0.05)', padding: '24px', borderRadius: '24px', border: '1px solid rgba(23, 115, 207, 0.2)' }}>
                            <h4 style={{ color: 'var(--primary)', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Cargo Inventory</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <CargoItem icon="description" name="Onboarding_Deck.pdf" />
                                <CargoItem icon="key" name="Security_Access_Keys" />
                                <CargoItem icon="terminal" name="Shell_Environment_Config" />
                            </div>
                        </section>

                        {/* Port of Origin */}
                        <section className="glass-panel" style={{ padding: '24px', borderRadius: '24px' }}>
                            <h4 style={{ fontSize: '12px', fontWeight: 900, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Port of Origin</h4>
                            <div style={{ height: '128px', backgroundColor: '#f1f5f9', borderRadius: '12px', marginBottom: '12px', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', inset: 0, opacity: 0.2, backgroundColor: 'var(--primary)' }}></div>
                                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '36px' }}>location_on</span>
                                </div>
                            </div>
                            <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>Engineering Hub West</p>
                            <p style={{ fontSize: '12px', color: 'var(--steel-blue)' }}>San Francisco, CA</p>
                        </section>

                    </div>
                </div>

                {/* Footer */}
                <footer style={{ marginTop: '64px', padding: '40px 0', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.5 }}>
                        <span className="material-symbols-outlined">anchor</span>
                        <span style={{ fontSize: '14px', fontWeight: 700 }}>GET ON BOARD! © 2024</span>
                    </div>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        <FooterLink label="Privacy Log" />
                        <FooterLink label="System Status" />
                        <FooterLink label="Captain's Support" />
                    </div>
                </footer>

            </div>
        </div>
    );
};

const Step = ({ icon, label, status }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', zIndex: 10, width: '80px' }}>
        <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '999px',
            backgroundColor: status === 'completed' ? 'var(--accent)' : status === 'active' ? 'white' : 'rgba(78, 115, 151, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: status === 'completed' ? 'white' : status === 'active' ? 'var(--primary)' : 'var(--steel-blue)',
            border: status === 'active' ? '4px solid var(--primary)' : status === 'upcoming' ? '2px dashed var(--steel-blue)' : 'none',
            boxShadow: status === 'active' ? '0 0 0 8px rgba(23, 115, 207, 0.1)' : 'none'
        }}>
            <span className="material-symbols-outlined">{icon}</span>
        </div>
        <span style={{ fontSize: '10px', fontWeight: 700, color: status === 'upcoming' ? 'var(--steel-blue)' : status === 'completed' ? 'var(--accent)' : 'var(--primary)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
    </div>
);

const CheckItem = ({ label, checked }) => (
    <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
        <input type="checkbox" checked={checked} readOnly style={{ width: '20px', height: '20px', accentColor: 'var(--accent)' }} />
        <span style={{ fontSize: '14px', fontWeight: 500, color: '#334155' }}>{label}</span>
    </label>
);

const LogEntry = ({ user, time, text, isSystem }) => (
    <div style={{ display: 'flex', gap: '16px', borderLeft: '2px solid rgba(23, 115, 207, 0.2)', paddingLeft: '24px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '999px', backgroundColor: isSystem ? 'rgba(78, 115, 151, 0.1)' : 'rgba(23, 115, 207, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isSystem ? 'var(--steel-blue)' : 'var(--primary)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{isSystem ? 'info' : 'person'}</span>
        </div>
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, color: '#0f172a' }}>{user}</span>
                <span style={{ fontSize: '12px', color: 'var(--steel-blue)' }}>{time}</span>
            </div>
            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.5' }}>{text}</p>
        </div>
    </div>
);

const CrewMember = ({ name, role, avatar }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={avatar} alt={name} style={{ width: '40px', height: '40px', borderRadius: '8px', objectFit: 'cover' }} />
            <div>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{name}</p>
                <p style={{ fontSize: '12px', color: 'var(--steel-blue)' }}>{role}</p>
            </div>
        </div>
        <button style={{ color: 'var(--primary)', border: 'none', background: 'none', cursor: 'pointer' }}>
            <span className="material-symbols-outlined">chat_bubble</span>
        </button>
    </div>
);

const CargoItem = ({ icon, name }) => (
    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', backgroundColor: 'white', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', transition: 'transform 0.2s' }}>
        <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>{icon}</span>
        <span style={{ fontSize: '14px', fontWeight: 500, color: '#0f172a' }}>{name}</span>
    </a>
);

const FooterLink = ({ label }) => (
    <a href="#" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--steel-blue)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</a>
);

export default WorkflowView;
