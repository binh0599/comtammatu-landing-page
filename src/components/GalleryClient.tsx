"use client";

import { useState } from "react";
import Gallery from "@/components/Gallery";
import Lightbox from "@/components/Lightbox";

/**
 * GalleryClient — wraps Gallery + Lightbox so that the image-click
 * state stays in a small Client Component and doesn't pollute page.tsx.
 */
export default function GalleryClient() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <Gallery onImageClick={setSelectedImage} />
            {selectedImage && (
                <Lightbox src={selectedImage} onClose={() => setSelectedImage(null)} />
            )}
        </>
    );
}
