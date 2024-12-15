import Link from "next/link"

export default function Footer() {
    return (
        <>

            <div className="bottom-page">
                <div className="body-text">Copyright © {new Date().getFullYear()} Shayan. Design with</div>
                <i className="icon-heart" />
                <div className="body-text">by <Link href="/https://themeforest.net/user/themesflat/portfolio">Themesflat</Link> All rights reserved.</div>
            </div>

        </>
    )
}
