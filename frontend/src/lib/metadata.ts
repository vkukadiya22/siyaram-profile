import { Metadata } from 'next';
import { COMPANY_INFO } from './constants';

export function constructMetadata({
  title,
  description = COMPANY_INFO.description,
  image = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrRVtV_X8KmY8ktxmJGitx24GOI4HjRkm8KTHrJaHdUqIuZ-5u6XJFQCuXjvU_6_gI5E8iGB1i_mMIaZ0FSp_R7FU59NHaDNGasJ-E7sHX-WUNMoHfGbh_jbuLPKTPGsuO32QYnzHCW8oF7zU9MKEnoHkTscdpQEYz4IlRahVxVaMqxWiMYA4fXrk7DGGLvRcXGZi3ViON88CaIdP7CnRgktgJABDEJrqF4Z65O3DQGpOL1bMoaC2a',
  icons = {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: any;
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title
    ? `${title} - ${COMPANY_INFO.name}`
    : `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      images: [
        {
          url: image,
        },
      ],
      siteName: COMPANY_INFO.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL('https://siyaramprofile.in'),
    verification: {
      google: '_tlkhm2RelaQidNJLQfvVq1-yvQjw-ROCtdd3aO92JA',
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: 'https://siyaramprofile.in',
    telephone: COMPANY_INFO.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 123, GIDC Industrial Estate',
      addressLocality: 'Bhavnagar',
      addressRegion: 'Gujarat',
      postalCode: '364002',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '21.7645',
      longitude: '72.1519',
    },
    openingHours: 'Mo-Sa 09:00-18:00',
    priceRange: '$$$',
  };
}
