import { lazy } from 'react'

export default function Lazy(factory) {
  const Component = lazy(factory);
  Component.preload = factory;
  return Component;
}
