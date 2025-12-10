"use client";

import Link from "next/link";
import { pageItems } from "../../data/mainMenuData";
import { usePathname } from "next/navigation";
import { isActiveLink, isActiveParentChaild } from "@/utils/linkActiveChecker";

const HeaderNavContent = () => {
  const pathname = usePathname();

  return (
    <nav className="nav main-menu">
      <ul className="navigation" id="navbar">
        {/* ---------------- HOME (Link Only) ---------------- */}
        <li className={pathname === "/" ? "current" : ""}>
          <Link href="/">Home</Link>
        </li>

        {/* ---------------- FIND JOBS (Link Only) ---------------- */}
        <li className={pathname.includes("/job-list-v1") ? "current" : ""}>
          <Link href="/job-list-v1">Find Jobs</Link>
        </li>

        {/* ---------------- EMPLOYERS (Dropdown) ---------------- */}
        <li
          className={`dropdown ${
            pathname.includes("/employers-list-v1") ||
            // pathname.includes("/employers-dashboard") ||
            pathname.includes("/employers-register")
              ? "current"
              : ""
          }`}
        >
          <span>Employers</span>
          <ul>
            <li
              className={
                pathname.includes("/employers-list-v1") ? "current" : ""
              }
            >
              <Link href="/employers-list-v1">Employers List</Link>
            </li>

            {/* <li
              className={
                pathname.includes("/employers-dashboard") ? "current" : ""
              }
            >
              <Link href="/employers-dashboard/dashboard">
                Employer Dashboard
              </Link>
            </li> */}

            <li
              className={
                pathname.includes("/employers-register") ? "current" : ""
              }
            >
              <Link href="/employers-register">Employers Register</Link>
            </li>
          </ul>
        </li>

        {/* ---------------- CANDIDATES (Dropdown) ---------------- */}
        {/* <li
          className={`dropdown ${
            pathname.includes("/candidates-list-v1") ||
            pathname.includes("/candidates-dashboard")
              ? "current"
              : ""
          }`}
        >
          <span>Candidates</span>
          <ul>
            <li
              className={
                pathname.includes("/candidates-list-v1") ? "current" : ""
              }
            >
              <Link href="/candidates-list-v1">Candidates List</Link>
            </li>

            <li
              className={
                pathname.includes("/candidates-dashboard") ? "current" : ""
              }
            >
              <Link href="/candidates-dashboard/dashboard">
                Candidate Dashboard
              </Link>
            </li>
          </ul>
        </li> */}

        {/* ---------------- BLOG (Link Only) ---------------- */}
        {/* <li className={pathname.includes("/blog-list-v1") ? "current" : ""}>
          <Link href="/blog-list-v1">Blog</Link>
        </li> */}

        {/* ---------------- PAGES (Commented for later) ---------------- */}
        <li
          className={`dropdown ${
            isActiveParentChaild(pageItems, pathname) ? "current" : ""
          }`}
        >
          <span>Pages</span>
          <ul>
            {pageItems.map((item, i) => (
              <li
                key={i}
                className={
                  isActiveLink(item.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={item.routePath}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavContent;
