import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
    Calendar,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Hash,
    Microscope,
    FileText,
    BadgeInfo,
} from "lucide-react";

const ITEMS_PER_PAGE = 15;
const API_BASE_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");

const Patents = ({ searchTerm = "" }) => {
    const [openYear, setOpenYear] = useState(null);
    const [yearCounts, setYearCounts] = useState([]);
    const [isLoadingYears, setIsLoadingYears] = useState(true);
    const [yearError, setYearError] = useState("");
    const [yearPatentsMap, setYearPatentsMap] = useState({});
    const [isLoadingPatents, setIsLoadingPatents] = useState(false);
    const [patentsError, setPatentsError] = useState("");
    const [loadedYears, setLoadedYears] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedCards, setExpandedCards] = useState({});

    useEffect(() => {
        let isMounted = true;

        const fetchYearCounts = async () => {
            setIsLoadingYears(true);
            setYearError("");
            try {
                const response = await axios.get(`${API_BASE_URL}/allyearcount`);
                const normalized = Array.isArray(response.data)
                    ? response.data
                          .map((item) => ({
                              year: Number(item.year),
                              count: Number(item.count) || 0,
                          }))
                          .filter((item) => !Number.isNaN(item.year))
                    : [];
                normalized.sort((a, b) => b.year - a.year);
                if (isMounted) {
                    setYearCounts(normalized);
                }
            } catch (error) {
                if (isMounted) {
                    setYearError("Unable to load patent years.");
                    setYearCounts([]);
                }
            } finally {
                if (isMounted) {
                    setIsLoadingYears(false);
                }
            }
        };

        fetchYearCounts();

        return () => {
            isMounted = false;
        };
    }, []);

    const years = useMemo(() => {
        const counts = yearCounts.map((item) => item.year).sort((a, b) => b - a);
        const maxYear = counts[0] || new Date().getFullYear();
        const minYear = 2009;
        const fullRange = Array.from({ length: maxYear - minYear + 1 }, (_, index) => maxYear - index);
        const countsSet = new Set(counts);
        return fullRange.map((year) => (countsSet.has(year) ? year : year));
    }, [yearCounts]);

    useEffect(() => {
        if (!openYear) {
            setIsLoadingPatents(false);
            return;
        }

        let isMounted = true;
        const controller = new AbortController();

        const fetchPatentsByYear = async () => {
            setIsLoadingPatents(true);
            setPatentsError("");
            try {
                const response = await axios.get(
                    `${API_BASE_URL}/patents/years/${encodeURIComponent(openYear)}`,
                    { signal: controller.signal }
                );
                const payload = response?.data?.data ?? response?.data?.patents ?? response?.data;
                const data = Array.isArray(payload) ? payload : [];
                if (isMounted) {
                    setYearPatentsMap((prev) => ({
                        ...prev,
                        [openYear]: data,
                    }));
                    setLoadedYears((prev) => ({
                        ...prev,
                        [openYear]: true,
                    }));
                }
            } catch (error) {
                if (error?.code === "ERR_CANCELED" || error?.name === "CanceledError") {
                    return;
                }
                if (isMounted) {
                    setYearPatentsMap((prev) => ({
                        ...prev,
                        [openYear]: [],
                    }));
                    setPatentsError("Unable to load patents for this year.");
                    setLoadedYears((prev) => ({
                        ...prev,
                        [openYear]: true,
                    }));
                }
            } finally {
                if (isMounted) {
                    setIsLoadingPatents(false);
                }
            }
        };

        fetchPatentsByYear();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [openYear]);

    const normalizedSearch = searchTerm.trim().toLowerCase();
    const hasLoadedOpenYear = openYear ? Boolean(loadedYears[openYear]) : false;

    const filteredPatents = useMemo(() => {
        const yearPatents = yearPatentsMap[openYear] || [];
        if (!normalizedSearch) {
            return yearPatents;
        }
        return yearPatents.filter((patent) => {
            const haystack = [
                patent.wno,
                patent.therapeutic_area,
                patent.publication_date,
                patent.diseases,
                patent.pct,
                patent.year,
            ]
                .join(" ")
                .toLowerCase();
            return haystack.includes(normalizedSearch);
        });
    }, [openYear, normalizedSearch, yearPatentsMap]);

    const totalPages = Math.max(1, Math.ceil(filteredPatents.length / ITEMS_PER_PAGE));
    const safePage = Math.min(currentPage, totalPages);
    const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
    const pageItems = filteredPatents.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleYearToggle = (year) => {
        setOpenYear((previous) => (previous === year ? null : year));
        setCurrentPage(1);
        setExpandedCards({});
        setPatentsError("");
        setIsLoadingPatents(true);
    };

    const handleToggleDetails = (id) => {
        setExpandedCards((previous) => ({
            ...previous,
            [id]: !previous[id],
        }));
    };

    return (
        <section className="patent-browser">
            <div className="patent-browser__header">
                <h3 className="patent-browser__title">Patent Explorer by Year</h3>
                {/* <p className="patent-browser__subtitle">
                    Select a year to reveal filings and browse 15 patents per page.
                </p> */}
            </div>

            {isLoadingYears ? <div className="patent-empty">Loading years...</div> : null}
            {yearError ? <div className="patent-empty">{yearError}</div> : null}

            <div className="patent-year-grid" role="tablist" aria-label="Patent years">
                {years.map((year) => {
                    const isActive = openYear === year;
                    const count = yearCounts.find((item) => item.year === year)?.count;
                    return (
                        <button
                            key={year}
                            type="button"
                            className={`patent-year-button ${isActive ? "active" : ""}`}
                            onClick={() => handleYearToggle(year)}
                            aria-expanded={isActive}
                        >
                            <Calendar className="icon-sm" />
                            {year}
                            {typeof count === "number" ? (
                                <span className="patent-year-count">{count}</span>
                            ) : null}
                            {isActive ? <ChevronUp className="icon-sm" /> : <ChevronDown className="icon-sm" />}
                        </button>
                    );
                })}
            </div>

            {openYear ? (
                <div className="patent-dropdown">
                    <div className="patent-dropdown__header">
                        <div className="patent-dropdown__title">
                            <FileText className="icon-sm" />
                            {openYear} Patent Filings
                        </div>
                        <div className="patent-dropdown__meta">
                            Showing {pageItems.length} of {filteredPatents.length} results
                        </div>
                    </div>

                    {isLoadingPatents ? (
                        <div className="patent-empty">Loading patents...</div>
                    ) : null}
                    {patentsError ? <div className="patent-empty">{patentsError}</div> : null}
                    {!isLoadingPatents && !patentsError && pageItems.length ? (
                        <div className="patents-grid patent-cards">
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
                                                WNO
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
                                            {isExpanded ? <ChevronUp className="icon-sm" /> : <ChevronDown className="icon-sm" />}
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
                    {!isLoadingPatents && !patentsError && hasLoadedOpenYear && !pageItems.length ? (
                        <div className="patent-empty">No patents match your search for this year.</div>
                    ) : null}

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
                </div>
            ) : null}
        </section>
    );
};

export default Patents;
