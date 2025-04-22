import Link from "next/link"
import { Page, PageTitle } from "../../components/ui/page"

export default function Events() {
    return (
        <Page>
            <PageTitle>Events</PageTitle>

            <div className="">
                <h2 className="text-2xl font-bold text-white leading-tight mb-4">
                    Introducing AGI House: <br /> Bombay's emerging hub for high-agency founders & forward-thinking investors.
                </h2>

                <p className="text-xl text-secondary-white leading-relaxed mb-8">
                    Over the past few Saturdays, we've been quietly building something powerful: a curated space where driven minds come together to talk product, growth, AI, funding, and founder resilience.
                </p>

                <Link
                    href="https://lu.ma/agihousebombay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-white text-primary-black font-bold text-lg rounded-lg hover:bg-opacity-90 transition-all"
                >
                    Join our next event
                </Link>
            </div>
        </Page>
    )
}