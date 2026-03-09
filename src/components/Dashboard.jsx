import React from 'react';

const Dashboard = ({ onSelectWorkflow }) => {
    return (
        <div className="nautical-bg" style={{ padding: '32px', paddingTop: '104px' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

                {/* Welcome & Stats Header */}
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px', marginBottom: '40px' }}>
                    <div>
                        <h3 style={{ fontSize: '36px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Current Manifest</h3>
                        <p style={{ color: '#64748b', fontWeight: 500, maxWidth: '448px' }}>
                            Real-time boarding status and livestock logistics. Managing global biodiversity assets.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>filter_list</span>
                            Filter View
                        </button>
                        <button className="btn-primary">
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                            Log New Pair
                        </button>
                    </div>
                </div>

                {/* High Level Stats Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px' }}>
                    <StatCard label="Total Capacity" value="10,000" trend="+12%" icon="groups_3" color="var(--primary)" />
                    <StatCard label="Boarded Pairs" value="4,250" trend="+5%" icon="done_all" color="var(--accent)" isGradient={true} />
                    <StatCard label="Available Slots" value="5,750" trend="-2%" icon="inventory_2" color="#94a3b8" />
                </div>

                {/* Priority Boarding Grid */}
                <div style={{ marginBottom: '48px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                        <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a' }}>Priority Boarding</h4>
                        <span style={{ backgroundColor: 'rgba(255, 127, 80, 0.1)', color: 'var(--accent)', fontSize: '12px', fontWeight: 700, padding: '2px 10px', borderRadius: '999px', textTransform: 'uppercase' }}>Expedited</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                        <AnimalCard emoji="🦁🦁" name="Panthera Leo" zone="Savannah Zone" progress={85} status="Cleared" statusColor="#059669" statusBg="#ecfdf5" onClick={onSelectWorkflow} />
                        <AnimalCard emoji="🦒🦒" name="Giraffa Camelopardalis" zone="Vertical Hold B" progress={12} status="In Transit" statusColor="#d97706" statusBg="#fffbeb" onClick={onSelectWorkflow} />
                        <AnimalCard emoji="🐧🐧" name="Aptenodytes Forsteri" zone="Cryo-Module 4" progress={100} status="Settled" statusColor="#2563eb" statusBg="#eff6ff" onClick={onSelectWorkflow} />
                    </div>
                </div>

                {/* Regional Port Feed */}
                <div className="glass-panel" style={{ padding: '32px', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                        <div>
                            <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>Regional Port Feed</h4>
                            <p style={{ color: '#64748b', fontSize: '14px' }}>Arrival monitoring from Eastern seaboard</p>
                        </div>
                        <button style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '14px', border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            View All Ports <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
                        </button>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', borderBottom: '1px solid #f1f5f9' }}>
                                <th style={{ padding: '0 8px 16px 8px', fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Vessel / Origin</th>
                                <th style={{ padding: '0 8px 16px 8px', fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Manifest Type</th>
                                <th style={{ padding: '0 8px 16px 8px', fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>ETA</th>
                                <th style={{ padding: '0 8px 16px 8px', fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Quarantine State</th>
                                <th style={{ padding: '0 8px 16px 8px', textAlign: 'right', fontSize: '10px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow name="SS Zephyr" terminal="Mombasa Terminal" type="Mega-Fauna" eta="04:30 AM" status="Pass" statusBg="#dcfce7" statusColor="#15803d" />
                            <TableRow name="Air-Lift Cargo 7" terminal="Amazon Basin" type="Avian/Reptilian" eta="11:15 AM" status="Pending" statusBg="#fef3c7" statusColor="#b45309" />
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

const StatCard = ({ label, value, trend, icon, color, isGradient }) => (
    <div className="glass-panel" style={{ padding: '24px', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)', border: '1px solid rgba(255, 255, 255, 0.6)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</p>
            <span className="material-symbols-outlined" style={{ color: color }}>{icon}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
            <p style={{ fontSize: '36px', fontWeight: 900, color: '#0f172a' }}>{value}</p>
            <p style={{ fontSize: '14px', fontWeight: 700, color: trend.startsWith('+') ? '#10b981' : '#f43f5e', fontStyle: 'italic' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px', verticalAlign: 'middle' }}>{trend.startsWith('+') ? 'arrow_upward' : 'arrow_downward'}</span>
                {trend.replace(/[+-]/, '')}
            </p>
        </div>
        <div style={{ height: '6px', backgroundColor: '#f1f5f9', borderRadius: '999px', marginTop: '16px', overflow: 'hidden' }}>
            <div className={isGradient ? 'progress-gradient' : ''} style={{ height: '100%', width: isGradient ? '42%' : '100%', backgroundColor: isGradient ? '' : color }}></div>
        </div>
    </div>
);

const AnimalCard = ({ emoji, name, zone, progress, status, statusColor, statusBg, onClick }) => (
    <div onClick={onClick} className="glass-panel" style={{ padding: '24px', borderRadius: '16px', border: '1px solid #f1f5f9', cursor: 'pointer', transition: 'all 0.2s' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '999px', backgroundColor: 'rgba(23, 115, 207, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', border: '1px solid rgba(23, 115, 207, 0.1)' }}>
                    {emoji}
                </div>
                <div>
                    <h5 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>{name}</h5>
                    <p style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{zone}</p>
                </div>
            </div>
            <span className="material-symbols-outlined" style={{ color: '#cbd5e1' }}>more_vert</span>
        </div>

        <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase' }}>
                <span style={{ color: '#64748b' }}>Boarding Status</span>
                <span style={{ color: 'var(--primary)' }}>{progress}% Complete</span>
            </div>
            <div style={{ height: '8px', backgroundColor: '#f1f5f9', borderRadius: '999px', overflow: 'hidden' }}>
                <div className="progress-gradient" style={{ height: '100%', width: `${progress}%` }}></div>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid #f8fafc' }}>
            <div style={{ display: 'flex', marginLeft: '4px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '999px', border: '2px solid white', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700 }}>M</div>
                <div style={{ width: '32px', height: '32px', borderRadius: '999px', border: '2px solid white', backgroundColor: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, marginLeft: '-12px' }}>F</div>
            </div>
            <span style={{ backgroundColor: statusBg, color: statusColor, padding: '4px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: 700 }}>{status}</span>
        </div>
    </div>
);

const TableRow = ({ name, terminal, type, eta, status, statusBg, statusColor }) => (
    <tr style={{ borderBottom: '1px solid #f8fafc' }}>
        <td style={{ padding: '20px 8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ color: '#94a3b8' }}>directions_boat</span>
                </div>
                <div>
                    <p style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{name}</p>
                    <p style={{ fontSize: '12px', color: '#64748b' }}>{terminal}</p>
                </div>
            </div>
        </td>
        <td style={{ padding: '20px 8px', fontSize: '14px', color: '#475569', fontWeight: 500 }}>{type}</td>
        <td style={{ padding: '20px 8px', fontSize: '14px', color: '#0f172a', fontWeight: 700 }}>{eta}</td>
        <td style={{ padding: '20px 8px' }}>
            <span style={{ backgroundColor: statusBg, color: statusColor, padding: '4px 10px', borderRadius: '999px', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }}>{status}</span>
        </td>
        <td style={{ padding: '20px 8px', textAlign: 'right' }}>
            <button style={{ width: '32px', height: '32px', border: 'none', background: 'none', borderRadius: '8px', cursor: 'pointer', color: '#94a3b8' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>visibility</span>
            </button>
        </td>
    </tr>
);

export default Dashboard;
