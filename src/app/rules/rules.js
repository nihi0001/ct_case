export const data = [
    {
      rulename: "image-alt",
      shortDescription: "Image-alt sikrer, at <img>-elementer har alternativ tekst eller en rolle af none eller presentation",
      longDescription: "Reglen sikrer, at billeder på en webside enten har en kort, beskrivende alternativ tekst (alt-attribut) for at kommunikere billedets indhold og formål til skærmlæsere, eller hvis billedet er rent dekorativt, skal alt-attributten være tom (f.eks. alt=). Dette er afgørende for at sikre, at blinde og svagtseende brugere får den nødvendige information, mens dekorative billeder ikke forstyrrer skærmlæseroplevelsen.",
      impact: "Kritisk",
      issueType: "fejl, behov for gennemgang"
    },
    {
      rulename: "html-has-lang",
      shortDescription: "Html-has-lang sikrer, at hver HTML-dokument har et lang-attribut",
      longDescription: "Denne regel kræver, at det <html>-element, som er roden af HTML-dokumentet, har en lang-attribut, der angiver dokumentets primære sprog. At tilføje denne attribut, f.eks. <html lang=en>, hjælper skærmlæsere med at korrekt udtale teksten og sikrer en bedre brugeroplevelse for flersprogede brugere. Manglen på en specificeret sprogattribut kan føre til forvirring for skærmlæsere, der forsøger at læse teksten korrekt.",
      impact: "Seriøs",
      issueType: "fejl"
    },
    {
      rulename: "heading-order",
      shortDescription: "Overskrifter skal være i en gyldig logisk rækkefølge, hvilket betyder, at h1 gennem h6 elementtags skal vises i en sekventielt-aftagende rækkefølge. ",
      longDescription: "Sørg for, at overskrifter er i en logisk rækkefølge. Kontroller f.eks., at alle overskrifter er markeret med h1 gennem h6 elementer, og at disse er ordnet hierarkisk. F.eks. bør overskriftniveauet efter et h1 element være et h2 element, ikke et h3 element. Brug endelig ikke overskriftsmarkering på tekst, der faktisk ikke er en overskrift.",
      impact: "Middel",
      issueType: "fejl, behov for gennemgang"
    },

    {
      rulename: "duplicate-id",
      shortDescription: "ID-attributværdier skal være unikke for at sikre, at hvert element identificeres korrekt. Dobbelt forekomster af ID'er kan forhindre korrekt fungerende labels og andre elementer, hvilket kan påvirke tilgængeligheden.",
      longDescription: "Reglen kræver, at værdierne for ID-attributter er unikke for hvert element på en webside. Dette er afgørende for at sikre, at hvert element kan identificeres korrekt af både klient-side scripts og skærmlæsere. Dobbelt forekomster af ID'er kan forårsage problemer, hvor kun den første forekomst af ID'en er aktiv, mens den efterfølgende ignoreres, hvilket kan føre til manglende tilgængelighed af vigtige elementer som labels for formularer eller overskrifter for tabeller. Det anbefales at validere HTML-markuppen ved hjælp af W3C-validator for at identificere og rette eventuelle genbrugte ID-værdier.",
      impact: "Mindre fejl",
      issueType: "fejl"
    },

    {
      rulename: "hidden-content",
      shortDescription: "Reglen opdager og informerer om skjult indhold på en webside, som ikke kan analyseres for tilgængelighedsproblemer.",
      longDescription: "Reglen om skjult indhold advarer om, at skjulte elementer på en webside ikke kan analyseres automatisk for tilgængelighedsproblemer. Det anbefales at eksponere det skjulte indhold ved at ændre CSS-egenskaber, så det bliver synligt for både synshandicappede og seende brugere. Dette sikrer, at websiden er tilgængelig for alle og opfylder tilgængelighedsstandarder.",
      impact: "Mindre fejl",
      issueType: "fejl, behov for gennemgang"
    },

    {
      rulename: "color-contrast",
      shortDescription: "Color-contrast sikrer, at kontrasten mellem forgrund og baggrundsfarver opfylder WCAG 2 AA minimum kontrastforholdskrav",
      longDescription: "Sørg for, at alle tekstelementer har tilstrækkelig farvekontrast mellem teksten i forgrunden og baggrundsfarven bag den. Sørg for en farvekontrast på mindst 4,5:1 for små tekststørrelser eller 3:1 for store tekststørrelser, selvom teksten er en del af et billede. Store tekststørrelser er defineret som 18pt (24 CSS pixels) eller 14pt fed (19 CSS pixels). Bemærk: Elementer, der har et forhold på 1:1, betragtes som ufuldstændige og kræver en manuel gennemgang.",
      impact: "Seriøs",
      issueType: "fejl, behov for gennemgang"
    },
  ];
  
   
    