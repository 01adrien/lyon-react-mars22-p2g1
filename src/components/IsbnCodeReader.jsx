import { Html5QrcodeScanner } from 'html5-qrcode';
import React, { useEffect } from 'react';

const qrcodeRegionId = 'html5qr-code-full-region';

function IsbnCodeReader({
  verbose,
  fps,
  aspectRatio,
  qrbox,
  disableFlip,
  onDecode,
  onError,
}) {
  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      { fps, aspectRatio, disableFlip, qrbox },
      verbose
    );
    html5QrcodeScanner.render(onDecode, onError);
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error('Failed to clear html5QrcodeScanner. ', error);
      });
    };
  });

  return <div id={qrcodeRegionId} />;
}

export default IsbnCodeReader;
