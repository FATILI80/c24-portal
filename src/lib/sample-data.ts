// ============================================================================
// Sample Comparison Data
// ============================================================================
// Provides sample data for the first 3 verticals (Strom/Gas, Kreditkarten,
// Tagesgeld) for UI development and testing. Replace with real API data
// or CMS content in production.
// ============================================================================

import type {
    ComparisonColumn,
    ComparisonRow,
    ComparisonTable,
    Kreditkarte,
    StromGasTarif,
    TagesgeldKonto,
} from "@/types/affiliate"

// ─── 1. Strom & Gas Sample Tariffs ─────────────────────────────────────────

export const SAMPLE_STROM_TARIFE: StromGasTarif[] = [
    {
        anbieter: "E.ON",
        tarifName: "E.ON Strom Ökostrom",
        grundgebuehrProMonat: 9.90,
        arbeitspreisProKwh: 0.285,
        wechselbonus: 120,
        preisgarantieMonate: 12,
        mindestvertragslaufzeitMonate: 12,
        kuendigungsfristMonate: 1,
        geschaetzteJahreskosten: 1108.50,
        kundenbewertung: 4,
        oekostrom: true,
        badge: "Ökostrom",
    },
    {
        anbieter: "Vattenfall",
        tarifName: "Vattenfall Easy12",
        grundgebuehrProMonat: 8.50,
        arbeitspreisProKwh: 0.275,
        wechselbonus: 100,
        preisgarantieMonate: 12,
        mindestvertragslaufzeitMonate: 12,
        kuendigungsfristMonate: 6,
        geschaetzteJahreskosten: 1061.00,
        kundenbewertung: 4,
        oekostrom: false,
    },
    {
        anbieter: "ENBW",
        tarifName: "ENBW Strom Komfort",
        grundgebuehrProMonat: 10.50,
        arbeitspreisProKwh: 0.295,
        wechselbonus: 80,
        preisgarantieMonate: 24,
        mindestvertragslaufzeitMonate: 12,
        kuendigungsfristMonate: 1,
        geschaetzteJahreskosten: 1158.00,
        kundenbewertung: 3,
        oekostrom: false,
        badge: "Preisgarantie",
    },
]

export const STROM_GAS_COMPARISON_COLUMNS: ComparisonColumn[] = [
    { key: "anbieter", label: "Anbieter", type: "text" },
    { key: "tarifName", label: "Tarif", type: "text" },
    { key: "grundgebuehr", label: "Grundgebühr/Monat", type: "price" },
    { key: "arbeitspreis", label: "Arbeitspreis/kWh", type: "price" },
    { key: "wechselbonus", label: "Wechselbonus", type: "price" },
    { key: "jahreskosten", label: "Geschätzte Jahreskosten", type: "price" },
    { key: "bewertung", label: "Kundenbewertung", type: "rating" },
]

export function buildStromGasRows(tarife: StromGasTarif[]): ComparisonRow[] {
    return tarife.map((tarif, index) => ({
        name: tarif.anbieter,
        description: tarif.tarifName,
        values: {
            anbieter: tarif.anbieter,
            tarifName: tarif.tarifName,
            grundgebuehr: tarif.grundgebuehrProMonat,
            arbeitspreis: tarif.arbeitspreisProKwh,
            wechselbonus: tarif.wechselbonus,
            jahreskosten: tarif.geschaetzteJahreskosten,
            bewertung: tarif.kundenbewertung,
        },
        badge: tarif.badge,
        rating: tarif.kundenbewertung,
        recommended: index === 0,
        pros: [
            ...(tarif.oekostrom ? ["Ökostrom-zertifiziert"] : []),
            ...(tarif.preisgarantieMonate >= 12
                ? [`${tarif.preisgarantieMonate} Monate Preisgarantie`]
                : []),
        ],
        cons: [
            tarif.mindestvertragslaufzeitMonate > 1
                ? `${tarif.mindestvertragslaufzeitMonate} Monate Mindestlaufzeit`
                : "Kurze Kündigungsfrist",
        ],
    }))
}

export const SAMPLE_STROM_GAS_TABLE: ComparisonTable = {
    id: "strom-gas-vergleich",
    title: "Stromtarife im Vergleich",
    columns: STROM_GAS_COMPARISON_COLUMNS,
    rows: buildStromGasRows(SAMPLE_STROM_TARIFE),
    footer: "Stand: Mai 2026. Preise basieren auf einem Musterhaushalt mit 3.500 kWh Jahresverbrauch in 10115 Berlin.",
}

// ─── 2. Kreditkarten Sample Data ───────────────────────────────────────────

