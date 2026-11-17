'use client';
import { Component } from 'react';

/**
 * Base class for the page components.
 * Each component computes everything it shows in renderVals() and re-renders on setState().
 */
export class DCLogic<P = any, S = any> extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = (this.state || {}) as S;
  }
}

const cache = new Map<string, Record<string, string>>();

/** Converts an inline CSS string ("color: red; font-size: 12px") into a React style object. */
export function css(input: unknown): Record<string, string> | undefined {
  if (input == null || input === '') return undefined;
  if (typeof input === 'object') return input as Record<string, string>;
  const str = String(input);
  const hit = cache.get(str);
  if (hit) return hit;
  const out: Record<string, string> = {};
  for (const decl of str.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!prop) continue;
    const key = prop.startsWith('--')
      ? prop
      : prop
          .replace(/^-(webkit|moz|ms)-/, (_m, v: string) => v.charAt(0).toUpperCase() + v.slice(1) + '-')
          .replace(/-([a-z])/g, (_m, c: string) => c.toUpperCase());
    out[key] = val;
  }
  if (cache.size > 500) cache.clear();
  cache.set(str, out);
  return out;
}

/** React does not render the `muted` attribute, which mobile browsers need for autoplay. */
export function muteVideo(el: HTMLVideoElement | null) {
  if (el) {
    el.muted = true;
    el.setAttribute('muted', '');
  }
}
