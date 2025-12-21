import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import '../App.css'

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "GroupFund transformed how our family handles group contributions. No more endless WhatsApp messages or forgotten payments. Everything is organized and transparent.",
      author: "Adebayo Okafor",
      role: "Family Group Admin",
      location: "Lagos, Nigeria",
      group: "Okafor Family Circle"
    },
    {
      quote: "As a church administrator, managing contributions for member birthdays was always stressful. GroupFund made it effortless. The automatic reminders are a game-changer!",
      author: "Pastor Grace Williams",
      role: "Church Administrator",
      location: "Abuja, Nigeria",
      group: "Community Church"
    },
    {
      quote: "Our school class uses GroupFund for all group contributions. The fixed amount feature and payment tracking make it so easy. Parents love the transparency.",
      author: "Mrs. Chidinma Okoro",
      role: "Class Parent Coordinator",
      location: "Port Harcourt, Nigeria",
      group: "Class of 2025 Parents"
    },
    {
      quote: "I was skeptical at first, but GroupFund has made our friend group's contributions so much smoother. No more awkward conversations about who paid what.",
      author: "Emeka Nwosu",
      role: "Friend Group Organizer",
      location: "Enugu, Nigeria",
      group: "The Crew"
    },
    {
      quote: "The multi-currency support is perfect for our international family group. Some of us are in Nigeria, others in the UK and US. GroupFund handles it all seamlessly.",
      author: "Dr. Fatima Ibrahim",
      role: "Family Group Coordinator",
      location: "Kano, Nigeria",
      group: "Ibrahim Family Worldwide"
    },
    {
      quote: "Before GroupFund, I spent hours tracking contributions in Excel. Now it's all automated. The calendar view helps me plan ahead, and the reminders ensure no one forgets.",
      author: "Olumide Adeyemi",
      role: "Group Administrator",
      location: "Ibadan, Nigeria",
      group: "Adeyemi Extended Family"
    }
  ]

  return (
    <>
      <SEO
        title="GroupFund Success Stories & Testimonials - Real Users Share Their Experience"
        description="Read success stories from families, churches, and groups using GroupFund to organize group contributions. Real testimonials from users across Nigeria."
        keywords="groupfund testimonials, group contribution app reviews, group payment app success stories, Nigeria, family contributions, church contributions"
        canonical="https://groupfund.app/testimonials"
      />

      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Success Stories & Testimonials</h1>
          <p className="page-subtitle">
            See how GroupFund is helping families, churches, and groups across Nigeria organize their group contributions effortlessly - for birthdays, subscriptions, events, and more.
          </p>
        </div>
      </section>

      <section className="testimonials-page">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="testimonial-card">
                <div className="testimonial-quote-icon">"</div>
                <blockquote className="testimonial-quote">
                  {testimonial.quote}
                </blockquote>
                <div className="testimonial-author">
                  <div className="author-info">
                    <cite className="author-name">{testimonial.author}</cite>
                    <p className="author-role">{testimonial.role}</p>
                    <p className="author-location">{testimonial.location}</p>
                  </div>
                  <div className="author-group">
                    <span className="group-label">Group:</span>
                    <span className="group-name">{testimonial.group}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="cta-box">
            <h2>Join These Happy Groups</h2>
            <p>Start organizing your group's contributions today - for birthdays, subscriptions, events, and more. It's free to get started!</p>
            <Link to="/waitlist" className="btn btn-primary btn-large">Start Your Free Group</Link>
          </div>
        </div>
      </section>
    </>
  )
}

