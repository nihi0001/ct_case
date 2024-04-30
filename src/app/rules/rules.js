export const data = [
    {
      rulename: "image-alt",
      shortDescription: "Image-alt ensures <img> elements have alternate text or a role of none or presentation",
      longDescription: "Ensure all informative <img> elements have short, descriptive alternate text and all decorative <img> elements have empty alt attributes",
      impact: "Critical",
      issueType: "failure, needs review"
    },
    {
      rulename: "html-has-lang",
      shortDescription: "Html-has-lang ensures every HTML document has a lang attribute",
      longDescription: " Add a lang attribute to the html element whose value represents the primary language of document. Make sure you identify a language in the opening <html> element and spell the attribute correctly. For example, if the primary language of a document is English",
      impact: "Serious",
      issueType: "failure"
    },
    {
      rulename: "heading-order",
      shortDescription: "Headings must be in a valid logical order, meaning h1 through h6 element tags must appear in a sequentially-descending order. ",
      longDescription: "Ensure headings are in a logical order. For example, check that all headings are marked with h1 through h6 elements and that these are ordered hierarchically. For example, the heading level following an h1 element should be an h2 element, not an h3 element. Finally, don't use heading mark up on text that isn't actually a heading.",
      impact: "Moderate",
      issueType: "failure, needs review"
    },
    {
      rulename: "color-contrast",
      shortDescription: "Color-contrast ensures the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
      longDescription: "Ensure all text elements have sufficient color contrast between the text in the foreground and background color behind it. Ensure color contrast of at least 4.5:1 for small text or 3:1 for large text, even if text is part of an image. Large text has been defined in the requirements as 18pt (24 CSS pixels) or 14pt bold (19 CSS pixels). Note: Elements found to have a 1:1 ratio are considered incomplete and require a manual review. ",
      impact: "Serious",
      issueType: "failure, needs review"
    },
  ];
  
   
    