/**
 * Reusable CTA button.
 * Smooth-scrolls to an element by ID (default: "projects").
 * Pass a different target with `targetId="some-id"`.
 */
const Button = ({ text, className, targetId = "projects" }) => {
  const handleClick = (e) => {
    const el = document.getElementById(targetId);
    if (!el) return; // let the browser follow the hash if target doesn't exist

    e.preventDefault(); // we found a target, do smooth scroll
    const offset = window.innerHeight * 0.15; // adjust if you have a sticky header
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
      aria-label={text}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