export const SAMPLE_KREDITKARTEN: Kreditkarte[] = [
    {
        name: "Barclays Visa",
        anbieter: "Barclays Bank",
        jahresgebuehr: 0,
        effektiverJahreszins: 12.99,
        nominellerZins: 12.28,
        auslandseinsatzGebuehrfrei: true,
        auslandseinsatzGebuehr: 0,
        willkommensbonus: 30,
        kreditlimitMin: 500,
        kreditlimitMax: 10000,
        zinsfreieZeitTage: 50,
        reiseversicherung: false,
        einkaufsversicherung: false,
        kontaktlos: true,
        mobilePayment: true,
        kartentyp: "Visa",
        mindesteinkommen: 0,
        kundenbewertung: 4,
        badge: "Testsieger",
    },
    {
        name: "Advanzia Bank Mastercard",
        anbieter: "Advanzia Bank",
        jahresgebuehr: 0,
        effektiverJahreszins: 15.90,
        nominellerZins: 14.85,
        auslandseinsatzGebuehrfrei: true,
        auslandseinsatzGebuehr: 0,
        willkommensbonus: 0,
        kreditlimitMin: 500,
        kreditlimitMax: 5000,
        zinsfreieZeitTage: 45,
        reiseversicherung: false,
        einkaufsversicherung: false,
        kontaktlos: true,
        mobilePayment: true,
        kartentyp: "Mastercard",
        mindesteinkommen: 0,
        kundenbewertung: 4,
        badge: "Top-Empfehlung",
    },
    {
        name: "Payback Visa",
        anbieter: "Payback / American Express",
        jahresgebuehr: 0,
        effektiverJahreszins: 18.99,
        nominellerZins: 17.50,
        auslandseinsatzGebuehrfrei: false,
        auslandseinsatzGebuehr: 1.75,
        willkommensbonus: 15,
        kreditlimitMin: 1000,
        kreditlimitMax: 7500,
        zinsfreieZeitTage: 46,
        reiseversicherung: true,
        einkaufsversicherung: true,
        kontaktlos: true,
        mobilePayment: true,
        kartentyp: "American Express",
        mindesteinkommen: 0,
        kundenbewertung: 3,
    },
]

export const KREDITKARTEN_COMPARISON_COLUMNS: ComparisonColumn[] = [
    { key: "name", label: "Kreditkarte", type: "text" },
    { key: "anbieter", label: "Anbieter", type: "text" },
    { key: "jahresgebuehr", label: "Jahresgebühr", type: "price" },
    { key: "bonus", label: "Willkommensbonus", type: "price" },
    { key: "ausland", label: "Auslandseinsatz", type: "text" },
    { key: "zins", label: "Eff. Jahreszins", type: "percentage" },
    { key: "bewertung", label: "Bewertung", type: "rating" },
]

export function buildKreditkartenRows(karten: Kreditkarte[]): ComparisonRow[] {
    return karten.map((karte, index) => ({
        name: karte.name,
        description: `${karte.anbieter} • ${karte.kartentyp}`,
        values: {
            name: karte.name,
            anbieter: karte.anbieter,
            jahresgebuehr: karte.jahresgebuehr,
            bonus: karte.willkommensbonus,
            ausland: karte.auslandseinsatzGebuehrfrei
                ? "Kostenlos"
                : `${karte.auslandseinsatzGebuehr}%`,
            zins: karte.effektiverJahreszins,
            bewertung: karte.kundenbewertung,
        },
        badge: karte.badge,
        rating: karte.kundenbewertung,
        recommended: index === 0,
        pros: [
            ...(karte.jahresgebuehr === 0 ? ["Keine Jahresgebühr"] : []),
            ...(karte.auslandseinsatzGebuehrfrei
                ? ["Kostenlos im Ausland"]
                : []),
            ...(karte.reiseversicherung ? ["Reiseversicherung inklusive"] : []),
        ],
        cons: [
            ...(karte.willkommensbonus === 0
                ? ["Kein Willkommensbonus"]
                : []),
            ...(karte.auslandseinsatzGebuehr > 0
                ? ["Gebühren im Ausland"]
                : []),
        ],
    }))
}

export const SAMPLE_KREDITKARTEN_TABLE: ComparisonTable = {
    id: "kreditkarten-vergleich",
    title: "Kreditkarten im Vergleich",
    columns: KREDITKARTEN_COMPARISON_COLUMNS,
    rows: buildKreditkartenRows(SAMPLE_KREDITKARTEN),
    footer: "Stand: Mai 2026. Konditionen können abweichen. Prüfen Sie die aktuellen Bedingungen auf CHECK24.",
}

// ─── 3. Tagesgeld Sample Data ──────────────────────────────────────────────

