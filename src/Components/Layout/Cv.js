import React, { useEffect } from 'react';
// /
export function Cv() {
    useEffect(() => {
        const pdfPath = '/CV_2024-02-12_Hamza_Ait sidi said_en.pdf';

        const a = document.createElement('a');
        a.href = pdfPath;
        a.download = 'Hamza_CV.pdf';

        a.click();
    }, []);
}
