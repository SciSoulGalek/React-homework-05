import { Link } from "react-router";

export default function Login() {
  return (
    <main className="page-container login-page">
      <section className="login-card">
        <p className="eyebrow">WELCOME BACK</p>
        <h1>Your next adventure awaits<span>.</span></h1>
        <p className="page-description">
          Sign in to keep your collection and gaming progress in one place.
        </p>

        <form className="login-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder="you@example.com" />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter your password" />

          <button className="add-button" type="button" disabled>
            Sign in — coming soon
          </button>
        </form>

        <p className="login-note">
          Authentication is not connected yet. This page is a preview.
        </p>

        <Link to="/games">Continue exploring games →</Link>
      </section>
    </main>
  );
}
