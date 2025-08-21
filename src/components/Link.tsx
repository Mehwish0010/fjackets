'use client';
import NextLink from 'next/link';
import React from 'react';

type LinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  prefetch?: boolean;
  target?: string;
  rel?: string;
};

export default function Link({ href, className, children, prefetch, target, rel }: LinkProps) {
  const isExternal = /^https?:\/\//.test(href) || target === '_blank';
  if (isExternal) {
    return (
      <a href={href} className={className} target={target} rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} className={className} prefetch={prefetch}>
      {children}
    </NextLink>
  );
}
