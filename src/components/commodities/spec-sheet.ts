"use client";

import { jsPDF } from "jspdf";
import type { Commodity } from "@/data/commodities";
import { CONTACT } from "@/data/site";

const BRAND = "#103B2B";
const ACCENT = "#D97706";
const MUTED = "#6b7280";
const BORDER = "#e5e5e3";

function wrap(text: string, pdf: jsPDF, maxWidth: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (pdf.getTextWidth(test) > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function pdfEscape(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function downloadSpecSheet(commodity: Commodity): Promise<void> {
  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const safe = (s: string) => pdfEscape(s || "—");

  function ensureSpace(needed: number) {
    if (y + needed > pageHeight - margin) {
      pdf.addPage();
      y = margin;
    }
  }

  function drawHeader() {
    pdf.setFillColor(BRAND);
    pdf.rect(0, 0, pageWidth, 34, "F");
    pdf.setFillColor(ACCENT);
    pdf.rect(0, 34, pageWidth, 1.5, "F");

    pdf.setTextColor(ACCENT);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(10);
    pdf.text("AGRIORVIAN · EXPORT DIVISION", margin, margin + 7);

    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(20);
    pdf.text(safe(commodity.name), margin, margin + 17);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(209, 250, 229);
    pdf.text(
      `Product Specification Sheet — ${safe("Orvian Company Limited, Dar es Salaam, Tanzania")}`,
      margin,
      margin + 25
    );

    y = 34 + 12;
  }

  function drawInfoChips() {
    const chips = [
      { label: "HS Customs Code", value: safe(commodity.hsCode) },
      { label: "Category", value: safe(commodity.category) },
      { label: "Issue Date", value: date },
    ];
    const gap = 5;
    const chipW = (contentWidth - gap * 2) / 3;
    const chipH = 16;
    chips.forEach((chip, i) => {
      const x = margin + i * (chipW + gap);
      pdf.setFillColor(243, 244, 242);
      pdf.roundedRect(x, y, chipW, chipH, 2.5, 2.5, "F");
      pdf.setTextColor(MUTED);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(7.5);
      pdf.text(chip.label.toUpperCase(), x + 4, y + 5.5);
      pdf.setTextColor(BRAND);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9.5);
      pdf.text(safe(chip.value), x + 4, y + 11.5);
    });
    y += chipH + 8;
  }

  function drawSectionTitle(title: string) {
    ensureSpace(22);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.setTextColor(BRAND);
    pdf.text(title, margin, y);
    y += 3;
    pdf.setDrawColor(ACCENT);
    pdf.setLineWidth(1);
    pdf.line(margin, y, margin + 24, y);
    y += 7;
  }

  function drawSpecTable() {
    const rows = [
      ...commodity.specs,
      { label: "HS Customs Code", value: commodity.hsCode },
      { label: "Origin", value: commodity.origin },
      { label: "Shelf Life", value: commodity.shelfLife },
      { label: "Minimum Order", value: commodity.minOrder },
    ];
    const colW = contentWidth;
    const rowH = 9;
    rows.forEach((row) => {
      ensureSpace(rowH + 2);
      const labelLines = wrap(`${row.label}`, pdf, colW * 0.34 - 8);
      const valueLines = wrap(`${row.value}`, pdf, colW * 0.62 - 8);
      const lines = Math.max(labelLines.length, valueLines.length);
      const height = Math.max(rowH, lines * 4.6 + 5);

      pdf.setFillColor(250, 250, 248);
      pdf.rect(margin, y, colW * 0.36, height, "F");
      pdf.setTextColor(BRAND);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      labelLines.forEach((line, i) => pdf.text(line, margin + 4, y + 6 + i * 4.6));

      pdf.setFillColor(255, 255, 255);
      pdf.rect(margin + colW * 0.36, y, colW * 0.64, height, "F");
      pdf.setTextColor(51, 51, 51);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      valueLines.forEach((line, i) =>
        pdf.text(line, margin + colW * 0.36 + 4, y + 6 + i * 4.6)
      );

      pdf.setDrawColor(BORDER);
      pdf.setLineWidth(0.3);
      pdf.line(margin, y + height, margin + colW, y + height);
      y += height;
    });
    y += 4;
  }

  function drawChipList(title: string, items: string[]) {
    drawSectionTitle(title);
    items.forEach((item) => {
      ensureSpace(9);
      pdf.setFont("helvetica", "medium");
      pdf.setFontSize(9);
      pdf.setTextColor(51, 51, 51);
      pdf.circle(margin + 2, y - 1.2, 0.9, "F");
      const lines = wrap(item, pdf, contentWidth - 12);
      lines.forEach((line, i) => pdf.text(line, margin + 7, y + i * 4.8));
      y += Math.max(6, lines.length * 4.8);
    });
    y += 4;
  }

  function drawTextBlock(title: string, text: string) {
    drawSectionTitle(title);
    ensureSpace(12);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9.5);
    pdf.setTextColor(51, 51, 51);
    const lines = wrap(text, pdf, contentWidth);
    lines.forEach((line) => {
      ensureSpace(5);
      pdf.text(line, margin, y);
      y += 4.8;
    });
    y += 4;
  }

  drawHeader();

  y += 2;
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9.5);
  pdf.setTextColor(51, 51, 51);
  wrap(commodity.description, pdf, contentWidth).forEach((line) => {
    pdf.text(line, margin, y);
    y += 4.8;
  });
  y += 4;

  drawInfoChips();
  drawSectionTitle("Technical Specifications");
  drawSpecTable();
  drawChipList("Available Grades / Varieties", commodity.grades);
  drawChipList("Packaging Options", commodity.packaging);
  drawTextBlock("Shipping Methods", commodity.shipping.join(" · "));
  drawTextBlock("Quality & Certification", commodity.certifications.join(" · "));
  drawTextBlock("Temperature Controls", commodity.specs.find((s) => /chain|temp|storage|frozen/i.test(s.label))?.value ?? "Maintained per commodity cold-chain protocol");

  y += 6;
  ensureSpace(30);
  pdf.setDrawColor(BORDER);
  pdf.setLineWidth(0.5);
  pdf.line(margin, y, pageWidth - margin, y);
  y += 6;
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(8.5);
  pdf.setTextColor(MUTED);
  const footerLine1 = `AgriOrvian — A Division of Orvian Company Limited · ${CONTACT.email} · ${CONTACT.phone}`;
  const footerLine2 = `${CONTACT.address} · This document is an indicative specification sheet for trade facilitation.`;
  pdf.text(footerLine1, pageWidth / 2, y, { align: "center" });
  pdf.text(footerLine2, pageWidth / 2, y + 5, { align: "center" });

  const filename = `${commodity.name
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()}-spec-sheet.pdf`;
  pdf.save(filename);
}