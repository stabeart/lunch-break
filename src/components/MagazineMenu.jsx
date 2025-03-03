import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

const styles = {
  georgia: {
    fontFamily: 'Perpetua',
    fontWeight: 400
  },
  sectionTitle: {
    fontFamily: 'Perpetua',
    fontWeight: 400,
    fontSize: '2.25rem',
    fontStyle: 'italic'
  }
};

const MenuLink = ({ href, children, className, useGeorgia, isSpecial }) => (
  <Link 
    to={href} 
    style={{
      transition: 'opacity 0.3s ease-in-out',
      ...(isSpecial ? styles.sectionTitle : useGeorgia ? styles.georgia : {})
    }}
    className={`hover:opacity-30 ${className}`}
  >
    {children}
  </Link>
);

const SectionTitle = ({ href, children }) => (
  <h2 className="text-2xl mb-4" style={styles.sectionTitle}>
    <MenuLink href={href} isSpecial>{children}</MenuLink>
  </h2>
);

const LiteraryMenu = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <PageLayout title="Menu" showMenuLink={false}>
      <div className="text-center">
        <div className="space-y-12 text-center">
        <div>
            <SectionTitle href="/specials">specials</SectionTitle>
          </div>


          <div>
            <h2 className="text-2xl mb-4" style={styles.georgia}>main courses</h2>
            <p className="mb-2">
              <MenuLink href="/current">current issue</MenuLink>
            </p>
            <p className="mb-2">
              <MenuLink href="/past">past issues</MenuLink>
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4" style={styles.georgia}>desserts</h2>
            <p className="mb-2">
              <MenuLink href="/submissions">submissions</MenuLink>
            </p>
          </div>

          <div className="text-base mt-8">
           <p className="mb-2">
            <MenuLink href="/about">about us</MenuLink>
           </p>
  
            {isMobile && (
              <p className="mt-2">
                <MenuLink href="/donate">donate</MenuLink>
              </p>
               )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LiteraryMenu;