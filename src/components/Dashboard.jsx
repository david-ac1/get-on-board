import React from 'react';
import { Slack, Share2, Users, Code, BarChart3 } from 'lucide-react';

const Dashboard = ({ onSelectWorkflow }) => {
    const workflows = [
        { id: 1, name: 'Engineering Onboarding', dept: 'Engineering', progress: 65, supplies: ['Slack', 'SharePoint'], icon: <Code size={20} /> },
        { id: 2, name: 'Product Growth', dept: 'Marketing', progress: 30, supplies: ['Slack', 'Teams'], icon: <BarChart3 size={20} /> },
        { id: 3, name: 'Sales Strategy', dept: 'Sales', progress: 90, supplies: ['SharePoint'], icon: <Users size={20} /> },
    ];

    return (
        <div style={{ padding: '40px', paddingTop: '104px' }}>
            <h2 style={{ marginBottom: '32px', color: 'var(--md-sys-color-primary)' }}>The Manifest</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'react-repeat(auto-fill, minmax(300px, 1fr))',
                gap: '24px'
            }}>
                {workflows.map(wf => (
                    <div key={wf.id} className="elevated-card" onClick={onSelectWorkflow} style={{ cursor: 'pointer' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '20px',
                                    backgroundColor: 'var(--md-sys-color-primary-container)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--md-sys-color-primary)'
                                }}>
                                    {wf.icon}
                                </div>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '20px',
                                    backgroundColor: 'var(--md-sys-color-secondary-container)',
                                    marginLeft: '-12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--md-sys-color-secondary)',
                                    border: '2px solid white'
                                }}>
                                    <Users size={20} />
                                </div>
                            </div>
                            <span style={{ fontSize: '12px', color: 'var(--md-sys-color-outline)', fontWeight: 500 }}>{wf.dept}</span>
                        </div>

                        <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>{wf.name}</h3>

                        {/* Nautical Horizon Progress Indicator */}
                        <div style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                                <span>Progress</span>
                                <span>{wf.progress}%</span>
                            </div>
                            <div style={{
                                height: 'var(--nautical-horizon-height)',
                                backgroundColor: 'var(--nautical-horizon-bg)',
                                borderRadius: '2px',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    height: '100%',
                                    width: `${wf.progress}%`,
                                    backgroundColor: 'var(--md-sys-color-secondary)',
                                    transition: 'width 0.5s ease'
                                }} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {wf.supplies.map(s => (
                                <div key={s} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    padding: '4px 12px',
                                    borderRadius: '12px',
                                    backgroundColor: 'var(--md-sys-color-surface-variant)',
                                    fontSize: '11px',
                                    fontWeight: 500
                                }}>
                                    {s === 'Slack' ? <Slack size={12} /> : <Share2 size={12} />}
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
