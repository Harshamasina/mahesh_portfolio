import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
    Search,
    SlidersHorizontal,
    Hash,
    Microscope,
    Calendar,
    BadgeInfo,
    ChevronDown,
    ChevronUp,
    Loader2,
    ChevronLeft,
    ChevronRight,
    Bug,
    X,
    FileDigit
} from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
const ITEMS_PER_PAGE = 15;

const PatentSearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const [query, setQuery] = useState("");
    const [expandedCards, setExpandedCards] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsKey, setResultsKey] = useState(0);
    const [showNoResults, setShowNoResults] = useState(false);
    const [searchNonce, setSearchNonce] = useState(0);

    const handleClearSearch = () => {
        setSearchTerm("");
        setQuery("");
        setResults([]);
        setExpandedCards({});
        setCurrentPage(1);
        setHasSearched(false);
        setShowNoResults(false);
        setErrorMessage("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmed = searchTerm.trim();
        setHasSearched(true);
        setQuery(trimmed);
        setCurrentPage(1);
        setResults([]);
        setExpandedCards({});
        setResultsKey((prev) => prev + 1);
        setShowNoResults(false);
        setSearchNonce((prev) => prev + 1);
    };

    useEffect(() => {
        if (!query) {
            setResults([]);
            setErrorMessage("");
            setIsLoading(false);
            return undefined;
        }

        if (query.length < 2) {
            setResults([]);
            setErrorMessage("");
            setIsLoading(false);
            return undefined;
        }

        const controller = new AbortController();
        const timer = setTimeout(async () => {
            setIsLoading(true);
            setErrorMessage("");
            setShowNoResults(false);
            try {
                const response = await axios.get(
                    `${API_BASE_URL}/patents/${encodeURIComponent(query)}`,
                    { signal: controller.signal }
                );
                const data = Array.isArray(response.data) ? response.data : [];
                setResults(data);
            } catch (error) {
                if (error?.code === "ERR_CANCELED" || error?.name === "CanceledError") {
                    return;
                }
                setResults([]);
                setErrorMessage("Unable to fetch patents right now.");
            } finally {
                setIsLoading(false);
            }
        }, 400);

        return () => {
            clearTimeout(timer);
            controller.abort();
        };
    }, [query, searchNonce]);

    useEffect(() => {
        if (!hasSearched || isLoading || errorMessage || query.length < 2) {
            setShowNoResults(false);
            return undefined;
        }

        if (results.length) {
            setShowNoResults(false);
            return undefined;
        }

        const delay = setTimeout(() => {
            setShowNoResults(true);
        }, 500);

        return () => clearTimeout(delay);
    }, [hasSearched, isLoading, errorMessage, query, results]);

    const handleToggleDetails = (id) => {
        setExpandedCards((previous) => ({
            ...previous,
            [id]: !previous[id],
        }));
    };

    const totalPages = Math.max(1, Math.ceil(results.length / ITEMS_PER_PAGE));
    const safePage = Math.min(currentPage, totalPages);
    const { pageItems, startIndex } = useMemo(() => {
        const start = (safePage - 1) * ITEMS_PER_PAGE;
        return {
            startIndex: start,
            pageItems: results.slice(start, start + ITEMS_PER_PAGE),
        };
    }, [results, safePage]);

    return (
        <section className="patent-search" aria-labelledby="patent-search-heading">
            <div className="patent-search__glass">
                <div className="patent-search__header">
                    <h3 id="patent-search-heading" className="patent-search__title">
                        Explore Mahesh Kandula's Patent Portfolio
                    </h3>
                    <p className="patent-search__subtitle">
                        Search by WIPO, PCT or by Therapeutic areas
                    </p>
                </div>
                <form className="patent-search__form" onSubmit={handleSubmit}>
                    <label className="patent-search__input" htmlFor="patent-search-input">
                        <Search className="icon-sm" aria-hidden="true" />
                        <input
                            id="patent-search-input"
                            type="text"
                            placeholder="Search patents..."
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                        {searchTerm ? (
                            <button
                                type="button"
                                className="patent-search__clear"
                                onClick={handleClearSearch}
                                aria-label="Clear search"
                            >
                                <X className="icon-sm" aria-hidden="true" />
                            </button>
                        ) : null}
                    </label>
                    <button className="patent-search__button" type="submit">
                        <SlidersHorizontal className="icon-sm" aria-hidden="true" />
                        Search
                    </button>
                </form>
                <div className="patent-search__filters" aria-label="Suggested filters">
                    <span className="patent-search__chip">
                        <Hash className="icon-sm" />
                        WIPO
                    </span>
                    <span className="patent-search__chip">
                        <FileDigit className="icon-sm" />
                        PCT
                    </span>
                    <span className="patent-search__chip">
                        <Microscope className="icon-sm" />
                        Therapeutic Area
                    </span>
                    <span className="patent-search__chip">
                        <Bug className="icon-sm" />
                        Diseases
                    </span>
                </div>
            </div>
            <div className="patent-search__results">
                {hasSearched && isLoading ? (
                    <div className="patent-empty patent-empty--loading">
                        <Loader2 className="icon-md spin" aria-hidden="true" />
                        Searching patents...
                    </div>
                ) : null}
                {hasSearched && errorMessage ? <div className="patent-empty">{errorMessage}</div> : null}
                {hasSearched && !isLoading && !errorMessage && query.length > 0 && query.length < 2 ? (
                    <div className="patent-empty">Type at least 2 characters to search.</div>
                ) : null}
                {hasSearched && showNoResults ? (
                    <div className="patent-empty">No patents match your search.</div>
                ) : null}
                {hasSearched && pageItems.length ? (
                    <div className="patent-results-count">
                        Showing {startIndex + 1} - {startIndex + pageItems.length} of {results.length} results
                    </div>
                ) : null}
                {hasSearched && pageItems.length ? (
                    <div key={resultsKey} className="patents-grid patent-cards patent-cards--search">
                        {pageItems.map((patent, index) => {
                            const patentId = String(patent?._id || `${patent?.wno || "patent"}-${index}`);
                            const isExpanded = expandedCards[patentId];
                            const wno = patent?.wno || "Unknown";
                            const therapeuticArea = patent?.therapeutic_area || "Not specified";
                            const publicationDate = patent?.publication_date || "Unknown";
                            const diseases = patent?.diseases || "Not specified";
                            const pct = patent?.pct || "Not specified";
                            return (
                                <article
                                    key={patentId}
                                    className="glass-card patent-card patent-card--animated"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <div className="patent-card__header">
                                        <div className="patent-card__label">
                                            <Hash className="icon-sm" />
                                            WIPO
                                        </div>
                                        <div className="patent-card__value">{wno}</div>
                                    </div>
                                    <div className="patent-card__section">
                                        <div className="patent-card__label">
                                            <Microscope className="icon-sm" />
                                            Therapeutic Area
                                        </div>
                                        <div className="patent-card__value patent-card__area">
                                            {therapeuticArea}
                                        </div>
                                    </div>
                                    <div className="patent-card__section">
                                        <div className="patent-card__label">
                                            <Calendar className="icon-sm" />
                                            Publication Date
                                        </div>
                                        <div className="patent-card__value">{publicationDate}</div>
                                    </div>

                                    <button
                                        className="patent-view-more"
                                        type="button"
                                        onClick={() => handleToggleDetails(patentId)}
                                    >
                                        <BadgeInfo className="icon-sm" />
                                        {isExpanded ? "View Less" : "View More"}
                                        {isExpanded ? (
                                            <ChevronUp className="icon-sm" />
                                        ) : (
                                            <ChevronDown className="icon-sm" />
                                        )}
                                    </button>

                                    {isExpanded ? (
                                        <div className="patent-card__details">
                                            <div className="patent-card__detail">
                                                <span>Diseases</span>
                                                <p>{diseases}</p>
                                            </div>
                                            <div className="patent-card__detail">
                                                <span>PCT</span>
                                                <p>{pct}</p>
                                            </div>
                                        </div>
                                    ) : null}
                                </article>
                            );
                        })}
                    </div>
                ) : null}
                {hasSearched && results.length > ITEMS_PER_PAGE ? (
                    <div className="patent-pagination">
                        <button
                            type="button"
                            className="patent-pagination__button"
                            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                            disabled={safePage === 1}
                        >
                            <ChevronLeft className="icon-sm" />
                            Prev
                        </button>
                        <div className="patent-pagination__status">
                            Page {safePage} of {totalPages}
                        </div>
                        <button
                            type="button"
                            className="patent-pagination__button"
                            onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                            disabled={safePage === totalPages}
                        >
                            Next
                            <ChevronRight className="icon-sm" />
                        </button>
                    </div>
                ) : null}
            </div>
        </section>
    );
};

export default PatentSearchBar;
