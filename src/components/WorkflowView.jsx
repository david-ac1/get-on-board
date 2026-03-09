import React from 'react';
import { ArrowLeft, Anchor, Ghost, Bird } from 'lucide-react';

const WorkflowView = ({ onBack, onComplete }) => {
    const steps = [
        { title: 'The Manifest', description: 'Data sources linked (Slack, SharePoint)', status: 'complete' },
        { title: 'The Scout', description: 'Crawling departmental documentation', status: 'complete' },
        { title: 'The Architect', description: 'Synthesizing tribal knowledge', status: 'active' },
        { title: 'The Anchor', description: 'Review & Weigh Anchor (HITL Approval)', status: 'pending' },
    ];

    const onApproveWeightAnchor = () => {
        // Airia API integration point: trigger doc generation
        console.log('HITL: Approve & Weigh Anchor triggered.');
        onComplete();
    };

    return (
        <div style={{ padding: '40px', paddingTop: '104px', maxWidth: '800px' }}>
            <button onClick={onBack} style={{
                background: 'none',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--md-sys-color-primary)',
                cursor: 'pointer',
                marginBottom: '24px',
                fontWeight: 500,
                fontSize: '14px'
            }}>
                <ArrowLeft size={18} />
                Back to Manifests
            </button>

            <h2 style={{ marginBottom: '40px', color: 'var(--md-sys-color-primary)' }}>The Navigator: Engineering Onboarding</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {steps.map((step, index) => (
                    <div key={index} style={{ display: 'flex', gap: '24px', position: 'relative' }}>
                        {/* Vertical Line */}
                        {index < steps.length - 1 && (
                            <div style={{
                                position: 'absolute',
                                left: '15px',
                                top: '32px',
                                bottom: '-32px',
                                width: '2px',
                                backgroundColor: 'var(--md-sys-color-surface-variant)',
                                zIndex: 0
                            }} />
                        )}

                        {/* Step Icon */}
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '16px',
                            backgroundColor: step.status === 'complete' ? 'var(--md-sys-color-primary)' :
                                step.status === 'active' ? 'var(--md-sys-color-tertiary)' : 'var(--md-sys-color-surface-variant)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1,
                            color: 'white'
                        }}>
                            {step.status === 'active' ? <Bird size={18} /> :
                                step.status === 'complete' ? <Ghost size={18} /> : index + 1}
                        </div>

                        {/* Step Content */}
                        <div style={{ paddingBottom: '48px', flex: 1 }}>
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: 600,
                                color: step.status === 'pending' ? 'var(--md-sys-color-outline)' : 'var(--md-sys-color-on-surface)'
                            }}>
                                {step.title}
                            </h3>
                            <p style={{
                                fontSize: '14px',
                                color: 'var(--md-sys-color-on-surface-variant)',
                                marginTop: '4px'
                            }}>
                                {step.description}
                            </p>

                            {step.title === 'The Anchor' && (
                                <div style={{ marginTop: '24px' }}>
                                    <button className="secondary-button" onClick={onApproveWeightAnchor}>
                                        <Anchor size={18} />
                                        Approve & Weigh Anchor
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkflowView;