export const SAMPLE_TAGESGELD: TagesgeldKonto[] = [
    {
        bank: "OpenBank",
        kontoName: "OpenBank Tagesgeld",
        zinssatz: 3.50,
        zinsbindungMonate: 6,
        einlagensicherung: "Deutsche Einlagensicherung",
        einlagensicherungSumme: 100000,
        mindestanlage: 0,
        maxAnlage: 0,
        kostenloseAbhebungenProJahr: 999,
        onlineBanking: true,
        app: true,
        kundenbewertung: 4,
        badge: "Top-Zins",
    },
    {
        bank: "Raisin Bank",
        kontoName: "Raisin Tagesgeld Plus",
        zinssatz: 3.25,
        zinsbindungMonate: 3,
        einlagensicherung: "Deutsche Einlagensicherung",
        einlagensicherungSumme: 100000,
        mindestanlage: 0,
        maxAnlage: 50000,
        kostenloseAbhebungenProJahr: 999,
        onlineBanking: true,
        app: true,
        kundenbewertung: 4,
    },
    {
        bank: "DKB",
        kontoName: "DKB Tagesgeld",
        zinssatz: 2.75,
        zinsbindungMonate: 0,
        einlagensicherung: "Deutsche Einlagensicherung",
        einlagensicherungSumme: 100000,
        mindestanlage: 0,
        maxAnlage: 0,
        kostenloseAbhebungenProJahr: 999,
        onlineBanking: true,
        app: true,
        kundenbewertung: 3,
    },
]

export const TAGESGELD_COMPARISON_COLUMNS: ComparisonColumn[] = [
    { key: "bank", label: "Bank", type: "text" },
    { key: "konto", label: "Konto", type: "text" },
    { key: "zinssatz", label: "Zinssatz p.a.", type: "percentage" },
    { key: "zinsbindung", label: "Zinsbindung", type: "text" },
    { key: "mindestanlage", label: "Mindestanlage", type: "price" },
    { key: "einlagensicherung", label: "Einlagensicherung", type: "text" },
    { key: "bewertung", label: "Bewertung", type: "rating" },
]

export function buildTagesgeldRows(konten: TagesgeldKonto[]): ComparisonRow[] {
    return konten.map((konto, index) => ({
        name: konto.bank,
        description: konto.kontoName,
        values: {
            bank: konto.bank,
            konto: konto.kontoName,
            zinssatz: konto.zinssatz,
            zinsbindung:
                konto.zinsbindungMonate > 0
                    ? `${konto.zinsbindungMonate} Monate`
                    : "Variabel",
            mindestanlage: konto.mindestanlage,
            einlagensicherung: `Bis ${(konto.einlagensicherungSumme / 1000).toFixed(0)}k €`,
            bewertung: konto.kundenbewertung,
        },
        badge: konto.badge,
        rating: konto.kundenbewertung,
        recommended: index === 0,
        pros: [
            ...(konto.zinssatz >= 3.0 ? ["Über 3% Zinsen p.a."] : []),
            konto.mindestanlage === 0
                ? "Keine Mindestanlage"
                : `Ab ${konto.mindestanlage} €`,
            konto.app ? "Mit App" : "",
        ].filter(Boolean),
        cons: [
            konto.maxAnlage > 0
                ? `Maximal ${(konto.maxAnlage / 1000).toFixed(0)}k € Anlage`
                : "",
            konto.zinsbindungMonate === 0 ? "Variabler Zins" : "",
        ].filter(Boolean),
    }))
}

export const SAMPLE_TAGESGELD_TABLE: ComparisonTable = {
    id: "tagesgeld-vergleich",
    title: "Tagesgeldkonten im Vergleich",
    columns: TAGESGELD_COMPARISON_COLUMNS,
    rows: buildTagesgeldRows(SAMPLE_TAGESGELD),
    footer: "Stand: Mai 2026. Zinssätze können täglich schwanken. Gültig für Neuanlagen.",
}

// ─── Export All Sample Tables ──────────────────────────────────────────────

export const SAMPLE_COMPARISON_TABLES: ComparisonTable[] = [
    SAMPLE_STROM_GAS_TABLE,
    SAMPLE_KREDITKARTEN_TABLE,
    SAMPLE_TAGESGELD_TABLE,
]

/**
 * Get sample comparison table by category slug.
 * Returns null for categories without sample data (KFZ, DSL, Mietwagen, Reisen).
 */
export function getComparisonTableByCategory(
    categorySlug: string
): ComparisonTable | null {
    const map: Record<string, ComparisonTable> = {
        "strom-gas": SAMPLE_STROM_GAS_TABLE,
        kreditkarten: SAMPLE_KREDITKARTEN_TABLE,
        tagesgeld: SAMPLE_TAGESGELD_TABLE,
    }
    return map[categorySlug] ?? null
}
