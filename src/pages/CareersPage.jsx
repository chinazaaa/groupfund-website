import React from 'react'
import SEO from '../components/SEO'
import '../App.css'

export default function CareersPage() {
  return (
    <>
      <SEO
        title="Careers - Join the GroupFund Team"
        description="Learn about working at GroupFund and our company culture. While we don't have open positions right now, we're always open to hearing from exceptional candidates."
        keywords="careers, jobs, hiring, employment, groupfund careers, software engineer, product designer"
        canonical="https://www.groupfund.app/careers"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Careers</h1>
          <p className="page-subtitle">
            Join us in making group contributions simple and fair
          </p>
        </div>
      </section>

      <section className="legal-page">
        <div className="container">
          <div className="legal-content">
            <div className="legal-section">
              <h2>Why Work at GroupFund?</h2>
              <p>
                At GroupFund, we're solving a real problem that affects millions of people: the chaos of organizing group contributions. We're building a product that brings order, transparency, and fairness to how groups manage their financial contributions - for birthdays, subscriptions, events, and more.
              </p>
              <p>
                We're a small, passionate team focused on creating an exceptional user experience. If you're excited about building products that make people's lives easier, we'd love to hear from you.
              </p>
            </div>

            <div className="legal-section">
              <h2>Our Values</h2>
              <ul>
                <li><strong>User-First:</strong> Everything we do starts with understanding our users' needs</li>
                <li><strong>Simplicity:</strong> We believe in building simple, intuitive solutions to complex problems</li>
                <li><strong>Transparency:</strong> We're transparent with our users, and we value transparency in our team</li>
                <li><strong>Impact:</strong> We're focused on solving real problems that affect real people</li>
                <li><strong>Growth:</strong> We're committed to personal and professional growth for everyone on the team</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>What We Offer</h2>
              <ul>
                <li><strong>Competitive Compensation:</strong> We offer competitive salaries and equity packages</li>
                <li><strong>Remote-First:</strong> Work from anywhere - we're a distributed team</li>
                <li><strong>Flexible Hours:</strong> We focus on results, not hours worked</li>
                <li><strong>Learning & Development:</strong> Budget for courses, conferences, and professional development</li>
                <li><strong>Impact:</strong> Your work will directly impact thousands of users</li>
                <li><strong>Early Stage:</strong> Join early and help shape the product and company culture</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Open Positions</h2>
              <p>
                <strong>We're not currently hiring for specific roles, but we're always open to hearing from exceptional candidates.</strong> If you're passionate about what we're building and think you'd be a great fit, we'd love to hear from you.
              </p>
              <p>
                When we do have openings, we typically look for talented people in these areas:
              </p>
              
              <h3>Engineering</h3>
              <ul>
                <li>Mobile App Developers (React Native, iOS, Android)</li>
                <li>Backend Engineers (Node.js, Python, or similar)</li>
                <li>Full-Stack Engineers</li>
                <li>DevOps Engineers</li>
              </ul>

              <h3>Product & Design</h3>
              <ul>
                <li>Product Designers</li>
                <li>UX Researchers</li>
                <li>Product Managers</li>
              </ul>

              <h3>Growth & Marketing</h3>
              <ul>
                <li>Growth Marketers</li>
                <li>Content Creators</li>
                <li>Community Managers</li>
              </ul>

              <h3>Operations</h3>
              <ul>
                <li>Customer Success</li>
                <li>Operations Managers</li>
              </ul>

              <p>
                Even if we don't have an open position right now, we keep promising applications on file for when opportunities arise. If you're exceptional and excited about GroupFund, send us your resume and tell us how you'd like to contribute.
              </p>
            </div>

            <div className="legal-section">
              <h2>Our Hiring Process</h2>
              <p>
                We believe in a transparent, respectful hiring process:
              </p>
              <ol>
                <li><strong>Application:</strong> Send us your resume and a brief note about why you're interested in GroupFund</li>
                <li><strong>Initial Review:</strong> We'll review your application and get back to you within a week</li>
                <li><strong>Interview:</strong> A casual conversation to learn more about each other</li>
                <li><strong>Technical Assessment:</strong> For technical roles, a practical assessment relevant to the role</li>
                <li><strong>Team Interview:</strong> Meet the team and see if we're a good fit for each other</li>
                <li><strong>Offer:</strong> If it's a match, we'll make an offer</li>
              </ol>
            </div>

            <div className="legal-section">
              <h2>Diversity & Inclusion</h2>
              <p>
                We're committed to building a diverse and inclusive team. We believe that diverse perspectives lead to better products and a better company. We welcome applications from people of all backgrounds, regardless of race, gender, age, religion, sexual orientation, or disability.
              </p>
            </div>

            <div className="legal-section">
              <h2>Internships</h2>
              <p>
                We offer internship opportunities for students and recent graduates who want to gain experience in a startup environment. Interns work on real projects and have the opportunity to make a meaningful impact.
              </p>
              <p>
                If you're interested in an internship, please send your resume and a note about what you'd like to learn to careers@groupfund.app
              </p>
            </div>

            <div className="legal-section">
              <h2>How to Apply</h2>
              <p>
                Even though we don't have open positions right now, we're always interested in connecting with exceptional people. To express interest in working with us:
              </p>
              <p>
                <strong>Email:</strong> careers@groupfund.app<br />
                <strong>Subject Line:</strong> General Application - [Your Name]
              </p>
              <p>
                Please include:
              </p>
              <ul>
                <li>Your resume or CV</li>
                <li>A brief note about why you're interested in GroupFund</li>
                <li>What role or area you're interested in (if applicable)</li>
                <li>Links to your portfolio, GitHub, or relevant work (if applicable)</li>
              </ul>
              <p>
                We'll keep your application on file and reach out if a suitable opportunity arises.
              </p>
            </div>

            <div className="legal-section">
              <h2>Contact Us</h2>
              <p>
                Have questions about working at GroupFund? We'd love to hear from you:
              </p>
              <p>
                <strong>Email:</strong> careers@groupfund.app<br />
                <strong>General Inquiries:</strong> support@groupfund.app<br />
                <strong>Website:</strong> <a href="/contact">Contact Page</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

