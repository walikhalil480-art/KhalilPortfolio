import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Users,
  Calendar,
  FileText,
  FlaskConical,
  Pill,
  Receipt,
  Building2,
  Lock
} from 'lucide-react';
import { GithubIcon } from '../../components/icons/BrandIcons';
import { ArchitectureDiagram } from '../../components/ArchitectureDiagram';
import { daryeelOneArchData } from '../../data/architectureData';

export const DaryeelOneCaseStudy: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const genuineScreenshots = [
    {
      title: 'Hospital Operational Dashboard',
      subtitle: 'Real-time patient census, department statistics, appointment queues, and daily revenue metrics',
      src: '/assets/projects/daryeelone/dashboard.png',
      alt: 'DaryeelOne Hospital Management executive dashboard'
    },
    {
      title: 'Patient Directory & Electronic Health Index',
      subtitle: 'Complete patient records with unique CUID patient IDs, contact data, and active clinical status',
      src: '/assets/projects/daryeelone/patients.png',
      alt: 'DaryeelOne patient registration and records directory'
    },
    {
      title: 'Appointment Lifecycle Scheduling',
      subtitle: 'Department-filtered doctor appointment booking with scheduled, confirmed, completed, and no-show statuses',
      src: '/assets/projects/daryeelone/appointments.png',
      alt: 'DaryeelOne doctor appointment scheduling interface'
    },
    {
      title: 'Physician & Specialist Administration',
      subtitle: 'Doctor department affiliations, medical license verification, consultation fees, and working hours',
      src: '/assets/projects/daryeelone/doctors.png',
      alt: 'DaryeelOne medical staff and doctor management'
    },
    {
      title: 'Electronic Medical Records (EMR)',
      subtitle: 'Comprehensive clinical encounter documentation: complaints, diagnosis, treatment plans, and doctor orders',
      src: '/assets/projects/daryeelone/emr.png',
      alt: 'DaryeelOne clinical encounter and electronic medical record'
    },
    {
      title: 'Laboratory Diagnostic Services',
      subtitle: 'Structured diagnostic test orders, specimen tracking, lab catalog, and patient test results entry',
      src: '/assets/projects/daryeelone/laboratory.png',
      alt: 'DaryeelOne diagnostic laboratory catalog and test orders'
    },
    {
      title: 'Hospital Billing, Invoicing & Receipts',
      subtitle: 'Itemized clinical invoicing, receipt generation, multi-currency payments, and refund approval workflows',
      src: '/assets/projects/daryeelone/billings.png',
      alt: 'DaryeelOne hospital billing, invoice generation, and payments'
    },
    {
      title: 'Department & Clinic Services Hierarchy',
      subtitle: 'Hospital departments configuration (General Medicine, Pediatrics, Surgery, Ob/Gyn, Lab, Pharmacy)',
      src: '/assets/projects/daryeelone/departments.png',
      alt: 'DaryeelOne hospital departments and clinic configuration'
    }
  ];

  return (
    <article className="case-study-page">
      {/* Header Breadcrumbs & Hero */}
      <section className="section-spacer-top" style={{ paddingBottom: '32px' }}>
        <div className="site-container">
          <nav className="case-study-nav-back" aria-label="Breadcrumb">
            <Link to="/projects" className="editorial-link" style={{ marginBottom: '16px' }}>
              <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
              <span>Back to Projects</span>
            </Link>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="kicker">Case Study: Healthcare Systems</span>
            <h1 className="hero-headline" style={{ marginBottom: '20px' }}>
              DaryeelOne — <em>Hospital Management &amp; Clinical Operations System</em>
            </h1>
            <p className="editorial-lead" style={{ maxWidth: '820px' }}>
              A full-stack healthcare operations platform digitizing clinical records, appointments, laboratory diagnostic orders, pharmacy dispensing, and financial workflows with granular Role-Based Access Control and containerized orchestration.
            </p>
          </motion.div>

          {/* Project Metadata Ribbon */}
          <div
            className="case-study-meta-ribbon"
            style={{
              marginTop: '36px',
              paddingTop: '24px',
              borderTop: '1px solid var(--border-divider)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
              gap: '24px'
            }}
          >
            <div>
              <span className="channel-label">Role</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                Full-Stack Systems Architect
              </p>
            </div>
            <div>
              <span className="channel-label">Category</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                Healthcare &amp; Clinical EMR
              </p>
            </div>
            <div>
              <span className="channel-label">Primary Stack</span>
              <p className="body-text" style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                React 19 &bull; TypeScript &bull; Node.js &bull; PostgreSQL &bull; Prisma v6 &bull; Docker
              </p>
            </div>
            <div>
              <span className="channel-label">Repository &amp; Status</span>
              <p className="body-text">
                <a
                  href="https://github.com/walikhalil480-art/HospitalMgt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  <GithubIcon size={13} strokeWidth={2} />
                  <span>github.com/walikhalil480-art</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Showcase Photography */}
      <section style={{ paddingBottom: '48px' }}>
        <div className="site-container">
          <motion.div
            className="case-study-hero-img-wrap"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              overflow: 'hidden',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <img
              src="/assets/daryeelone-cover.png"
              alt="DaryeelOne Hospital Management System interface on a modern healthcare clinic workstation"
              width="1600"
              height="1000"
              style={{ width: '100%', height: 'auto', display: 'block', imageRendering: '-webkit-optimize-contrast' }}
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Engineering Narrative */}
      <section className="section-spacer-bottom">
        <div className="site-container-narrow">
          <motion.div
            className="case-study-narrative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
          >
            {/* 1. Context & Problem Definition */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Context &amp; Overview</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Digitizing fragmented hospital workflows into a unified, secure platform
              </h2>
              <p className="body-text" style={{ marginBottom: '16px' }}>
                Healthcare facilities frequently face severe operational friction when patient records, appointments, laboratory diagnostic results, pharmacy dispensing, and financial billing reside in disjointed spreadsheets or physical paper files. This fragmentation leads to patient delays, missing clinical history, unbilled procedures, and medication discrepancies.
              </p>
              <p className="body-text">
                DaryeelOne was architected to unify the complete patient journey into a single resilient system: from front-desk triage and appointment scheduling, through clinical EMR encounters, diagnostic laboratory testing, pharmacy inventory deduction, to final itemized billing and financial auditing.
              </p>
            </div>

            {/* 2. Interactive System Architecture Diagram */}
            <div style={{ marginBottom: '64px' }}>
              <span className="kicker">System Architecture</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Full-stack clinical and administrative modular pipeline
              </h2>
              <p className="body-text" style={{ marginBottom: '24px' }}>
                The architecture models 8 clinical and operational domains over a relational PostgreSQL core, protected by role-based authorization and monitored with Prometheus telemetry:
              </p>
              <ArchitectureDiagram data={daryeelOneArchData} />
            </div>

            {/* 3. Implemented Modules */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Core Implemented Modules</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                End-to-end clinical and administrative workflows
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <Users size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Patient Management</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    Patient registration with unique CUID patient numbers, emergency contacts, allergy profiles, blood group tracking, and linked chronological medical history.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <Stethoscope size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Doctor &amp; Staff Administration</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    Doctor profiles with medical licenses, departmental affiliations, consultation fee schedules, working shifts, and real-time clinical availability.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <Calendar size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Appointment Scheduling</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    Department and doctor appointment booking with automated status lifecycle management: Scheduled, Confirmed, Completed, Cancelled, and No-Show.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <FileText size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Electronic Medical Records (EMR)</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    Clinical documentation module capturing patient encounter notes, vital signs, diagnoses, treatment procedures, and direct prescription links.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <FlaskConical size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Laboratory Diagnostics</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    Diagnostic test catalog management, patient lab specimen orders, test status progression, and direct result entry linked to the patient record.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <Pill size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Pharmacy &amp; Dispensing</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    Medicine inventory catalog, prescription fulfillment, batch number and expiry tracking, and automatic stock deduction upon medication dispensing.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <Receipt size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Billing &amp; Payments</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    Itemized patient invoice generation combining consultation, lab, and pharmacy fees, receipt issuance, partial payments, and refund approval audits.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-accent)', marginBottom: '10px' }}>
                    <Building2 size={18} strokeWidth={2} />
                    <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600 }}>Department Directory</h3>
                  </div>
                  <p className="body-text" style={{ fontSize: '0.88rem', margin: 0 }}>
                    Hospital organizational units (Pediatrics, Surgery, Internal Medicine, Laboratory, Radiology) managing capacity, consultation fees, and operating hours.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Genuine Application Screenshot Gallery */}
            <div style={{ marginBottom: '64px' }}>
              <span className="kicker">Application Interface Gallery</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Actual production screens from DaryeelOne
              </h2>
              <p className="body-text" style={{ marginBottom: '28px' }}>
                Direct captures from the running application demonstrating the user interface, clinical data visualization, and operational workflows:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {genuineScreenshots.map((shot, idx) => (
                  <div
                    key={shot.src}
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-subtle)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-card)'
                    }}
                  >
                    <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border-subtle)' }}>
                      <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                        Screen 0{idx + 1}
                      </div>
                      <h3 style={{ fontSize: '1.2rem', margin: '0 0 6px 0', color: 'var(--text-primary)' }}>{shot.title}</h3>
                      <p className="body-text" style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-body)' }}>{shot.subtitle}</p>
                    </div>
                    <div style={{ backgroundColor: 'var(--bg-muted)', padding: '12px' }}>
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        width="1440"
                        height="900"
                        loading="lazy"
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid var(--border-subtle)',
                          imageRendering: '-webkit-optimize-contrast'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Engineering Challenges & Architecture Decisions */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Engineering Challenges</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Data integrity, auditability, and role-based access control
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '20px' }}>
                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                    1. Cross-Department Transactional Billing Consistency
                  </h3>
                  <p className="body-text" style={{ marginBottom: '12px' }}>
                    In a hospital, billable actions occur in independent departments: doctors add consultations, lab techs conduct blood tests, and pharmacists dispense medications. If these disparate operations don't update patient invoices atomically, lost revenue or billing discrepancies occur.
                  </p>
                  <p className="body-text">
                    <strong>Solution:</strong> We structured the financial subsystem with foreign key constraints back to the patient ledger. When a prescription is marked <code>DISPENSED</code> or a lab order is marked <code>COMPLETED</code>, Prisma transactional queries automatically append itemized line items to the patient&rsquo;s open encounter invoice.
                  </p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-surface)', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                    2. Strict Role-Based Access Control (RBAC)
                  </h3>
                  <p className="body-text" style={{ marginBottom: '12px' }}>
                    Healthcare data privacy requires strict isolation: receptionists must not inspect private EMR doctor notes, lab technicians must only record diagnostic values, and patients cannot view other patients&rsquo; records.
                  </p>
                  <p className="body-text">
                    <strong>Solution:</strong> We implemented JWT authentication paired with role-checking middleware verifying user roles against 7 distinct permissions (<code>ADMIN</code>, <code>DOCTOR</code>, <code>NURSE</code>, <code>PHARMACIST</code>, <code>LAB_TECH</code>, <code>ACCOUNTANT</code>, <code>PATIENT</code>). Endpoint handlers enforce contextual ownership so patients only query their own records.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Verified Tech Stack */}
            <div style={{ marginBottom: '56px' }}>
              <span className="kicker">Technology Stack</span>
              <h2 className="subheading" style={{ fontSize: '2rem', marginBottom: '16px' }}>
                Verified technologies implemented in DaryeelOne
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
                {['React 19', 'TypeScript', 'Vite', 'Node.js 20+', 'Express.js', 'PostgreSQL 15+', 'Prisma ORM v6', 'Docker', 'Kubernetes', 'GitHub Actions', 'Prometheus', 'Grafana', 'Pino Logging', 'Zod Validation'].map((tech) => (
                  <span key={tech} className="tag-pill" style={{ padding: '6px 14px', fontSize: '0.82rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 7. Navigation to Adjacent Case Studies */}
            <div
              style={{
                paddingTop: '32px',
                borderTop: '1px solid var(--border-divider)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <Link to="/projects/tillpro" className="btn-secondary">
                <ArrowLeft size={14} strokeWidth={2} aria-hidden="true" />
                <span>Prev: TillPro POS</span>
              </Link>
              <Link to="/projects/understory" className="btn-primary">
                <span>Next: UnderStory Books</span>
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
};
