import { type ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: ReactNode;
  userName?: string;
  userCoins?: number;
  course?: string;
  activeAvatarImage?: string;
}

export function Layout({ 
  children,
  userName,
  userCoins,
  course,
  activeAvatarImage
}: LayoutProps) {
  return (
    <div className="app-wrapper">
      <Sidebar 
        userName={userName}
        userCoins={userCoins}
        course={course}
        activeAvatarImage={activeAvatarImage}
      />
      <main className="main-container" style={{ gridTemplateColumns: '1fr' }}>
        <div className="main-content" style={{ maxWidth: '100%', margin: 0 }}>
          {children}
        </div>
      </main>
    </div>
  );
}
