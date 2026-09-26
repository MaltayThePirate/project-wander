(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/trips/[tripId]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TripHomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.mjs [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.mjs [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.mjs [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trip$2f$MapView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trip/MapView.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/PageHeader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trip$2f$AddMenuButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trip/AddMenuButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trip$2f$AddSpotForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trip/AddSpotForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trip$2f$AddCategoryForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trip/AddCategoryForm.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trip$2f$SpotCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trip/SpotCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function TripHomePage({ params }) {
    _s();
    const { tripId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("grid"); // "grid", "list", "map"
    const [headerMenuOpen, setHeaderMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emptyMenuOpen, setEmptyMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAddSpotForm, setShowAddSpotForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAddCategoryForm, setShowAddCategoryForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const tripQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "trip",
            tripId
        ],
        queryFn: {
            "TripHomePage.useQuery[tripQuery]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/trips/${tripId}`)
        }["TripHomePage.useQuery[tripQuery]"]
    });
    const spotsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "trip",
            tripId,
            "spots"
        ],
        queryFn: {
            "TripHomePage.useQuery[spotsQuery]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/trips/${tripId}/spots`)
        }["TripHomePage.useQuery[spotsQuery]"]
    });
    const handleSelect = (key, label)=>{
        setHeaderMenuOpen(false);
        setEmptyMenuOpen(false);
        if (key === "spot") {
            setShowAddSpotForm(true);
            return;
        }
        if (key === "category") {
            setShowAddCategoryForm(true);
            return;
        }
        setNote(label);
    };
    if (tripQuery.isLoading || spotsQuery.isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "60vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "spinner"
                }, void 0, false, {
                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "eyebrow-label",
                    children: "Charting the route…"
                }, void 0, false, {
                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/trips/[tripId]/page.jsx",
            lineNumber: 54,
            columnNumber: 7
        }, this);
    }
    if (tripQuery.isError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "28px 24px",
                color: "var(--color-rust)"
            },
            children: tripQuery.error.message
        }, void 0, false, {
            fileName: "[project]/src/app/trips/[tripId]/page.jsx",
            lineNumber: 63,
            columnNumber: 7
        }, this);
    }
    const trip = tripQuery.data;
    const dateRangeLabel = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatShortDate"])(trip.start_date)}–${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatShortDate"])(trip.end_date)}`;
    const spots = spotsQuery.data ?? [];
    const filteredSpots = spots.filter((spot)=>search.trim() === "" || spot.name.toLowerCase().includes(search.toLowerCase()) || (spot.address || "").toLowerCase().includes(search.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "28px 24px 60px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1040px",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$PageHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    eyebrow: `${trip.name} · ${dateRangeLabel}`,
                    title: "Spots",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trip$2f$AddMenuButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: headerMenuOpen,
                        onToggleOpen: ()=>setHeaderMenuOpen((v)=>!v),
                        onSelect: handleSelect
                    }, void 0, false, {
                        fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                showAddSpotForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>setShowAddSpotForm(false),
                    style: {
                        position: "fixed",
                        inset: 0,
                        background: "rgba(31, 46, 53, 0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 100,
                        padding: "24px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: (e)=>e.stopPropagation(),
                        style: {
                            width: "100%",
                            maxWidth: "420px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trip$2f$AddSpotForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            tripId: tripId,
                            onClose: ()=>setShowAddSpotForm(false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                            lineNumber: 109,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                        lineNumber: 105,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this),
                showAddCategoryForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>setShowAddCategoryForm(false),
                    style: {
                        position: "fixed",
                        inset: 0,
                        background: "rgba(31, 46, 53, 0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 100,
                        padding: "24px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: (e)=>e.stopPropagation(),
                        style: {
                            width: "100%",
                            maxWidth: "420px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trip$2f$AddCategoryForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            tripId: tripId,
                            onClose: ()=>setShowAddCategoryForm(false)
                        }, void 0, false, {
                            fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                            lineNumber: 132,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, this),
                note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: "8px",
                        background: "rgba(201, 138, 46, 0.05)",
                        border: "1px solid rgba(201, 138, 46, 0.2)",
                        borderRadius: "8px",
                        padding: "10px 14px",
                        marginBottom: "18px",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "12.5px",
                        color: "#8A6017"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "8px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    size: 14,
                                    strokeWidth: 2,
                                    style: {
                                        flexShrink: 0,
                                        marginTop: "1px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                '"',
                                note,
                                "\" doesn't have a screen yet — this is a placeholder for a flow that's still being designed."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setNote(null),
                            "aria-label": "Dismiss",
                            style: {
                                border: "none",
                                background: "none",
                                color: "#8A6017",
                                cursor: "pointer",
                                display: "flex",
                                flexShrink: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 14,
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                                lineNumber: 163,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: "12px",
                        marginBottom: "24px",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                background: "#FFFFFF",
                                border: "1px solid var(--color-border)",
                                borderRadius: "8px",
                                padding: "9px 14px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 15,
                                    color: "var(--color-muted)",
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: search,
                                    onChange: (e)=>setSearch(e.target.value),
                                    placeholder: "Search Spots by name or address",
                                    disabled: true,
                                    style: {
                                        border: "none",
                                        outline: "none",
                                        fontFamily: "var(--font-inter), sans-serif",
                                        fontSize: "13.5px",
                                        color: "var(--color-ink)",
                                        width: "100%",
                                        background: "transparent"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                background: "#FFFFFF",
                                border: "1px solid var(--color-border)",
                                borderRadius: "8px",
                                padding: "3px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setView("grid"),
                                    "aria-label": "Grid view",
                                    style: {
                                        border: "none",
                                        background: view === "grid" ? "var(--color-ink)" : "transparent",
                                        color: view === "grid" ? "var(--color-parchment)" : "var(--color-muted)",
                                        borderRadius: "6px",
                                        padding: "7px 10px",
                                        cursor: "pointer",
                                        display: "flex"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                        size: 15,
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setView("list"),
                                    "aria-label": "List view",
                                    style: {
                                        border: "none",
                                        background: view === "list" ? "var(--color-ink)" : "transparent",
                                        color: view === "list" ? "var(--color-parchment)" : "var(--color-muted)",
                                        borderRadius: "6px",
                                        padding: "7px 10px",
                                        cursor: "pointer",
                                        display: "flex"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                        size: 15,
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setView("map"),
                                    "aria-label": "Map view",
                                    style: {
                                        border: "none",
                                        background: view === "map" ? "var(--color-ink)" : "transparent",
                                        color: view === "map" ? "var(--color-parchment)" : "var(--color-muted)",
                                        borderRadius: "6px",
                                        padding: "7px 10px",
                                        cursor: "pointer",
                                        display: "flex"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                        size: 15,
                                        strokeWidth: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this),
                spots.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        padding: "70px 24px",
                        border: "1.5px dashed var(--color-border)",
                        borderRadius: "14px",
                        background: "#FFFFFF"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: "var(--font-fraunces), serif",
                                fontWeight: 600,
                                fontSize: "20px",
                                color: "var(--color-ink)",
                                marginBottom: "8px"
                            },
                            children: "Your Trip is empty"
                        }, void 0, false, {
                            fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "var(--font-inter), sans-serif",
                                fontSize: "13.5px",
                                color: "var(--color-muted)",
                                margin: "0 0 22px",
                                maxWidth: "360px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                lineHeight: 1.5
                            },
                            children: "Start by adding a Spot, your flight details, or where you're staying."
                        }, void 0, false, {
                            fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trip$2f$AddMenuButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            isOpen: emptyMenuOpen,
                            onToggleOpen: ()=>setEmptyMenuOpen((v)=>!v),
                            onSelect: handleSelect,
                            size: "large"
                        }, void 0, false, {
                            fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                            lineNumber: 255,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                    lineNumber: 248,
                    columnNumber: 11
                }, this) : filteredSpots.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        padding: "40px 24px",
                        color: "var(--color-muted)",
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "13.5px"
                    },
                    children: [
                        'No Spots match "',
                        search,
                        '".'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                    lineNumber: 263,
                    columnNumber: 11
                }, this) : view === "map" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trip$2f$MapView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    trip: trip,
                    spots: filteredSpots
                }, void 0, false, {
                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                    lineNumber: 267,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: view === "grid" ? "repeat(auto-fill, minmax(270px, 1fr))" : "1fr",
                        gap: "12px"
                    },
                    children: filteredSpots.map((spot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trip$2f$SpotCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            spot: spot,
                            view: view
                        }, spot.id, false, {
                            fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                            lineNumber: 277,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/trips/[tripId]/page.jsx",
                    lineNumber: 269,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/trips/[tripId]/page.jsx",
            lineNumber: 82,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/trips/[tripId]/page.jsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(TripHomePage, "st2APauJe+7FLY3mioDdZq6Cu0Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = TripHomePage;
var _c;
__turbopack_context__.k.register(_c, "TripHomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/PageHeader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PageHeader({ eyebrow, title, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "22px",
            flexWrap: "wrap",
            gap: "16px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow-label",
                        style: {
                            marginBottom: "4px"
                        },
                        children: eyebrow
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PageHeader.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "page-heading",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/PageHeader.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/PageHeader.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/PageHeader.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = PageHeader;
var _c;
__turbopack_context__.k.register(_c, "PageHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trip/AddCategoryForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddCategoryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AddCategoryForm({ tripId, onClose }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#4A6FA5");
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "AddCategoryForm.useMutation[mutation]": ({ name, color })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])(`/trips/${tripId}/categories`, {
                    category: {
                        name,
                        color
                    }
                })
        }["AddCategoryForm.useMutation[mutation]"],
        onSuccess: {
            "AddCategoryForm.useMutation[mutation]": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "trip",
                        tripId,
                        "categories"
                    ]
                });
                setName("");
                onClose();
            }
        }["AddCategoryForm.useMutation[mutation]"]
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!name.trim()) return;
        mutation.mutate({
            name: name.trim(),
            color
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#FFFFFF",
            border: "1px solid #E4DDCE",
            borderRadius: "10px",
            padding: "16px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "12px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: "11px",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "#8A8270"
                        },
                        children: "Add Custom Category"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/AddCategoryForm.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        "aria-label": "Close",
                        style: {
                            border: "none",
                            background: "none",
                            color: "#A99F8B",
                            cursor: "pointer",
                            display: "flex"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 15,
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/src/components/trip/AddCategoryForm.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/AddCategoryForm.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trip/AddCategoryForm.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "8px",
                            marginBottom: "12px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                placeholder: "Category name (e.g. Karaoke)",
                                disabled: mutation.isPending,
                                style: {
                                    flex: 1,
                                    border: "1px solid #E4DDCE",
                                    borderRadius: "8px",
                                    padding: "10px 12px",
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "13.5px",
                                    color: "#1F2E35",
                                    boxSizing: "border-box"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/trip/AddCategoryForm.jsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "color",
                                value: color,
                                onChange: (e)=>setColor(e.target.value),
                                disabled: mutation.isPending,
                                title: "Choose category color",
                                style: {
                                    width: "42px",
                                    height: "42px",
                                    border: "1px solid #E4DDCE",
                                    borderRadius: "8px",
                                    padding: "2px",
                                    background: "#FFFFFF",
                                    cursor: "pointer"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/trip/AddCategoryForm.jsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/trip/AddCategoryForm.jsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    mutation.isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "12.5px",
                            color: "#B8462F",
                            marginBottom: "10px"
                        },
                        children: mutation.error.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/AddCategoryForm.jsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: mutation.isPending || !name.trim(),
                        style: {
                            width: "100%",
                            background: mutation.isPending || !name.trim() ? "#E4DDCE" : "#1F2E35",
                            color: mutation.isPending || !name.trim() ? "#A99F8B" : "#FAF7F1",
                            border: "none",
                            borderRadius: "8px",
                            padding: "10px",
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            fontSize: "13.5px",
                            cursor: mutation.isPending || !name.trim() ? "not-allowed" : "pointer"
                        },
                        children: mutation.isPending ? "Creating..." : "Create Category"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/AddCategoryForm.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trip/AddCategoryForm.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/trip/AddCategoryForm.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(AddCategoryForm, "a9UguP0DDJ6zaTTz9S+u9PisLnM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = AddCategoryForm;
var _c;
__turbopack_context__.k.register(_c, "AddCategoryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trip/AddMenuButton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddMenuButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plane.mjs [app-client] (ecmascript) <export default as Plane>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.mjs [app-client] (ecmascript) <export default as Tag>");
"use client";
;
;
const ADD_MENU_ITEMS = [
    {
        key: "spot",
        label: "Add a Spot",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
    },
    {
        key: "category",
        label: "Add Category",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"]
    },
    {
        key: "flight",
        label: "Add Flight Details",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plane$3e$__["Plane"]
    },
    {
        key: "accommodation",
        label: "Add Accommodation",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        key: "attendees",
        label: "Add Attendee(s)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    }
];
function AddMenuButton({ isOpen, onToggleOpen, onSelect, size = "default" }) {
    const isLarge = size === "large";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            display: "inline-block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggleOpen,
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "var(--color-ink)",
                    color: "var(--color-parchment)",
                    border: "none",
                    borderRadius: "8px",
                    padding: isLarge ? "12px 22px" : "10px 16px",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    fontSize: isLarge ? "14.5px" : "13.5px",
                    cursor: "pointer"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        size: isLarge ? 16 : 15,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/AddMenuButton.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    "Add"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trip/AddMenuButton.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "calc(100% + 6px)",
                    left: isLarge ? "50%" : undefined,
                    right: isLarge ? undefined : 0,
                    transform: isLarge ? "translateX(-50%)" : undefined,
                    background: "#FFFFFF",
                    border: "1px solid var(--color-border)",
                    borderRadius: "10px",
                    boxShadow: "0 4px 14px rgba(31,46,53,0.18)",
                    padding: "6px",
                    width: "220px",
                    zIndex: 30,
                    textAlign: "left"
                },
                children: ADD_MENU_ITEMS.map(({ key, label, icon: Icon })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSelect(key, label),
                        className: "add-menu-item",
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "9px",
                            width: "100%",
                            border: "none",
                            background: "none",
                            color: "var(--color-ink)",
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "13px",
                            padding: "9px 10px",
                            borderRadius: "7px",
                            cursor: "pointer",
                            textAlign: "left"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 15,
                                strokeWidth: 2,
                                color: "var(--color-teal)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/trip/AddMenuButton.jsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            label
                        ]
                    }, key, true, {
                        fileName: "[project]/src/components/trip/AddMenuButton.jsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/trip/AddMenuButton.jsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/trip/AddMenuButton.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = AddMenuButton;
var _c;
__turbopack_context__.k.register(_c, "AddMenuButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trip/AddSpotForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddSpotForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AddSpotForm({ tripId, onClose }) {
    _s();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedCategoryIds, setSelectedCategoryIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const categoriesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "trip",
            tripId,
            "categories"
        ],
        queryFn: {
            "AddSpotForm.useQuery[categoriesQuery]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/trips/${tripId}/categories`)
        }["AddSpotForm.useQuery[categoriesQuery]"]
    });
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "AddSpotForm.useMutation[mutation]": ({ sourceUrl, note, categoryIds })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])(`/trips/${tripId}/spots`, {
                    spot: {
                        source_url: sourceUrl,
                        note,
                        category_ids: categoryIds
                    }
                })
        }["AddSpotForm.useMutation[mutation]"],
        onSuccess: {
            "AddSpotForm.useMutation[mutation]": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        "trip",
                        tripId,
                        "spots"
                    ]
                });
                setUrl("");
                setNote("");
                setSelectedCategoryIds([]);
                onClose();
            }
        }["AddSpotForm.useMutation[mutation]"]
    });
    const toggleCategory = (catId)=>{
        setSelectedCategoryIds((prev)=>prev.includes(catId) ? prev.filter((id)=>id !== catId) : [
                ...prev,
                catId
            ]);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!url.trim()) return;
        mutation.mutate({
            sourceUrl: url.trim(),
            note: note.trim(),
            categoryIds: selectedCategoryIds
        });
    };
    const categories = categoriesQuery.data || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#FFFFFF",
            border: "1px solid #E4DDCE",
            borderRadius: "10px",
            padding: "16px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'IBM Plex Mono', monospace",
                            fontSize: "11px",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            color: "#8A8270"
                        },
                        children: "Add a Spot"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        "aria-label": "Close",
                        style: {
                            border: "none",
                            background: "none",
                            color: "#A99F8B",
                            cursor: "pointer",
                            display: "flex"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 15,
                            strokeWidth: 2
                        }, void 0, false, {
                            fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: url,
                        onChange: (e)=>setUrl(e.target.value),
                        placeholder: "Paste a Google or Apple Maps link",
                        disabled: mutation.isPending,
                        style: {
                            width: "100%",
                            border: "1px solid #E4DDCE",
                            borderRadius: "8px",
                            padding: "10px 12px",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "13.5px",
                            color: "#1F2E35",
                            marginBottom: "10px",
                            boxSizing: "border-box"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: note,
                        onChange: (e)=>setNote(e.target.value),
                        placeholder: "Optional note — reservation details, why you added it, etc.",
                        disabled: mutation.isPending,
                        rows: 3,
                        style: {
                            width: "100%",
                            border: "1px solid var(--color-border)",
                            borderRadius: "8px",
                            padding: "10px 12px",
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "13.5px",
                            color: "var(--color-ink)",
                            marginBottom: "10px",
                            boxSizing: "border-box",
                            resize: "vertical"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    categories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: "14px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    display: "block",
                                    fontFamily: "'IBM Plex Mono', monospace",
                                    fontSize: "10.5px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                    color: "#8A8270",
                                    marginBottom: "6px"
                                },
                                children: "Categories"
                            }, void 0, false, {
                                fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "6px"
                                },
                                children: categories.map((cat)=>{
                                    const selected = selectedCategoryIds.includes(cat.id);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>toggleCategory(cat.id),
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            background: selected ? cat.color : "#F4EFE6",
                                            color: selected ? "#FFFFFF" : "#1F2E35",
                                            border: `1px solid ${selected ? cat.color : "#E4DDCE"}`,
                                            borderRadius: "6px",
                                            padding: "5px 10px",
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "12px",
                                            fontWeight: selected ? 500 : 400,
                                            cursor: "pointer",
                                            transition: "all 0.15s ease"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: "7px",
                                                    height: "7px",
                                                    borderRadius: "50%",
                                                    background: selected ? "#FFFFFF" : cat.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                                                lineNumber: 166,
                                                columnNumber: 21
                                            }, this),
                                            cat.name
                                        ]
                                    }, cat.id, true, {
                                        fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                                        lineNumber: 146,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    mutation.isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "12.5px",
                            color: "#B8462F",
                            marginBottom: "10px"
                        },
                        children: mutation.error.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: mutation.isPending || !url.trim(),
                        style: {
                            width: "100%",
                            background: mutation.isPending || !url.trim() ? "#E4DDCE" : "#1F2E35",
                            color: mutation.isPending || !url.trim() ? "#A99F8B" : "#FAF7F1",
                            border: "none",
                            borderRadius: "8px",
                            padding: "10px",
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            fontSize: "13.5px",
                            cursor: mutation.isPending || !url.trim() ? "not-allowed" : "pointer"
                        },
                        children: mutation.isPending ? "Adding..." : "Add Spot"
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trip/AddSpotForm.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/trip/AddSpotForm.jsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(AddSpotForm, "uszxZpVXjQbMFQDf1YxU2cDWHqE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = AddSpotForm;
var _c;
__turbopack_context__.k.register(_c, "AddSpotForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trip/MapView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddToPlanControl",
    ()=>AddToPlanControl,
    "StampBadge",
    ()=>StampBadge,
    "default",
    ()=>MapView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const STAMP_TILT = -1.5;
function StampBadge({ label, categoryColors }) {
    const color = categoryColors[label] || "#2B6E6E";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            display: "inline-block",
            fontFamily: "var(--font-ibm-plex-mono), monospace",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color,
            border: `1.5px dashed ${color}`,
            borderRadius: "4px",
            padding: "3px 7px",
            transform: `rotate(${STAMP_TILT}deg)`,
            background: `${color}0d`,
            whiteSpace: "nowrap"
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/src/components/trip/MapView.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = StampBadge;
function AddToPlanControl({ date, added, onToggle, compact }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            flexShrink: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onToggle,
            "aria-label": added ? "Remove from plan" : "Add to plan",
            title: added ? `Added to plan for ${date}` : `Add to plan for ${date}`,
            style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: compact ? "26px" : "30px",
                height: compact ? "26px" : "30px",
                border: "1px solid " + (added ? "#2B6E6E" : "#E4DDCE"),
                background: added ? "#2B6E6E" : "#FFFFFF",
                color: added ? "#FAF7F1" : "#1F2E35",
                borderRadius: "50%",
                cursor: "pointer",
                padding: 0,
                flexShrink: 0
            },
            children: added ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                size: compact ? 13 : 15,
                strokeWidth: 2.5
            }, void 0, false, {
                fileName: "[project]/src/components/trip/MapView.jsx",
                lineNumber: 59,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                size: compact ? 14 : 16,
                strokeWidth: 2.5
            }, void 0, false, {
                fileName: "[project]/src/components/trip/MapView.jsx",
                lineNumber: 61,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/trip/MapView.jsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/trip/MapView.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = AddToPlanControl;
function MapView({ trip, spots = [] }) {
    _s();
    const tripId = trip?.id;
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [map, setMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [activeCategories, setActiveCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Fetch categories dynamically from database
    const categoriesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "trip",
            tripId,
            "categories"
        ],
        queryFn: {
            "MapView.useQuery[categoriesQuery]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiGet"])(`/trips/${tripId}/categories`)
        }["MapView.useQuery[categoriesQuery]"],
        enabled: !!tripId
    });
    const tripCategories = categoriesQuery.data || [];
    // Build lowercase categoryColors and allCategories dynamically from fetched categories
    const categoryColors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapView.useMemo[categoryColors]": ()=>{
            const map = {};
            tripCategories.forEach({
                "MapView.useMemo[categoryColors]": (cat)=>{
                    map[cat.name] = cat.color || "#2B6E6E";
                }
            }["MapView.useMemo[categoryColors]"]);
            return map;
        }
    }["MapView.useMemo[categoryColors]"], [
        tripCategories
    ]);
    const allCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapView.useMemo[allCategories]": ()=>{
            return tripCategories.map({
                "MapView.useMemo[allCategories]": (cat)=>cat.name
            }["MapView.useMemo[allCategories]"]);
        }
    }["MapView.useMemo[allCategories]"], [
        tripCategories
    ]);
    // Infer trip dates (inclusive) from trip start_date and end_date.
    // Trip start_date and end_date are required fields. If missing, treat as unexpected error.
    const tripDates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapView.useMemo[tripDates]": ()=>{
            if (!trip?.start_date || !trip?.end_date) {
                return null;
            }
            const dates = [];
            const curr = new Date(trip.start_date);
            const end = new Date(trip.end_date);
            while(curr <= end){
                const formatted = curr.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric"
                });
                dates.push(formatted);
                curr.setDate(curr.getDate() + 1);
            }
            return dates.length > 0 ? dates : null;
        }
    }["MapView.useMemo[tripDates]"], [
        trip
    ]);
    if (!tripDates) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "40px 24px",
                color: "var(--color-rust)",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "14px",
                textAlign: "center"
            },
            children: "Unexpected error: Trip start and end dates are required."
        }, void 0, false, {
            fileName: "[project]/src/components/trip/MapView.jsx",
            lineNumber: 117,
            columnNumber: 7
        }, this);
    }
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(tripDates[0] || "Jun 10");
    // Keep selectedDate valid if tripDates changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (tripDates.length > 0 && !tripDates.includes(selectedDate)) {
                setSelectedDate(tripDates[0]);
            }
        }
    }["MapView.useEffect"], [
        tripDates,
        selectedDate
    ]);
    const [hoveredSpotId, setHoveredSpotId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSpotId, setSelectedSpotId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeAccommodationId, setActiveAccommodationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Personal day plan mapping by date: { [date]: [spotId, ...] }
    const [planByDate, setPlanByDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const togglePlan = (id, date)=>{
        setPlanByDate((prev)=>{
            const list = prev[date] || [];
            const next = list.includes(id) ? list.filter((x)=>x !== id) : [
                ...list,
                id
            ];
            return {
                ...prev,
                [date]: next
            };
        });
    };
    const isAddedToPlan = (id, date)=>(planByDate[date] || []).includes(id);
    // Initialize Google Maps
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (window.google && window.google.maps) {
                initMap();
                return;
            }
            const existingScript = document.getElementById("google-maps-script");
            if (existingScript) {
                existingScript.addEventListener("load", initMap);
                return;
            }
            const apiKey = ("TURBOPACK compile-time value", "AIzaSyBGkdT-AuAMnnCnAo5aGSIvEm-oXwJ7sWI") || "";
            const script = document.createElement("script");
            script.id = "google-maps-script";
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=weekly`;
            script.async = true;
            script.defer = true;
            script.onload = initMap;
            script.onerror = ({
                "MapView.useEffect": ()=>{
                    console.error("Failed to load Google Maps script.");
                }
            })["MapView.useEffect"];
            document.head.appendChild(script);
            return ({
                "MapView.useEffect": ()=>{
                    if (script) {
                        script.removeEventListener("load", initMap);
                    }
                }
            })["MapView.useEffect"];
        }
    }["MapView.useEffect"], []);
    const initMap = ()=>{
        if (!mapRef.current) return;
        let center = {
            lat: 35.6762,
            lng: 139.6503
        }; // Tokyo default
        if (spots && spots.length > 0 && spots[0].latitude && spots[0].longitude) {
            center = {
                lat: spots[0].latitude,
                lng: spots[0].longitude
            };
        }
        const mapInstance = new window.google.maps.Map(mapRef.current, {
            center,
            zoom: 13,
            disableDefaultUI: false
        });
        setMap(mapInstance);
    };
    const formattedSpots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapView.useMemo[formattedSpots]": ()=>{
            return spots.map({
                "MapView.useMemo[formattedSpots]": (s)=>{
                    const categories = s.categories ? s.categories.map({
                        "MapView.useMemo[formattedSpots]": (c)=>c.name
                    }["MapView.useMemo[formattedSpots]"]) : [
                        "Landmarks"
                    ];
                    return {
                        ...s,
                        categories
                    };
                }
            }["MapView.useMemo[formattedSpots]"]);
        }
    }["MapView.useMemo[formattedSpots]"], [
        spots
    ]);
    // TODO: Accommodation backend API integration
    const formattedAccommodations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapView.useMemo[formattedAccommodations]": ()=>{
            return (trip?.accommodations || []).map({
                "MapView.useMemo[formattedAccommodations]": (a)=>({
                        ...a,
                        dateRange: tripDates
                    })
            }["MapView.useMemo[formattedAccommodations]"]);
        }
    }["MapView.useMemo[formattedAccommodations]"], [
        trip,
        tripDates
    ]);
    const toggleCategory = (cat)=>{
        setActiveCategories((prev)=>prev.includes(cat) ? prev.filter((c)=>c !== cat) : [
                ...prev,
                cat
            ]);
    };
    const visibleSpots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MapView.useMemo[visibleSpots]": ()=>{
            return formattedSpots.filter({
                "MapView.useMemo[visibleSpots]": (s)=>activeCategories.length === 0 || s.categories.some({
                        "MapView.useMemo[visibleSpots]": (c)=>activeCategories.includes(c)
                    }["MapView.useMemo[visibleSpots]"])
            }["MapView.useMemo[visibleSpots]"]);
        }
    }["MapView.useMemo[visibleSpots]"], [
        formattedSpots,
        activeCategories
    ]);
    const relevantAccommodations = formattedAccommodations.filter((a)=>a.dateRange.includes(selectedDate));
    const hasOverlap = relevantAccommodations.length > 1;
    const effectiveActiveId = hasOverlap ? activeAccommodationId || relevantAccommodations[0]?.id : relevantAccommodations[0]?.id ?? null;
    const selectedSpot = selectedSpotId ? formattedSpots.find((s)=>s.id === selectedSpotId) : null;
    // Render styled markers on Google Map instance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapView.useEffect": ()=>{
            if (!map || !window.google || !window.google.maps) return;
            markersRef.current.forEach({
                "MapView.useEffect": (m)=>m.setMap(null)
            }["MapView.useEffect"]);
            markersRef.current = [];
            const bounds = new window.google.maps.LatLngBounds();
            let hasPoints = false;
            visibleSpots.forEach({
                "MapView.useEffect": (spot)=>{
                    if (spot.latitude && spot.longitude) {
                        const position = {
                            lat: spot.latitude,
                            lng: spot.longitude
                        };
                        const cat = spot.categories[0] || "Landmarks";
                        const color = categoryColors[cat] || "#2B6E6E";
                        const svgMarker = {
                            path: window.google.maps.SymbolPath.CIRCLE,
                            fillColor: color,
                            fillOpacity: 1,
                            scale: 8,
                            strokeColor: "#FAF7F1",
                            strokeWeight: 2
                        };
                        const marker = new window.google.maps.Marker({
                            position,
                            map,
                            title: spot.name,
                            icon: svgMarker
                        });
                        marker.addListener("click", {
                            "MapView.useEffect": ()=>{
                                setSelectedSpotId(spot.id === selectedSpotId ? null : spot.id);
                            }
                        }["MapView.useEffect"]);
                        markersRef.current.push(marker);
                        bounds.extend(position);
                        hasPoints = true;
                    }
                }
            }["MapView.useEffect"]);
            relevantAccommodations.forEach({
                "MapView.useEffect": (acc)=>{
                    if (acc.latitude && acc.longitude) {
                        const position = {
                            lat: acc.latitude,
                            lng: acc.longitude
                        };
                        const isActive = acc.id === effectiveActiveId;
                        const accMarker = {
                            path: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
                            fillColor: isActive ? "#1F2E35" : "#FFFFFF",
                            fillOpacity: 1,
                            scale: 1,
                            strokeColor: isActive ? "#C98A2E" : "#8A8270",
                            strokeWeight: 2
                        };
                        const marker = new window.google.maps.Marker({
                            position,
                            map,
                            title: `Accommodation: ${acc.name}`,
                            icon: accMarker,
                            zIndex: isActive ? 10 : 5
                        });
                        marker.addListener("click", {
                            "MapView.useEffect": ()=>{
                                if (hasOverlap) setActiveAccommodationId(acc.id);
                            }
                        }["MapView.useEffect"]);
                        markersRef.current.push(marker);
                        bounds.extend(position);
                        hasPoints = true;
                    }
                }
            }["MapView.useEffect"]);
            if (hasPoints) {
                map.fitBounds(bounds);
            }
        }
    }["MapView.useEffect"], [
        map,
        visibleSpots,
        relevantAccommodations,
        effectiveActiveId,
        selectedSpotId,
        categoryColors
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .cat-chip, .accom-chip, .spot-list-row { cursor: pointer; user-select: none; }
        .cat-chip:focus-visible, .accom-chip:focus-visible, .spot-list-row:focus-visible {
          outline: 2px solid #C98A2E;
          outline-offset: 2px;
        }
        .spot-list-row:hover { border-color: #C98A2E !important; }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/trip/MapView.jsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginBottom: "18px",
                    alignItems: "center"
                },
                children: [
                    allCategories.map((cat)=>{
                        const active = activeCategories.includes(cat);
                        const color = categoryColors[cat] || "#2B6E6E";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "cat-chip",
                            onClick: ()=>toggleCategory(cat),
                            style: {
                                fontFamily: "var(--font-ibm-plex-mono), monospace",
                                fontSize: "11px",
                                letterSpacing: "0.03em",
                                padding: "6px 12px",
                                borderRadius: "20px",
                                border: `1.5px solid ${color}`,
                                background: active ? color : "transparent",
                                color: active ? "#FAF7F1" : color
                            },
                            children: cat
                        }, cat, false, {
                            fileName: "[project]/src/components/trip/MapView.jsx",
                            lineNumber: 335,
                            columnNumber: 13
                        }, this);
                    }),
                    activeCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCategories([]),
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                            border: "none",
                            background: "none",
                            color: "#8A8270",
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "12px",
                            cursor: "pointer",
                            padding: "6px 4px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/src/components/trip/MapView.jsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, this),
                            " Clear"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/trip/MapView.jsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trip/MapView.jsx",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            flex: "1 1 560px",
                            minWidth: "320px",
                            aspectRatio: "4 / 3",
                            borderRadius: "12px",
                            border: "1px solid #E4DDCE",
                            overflow: "hidden",
                            boxShadow: "0 1px 3px rgba(31,46,53,0.08)",
                            background: "#E2E8F0"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: mapRef,
                                style: {
                                    width: "100%",
                                    height: "100%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/trip/MapView.jsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "10px",
                                    right: "10px",
                                    zIndex: 6,
                                    background: "#FAF7F1",
                                    border: "1px solid #E4DDCE",
                                    borderRadius: "10px",
                                    padding: "10px 12px",
                                    boxShadow: "0 2px 8px rgba(31,46,53,0.12)",
                                    maxWidth: "220px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "5px",
                                            fontFamily: "var(--font-ibm-plex-mono), monospace",
                                            fontSize: "10px",
                                            letterSpacing: "0.05em",
                                            textTransform: "uppercase",
                                            color: "#8A8270",
                                            marginBottom: "6px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                size: 11,
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/trip/MapView.jsx",
                                                lineNumber: 421,
                                                columnNumber: 15
                                            }, this),
                                            "Accommodation"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                        lineNumber: 408,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedDate,
                                        onChange: (e)=>setSelectedDate(e.target.value),
                                        style: {
                                            width: "100%",
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "12.5px",
                                            color: "#1F2E35",
                                            border: "1px solid #E4DDCE",
                                            borderRadius: "6px",
                                            padding: "5px 7px",
                                            marginBottom: "8px",
                                            background: "#FFFFFF"
                                        },
                                        children: tripDates.map((date)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: date,
                                                children: date
                                            }, date, false, {
                                                fileName: "[project]/src/components/trip/MapView.jsx",
                                                lineNumber: 440,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                        lineNumber: 424,
                                        columnNumber: 13
                                    }, this),
                                    relevantAccommodations.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "12px",
                                            color: "#A99F8B"
                                        },
                                        children: [
                                            "No Accommodation set for ",
                                            selectedDate,
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                        lineNumber: 447,
                                        columnNumber: 15
                                    }, this),
                                    !hasOverlap && relevantAccommodations.length === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "12.5px",
                                            fontWeight: 500,
                                            color: "#1F2E35"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                size: 12,
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/trip/MapView.jsx",
                                                lineNumber: 464,
                                                columnNumber: 17
                                            }, this),
                                            relevantAccommodations[0].name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                        lineNumber: 453,
                                        columnNumber: 15
                                    }, this),
                                    hasOverlap && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "var(--font-inter), sans-serif",
                                                    fontSize: "11px",
                                                    color: "#8A6017",
                                                    marginBottom: "5px"
                                                },
                                                children: "2 overlap — set active:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/trip/MapView.jsx",
                                                lineNumber: 471,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "5px"
                                                },
                                                children: relevantAccommodations.map((a)=>{
                                                    const active = a.id === effectiveActiveId;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "accom-chip",
                                                        onClick: ()=>setActiveAccommodationId(a.id),
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "5px",
                                                            fontFamily: "var(--font-inter), sans-serif",
                                                            fontSize: "12px",
                                                            fontWeight: 500,
                                                            padding: "5px 9px",
                                                            borderRadius: "6px",
                                                            border: `1.5px solid ${active ? "#1F2E35" : "#E4DDCE"}`,
                                                            background: active ? "#1F2E35" : "#FFFFFF",
                                                            color: active ? "#FAF7F1" : "#1F2E35",
                                                            textAlign: "left"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                                                size: 11,
                                                                strokeWidth: 2
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trip/MapView.jsx",
                                                                lineNumber: 504,
                                                                columnNumber: 25
                                                            }, this),
                                                            a.name
                                                        ]
                                                    }, a.id, true, {
                                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                                        lineNumber: 485,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/trip/MapView.jsx",
                                                lineNumber: 481,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                        lineNumber: 470,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/trip/MapView.jsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this),
                            selectedSpot && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    bottom: "16px",
                                    left: "16px",
                                    background: "#FFFFFF",
                                    border: "1px solid #E4DDCE",
                                    borderRadius: "10px",
                                    padding: "12px 14px",
                                    width: "240px",
                                    boxShadow: "0 6px 18px rgba(31,46,53,0.25)",
                                    zIndex: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "flex-start",
                                            justifyContent: "space-between",
                                            gap: "8px",
                                            marginBottom: "6px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    minWidth: 0,
                                                    flex: 1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "var(--font-inter), sans-serif",
                                                            fontWeight: 600,
                                                            fontSize: "13.5px",
                                                            color: "#1F2E35",
                                                            marginBottom: "2px"
                                                        },
                                                        children: selectedSpot.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                                        lineNumber: 532,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "4px",
                                                            fontFamily: "var(--font-ibm-plex-mono), monospace",
                                                            fontSize: "10.5px",
                                                            color: "#8A8270"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                size: 10,
                                                                strokeWidth: 2
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/trip/MapView.jsx",
                                                                lineNumber: 553,
                                                                columnNumber: 21
                                                            }, this),
                                                            selectedSpot.address
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                                        lineNumber: 543,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/trip/MapView.jsx",
                                                lineNumber: 531,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedSpotId(null),
                                                style: {
                                                    border: "none",
                                                    background: "none",
                                                    cursor: "pointer",
                                                    color: "#8A8270",
                                                    padding: 0
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trip/MapView.jsx",
                                                    lineNumber: 561,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/trip/MapView.jsx",
                                                lineNumber: 557,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                        lineNumber: 530,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "5px",
                                            flexWrap: "wrap",
                                            marginBottom: "8px"
                                        },
                                        children: selectedSpot.categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StampBadge, {
                                                label: c,
                                                categoryColors: categoryColors
                                            }, c, false, {
                                                fileName: "[project]/src/components/trip/MapView.jsx",
                                                lineNumber: 567,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                        lineNumber: 565,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddToPlanControl, {
                                        date: selectedDate,
                                        added: isAddedToPlan(selectedSpot.id, selectedDate),
                                        onToggle: ()=>togglePlan(selectedSpot.id, selectedDate)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                        lineNumber: 571,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/trip/MapView.jsx",
                                lineNumber: 516,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/trip/MapView.jsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: "0 0 280px",
                            minWidth: "240px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                                    fontSize: "11px",
                                    color: "#A99F8B",
                                    marginBottom: "8px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.04em"
                                },
                                children: [
                                    visibleSpots.length,
                                    " Spots shown"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/trip/MapView.jsx",
                                lineNumber: 582,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px"
                                },
                                children: [
                                    visibleSpots.map((spot)=>{
                                        const isSelected = spot.id === selectedSpotId;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "spot-list-row",
                                            tabIndex: 0,
                                            onMouseEnter: ()=>setHoveredSpotId(spot.id),
                                            onMouseLeave: ()=>setHoveredSpotId(null),
                                            onClick: ()=>{
                                                setSelectedSpotId(spot.id === selectedSpotId ? null : spot.id);
                                            },
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                background: "#FFFFFF",
                                                border: `1.5px solid ${isSelected ? "#C98A2E" : "#E4DDCE"}`,
                                                borderRadius: "8px",
                                                padding: "8px 10px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        width: "9px",
                                                        height: "9px",
                                                        borderRadius: "50%",
                                                        background: categoryColors[spot.categories[0]] || "#2B6E6E",
                                                        flexShrink: 0
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trip/MapView.jsx",
                                                    lineNumber: 617,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        minWidth: 0,
                                                        flex: 1
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: "var(--font-inter), sans-serif",
                                                            fontWeight: 500,
                                                            fontSize: "13px",
                                                            color: "#1F2E35",
                                                            overflow: "hidden",
                                                            textOverflow: "ellipsis",
                                                            whiteSpace: "nowrap"
                                                        },
                                                        children: spot.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                                        lineNumber: 627,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trip/MapView.jsx",
                                                    lineNumber: 626,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: (e)=>e.stopPropagation(),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddToPlanControl, {
                                                        date: selectedDate,
                                                        added: isAddedToPlan(spot.id, selectedDate),
                                                        onToggle: ()=>togglePlan(spot.id, selectedDate),
                                                        compact: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                                        lineNumber: 642,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/trip/MapView.jsx",
                                                    lineNumber: 641,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, spot.id, true, {
                                            fileName: "[project]/src/components/trip/MapView.jsx",
                                            lineNumber: 598,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    visibleSpots.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontSize: "12.5px",
                                            color: "#A99F8B",
                                            padding: "10px 4px"
                                        },
                                        children: "No Spots match the selected Categories."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/trip/MapView.jsx",
                                        lineNumber: 653,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/trip/MapView.jsx",
                                lineNumber: 594,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/trip/MapView.jsx",
                        lineNumber: 581,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trip/MapView.jsx",
                lineNumber: 376,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/trip/MapView.jsx",
        lineNumber: 319,
        columnNumber: 5
    }, this);
}
_s(MapView, "TPhkUZnaQ7Ob9VKEgaHZ/EojiBk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c2 = MapView;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StampBadge");
__turbopack_context__.k.register(_c1, "AddToPlanControl");
__turbopack_context__.k.register(_c2, "MapView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trip/SpotCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpotCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trip$2f$SpotPhoto$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/trip/SpotPhoto.jsx [app-client] (ecmascript)");
;
;
;
const PROVIDER_LABELS = {
    google: "Google Maps",
    apple: "Apple Maps"
};
function SpotCard({ spot, view }) {
    const categories = spot.categories || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "#FFFFFF",
            border: "1px solid var(--color-border)",
            borderRadius: "10px",
            padding: view === "grid" ? "18px" : "16px 20px",
            display: "flex",
            flexDirection: view === "grid" ? "column" : "row",
            alignItems: view === "grid" ? "stretch" : "center",
            gap: view === "grid" ? "10px" : "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$trip$2f$SpotPhoto$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                spot: spot,
                width: view === "grid" ? "100%" : "80px",
                height: view === "grid" ? "140px" : "80px"
            }, void 0, false, {
                fileName: "[project]/src/components/trip/SpotCard.jsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: view === "list" ? "1" : undefined,
                    minWidth: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "var(--font-inter), sans-serif",
                            fontWeight: 600,
                            fontSize: "15px",
                            color: "var(--color-ink)",
                            marginBottom: "3px"
                        },
                        children: spot.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/SpotCard.jsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    spot.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            fontFamily: "var(--font-ibm-plex-mono), monospace",
                            fontSize: "11.5px",
                            color: "var(--color-muted)",
                            marginBottom: categories.length > 0 ? "6px" : undefined
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                size: 11,
                                strokeWidth: 2
                            }, void 0, false, {
                                fileName: "[project]/src/components/trip/SpotCard.jsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, this),
                            spot.address
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/trip/SpotCard.jsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, this),
                    categories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "5px",
                            marginBottom: "4px"
                        },
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "4px",
                                    background: `${cat.color}15`,
                                    color: cat.color,
                                    border: `1px solid ${cat.color}35`,
                                    borderRadius: "4px",
                                    padding: "2px 7px",
                                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                                    fontSize: "10px",
                                    fontWeight: 500
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "6px",
                                            height: "6px",
                                            borderRadius: "50%",
                                            background: cat.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/trip/SpotCard.jsx",
                                        lineNumber: 74,
                                        columnNumber: 33
                                    }, this),
                                    cat.name
                                ]
                            }, cat.id, true, {
                                fileName: "[project]/src/components/trip/SpotCard.jsx",
                                lineNumber: 58,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/SpotCard.jsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, this),
                    spot.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "var(--font-inter), sans-serif",
                            fontStyle: "italic",
                            fontSize: "12.5px",
                            color: "var(--color-muted)",
                            marginTop: "4px"
                        },
                        children: [
                            '"',
                            spot.note,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/trip/SpotCard.jsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trip/SpotCard.jsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: spot.source_url,
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontFamily: "var(--font-ibm-plex-mono), monospace",
                    fontSize: "10.5px",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "var(--color-teal)",
                    textDecoration: "none",
                    marginLeft: view === "list" ? "auto" : undefined,
                    flexShrink: 0
                },
                children: [
                    PROVIDER_LABELS[spot.source_provider] || spot.source_provider,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                        size: 11,
                        strokeWidth: 2
                    }, void 0, false, {
                        fileName: "[project]/src/components/trip/SpotCard.jsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/trip/SpotCard.jsx",
                lineNumber: 96,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/trip/SpotCard.jsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_c = SpotCard;
var _c;
__turbopack_context__.k.register(_c, "SpotCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/trip/SpotPhoto.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpotPhoto
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function SpotPhoto({ spot, width = "100%", height = "140px" }) {
    _s();
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (failed) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: `${("TURBOPACK compile-time value", "http://localhost:3001")}/trips/${spot.trip_id}/spots/${spot.id}/photo`,
        alt: spot.name,
        onError: ()=>setFailed(true),
        style: {
            width,
            height,
            objectFit: "cover",
            borderRadius: "8px",
            flexShrink: 0
        }
    }, void 0, false, {
        fileName: "[project]/src/components/trip/SpotPhoto.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(SpotPhoto, "BFa/7w0IiJnSoWJxZHxuU4kOwF4=");
_c = SpotPhoto;
var _c;
__turbopack_context__.k.register(_c, "SpotPhoto");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiGet",
    ()=>apiGet,
    "apiPost",
    ()=>apiPost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = ("TURBOPACK compile-time value", "http://localhost:3001");
async function request(path, options = {}) {
    const response = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        }
    });
    if (!response.ok) {
        const body = await response.json().catch(()=>({}));
        throw new Error(body.errors?.join(", ") || body.error || "Request failed");
    }
    if (response.status === 204) return null;
    return response.json();
}
function apiGet(path) {
    return request(path);
}
function apiPost(path, data) {
    return request(path, {
        method: "POST",
        body: JSON.stringify(data)
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/format.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatShortDate",
    ()=>formatShortDate
]);
function formatShortDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1l_foro._.js.map