import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Component3 from './backup_php/about-home';
// Removed backup_php/aboutus.tsx
// Removed backup_php/assignment.tsx
import Component6 from './backup_php/contact-home';
// Removed backup_php/contactus.tsx
import Component8 from './backup_php/course-details';
// Removed backup_php/coursev.tsx
// Removed backup_php/course_video.tsx
// Removed backup_php/dashboard.tsx
// Removed backup_php/download.tsx
// Removed backup_php/eaglone_shop.tsx
// Removed backup_php/header.tsx
import Component15 from './backup_php/index';
import Component16 from './backup_php/lab';
// Removed backup_php/langs.tsx
// Removed backup_php/leaderboard.tsx
import Component19 from './backup_php/login';
// Removed backup_php/maintanance.tsx
import Component21 from './backup_php/mobile-block';
import Component22 from './backup_php/ourcourse';
// Removed backup_php/owasp-lab.tsx
// Removed backup_php/pay.tsx
// Removed backup_php/profile.tsx
// Removed backup_php/setting.tsx
// Removed backup_php/settings.tsx
import Component28 from './backup_php/sidebar';
import Component29 from './backup_php/signup';
// Removed backup_php/tasks.tsx
// Removed backup_php/teams.tsx
// Removed backup_php/tournament.tsx
import Component33 from './backup_php/vulnerable-saas-app';
import Component34 from './lab/codings/cpp';
// Removed lab/codings/js.tsx
// Removed lab/codings/php.tsx
import Component37 from './lab/codings/pythoni';
import Component38 from './lab/langs';
import Component39 from './lab/lin_term';
import Component40 from './owasp_lab/authentication-failures/advanced/auth-bypass-chain/index';
import Component41 from './owasp_lab/authentication-failures/advanced/session-fixation/index';
import Component42 from './owasp_lab/authentication-failures/beginner/user-enumeration/index';
import Component43 from './owasp_lab/authentication-failures/beginner/weak-login/dashboard';
import Component44 from './owasp_lab/authentication-failures/beginner/weak-login/index';
import Component45 from './owasp_lab/authentication-failures/intermediate/reset-token/index';
import Component46 from './owasp_lab/authentication-failures/intermediate/weak-session/index';
import Component47 from './owasp_lab/broken-access/advanced/horizontal-privilege-leak/report';
import Component48 from './owasp_lab/broken-access/advanced/horizontal-privilege-leak/templates/header';
import Component49 from './owasp_lab/broken-access/advanced/multi-role-bypass/templates/header';
import Component50 from './owasp_lab/broken-access/beginner/document-viewer/dashboard';
import Component51 from './owasp_lab/broken-access/beginner/document-viewer/index';
import Component52 from './owasp_lab/broken-access/beginner/document-viewer/login';
// Removed owasp_lab/broken-access/beginner/document-viewer/templates/header.tsx
import Component54 from './owasp_lab/broken-access/beginner/document-viewer/view';
import Component55 from './owasp_lab/broken-access/beginner/profile-access/dashboard';
import Component56 from './owasp_lab/broken-access/beginner/profile-access/index';
import Component57 from './owasp_lab/broken-access/beginner/profile-access/login';
import Component58 from './owasp_lab/broken-access/beginner/profile-access/profile';
// Removed owasp_lab/broken-access/beginner/profile-access/templates/header.tsx
import Component60 from './owasp_lab/broken-access/intermediate/admin-panel-bypass/admin';
import Component61 from './owasp_lab/broken-access/intermediate/admin-panel-bypass/dashboard';
import Component62 from './owasp_lab/broken-access/intermediate/admin-panel-bypass/index';
import Component63 from './owasp_lab/broken-access/intermediate/admin-panel-bypass/login';
// Removed owasp_lab/broken-access/intermediate/admin-panel-bypass/templates/header.tsx
import Component65 from './owasp_lab/broken-access/intermediate/id-guessing-api/dashboard';
import Component66 from './owasp_lab/broken-access/intermediate/id-guessing-api/index';
import Component67 from './owasp_lab/broken-access/intermediate/id-guessing-api/login';
import Component68 from './owasp_lab/broken-access/intermediate/id-guessing-api/templates/header';
// Removed owasp_lab/crypto-failures/advanced/broken-signature/index.tsx
import Component70 from './owasp_lab/crypto-failures/advanced/hardcoded-key/index';
import Component71 from './owasp_lab/crypto-failures/beginner/base64-storage/index';
import Component72 from './owasp_lab/crypto-failures/beginner/weak-hash/dashboard';
import Component73 from './owasp_lab/crypto-failures/beginner/weak-hash/index';
import Component74 from './owasp_lab/crypto-failures/intermediate/predictable-token/index';
// Removed owasp_lab/crypto-failures/intermediate/weak-encryption/index.tsx
import Component76 from './owasp_lab/db';
import Component77 from './owasp_lab/exception-failures/advanced/crash-exploit/index';
import Component78 from './owasp_lab/exception-failures/advanced/exception-chain/index';
import Component79 from './owasp_lab/exception-failures/beginner/missing-validation/index';
import Component80 from './owasp_lab/exception-failures/beginner/verbose-errors/index';
import Component81 from './owasp_lab/exception-failures/intermediate/fallback-bypass/index';
import Component82 from './owasp_lab/exception-failures/intermediate/improper-handling/index';
import Component83 from './owasp_lab/injection/advanced/chained-injection-api/index';
import Component84 from './owasp_lab/injection/advanced/dynamic-query-builder/index';
import Component85 from './owasp_lab/injection/beginner/employee-search/index';
import Component86 from './owasp_lab/injection/beginner/employee-search/search';
import Component87 from './owasp_lab/injection/beginner/employee-search/templates/header';
import Component88 from './owasp_lab/injection/beginner/report-viewer/index';
// Removed owasp_lab/injection/beginner/report-viewer/templates/header.tsx
import Component90 from './owasp_lab/injection/beginner/report-viewer/view';
// Removed owasp_lab/injection/intermediate/filter-dashboard/index.tsx
// Removed owasp_lab/injection/intermediate/log-query-engine/index.tsx
import Component93 from './owasp_lab/insecure-design/advanced/multi-step-bypass/index';
import Component94 from './owasp_lab/insecure-design/advanced/role-confusion-flow/index';
import Component95 from './owasp_lab/insecure-design/beginner/approval-flow/index';
import Component96 from './owasp_lab/insecure-design/beginner/reset-workflow/index';
import Component97 from './owasp_lab/insecure-design/intermediate/discount-engine/index';
import Component98 from './owasp_lab/insecure-design/intermediate/feature-unlock/index';
import Component99 from './owasp_lab/integrity-failures/advanced/integrity-chain-break/index';
import Component100 from './owasp_lab/integrity-failures/advanced/signature-bypass/index';
// Removed owasp_lab/integrity-failures/beginner/config-loader/index.tsx
import Component102 from './owasp_lab/integrity-failures/beginner/file-checker/index';
import Component103 from './owasp_lab/integrity-failures/intermediate/data-trust-engine/index';
import Component104 from './owasp_lab/integrity-failures/intermediate/update-importer/index';
// Removed owasp_lab/logging-failures/advanced/blind-activity/index.tsx
import Component106 from './owasp_lab/logging-failures/advanced/log-injection-chain/index';
import Component107 from './owasp_lab/logging-failures/beginner/missing-logs/index';
import Component108 from './owasp_lab/logging-failures/beginner/weak-logging/index';
import Component109 from './owasp_lab/logging-failures/intermediate/alert-bypass/index';
import Component110 from './owasp_lab/logging-failures/intermediate/log-tampering/index';
import Component111 from './owasp_lab/security-misconfig/advanced/admin-misroute/admin-old';
import Component112 from './owasp_lab/security-misconfig/advanced/admin-misroute/dashboard';
import Component113 from './owasp_lab/security-misconfig/advanced/admin-misroute/index';
import Component114 from './owasp_lab/security-misconfig/advanced/admin-misroute/login';
import Component115 from './owasp_lab/security-misconfig/advanced/admin-misroute/templates/header';
import Component116 from './owasp_lab/security-misconfig/advanced/backup-exposure/dashboard';
import Component117 from './owasp_lab/security-misconfig/advanced/backup-exposure/index';
import Component118 from './owasp_lab/security-misconfig/advanced/backup-exposure/login';
import Component119 from './owasp_lab/security-misconfig/advanced/backup-exposure/templates/header';
import Component120 from './owasp_lab/security-misconfig/beginner/debug-panel/dashboard';
import Component121 from './owasp_lab/security-misconfig/beginner/debug-panel/debug';
import Component122 from './owasp_lab/security-misconfig/beginner/debug-panel/index';
import Component123 from './owasp_lab/security-misconfig/beginner/debug-panel/login';
import Component124 from './owasp_lab/security-misconfig/beginner/debug-panel/templates/header';
import Component125 from './owasp_lab/security-misconfig/beginner/exposed-config/dashboard';
import Component126 from './owasp_lab/security-misconfig/beginner/exposed-config/index';
import Component127 from './owasp_lab/security-misconfig/beginner/exposed-config/login';
import Component128 from './owasp_lab/security-misconfig/beginner/exposed-config/templates/header';
import Component129 from './owasp_lab/security-misconfig/intermediate/insecure-headers/dashboard';
import Component130 from './owasp_lab/security-misconfig/intermediate/insecure-headers/index';
import Component131 from './owasp_lab/security-misconfig/intermediate/insecure-headers/templates/header';
import Component132 from './owasp_lab/security-misconfig/intermediate/verbose-errors/dashboard';
import Component133 from './owasp_lab/security-misconfig/intermediate/verbose-errors/index';
import Component134 from './owasp_lab/security-misconfig/intermediate/verbose-errors/templates/header';
import Component135 from './owasp_lab/supply-chain/advanced/loader-manipulation/index';
import Component136 from './owasp_lab/supply-chain/advanced/update-signature-bypass/index';
import Component137 from './owasp_lab/supply-chain/beginner/plugin-loader/index';
import Component138 from './owasp_lab/supply-chain/beginner/update-center/index';
import Component139 from './owasp_lab/supply-chain/intermediate/marketplace-trust/index';
import Component140 from './owasp_lab/supply-chain/intermediate/package-installer/index';
import Component141 from './ss/dashboard';
import Component142 from './ss/index';
import Component143 from './ss/linux-learning';
import Component144 from './ss/linux';
import Component145 from './ss/profile';
import Component146 from './ss/python-learning';
import Component147 from './ss/python';
import Component148 from './ss/sidebar';
import Component149 from './ss/tasks';
import Component150 from './ss/terminal';
import Component151 from './_admin/index';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/about-home" element={<Component3 />} />
        {/* Removed route for backup_php/aboutus.tsx */}
        {/* Removed route for backup_php/assignment.tsx */}
        <Route path="/contact-home" element={<Component6 />} />
        {/* Removed route for backup_php/contactus.tsx */}
        <Route path="/course-details" element={<Component8 />} />
        {/* Removed route for backup_php/coursev.tsx */}
        {/* Removed route for backup_php/course_video.tsx */}
        {/* Removed route for backup_php/dashboard.tsx */}
        {/* Removed route for backup_php/download.tsx */}
        {/* Removed route for backup_php/eaglone_shop.tsx */}
        {/* Removed route for backup_php/header.tsx */}
        <Route path="/" element={<Component15 />} />
        <Route path="/lab" element={<Component16 />} />
        {/* Removed route for backup_php/langs.tsx */}
        {/* Removed route for backup_php/leaderboard.tsx */}
        <Route path="/login" element={<Component19 />} />
        {/* Removed route for backup_php/maintanance.tsx */}
        <Route path="/mobile-block" element={<Component21 />} />
        <Route path="/ourcourse" element={<Component22 />} />
        {/* Removed route for backup_php/owasp-lab.tsx */}
        {/* Removed route for backup_php/pay.tsx */}
        {/* Removed route for backup_php/profile.tsx */}
        {/* Removed route for backup_php/setting.tsx */}
        {/* Removed route for backup_php/settings.tsx */}
        <Route path="/sidebar" element={<Component28 />} />
        <Route path="/signup" element={<Component29 />} />
        {/* Removed route for backup_php/tasks.tsx */}
        {/* Removed route for backup_php/teams.tsx */}
        {/* Removed route for backup_php/tournament.tsx */}
        <Route path="/vulnerable-saas-app" element={<Component33 />} />
        <Route path="/lab/codings/cpp" element={<Component34 />} />
        {/* Removed route for lab/codings/js.tsx */}
        {/* Removed route for lab/codings/php.tsx */}
        <Route path="/lab/codings/pythoni" element={<Component37 />} />
        <Route path="/lab/langs" element={<Component38 />} />
        <Route path="/lab/lin_term" element={<Component39 />} />
        <Route path="/owasp_lab/authentication-failures/advanced/auth-bypass-chain" element={<Component40 />} />
        <Route path="/owasp_lab/authentication-failures/advanced/auth-bypass-chain/index" element={<Component40 />} />
        <Route path="/owasp_lab/authentication-failures/advanced/session-fixation" element={<Component41 />} />
        <Route path="/owasp_lab/authentication-failures/advanced/session-fixation/index" element={<Component41 />} />
        <Route path="/owasp_lab/authentication-failures/beginner/user-enumeration" element={<Component42 />} />
        <Route path="/owasp_lab/authentication-failures/beginner/user-enumeration/index" element={<Component42 />} />
        <Route path="/owasp_lab/authentication-failures/beginner/weak-login/dashboard" element={<Component43 />} />
        <Route path="/owasp_lab/authentication-failures/beginner/weak-login" element={<Component44 />} />
        <Route path="/owasp_lab/authentication-failures/beginner/weak-login/index" element={<Component44 />} />
        <Route path="/owasp_lab/authentication-failures/intermediate/reset-token" element={<Component45 />} />
        <Route path="/owasp_lab/authentication-failures/intermediate/reset-token/index" element={<Component45 />} />
        <Route path="/owasp_lab/authentication-failures/intermediate/weak-session" element={<Component46 />} />
        <Route path="/owasp_lab/authentication-failures/intermediate/weak-session/index" element={<Component46 />} />
        <Route path="/owasp_lab/broken-access/advanced/horizontal-privilege-leak/report" element={<Component47 />} />
        <Route path="/owasp_lab/broken-access/advanced/horizontal-privilege-leak/templates/header" element={<Component48 />} />
        <Route path="/owasp_lab/broken-access/advanced/multi-role-bypass/templates/header" element={<Component49 />} />
        <Route path="/owasp_lab/broken-access/beginner/document-viewer/dashboard" element={<Component50 />} />
        <Route path="/owasp_lab/broken-access/beginner/document-viewer" element={<Component51 />} />
        <Route path="/owasp_lab/broken-access/beginner/document-viewer/index" element={<Component51 />} />
        <Route path="/owasp_lab/broken-access/beginner/document-viewer/login" element={<Component52 />} />
        {/* Removed route for owasp_lab/broken-access/beginner/document-viewer/templates/header.tsx */}
        <Route path="/owasp_lab/broken-access/beginner/document-viewer/view" element={<Component54 />} />
        <Route path="/owasp_lab/broken-access/beginner/profile-access/dashboard" element={<Component55 />} />
        <Route path="/owasp_lab/broken-access/beginner/profile-access" element={<Component56 />} />
        <Route path="/owasp_lab/broken-access/beginner/profile-access/index" element={<Component56 />} />
        <Route path="/owasp_lab/broken-access/beginner/profile-access/login" element={<Component57 />} />
        <Route path="/owasp_lab/broken-access/beginner/profile-access/profile" element={<Component58 />} />
        {/* Removed route for owasp_lab/broken-access/beginner/profile-access/templates/header.tsx */}
        <Route path="/owasp_lab/broken-access/intermediate/admin-panel-bypass/admin" element={<Component60 />} />
        <Route path="/owasp_lab/broken-access/intermediate/admin-panel-bypass/dashboard" element={<Component61 />} />
        <Route path="/owasp_lab/broken-access/intermediate/admin-panel-bypass" element={<Component62 />} />
        <Route path="/owasp_lab/broken-access/intermediate/admin-panel-bypass/index" element={<Component62 />} />
        <Route path="/owasp_lab/broken-access/intermediate/admin-panel-bypass/login" element={<Component63 />} />
        {/* Removed route for owasp_lab/broken-access/intermediate/admin-panel-bypass/templates/header.tsx */}
        <Route path="/owasp_lab/broken-access/intermediate/id-guessing-api/dashboard" element={<Component65 />} />
        <Route path="/owasp_lab/broken-access/intermediate/id-guessing-api" element={<Component66 />} />
        <Route path="/owasp_lab/broken-access/intermediate/id-guessing-api/index" element={<Component66 />} />
        <Route path="/owasp_lab/broken-access/intermediate/id-guessing-api/login" element={<Component67 />} />
        <Route path="/owasp_lab/broken-access/intermediate/id-guessing-api/templates/header" element={<Component68 />} />
        {/* Removed route for owasp_lab/crypto-failures/advanced/broken-signature/index.tsx */}
        {/* Removed route for owasp_lab/crypto-failures/advanced/broken-signature/index.tsx */}
        <Route path="/owasp_lab/crypto-failures/advanced/hardcoded-key" element={<Component70 />} />
        <Route path="/owasp_lab/crypto-failures/advanced/hardcoded-key/index" element={<Component70 />} />
        <Route path="/owasp_lab/crypto-failures/beginner/base64-storage" element={<Component71 />} />
        <Route path="/owasp_lab/crypto-failures/beginner/base64-storage/index" element={<Component71 />} />
        <Route path="/owasp_lab/crypto-failures/beginner/weak-hash/dashboard" element={<Component72 />} />
        <Route path="/owasp_lab/crypto-failures/beginner/weak-hash" element={<Component73 />} />
        <Route path="/owasp_lab/crypto-failures/beginner/weak-hash/index" element={<Component73 />} />
        <Route path="/owasp_lab/crypto-failures/intermediate/predictable-token" element={<Component74 />} />
        <Route path="/owasp_lab/crypto-failures/intermediate/predictable-token/index" element={<Component74 />} />
        {/* Removed route for owasp_lab/crypto-failures/intermediate/weak-encryption/index.tsx */}
        {/* Removed route for owasp_lab/crypto-failures/intermediate/weak-encryption/index.tsx */}
        <Route path="/owasp_lab/db" element={<Component76 />} />
        <Route path="/owasp_lab/exception-failures/advanced/crash-exploit" element={<Component77 />} />
        <Route path="/owasp_lab/exception-failures/advanced/crash-exploit/index" element={<Component77 />} />
        <Route path="/owasp_lab/exception-failures/advanced/exception-chain" element={<Component78 />} />
        <Route path="/owasp_lab/exception-failures/advanced/exception-chain/index" element={<Component78 />} />
        <Route path="/owasp_lab/exception-failures/beginner/missing-validation" element={<Component79 />} />
        <Route path="/owasp_lab/exception-failures/beginner/missing-validation/index" element={<Component79 />} />
        <Route path="/owasp_lab/exception-failures/beginner/verbose-errors" element={<Component80 />} />
        <Route path="/owasp_lab/exception-failures/beginner/verbose-errors/index" element={<Component80 />} />
        <Route path="/owasp_lab/exception-failures/intermediate/fallback-bypass" element={<Component81 />} />
        <Route path="/owasp_lab/exception-failures/intermediate/fallback-bypass/index" element={<Component81 />} />
        <Route path="/owasp_lab/exception-failures/intermediate/improper-handling" element={<Component82 />} />
        <Route path="/owasp_lab/exception-failures/intermediate/improper-handling/index" element={<Component82 />} />
        <Route path="/owasp_lab/injection/advanced/chained-injection-api" element={<Component83 />} />
        <Route path="/owasp_lab/injection/advanced/chained-injection-api/index" element={<Component83 />} />
        <Route path="/owasp_lab/injection/advanced/dynamic-query-builder" element={<Component84 />} />
        <Route path="/owasp_lab/injection/advanced/dynamic-query-builder/index" element={<Component84 />} />
        <Route path="/owasp_lab/injection/beginner/employee-search" element={<Component85 />} />
        <Route path="/owasp_lab/injection/beginner/employee-search/index" element={<Component85 />} />
        <Route path="/owasp_lab/injection/beginner/employee-search/search" element={<Component86 />} />
        <Route path="/owasp_lab/injection/beginner/employee-search/templates/header" element={<Component87 />} />
        <Route path="/owasp_lab/injection/beginner/report-viewer" element={<Component88 />} />
        <Route path="/owasp_lab/injection/beginner/report-viewer/index" element={<Component88 />} />
        {/* Removed route for owasp_lab/injection/beginner/report-viewer/templates/header.tsx */}
        <Route path="/owasp_lab/injection/beginner/report-viewer/view" element={<Component90 />} />
        {/* Removed route for owasp_lab/injection/intermediate/filter-dashboard/index.tsx */}
        {/* Removed route for owasp_lab/injection/intermediate/filter-dashboard/index.tsx */}
        {/* Removed route for owasp_lab/injection/intermediate/log-query-engine/index.tsx */}
        {/* Removed route for owasp_lab/injection/intermediate/log-query-engine/index.tsx */}
        <Route path="/owasp_lab/insecure-design/advanced/multi-step-bypass" element={<Component93 />} />
        <Route path="/owasp_lab/insecure-design/advanced/multi-step-bypass/index" element={<Component93 />} />
        <Route path="/owasp_lab/insecure-design/advanced/role-confusion-flow" element={<Component94 />} />
        <Route path="/owasp_lab/insecure-design/advanced/role-confusion-flow/index" element={<Component94 />} />
        <Route path="/owasp_lab/insecure-design/beginner/approval-flow" element={<Component95 />} />
        <Route path="/owasp_lab/insecure-design/beginner/approval-flow/index" element={<Component95 />} />
        <Route path="/owasp_lab/insecure-design/beginner/reset-workflow" element={<Component96 />} />
        <Route path="/owasp_lab/insecure-design/beginner/reset-workflow/index" element={<Component96 />} />
        <Route path="/owasp_lab/insecure-design/intermediate/discount-engine" element={<Component97 />} />
        <Route path="/owasp_lab/insecure-design/intermediate/discount-engine/index" element={<Component97 />} />
        <Route path="/owasp_lab/insecure-design/intermediate/feature-unlock" element={<Component98 />} />
        <Route path="/owasp_lab/insecure-design/intermediate/feature-unlock/index" element={<Component98 />} />
        <Route path="/owasp_lab/integrity-failures/advanced/integrity-chain-break" element={<Component99 />} />
        <Route path="/owasp_lab/integrity-failures/advanced/integrity-chain-break/index" element={<Component99 />} />
        <Route path="/owasp_lab/integrity-failures/advanced/signature-bypass" element={<Component100 />} />
        <Route path="/owasp_lab/integrity-failures/advanced/signature-bypass/index" element={<Component100 />} />
        {/* Removed route for owasp_lab/integrity-failures/beginner/config-loader/index.tsx */}
        {/* Removed route for owasp_lab/integrity-failures/beginner/config-loader/index.tsx */}
        <Route path="/owasp_lab/integrity-failures/beginner/file-checker" element={<Component102 />} />
        <Route path="/owasp_lab/integrity-failures/beginner/file-checker/index" element={<Component102 />} />
        <Route path="/owasp_lab/integrity-failures/intermediate/data-trust-engine" element={<Component103 />} />
        <Route path="/owasp_lab/integrity-failures/intermediate/data-trust-engine/index" element={<Component103 />} />
        <Route path="/owasp_lab/integrity-failures/intermediate/update-importer" element={<Component104 />} />
        <Route path="/owasp_lab/integrity-failures/intermediate/update-importer/index" element={<Component104 />} />
        {/* Removed route for owasp_lab/logging-failures/advanced/blind-activity/index.tsx */}
        {/* Removed route for owasp_lab/logging-failures/advanced/blind-activity/index.tsx */}
        <Route path="/owasp_lab/logging-failures/advanced/log-injection-chain" element={<Component106 />} />
        <Route path="/owasp_lab/logging-failures/advanced/log-injection-chain/index" element={<Component106 />} />
        <Route path="/owasp_lab/logging-failures/beginner/missing-logs" element={<Component107 />} />
        <Route path="/owasp_lab/logging-failures/beginner/missing-logs/index" element={<Component107 />} />
        <Route path="/owasp_lab/logging-failures/beginner/weak-logging" element={<Component108 />} />
        <Route path="/owasp_lab/logging-failures/beginner/weak-logging/index" element={<Component108 />} />
        <Route path="/owasp_lab/logging-failures/intermediate/alert-bypass" element={<Component109 />} />
        <Route path="/owasp_lab/logging-failures/intermediate/alert-bypass/index" element={<Component109 />} />
        <Route path="/owasp_lab/logging-failures/intermediate/log-tampering" element={<Component110 />} />
        <Route path="/owasp_lab/logging-failures/intermediate/log-tampering/index" element={<Component110 />} />
        <Route path="/owasp_lab/security-misconfig/advanced/admin-misroute/admin-old" element={<Component111 />} />
        <Route path="/owasp_lab/security-misconfig/advanced/admin-misroute/dashboard" element={<Component112 />} />
        <Route path="/owasp_lab/security-misconfig/advanced/admin-misroute" element={<Component113 />} />
        <Route path="/owasp_lab/security-misconfig/advanced/admin-misroute/index" element={<Component113 />} />
        <Route path="/owasp_lab/security-misconfig/advanced/admin-misroute/login" element={<Component114 />} />
        <Route path="/owasp_lab/security-misconfig/advanced/admin-misroute/templates/header" element={<Component115 />} />
        <Route path="/owasp_lab/security-misconfig/advanced/backup-exposure/dashboard" element={<Component116 />} />
        <Route path="/owasp_lab/security-misconfig/advanced/backup-exposure" element={<Component117 />} />
        <Route path="/owasp_lab/security-misconfig/advanced/backup-exposure/index" element={<Component117 />} />
        <Route path="/owasp_lab/security-misconfig/advanced/backup-exposure/login" element={<Component118 />} />
        <Route path="/owasp_lab/security-misconfig/advanced/backup-exposure/templates/header" element={<Component119 />} />
        <Route path="/owasp_lab/security-misconfig/beginner/debug-panel/dashboard" element={<Component120 />} />
        <Route path="/owasp_lab/security-misconfig/beginner/debug-panel/debug" element={<Component121 />} />
        <Route path="/owasp_lab/security-misconfig/beginner/debug-panel" element={<Component122 />} />
        <Route path="/owasp_lab/security-misconfig/beginner/debug-panel/index" element={<Component122 />} />
        <Route path="/owasp_lab/security-misconfig/beginner/debug-panel/login" element={<Component123 />} />
        <Route path="/owasp_lab/security-misconfig/beginner/debug-panel/templates/header" element={<Component124 />} />
        <Route path="/owasp_lab/security-misconfig/beginner/exposed-config/dashboard" element={<Component125 />} />
        <Route path="/owasp_lab/security-misconfig/beginner/exposed-config" element={<Component126 />} />
        <Route path="/owasp_lab/security-misconfig/beginner/exposed-config/index" element={<Component126 />} />
        <Route path="/owasp_lab/security-misconfig/beginner/exposed-config/login" element={<Component127 />} />
        <Route path="/owasp_lab/security-misconfig/beginner/exposed-config/templates/header" element={<Component128 />} />
        <Route path="/owasp_lab/security-misconfig/intermediate/insecure-headers/dashboard" element={<Component129 />} />
        <Route path="/owasp_lab/security-misconfig/intermediate/insecure-headers" element={<Component130 />} />
        <Route path="/owasp_lab/security-misconfig/intermediate/insecure-headers/index" element={<Component130 />} />
        <Route path="/owasp_lab/security-misconfig/intermediate/insecure-headers/templates/header" element={<Component131 />} />
        <Route path="/owasp_lab/security-misconfig/intermediate/verbose-errors/dashboard" element={<Component132 />} />
        <Route path="/owasp_lab/security-misconfig/intermediate/verbose-errors" element={<Component133 />} />
        <Route path="/owasp_lab/security-misconfig/intermediate/verbose-errors/index" element={<Component133 />} />
        <Route path="/owasp_lab/security-misconfig/intermediate/verbose-errors/templates/header" element={<Component134 />} />
        <Route path="/owasp_lab/supply-chain/advanced/loader-manipulation" element={<Component135 />} />
        <Route path="/owasp_lab/supply-chain/advanced/loader-manipulation/index" element={<Component135 />} />
        <Route path="/owasp_lab/supply-chain/advanced/update-signature-bypass" element={<Component136 />} />
        <Route path="/owasp_lab/supply-chain/advanced/update-signature-bypass/index" element={<Component136 />} />
        <Route path="/owasp_lab/supply-chain/beginner/plugin-loader" element={<Component137 />} />
        <Route path="/owasp_lab/supply-chain/beginner/plugin-loader/index" element={<Component137 />} />
        <Route path="/owasp_lab/supply-chain/beginner/update-center" element={<Component138 />} />
        <Route path="/owasp_lab/supply-chain/beginner/update-center/index" element={<Component138 />} />
        <Route path="/owasp_lab/supply-chain/intermediate/marketplace-trust" element={<Component139 />} />
        <Route path="/owasp_lab/supply-chain/intermediate/marketplace-trust/index" element={<Component139 />} />
        <Route path="/owasp_lab/supply-chain/intermediate/package-installer" element={<Component140 />} />
        <Route path="/owasp_lab/supply-chain/intermediate/package-installer/index" element={<Component140 />} />
        <Route path="/ss/dashboard" element={<Component141 />} />
        <Route path="/ss" element={<Component142 />} />
        <Route path="/ss/index" element={<Component142 />} />
        <Route path="/ss/linux-learning" element={<Component143 />} />
        <Route path="/ss/linux" element={<Component144 />} />
        <Route path="/ss/profile" element={<Component145 />} />
        <Route path="/ss/python-learning" element={<Component146 />} />
        <Route path="/ss/python" element={<Component147 />} />
        <Route path="/ss/sidebar" element={<Component148 />} />
        <Route path="/ss/tasks" element={<Component149 />} />
        <Route path="/ss/terminal" element={<Component150 />} />
        <Route path="/_admin" element={<Component151 />} />
        <Route path="/_admin/index" element={<Component151 />} />
      </Routes>
    </BrowserRouter>
  );
}
