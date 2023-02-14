import { THON } from "https://i.thonly.org/global.mjs";

window.onload = async () => {
    await import(`${THON}/components/tl-account/element.mjs`);
    await import(`${THON}/components/tl-actions/element.mjs`);
    await import(`${THON}/components/tl-stocks/element.mjs`);
    await import(`${THON}/components/tl-provider/element.mjs`);
};

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6ZWBS0074X');