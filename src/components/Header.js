// src/components/Header.js
import React, { useMemo, useRef, useState, useEffect } from "react";
import styled from "styled-components";

const FLATPAGE_BLUE = "#165383";

const Bar = styled.header`
  position: sticky;
  top: 0;
<<<<<<< HEAD
<<<<<<< HEAD
  background: #165383;
=======
  z-index: 2001;

>>>>>>> origin/headers/articles
=======
  z-index: 2001;

  background: #165383;
>>>>>>> 4bc2cba6a6473ad65fcb8283dc0463a5be1226fe
  width: 100%;
  height: 48px;
  background: ${FLATPAGE_BLUE};
  color: #fff;
`;

const Inner = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 18px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* Left: DAILY BRUIN */
const Brand = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  color: #fff;
  text-align: center;
  font-family: "ITC Century", "Times New Roman", Times, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  white-space: nowrap;
  padding: 0;
`;

/* Right: Desktop nav */
const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0;

  border-left: 1px solid rgba(255, 255, 255, 0.35);

  @media (max-width: 760px) {
    display: none;
  }
`;

const NavBtn = styled.button`
  width: 204px;
  flex-shrink: 0;
  height: 48px;

  border: none;
  background: transparent;
  cursor: pointer;

  color: #fff;
  text-align: center;

  font-family: "Source Sans 3", system-ui, -apple-system, Segoe UI, Roboto, Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  padding: 0;

  border-right: 1px solid rgba(255, 255, 255, 0.35);

  &:hover {
    opacity: 0.9;
  }
`;

const BurgerButton = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;

  display: none;
  @media (max-width: 760px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const BurgerIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M4 7h16v2H4V7zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4z"
    />
  </svg>
);

/* Full-screen mobile menu takeover */
const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  background: ${FLATPAGE_BLUE};
  z-index: 3000;

  display: ${(p) => (p.open ? "flex" : "none")};
  flex-direction: column;
`;

const MobileTop = styled.div`
  height: 48px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MobileLinks = styled.nav`
  display: flex;
  flex-direction: column;
`;

const MobileItem = styled.button`
  border: none;
  background: transparent;
  color: #fff;
  cursor: pointer;

  text-align: left;
  padding: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.35);

  font-family: "Source Sans 3", system-ui, -apple-system, Segoe UI, Roboto, Arial;
  font-weight: 600;
  font-size: 16px;
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const barRef = useRef(null);

  const links = useMemo(
    () => [
      { label: "Home", id: "home" },
      { label: "Timeline", id: "timeline" },
      { label: "Map", id: "map" },
      { label: "Read more", id: "read-more" },
      { label: "About", id: "about" },
    ],
    []
  );

  // (3) Lock body scroll when mobile menu open
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // (2) Scroll offset: use actual bar height (no guessing)
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = barRef.current?.offsetHeight ?? 48;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const onNav = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <Bar ref={barRef}>
        <Inner>
          <Brand onClick={() => onNav("home")}>DAILY BRUIN</Brand>

          <DesktopNav aria-label="Primary navigation">
            {links.map((l) => (
              <NavBtn key={l.id} onClick={() => onNav(l.id)}>
                {l.label}
              </NavBtn>
            ))}
          </DesktopNav>

          <BurgerButton aria-label="Open menu" onClick={() => setOpen(true)}>
            <BurgerIcon />
          </BurgerButton>
        </Inner>
      </Bar>

      <MobileMenu open={open} aria-label="Mobile menu">
        <MobileTop>
          <Brand onClick={() => onNav("home")}>DAILY BRUIN</Brand>
          <BurgerButton
            as="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            style={{ display: "inline-flex" }}
          >
            <CloseIcon />
          </BurgerButton>
        </MobileTop>

        <MobileLinks>
          {links.map((l) => (
            <MobileItem key={l.id} onClick={() => onNav(l.id)}>
              {l.label}
            </MobileItem>
          ))}
        </MobileLinks>
      </MobileMenu>
    </>
  );
}