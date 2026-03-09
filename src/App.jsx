import React, { useState } from 'react';
import AppShell from './components/AppShell';
import Dashboard from './components/Dashboard';
import WorkflowView from './components/WorkflowView';
import NotificationSystem from './components/NotificationSystem';

function App() {
    const [currentView, setCurrentView] = useState('dashboard');
    const [notification, setNotification] = useState(null);

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(null), 5000);
    };

    return (
        <div className="app-container">
            <AppShell currentView={currentView} onNavigate={setCurrentView} />
            <main className="main-content">
                {currentView === 'dashboard' ? (
                    <Dashboard onSelectWorkflow={() => setCurrentView('workflow')} />
                ) : (
                    <WorkflowView
                        onBack={() => setCurrentView('dashboard')}
                        onComplete={() => showNotification('Survival Guide Generated!')}
                    />
                )}
            </main>
            {notification && <NotificationSystem message={notification} />}
        </div>
    );
}

export default App;
